const artifact = {"abi":[{"inputs":[{"internalType":"contract IERC20","name":"_erc20","type":"address"},{"internalType":"uint256","name":"_lockAmountForNetworkCreation","type":"uint256"},{"internalType":"address","name":"_treasury","type":"address"},{"internalType":"uint256","name":"_networkCreationFeePercentage","type":"uint256"},{"internalType":"uint256","name":"_closeFeePercentage","type":"uint256"},{"internalType":"uint256","name":"_cancelFeePercentage","type":"uint256"},{"internalType":"address","name":"_bountyToken","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"MathOverflowedMulDiv","type":"error"},{"inputs":[],"name":"ReentrancyGuardReentrantCall","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address[]","name":"tokens","type":"address[]"},{"indexed":false,"internalType":"string","name":"operation","type":"string"},{"indexed":false,"internalType":"string","name":"kind","type":"string"}],"name":"ChangeAllowedTokens","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"closeFee","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"cancelFee","type":"uint256"}],"name":"ChangedFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousGovernor","type":"address"},{"indexed":true,"internalType":"address","name":"newGovernor","type":"address"}],"name":"GovernorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"lockFee","type":"uint256"}],"name":"LockFeeChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"network","type":"address"}],"name":"NetworkClosed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"network","type":"address"},{"indexed":true,"internalType":"address","name":"creator","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"}],"name":"NetworkRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"newAmount","type":"uint256"}],"name":"UserLockedAmountChanged","type":"event"},{"inputs":[],"name":"DIVISOR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_LOCK_PERCENTAGE_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_governor","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_proposedGovernor","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_erc20Addresses","type":"address[]"},{"internalType":"bool","name":"transactional","type":"bool"}],"name":"addAllowedTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"amountOfNetworks","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"string","name":"uri","type":"string"},{"components":[{"internalType":"address","name":"originNetwork","type":"address"},{"internalType":"uint256","name":"bountyId","type":"uint256"},{"internalType":"uint256","name":"percentage","type":"uint256"},{"internalType":"string","name":"kind","type":"string"}],"internalType":"struct INetworkV2.BountyConnector","name":"award","type":"tuple"}],"name":"awardBounty","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"bountyToken","outputs":[{"internalType":"contract BountyToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cancelFeePercentage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newAmount","type":"uint256"}],"name":"changeAmountForNetworkCreation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_closeFee","type":"uint256"},{"internalType":"uint256","name":"_cancelFee","type":"uint256"}],"name":"changeGlobalFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newAmount","type":"uint256"}],"name":"changeNetworkCreationFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimGovernor","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"closeFeePercentage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"erc20","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"x","type":"uint256"},{"internalType":"bool","name":"transactional","type":"bool"}],"name":"getAllowedToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"transactional","type":"bool"}],"name":"getAllowedTokenLen","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"bool","name":"transactional","type":"bool"}],"name":"isAllowedToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"lock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lockAmountForNetworkCreation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lockedTokensOfAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"networkCreationFeePercentage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"networkOfAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"networksArray","outputs":[{"internalType":"contract INetworkV2","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"openNetworks","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"proposedGovernor","type":"address"}],"name":"proposeGovernor","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"networkAddress","type":"address"}],"name":"registerNetwork","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_erc20Addresses","type":"address[]"},{"internalType":"bool","name":"transactional","type":"bool"}],"name":"removeAllowedTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalLockedAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unlock","outputs":[],"stateMutability":"nonpayable","type":"function"}],"bytecode":"0x6080604052620f424060038190556305e69ec0600455600c80546001600160a01b031916905569d3c21bcecceda1000000600d556000600e55600f55624c4b4060108190556011553480156200005457600080fd5b5060405162001f6638038062001f668339810160408190526200007791620001db565b6001600055600280546001600160a01b031916331790556200009a8284620000fa565b620000a58462000185565b600680546001600160a01b039889166001600160a01b031991821617909155600d96909655600c805495881695871695909517909455600f929092556010556011556007805491909316911617905562000257565b6305f5e100821115620001425760405162461bcd60e51b815260040162000139906020808252600490820152634347463160e01b604082015260600190565b60405180910390fd5b6305f5e100811115620001815760405162461bcd60e51b815260040162000139906020808252600490820152634347463160e01b604082015260600190565b5050565b600454811115620001c25760405162461bcd60e51b81526004016200013990602080825260049082015263434c463160e01b604082015260600190565b50565b6001600160a01b0381168114620001c257600080fd5b600080600080600080600060e0888a031215620001f757600080fd5b87516200020481620001c5565b602089015160408a015191985096506200021e81620001c5565b80955050606088015193506080880151925060a0880151915060c08801516200024781620001c5565b8091505092959891949750929550565b611cff80620002676000396000f3fe6080604052600436106101d85760003560e01c8063724c5fd111610102578063bfc539d711610095578063dcc6c5a211610064578063dcc6c5a214610540578063dccc065e14610560578063dd46706414610576578063fcc198f41461059657600080fd5b8063bfc539d7146104d8578063c56d1fbc146104e0578063d4a873c114610500578063d8c00be51461052057600080fd5b8063a13594bf116100d1578063a13594bf1461046d578063a5d22f431461048d578063a69df4b5146104a3578063bfba4ca8146104b857600080fd5b8063724c5fd1146103fa578063785e9e861461041a578063952608431461043a57806395c48bd51461045a57600080fd5b80632d4147e31161017a57806368ffe5681161014957806368ffe568146103825780636c4f9b99146103a25780636d28333a146103b85780636ec24293146103cd57600080fd5b80632d4147e31461030c5780633410fe6e1461032c57806361d027b314610342578063679d23701461036257600080fd5b8063184aa723116101b6578063184aa7231461026a57806326fc16c11461028c57806328dcf94c146102cc5780632d3833cb146102ec57600080fd5b806303132059146101dd57806305a9f2741461020657806305e9c1c11461021c575b600080fd5b3480156101e957600080fd5b506101f360045481565b6040519081526020015b60405180910390f35b34801561021257600080fd5b506101f3600e5481565b34801561022857600080fd5b5061025261023736600461175e565b6013602052600090815260409020546001600160a01b031681565b6040516001600160a01b0390911681526020016101fd565b34801561027657600080fd5b5061028a61028536600461175e565b6105ac565b005b34801561029857600080fd5b506102bc6102a736600461175e565b60146020526000908152604090205460ff1681565b60405190151581526020016101fd565b3480156102d857600080fd5b5061028a6102e736600461177b565b610997565b3480156102f857600080fd5b5061028a6103073660046117a2565b6109db565b34801561031857600080fd5b50600754610252906001600160a01b031681565b34801561033857600080fd5b506101f360035481565b34801561034e57600080fd5b50600c54610252906001600160a01b031681565b34801561036e57600080fd5b5061028a61037d366004611828565b610b0e565b34801561038e57600080fd5b506102bc61039d36600461184a565b610b5b565b3480156103ae57600080fd5b506101f3600d5481565b3480156103c457600080fd5b506005546101f3565b3480156103d957600080fd5b506101f36103e836600461175e565b60126020526000908152604090205481565b34801561040657600080fd5b506101f3610415366004611883565b610b7f565b34801561042657600080fd5b50600654610252906001600160a01b031681565b34801561044657600080fd5b50600254610252906001600160a01b031681565b61028a61046836600461175e565b610b97565b34801561047957600080fd5b50600154610252906001600160a01b031681565b34801561049957600080fd5b506101f3600f5481565b3480156104af57600080fd5b5061028a610bd6565b3480156104c457600080fd5b506102526104d33660046118a0565b610e7d565b61028a610e98565b3480156104ec57600080fd5b5061028a6104fb36600461177b565b610f15565b34801561050c57600080fd5b5061025261051b36600461177b565b610f57565b34801561052c57600080fd5b5061028a61053b3660046117a2565b610f81565b34801561054c57600080fd5b5061028a61055b3660046118f3565b611104565b34801561056c57600080fd5b506101f360105481565b34801561058257600080fd5b5061028a61059136600461177b565b611207565b3480156105a257600080fd5b506101f360115481565b6105b461136f565b600f54600d5482916000916105cd916305f5e100611399565b336000908152601360205260409020549091506001600160a01b0316156106205760405162461bcd60e51b8152602060048201526002602482015261052360f41b60448201526064015b60405180910390fd5b600d543360009081526012602052604090205410156106665760405162461bcd60e51b8152602060048201526002602482015261523160f01b6044820152606401610617565b336001600160a01b0316826001600160a01b031663952608436040518163ffffffff1660e01b8152600401602060405180830381865afa1580156106ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106d291906119db565b6001600160a01b03161461070d5760405162461bcd60e51b8152602060048201526002602482015261291960f11b6044820152606401610617565b306001600160a01b0316826001600160a01b0316637b1039996040518163ffffffff1660e01b8152600401602060405180830381865afa158015610755573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061077991906119db565b6001600160a01b0316146107b45760405162461bcd60e51b8152602060048201526002602482015261148d60f21b6044820152606401610617565b600c546001600160a01b03161561088957600e546000906107d5908361145e565b600e819055600654600c5460405163a9059cbb60e01b81526001600160a01b0391821660048201526024810187905292945016915063a9059cbb906044016020604051808303816000875af1158015610832573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061085691906119f8565b6108875760405162461bcd60e51b8152602060048201526002602482015261523360f01b6044820152606401610617565b505b6005805460018181019092557f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db00180546001600160a01b038086166001600160a01b0319928316179092559085166000818152601460209081526040808320805460ff1916909617909555338252601381528482208054909416909217909255601290529081205461091b908361145e565b33600081815260126020526040902082905560055491935091507fea552bf0d586e05f58ebf1fba52fdfffcf41b2d3845d7fa01353053559cff07390869061096590600190611a2b565b604080516001600160a01b03909316835260208301919091520160405180910390a25050506109946001600055565b50565b61099f611484565b6109a88161149b565b600f81905560405181907fdd074b04d622cae57530058783e5c5384bbaa81d96df88152b12cb59979b1e7190600090a250565b6109e3611484565b6000816109f157600a6109f4565b60085b90508260005b81811015610a7c57610a33868683818110610a1757610a17611a3e565b9050602002016020810190610a2c919061175e565b84906114d6565b1515600114610a6a5760405162461bcd60e51b815260206004820152600360248201526252543160e81b6044820152606401610617565b80610a7481611a54565b9150506109fa565b507f08e196748d0ef528ce4b5540c886c17f07cbf59e4c07eef61424cba0cde9619e858585610ac957604051806040016040528060068152602001651c995dd85c9960d21b815250610af0565b6040518060400160405280600d81526020016c1d1c985b9cd858dd1a5bdb985b609a1b8152505b604051610aff93929190611afc565b60405180910390a15050505050565b610b16611484565b610b2081836114eb565b60108290556011819055604051819083907fce8c8159f011d886721740f77c2d26c91b08ac01bd1d03bd132a9942661cb14990600090a35050565b6000610b768383610b6d57600a610b70565b60085b90611569565b90505b92915050565b6000610b7982610b9057600a61158b565b600861158b565b610b9f611484565b6001600160a01b0381163303610bb457600080fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b610bde61136f565b33600090815260126020526040902054610c205760405162461bcd60e51b81526020600482015260036024820152620554c360ec1b6044820152606401610617565b336000908152601360205260409020546001600160a01b031615610d5857336000908152601360209081526040918290205482516321446c3b60e11b815292516001600160a01b03909116928392634288d876926004808401938290030181865afa158015610c93573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cb79190611b4d565b15610cea5760405162461bcd60e51b8152602060048201526003602482015262554c3160e81b6044820152606401610617565b33600081815260136020818152604080842080546001600160a01b031680865260148452828620805460ff191690559585529290915281546001600160a01b0319169091555182917fb620eabf23e616b2d87df954d580606b0248429fdf49956cabd970e561a7967d91a250505b600654336000818152601260205260409081902054905163a9059cbb60e01b8152600481019290925260248201526001600160a01b039091169063a9059cbb906044016020604051808303816000875af1158015610dba573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dde91906119f8565b610e105760405162461bcd60e51b8152602060048201526003602482015262554c3360e81b6044820152606401610617565b33600090815260126020526040812054600e54610e2c9161145e565b600e81905533600081815260126020526040808220829055519294509250907fad8644157e908a28f9ddbead8c6d09bae1158f47255a73de78e4d3a4e4fca232908390a350610e7b6001600055565b565b6000610b768383610e8f57600a610e92565b60085b90611595565b6001546001600160a01b03163314610eaf57600080fd5b6001546002546040516001600160a01b0392831692909116907f6fadb1c244276388aee22be93b919985a18748c021e5d48553957a48101a256090600090a360018054600280546001600160a01b03199081166001600160a01b03841617909155169055565b610f1d611484565b60008111610f525760405162461bcd60e51b8152602060048201526002602482015261433160f01b6044820152606401610617565b600d55565b60058181548110610f6757600080fd5b6000918252602090912001546001600160a01b0316905081565b610f89611484565b600081610f9757600a610f9a565b60085b9050826000610fb2610fab8461158b565b83906115a1565b915050601e811115610fec5760405162461bcd60e51b815260206004820152600360248201526204154360ec1b6044820152606401610617565b60005b828110156110715761102887878381811061100c5761100c611a3e565b9050602002016020810190611021919061175e565b85906115c8565b151560011461105f5760405162461bcd60e51b815260206004820152600360248201526241543160e81b6044820152606401610617565b8061106981611a54565b915050610fef565b507f08e196748d0ef528ce4b5540c886c17f07cbf59e4c07eef61424cba0cde9619e8686866110be57604051806040016040528060068152602001651c995dd85c9960d21b8152506110e5565b6040518060400160405280600d81526020016c1d1c985b9cd858dd1a5bdb985b609a1b8152505b6040516110f493929190611b66565b60405180910390a1505050505050565b61110c61136f565b3360009081526014602052604090205460ff1615156001146111555760405162461bcd60e51b8152602060048201526002602482015261041360f41b6044820152606401610617565b6007546001600160a01b03166111925760405162461bcd60e51b8152602060048201526002602482015261413160f01b6044820152606401610617565b600754604051636e6362d160e11b81526001600160a01b039091169063dcc6c5a2906111c690869086908690600401611bd3565b600060405180830381600087803b1580156111e057600080fd5b505af11580156111f4573d6000803e3d6000fd5b505050506112026001600055565b505050565b61120f61136f565b600081116112445760405162461bcd60e51b815260206004820152600260248201526104c360f41b6044820152606401610617565b6006546040516323b872dd60e01b8152336004820152306024820152604481018390526001600160a01b03909116906323b872dd906064016020604051808303816000875af115801561129b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112bf91906119f8565b6112f05760405162461bcd60e51b81526020600482015260026024820152614c3160f01b6044820152606401610617565b3360009081526012602052604090205461130b908290611c8a565b33600090815260126020526040902055600e54611329908290611c8a565b600e55336000818152601260205260408082205490519092917fad8644157e908a28f9ddbead8c6d09bae1158f47255a73de78e4d3a4e4fca23291a36109946001600055565b60026000540361139257604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b60008383028160001985870982811083820303915050806000036113d0578382816113c6576113c6611c9d565b0492505050611457565b8084116113f05760405163227bc15360e01b815260040160405180910390fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150505b9392505050565b600080838311156114745750600090508061147d565b50600190508183035b9250929050565b6002546001600160a01b03163314610e7b57600080fd5b6004548111156109945760405162461bcd60e51b815260040161061790602080825260049082015263434c463160e01b604082015260600190565b6000610b76836001600160a01b0384166115dd565b6305f5e1008211156115285760405162461bcd60e51b8152600401610617906020808252600490820152634347463160e01b604082015260600190565b6305f5e1008111156115655760405162461bcd60e51b8152600401610617906020808252600490820152634347463160e01b604082015260600190565b5050565b6001600160a01b03811660009081526001830160205260408120541515610b76565b6000610b79825490565b6000610b7683836116d0565b600080838301848110156115bc57600080925092505061147d565b60019590945092505050565b6000610b76836001600160a01b0384166116fa565b600081815260018301602052604081205480156116c6576000611601600183611a2b565b855490915060009061161590600190611a2b565b905080821461167a57600086600001828154811061163557611635611a3e565b906000526020600020015490508087600001848154811061165857611658611a3e565b6000918252602080832090910192909255918252600188019052604090208390555b855486908061168b5761168b611cb3565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610b79565b6000915050610b79565b60008260000182815481106116e7576116e7611a3e565b9060005260206000200154905092915050565b600081815260018301602052604081205461174157508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610b79565b506000610b79565b6001600160a01b038116811461099457600080fd5b60006020828403121561177057600080fd5b813561145781611749565b60006020828403121561178d57600080fd5b5035919050565b801515811461099457600080fd5b6000806000604084860312156117b757600080fd5b833567ffffffffffffffff808211156117cf57600080fd5b818601915086601f8301126117e357600080fd5b8135818111156117f257600080fd5b8760208260051b850101111561180757600080fd5b6020928301955093505084013561181d81611794565b809150509250925092565b6000806040838503121561183b57600080fd5b50508035926020909101359150565b6000806040838503121561185d57600080fd5b823561186881611749565b9150602083013561187881611794565b809150509250929050565b60006020828403121561189557600080fd5b813561145781611794565b600080604083850312156118b357600080fd5b82359150602083013561187881611794565b634e487b7160e01b600052604160045260246000fd5b6000608082840312156118ed57600080fd5b50919050565b60008060006060848603121561190857600080fd5b833561191381611749565b9250602084013567ffffffffffffffff8082111561193057600080fd5b818601915086601f83011261194457600080fd5b813581811115611956576119566118c5565b604051601f8201601f19908116603f0116810190838211818310171561197e5761197e6118c5565b8160405282815289602084870101111561199757600080fd5b8260208601602083013760006020848301015280965050505060408601359150808211156119c457600080fd5b506119d1868287016118db565b9150509250925092565b6000602082840312156119ed57600080fd5b815161145781611749565b600060208284031215611a0a57600080fd5b815161145781611794565b634e487b7160e01b600052601160045260246000fd5b81810381811115610b7957610b79611a15565b634e487b7160e01b600052603260045260246000fd5b600060018201611a6657611a66611a15565b5060010190565b8183526000602080850194508260005b85811015611aab578135611a9081611749565b6001600160a01b031687529582019590820190600101611a7d565b509495945050505050565b6000815180845260005b81811015611adc57602081850181015186830182015201611ac0565b506000602082860101526020601f19601f83011685010191505092915050565b606081526000611b10606083018587611a6d565b828103806020850152600682526572656d6f766560d01b602083015260408101604085015250611b436040820185611ab6565b9695505050505050565b600060208284031215611b5f57600080fd5b5051919050565b606081526000611b7a606083018587611a6d565b828103806020850152600382526218591960ea1b602083015260408101604085015250611b436040820185611ab6565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b600060018060a01b03808616835260606020840152611bf56060840186611ab6565b83810360408501528435611c0881611749565b828116825250602085013560208201526040850135604082015260608501359150601e19853603018212611c3b57600080fd5b6020918501918201913567ffffffffffffffff811115611c5a57600080fd5b803603831315611c6957600080fd5b60806060830152611c7e608083018285611baa565b98975050505050505050565b80820180821115610b7957610b79611a15565b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052603160045260246000fdfea2646970667358221220f8a59baee202b898592a4361b119e78992ef2a293939018e5f4aa766fbe8952864736f6c63430008140033","contractName":"NetworkRegistry"} as const;
export default artifact;