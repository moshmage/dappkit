const artifact = {"abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"EnforcedPause","type":"error"},{"inputs":[],"name":"ExpectedPause","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"TGEDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"distributions","outputs":[{"internalType":"uint256","name":"amountAllocated","type":"uint256"},{"internalType":"uint256","name":"currentAllocated","type":"uint256"},{"internalType":"uint256","name":"unlockDay","type":"uint256"},{"internalType":"uint256","name":"amountSent","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"erc20","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastDateDistribution","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"month","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"safeGuardAllTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"_tokenAmount","type":"uint256"},{"internalType":"uint256","name":"_unlockDays","type":"uint256"}],"name":"setInitialDistribution","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_time","type":"uint256"}],"name":"setTGEDate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_tokenAddress","type":"address"}],"name":"setTokenAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenOwners","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"triggerTokenSend","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"year","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}],"bytecode":"0x60806040526000600255600060035534801561001a57600080fd5b506000805460ff19169055338061004b57604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b6100548161005a565b506100b3565b600080546001600160a01b03838116610100818102610100600160a81b0319851617855560405193049190911692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35050565b610d18806100c26000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806376093957116100a2578063b90c72ae11610071578063b90c72ae1461021a578063cb1287281461022d578063f2fde38b14610236578063f326971614610249578063f8a14f461461025457600080fd5b806376093957146101c8578063785e9e86146101d157806383e2ad63146101fc5780638da5cb5b1461020457600080fd5b80635c975abb116100de5780635c975abb1461018d578063702921f5146101a3578063715018a6146101ad57806372108452146101b557600080fd5b806326a4e8d2146101105780632d9b4b2514610125578063313ce5671461015d57806332a011031461017a575b600080fd5b61012361011e366004610b81565b610267565b005b610138610133366004610ba5565b610299565b6040805194855260208501939093529183015260608201526080015b60405180910390f35b61016c670de0b6b3a764000081565b604051908152602001610154565b610123610188366004610bd1565b6102df565b60005460ff166040519015158152602001610154565b61016c62278d0081565b6101236102f4565b6101236101c3366004610bea565b610308565b61016c60035481565b6005546101e4906001600160a01b031681565b6040516001600160a01b039091168152602001610154565b610123610469565b60005461010090046001600160a01b03166101e4565b610123610228366004610b81565b610936565b61016c60025481565b610123610244366004610b81565b610a34565b61016c6301e1338081565b6101e4610262366004610bd1565b610a6f565b61026f610a99565b610277610acc565b600580546001600160a01b0319166001600160a01b0392909216919091179055565b600460205281600052604060002081815481106102b557600080fd5b60009182526020909120600490910201805460018201546002830154600390930154919450925084565b6102e7610a99565b6102ef610acc565b600255565b6102fc610a99565b6103066000610af0565b565b610310610a99565b610318610acc565b6000805b60015481101561037457846001600160a01b03166001828154811061034357610343610c1f565b6000918252602090912001546001600160a01b03160361036257600191505b8061036c81610c4b565b91505061031c565b5060006040518060800160405280670de0b6b3a7640000866103969190610c64565b81526020016103ad670de0b6b3a764000087610c64565b81526020808201869052600060409283018190526001600160a01b038916815260048083528382208054600181810183559184529284902086519390920290910191825591840151918101919091559082015160028201556060820151600390910155905081610462576001805480820182556000919091527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60180546001600160a01b0319166001600160a01b0387161790555b5050505050565b610471610acc565b6002546000036104bf5760405162461bcd60e51b81526020600482015260146024820152731511d14819185d19481b9bdd081cd95d081e595d60621b60448201526064015b60405180910390fd5b60025442116105105760405162461bcd60e51b815260206004820152601860248201527f544745207374696c6c206861736e27742073746172746564000000000000000060448201526064016104b6565b62015180600354426105229190610c81565b1161056f5760405162461bcd60e51b815260206004820152601d60248201527f43616e206f6e6c792062652063616c6c6564206f6e636520612064617900000060448201526064016104b6565b4260035560005b600154811015610933576000600460006001848154811061059957610599610c1f565b60009182526020808320909101546001600160a01b031683528281019390935260409182018120805483518186028101860190945280845292939092919084015b828210156106345783829060005260206000209060040201604051806080016040529081600082015481526020016001820154815260200160028201548152602001600382015481525050815260200190600101906105da565b50505050905060005b815181101561091e5781818151811061065857610658610c1f565b602002602001015160400151600254426106729190610c94565b11801561069c5750600082828151811061068e5761068e610c1f565b602002602001015160200151115b1561090c5760008282815181106106b5576106b5610c1f565b60200260200101516020015190508060046000600187815481106106db576106db610c1f565b60009182526020808320909101546001600160a01b03168352820192909252604001902080548490811061071157610711610c1f565b90600052602060002090600402016001015461072d9190610c81565b600460006001878154811061074457610744610c1f565b60009182526020808320909101546001600160a01b03168352820192909252604001902080548490811061077a5761077a610c1f565b9060005260206000209060040201600101819055508060046000600187815481106107a7576107a7610c1f565b60009182526020808320909101546001600160a01b0316835282019290925260400190208054849081106107dd576107dd610c1f565b9060005260206000209060040201600301546107f99190610c94565b600460006001878154811061081057610810610c1f565b60009182526020808320909101546001600160a01b03168352820192909252604001902080548490811061084657610846610c1f565b6000918252602090912060036004909202010155600554600180546001600160a01b039092169163a9059cbb91908790811061088457610884610c1f565b60009182526020909120015460405160e083901b6001600160e01b03191681526001600160a01b039091166004820152602481018490526044016020604051808303816000875af11580156108dd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109019190610ca7565b61090a57600080fd5b505b8061091681610c4b565b91505061063d565b5050808061092b90610c4b565b915050610576565b50565b61093e610a99565b610946610b49565b6005546040516370a0823160e01b81523060048201526001600160a01b039091169063a9059cbb90839083906370a0823190602401602060405180830381865afa158015610998573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109bc9190610cc9565b6040516001600160e01b031960e085901b1681526001600160a01b03909216600483015260248201526044016020604051808303816000875af1158015610a07573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a2b9190610ca7565b61093357600080fd5b610a3c610a99565b6001600160a01b038116610a6657604051631e4fbdf760e01b8152600060048201526024016104b6565b61093381610af0565b60018181548110610a7f57600080fd5b6000918252602090912001546001600160a01b0316905081565b6000546001600160a01b036101009091041633146103065760405163118cdaa760e01b81523360048201526024016104b6565b60005460ff16156103065760405163d93c066560e01b815260040160405180910390fd5b600080546001600160a01b03838116610100818102610100600160a81b0319851617855560405193049190911692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35050565b60005460ff1661030657604051638dfc202b60e01b815260040160405180910390fd5b6001600160a01b038116811461093357600080fd5b600060208284031215610b9357600080fd5b8135610b9e81610b6c565b9392505050565b60008060408385031215610bb857600080fd5b8235610bc381610b6c565b946020939093013593505050565b600060208284031215610be357600080fd5b5035919050565b600080600060608486031215610bff57600080fd5b8335610c0a81610b6c565b95602085013595506040909401359392505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060018201610c5d57610c5d610c35565b5060010190565b8082028115828204841417610c7b57610c7b610c35565b92915050565b81810381811115610c7b57610c7b610c35565b80820180821115610c7b57610c7b610c35565b600060208284031215610cb957600080fd5b81518015158114610b9e57600080fd5b600060208284031215610cdb57600080fd5b505191905056fea26469706673582212200f1c563b6a80e8320a293e5dcce62b4c4e835612b9ca6dcb1c50e7c9fb215a3064736f6c63430008140033","contractName":"ERC20Distribution"} as const;
export default artifact;