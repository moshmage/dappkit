import {sha3} from 'web3-utils';
import {Contract,} from 'web3-eth-contract';
import Web3, {ContractAbi, Web3BaseWalletAccount} from 'web3';
import {Log, TransactionReceipt} from '@interfaces/web3-core';
import {Errors} from '@interfaces/error-enum';
import {transactionHandler} from '@utils/transaction-handler';
import {Web3ConnectionOptions} from "@interfaces/web3-connection-options";
import {AbiEventFragment, AbiFragment} from "web3-types/src/eth_abi_types";
import {Web3PromiEvent} from "web3-core/lib/types/web3_promi_event";
import DeployOptions from "@interfaces/contract/deploy-options";
import {NonPayableMethodObject, PayableMethodObject} from "web3-eth-contract/src/types";
import {Transaction} from "web3-types/src/eth_types";

const DEFAULT_CONFIRMATIONS_NEEDED = 1;

export interface Web3ContractOptions {
  /**
   * If not provided, gas will be `Math.round(gasAmount * gasFactor)`
   */
  gas?: number;

  /**
   * If not provided, gasPrice will be queried on the network
   */
  gasPrice?: number;

  /**
   * If not provided, gasAmount will be estimated from the network
   */
  gasAmount?: number;

  /**
   * Used as a multiplier if no {@link Web3ContractOptions.gas} is provided
   * @default 1
   */
  gasFactor?: number;

  /**
   * If false, {@link Web3ContractOptions.gas} and {@link Web3ContractOptions.gasPrice} are mandatory
   * @default true
   */
  auto: boolean; // default: true, auto = true will calculate needed values if none is provided.
}

export class Web3Contract<Abi extends ContractAbi = AbiFragment[]> {
  readonly self!: Contract<Abi>;
  readonly abi: ReadonlyArray<AbiFragment>;

  /**
   * Transaction options that will be used on each transaction.
   * While this object is readonly, is values are not and can be changed.
   * @example
   * `myWeb3Connection.options.gas = 10000;`
   *
   * @default `{auto: true}`
   */
  readonly options: Web3ContractOptions = {auto: true}

  constructor(readonly web3: Web3,
              abi: ReadonlyArray<AbiFragment>,
              readonly address?: string,
              options: Web3ContractOptions = {auto: true}) {
    this.self = new web3.eth.Contract(abi, address);
    this.options = options;
    this.abi = abi;
  }

  get methods() { return this.self.methods; }
  get events() { return this.self.events; }

  /* eslint-disable complexity */
  async txOptions(method: Pick<PayableMethodObject|NonPayableMethodObject, 'estimateGas'>,
                  value?: string,
                  from?: string) {
    let {gas = 0, gasAmount = 0, gasPrice = 0,} = this.options || {};
    const {gasFactor = 0, auto = true} = this.options || {};

    if (!auto && (!gas || !gasPrice))
      throw new Error(Errors.GasAndGasPriceMustBeProvidedIfNoAutoTxOptions);

    if (auto) {
      if (!gasPrice)
        gasPrice = Number(await this.web3.eth.getGasPrice());

      if (!gasAmount)
        gasAmount = Number(await method.estimateGas({...value ? {value} : {}, ...from ? {from} : {}}));

      if (!gas)
        gas = Math.round(Number(gasAmount) * gasFactor);
    }

    return {
      ... gas ? {gas: gas.toString()} : {},
      ... gasPrice ? {gasPrice: gasPrice.toString()} : {},
    };
  }
  /* eslint-enable complexity */

  /* eslint-disable complexity */
  /**
   * Parses the logs of a transaction receipt using its abi events
   */
  parseReceiptLogs<T = unknown>(receipt: TransactionReceipt): TransactionReceipt<T> {
    if (receipt.logs?.length) {
      const _events =
        (this.abi.filter(({type}) => type === "event") as AbiEventFragment[])
          .map(({inputs, ...rest}) =>
            ({inputs, ...rest, topic: sha3(`${rest.name}(${inputs?.map(i=> i.type).join(',')})`)}));

      const hasAddressAndEqualLog = ({address}: Log) =>
        !this.address ? true : this.address.toLowerCase() === address.toLowerCase()

      for (const [i, log] of receipt.logs.entries()) {
        for (const _event of _events) {
          if (_event.topic === log.topics[0] && hasAddressAndEqualLog(log)) {
            const args =
              this.web3.eth.abi
                .decodeLog([..._event.inputs ?? []], log.data, _event.anonymous ? log.topics : log.topics.slice(1))
            receipt.logs[i] = {...log, event: _event?.name, args} as unknown as Log & {event: string, args: T};
          }
        }
      }
    }

    return receipt as TransactionReceipt<T>;
  }
  /* eslint-enable complexity */

  /**
   * Deploys the new AbiItem and returns its transaction receipt
   */
  async deploy(abi: AbiFragment[],
               deployOptions: DeployOptions<never>,
               account?: Web3BaseWalletAccount): Promise<TransactionReceipt> {

    // eslint-disable-next-line no-unused-vars
    const deployer = async (resolve: (tx: TransactionReceipt) => void, reject: (error: Error) => void) => {
      try {
        const newContract = new this.web3.eth.Contract(abi);
        const limbo = newContract.deploy(deployOptions);
        const from = 
          account?.address || (await this.web3.eth.personal.getAccounts())[0];

        /* eslint-disable no-inner-declarations */
        function onConfirmation(number: bigint, receipt: unknown) {
          if (DEFAULT_CONFIRMATIONS_NEEDED >= number)
            resolve(receipt as TransactionReceipt);
        }

        function onError(error: Error) { reject(error); }
        /* eslint-enable no-inner-declarations */

        if (account) {
          const data = limbo.encodeABI();
          const {rawTransaction} =
            await account.signTransaction({data, from, ...await this.txOptions(limbo, undefined, from)});
          this.web3.eth.sendSignedTransaction(rawTransaction)
              .on(`confirmation`, d => onConfirmation(d.confirmations, d.receipt))
              .on(`error`, onError);
        } else
          limbo.send({from, ...await this.txOptions(limbo, undefined, from)})
               .on(`confirmation`, d => onConfirmation(d.confirmations, d.receipt))
               .on(`error`, onError);

      } catch (e: unknown) {
        reject(e as Error);
      }
    }

    return new Promise<TransactionReceipt>(deployer)
      .then(receipt => this.parseReceiptLogs(receipt));
  }

  /**
   * Sends a signed transaction with the provided account
   */
  sendSignedTx(account: Web3BaseWalletAccount,
               data: string,
               value = "",
               txOptions: Partial<Transaction>, {
                 debug,
                 customTransactionHandler: cb
               }: Partial<Web3ConnectionOptions> = {}): Promise<TransactionReceipt> {
    /* eslint-disable no-async-promise-executor */
    return new Promise<TransactionReceipt>(async (resolve, reject) => {
      try {

        const from = account.address;
        const to = this.address;
        const signedTx = await account.signTransaction({from, to, data, value, ...txOptions});
        const sendMethod = () =>
          this.web3.eth.sendSignedTransaction(signedTx.rawTransaction) as unknown as Web3PromiEvent<never, never>;

        if (cb)
          cb(sendMethod(), resolve, reject, debug);
        else
          transactionHandler(sendMethod(), resolve, reject, debug);

      } catch (e) {
        console.error(e);
        reject(e);
      }
    }).then((receipt) => this.parseReceiptLogs(receipt))
    /* eslint-enable no-async-promise-executor */
  }
}
