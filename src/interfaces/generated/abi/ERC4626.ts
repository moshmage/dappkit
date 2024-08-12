const artifact = {"abi":[{"inputs":[{"internalType":"contract IERC20","name":"asset_","type":"address"},{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"allowance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientAllowance","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientBalance","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC20InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC20InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC20InvalidSender","type":"error"},{"inputs":[{"internalType":"address","name":"spender","type":"address"}],"name":"ERC20InvalidSpender","type":"error"},{"inputs":[],"name":"MathOverflowedMulDiv","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"assets","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"receiver","type":"address"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"assets","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"shares","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"asset","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"shares","type":"uint256"}],"name":"convertToAssets","outputs":[{"internalType":"uint256","name":"assets","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"assets","type":"uint256"}],"name":"convertToShares","outputs":[{"internalType":"uint256","name":"shares","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"assets","type":"uint256"},{"internalType":"address","name":"receiver","type":"address"}],"name":"deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"maxDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"maxMint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"maxRedeem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"maxWithdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"address","name":"receiver","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"assets","type":"uint256"}],"name":"previewDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"shares","type":"uint256"}],"name":"previewMint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"shares","type":"uint256"}],"name":"previewRedeem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"assets","type":"uint256"}],"name":"previewWithdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"address","name":"receiver","type":"address"},{"internalType":"address","name":"owner","type":"address"}],"name":"redeem","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAssets","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"assets","type":"uint256"},{"internalType":"address","name":"receiver","type":"address"},{"internalType":"address","name":"owner","type":"address"}],"name":"withdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}],"bytecode":"0x60c06040523480156200001157600080fd5b50604051620015d1380380620015d1833981016040819052620000349162000237565b8181600362000044838262000350565b50600462000053828262000350565b505050600062000069846200008560201b60201c565b5050601260a0525050506001600160a01b031660805262000454565b60408051600481526024810182526020810180516001600160e01b031663313ce56760e01b17905290516000918291829182916001600160a01b03871691620000ce916200041c565b600060405180830381855afa9150503d80600081146200010b576040519150601f19603f3d011682016040523d82523d6000602084013e62000110565b606091505b50915091508180156200012557506020815110155b156200015d576000818060200190518101906200014391906200043a565b905060ff81116200015b576001969095509350505050565b505b5060009485945092505050565b634e487b7160e01b600052604160045260246000fd5b60005b838110156200019d57818101518382015260200162000183565b50506000910152565b600082601f830112620001b857600080fd5b81516001600160401b0380821115620001d557620001d56200016a565b604051601f8301601f19908116603f011681019082821181831017156200020057620002006200016a565b816040528381528660208588010111156200021a57600080fd5b6200022d84602083016020890162000180565b9695505050505050565b6000806000606084860312156200024d57600080fd5b83516001600160a01b03811681146200026557600080fd5b60208501519093506001600160401b03808211156200028357600080fd5b6200029187838801620001a6565b93506040860151915080821115620002a857600080fd5b50620002b786828701620001a6565b9150509250925092565b600181811c90821680620002d657607f821691505b602082108103620002f757634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200034b57600081815260208120601f850160051c81016020861015620003265750805b601f850160051c820191505b81811015620003475782815560010162000332565b5050505b505050565b81516001600160401b038111156200036c576200036c6200016a565b62000384816200037d8454620002c1565b84620002fd565b602080601f831160018114620003bc5760008415620003a35750858301515b600019600386901b1c1916600185901b17855562000347565b600085815260208120601f198616915b82811015620003ed57888601518255948401946001909101908401620003cc565b50858210156200040c5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600082516200043081846020870162000180565b9190910192915050565b6000602082840312156200044d57600080fd5b5051919050565b60805160a0516111426200048f600039600061021301526000818161024a015281816103c9015281816108e40152610a0c01526111426000f3fe608060405234801561001057600080fd5b50600436106101735760003560e01c806370a08231116100de578063ba08765211610097578063ce96cb7711610071578063ce96cb7714610352578063d905777e14610365578063dd62ed3e14610378578063ef8b30f71461033f57600080fd5b8063ba08765214610317578063c63d75b61461032a578063c6e6f5921461033f57600080fd5b806370a082311461029a57806394bf804d146102c357806395d89b41146102d6578063a9059cbb146102de578063b3d7f6b9146102f1578063b460af941461030457600080fd5b806323b872dd1161013057806323b872dd146101f9578063313ce5671461020c57806338d52e0f1461023d578063402d267d146102745780634cdad506146101a85780636e553f651461028757600080fd5b806301e1d1141461017857806306fdde031461019357806307a2d13a146101a8578063095ea7b3146101bb5780630a28a477146101de57806318160ddd146101f1575b600080fd5b6101806103b1565b6040519081526020015b60405180910390f35b61019b610441565b60405161018a9190610e84565b6101806101b6366004610ed2565b6104d3565b6101ce6101c9366004610f07565b6104e6565b604051901515815260200161018a565b6101806101ec366004610ed2565b6104fe565b600254610180565b6101ce610207366004610f31565b61050b565b60405160ff7f000000000000000000000000000000000000000000000000000000000000000016815260200161018a565b6040516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016815260200161018a565b610180610282366004610f6d565b610531565b610180610295366004610f88565b61054f565b6101806102a8366004610f6d565b6001600160a01b031660009081526020819052604090205490565b6101806102d1366004610f88565b6105c7565b61019b6105e1565b6101ce6102ec366004610f07565b6105f0565b6101806102ff366004610ed2565b6105fe565b610180610312366004610fb4565b61060b565b610180610325366004610fb4565b610687565b610180610338366004610f6d565b5060001990565b61018061034d366004610ed2565b6106fb565b610180610360366004610f6d565b610708565b610180610373366004610f6d565b61072c565b610180610386366004610ff0565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610418573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061043c919061101a565b905090565b60606003805461045090611033565b80601f016020809104026020016040519081016040528092919081815260200182805461047c90611033565b80156104c95780601f1061049e576101008083540402835291602001916104c9565b820191906000526020600020905b8154815290600101906020018083116104ac57829003601f168201915b5050505050905090565b60006104e082600061074a565b92915050565b6000336104f481858561077d565b5060019392505050565b60006104e082600161078f565b6000336105198582856107c1565b61052485858561083f565b60019150505b9392505050565b600061053b61089e565b6105465760006104e0565b60001992915050565b600061055a82610531565b8311156105ae5760405162461bcd60e51b815260206004820152601e60248201527f455243343632363a206465706f736974206d6f7265207468616e206d6178000060448201526064015b60405180910390fd5b60006105b9846106fb565b905061052a338486846108b8565b6000806105d3846105fe565b905061052a338483876108b8565b60606004805461045090611033565b6000336104f481858561083f565b60006104e082600161074a565b600061061682610708565b8411156106655760405162461bcd60e51b815260206004820152601f60248201527f455243343632363a207769746864726177206d6f7265207468616e206d61780060448201526064016105a5565b6000610670856104fe565b905061067f33858588856109b8565b949350505050565b60006106928261072c565b8411156106e15760405162461bcd60e51b815260206004820152601d60248201527f455243343632363a2072656465656d206d6f7265207468616e206d617800000060448201526064016105a5565b60006106ec856104d3565b905061067f33858584896109b8565b60006104e082600061078f565b6001600160a01b0381166000908152602081905260408120546104e090600061074a565b6001600160a01b0381166000908152602081905260408120546104e0565b60008061075660025490565b90508015610777576107726107696103b1565b85908386610ae1565b61067f565b8361067f565b61078a8383836001610b32565b505050565b60008061079b60025490565b90508315806107a8575080155b61077757610772816107b86103b1565b86919086610ae1565b6001600160a01b038381166000908152600160209081526040808320938616835292905220546000198114610839578181101561082a57604051637dc7a0d960e11b81526001600160a01b038416600482015260248101829052604481018390526064016105a5565b61083984848484036000610b32565b50505050565b6001600160a01b03831661086957604051634b637e8f60e11b8152600060048201526024016105a5565b6001600160a01b0382166108935760405163ec442f0560e01b8152600060048201526024016105a5565b61078a838383610bf9565b6000806108a96103b1565b118061043c5750506002541590565b6040516323b872dd60e01b81526001600160a01b038581166004830152306024830152604482018490527f000000000000000000000000000000000000000000000000000000000000000016906323b872dd906064016020604051808303816000875af115801561092d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610951919061106d565b5061095c8382610d23565b826001600160a01b0316846001600160a01b03167fdcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d784846040516109aa929190918252602082015260400190565b60405180910390a350505050565b826001600160a01b0316856001600160a01b0316146109dc576109dc8386836107c1565b6109e68382610d5d565b60405163a9059cbb60e01b81526001600160a01b038581166004830152602482018490527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af1158015610a55573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a79919061106d565b50826001600160a01b0316846001600160a01b0316866001600160a01b03167ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db8585604051610ad2929190918252602082015260400190565b60405180910390a45050505050565b600080610aef868686610d93565b9050610afa83610e57565b8015610b16575060008480610b1157610b1161108f565b868809115b15610b2957610b266001826110a5565b90505b95945050505050565b6001600160a01b038416610b5c5760405163e602df0560e01b8152600060048201526024016105a5565b6001600160a01b038316610b8657604051634a1406b160e11b8152600060048201526024016105a5565b6001600160a01b038085166000908152600160209081526040808320938716835292905220829055801561083957826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516109aa91815260200190565b6001600160a01b038316610c24578060026000828254610c1991906110a5565b90915550610c969050565b6001600160a01b03831660009081526020819052604090205481811015610c775760405163391434e360e21b81526001600160a01b038516600482015260248101829052604481018390526064016105a5565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b038216610cb257600280548290039055610cd1565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610d1691815260200190565b60405180910390a3505050565b6001600160a01b038216610d4d5760405163ec442f0560e01b8152600060048201526024016105a5565b610d5960008383610bf9565b5050565b6001600160a01b038216610d8757604051634b637e8f60e11b8152600060048201526024016105a5565b610d5982600083610bf9565b6000838302816000198587098281108382030391505080600003610dca57838281610dc057610dc061108f565b049250505061052a565b808411610dea5760405163227bc15360e01b815260040160405180910390fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150509392505050565b60006002826003811115610e6d57610e6d6110c6565b610e7791906110dc565b60ff166001149050919050565b600060208083528351808285015260005b81811015610eb157858101830151858201604001528201610e95565b506000604082860101526040601f19601f8301168501019250505092915050565b600060208284031215610ee457600080fd5b5035919050565b80356001600160a01b0381168114610f0257600080fd5b919050565b60008060408385031215610f1a57600080fd5b610f2383610eeb565b946020939093013593505050565b600080600060608486031215610f4657600080fd5b610f4f84610eeb565b9250610f5d60208501610eeb565b9150604084013590509250925092565b600060208284031215610f7f57600080fd5b61052a82610eeb565b60008060408385031215610f9b57600080fd5b82359150610fab60208401610eeb565b90509250929050565b600080600060608486031215610fc957600080fd5b83359250610fd960208501610eeb565b9150610fe760408501610eeb565b90509250925092565b6000806040838503121561100357600080fd5b61100c83610eeb565b9150610fab60208401610eeb565b60006020828403121561102c57600080fd5b5051919050565b600181811c9082168061104757607f821691505b60208210810361106757634e487b7160e01b600052602260045260246000fd5b50919050565b60006020828403121561107f57600080fd5b8151801515811461052a57600080fd5b634e487b7160e01b600052601260045260246000fd5b808201808211156104e057634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fd5b600060ff8316806110fd57634e487b7160e01b600052601260045260246000fd5b8060ff8416069150509291505056fea26469706673582212205adc04a34f8c36c6faf2a9d4b890e7109d02b41d8e6d6344384e225ee663b85a64736f6c63430008140033","contractName":"ERC4626"} as const;
export default artifact;