const artifact = {"abi":[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint256","name":"_cap","type":"uint256"},{"internalType":"address","name":"_distributionContract","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}],"bytecode":"0x60806040523480156200001157600080fd5b506040516200111738038062001117833981810160405260808110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010a57600080fd5b9083019060208201858111156200012057600080fd5b82516401000000008111828201881017156200013b57600080fd5b82525081516020918201929091019080838360005b838110156200016a57818101518382015260200162000150565b50505050905090810190601f168015620001985780820380516001836020036101000a031916815260200191505b50604090815260208281015192909101518651929450925085918591601291869185918591620001ce91600391850190620003c9565b508051620001e4906004906020840190620003c9565b505060058054601260ff1990911617610100600160a81b03191661010033021790555080156200022357620002236200021c6200024f565b8262000253565b506005805460ff909216600160a81b0260ff60a81b199092169190911790555062000475945050505050565b3390565b6001600160a01b038216620002af576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b620002bd6000838362000362565b620002d9816002546200036760201b620006d81790919060201c565b6002556001600160a01b038216600090815260208181526040909120546200030c918390620006d862000367821b17901c565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b505050565b600082820183811015620003c2576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f0160209004810192826200040157600085556200044c565b82601f106200041c57805160ff19168380011785556200044c565b828001600101855582156200044c579182015b828111156200044c5782518255916020019190600101906200042f565b506200045a9291506200045e565b5090565b5b808211156200045a57600081556001016200045f565b610c9280620004856000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806370a082311161008c578063a457c2d711610066578063a457c2d7146102c6578063a9059cbb146102f2578063dd62ed3e1461031e578063f2fde38b1461034c576100ea565b806370a08231146102745780638da5cb5b1461029a57806395d89b41146102be576100ea565b806323b872dd116100c857806323b872dd146101c6578063313ce567146101fc578063395093511461021a57806340c10f1914610246576100ea565b806306fdde03146100ef578063095ea7b31461016c57806318160ddd146101ac575b600080fd5b6100f7610372565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610131578181015183820152602001610119565b50505050905090810190601f16801561015e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101986004803603604081101561018257600080fd5b506001600160a01b038135169060200135610408565b604080519115158252519081900360200190f35b6101b4610425565b60408051918252519081900360200190f35b610198600480360360608110156101dc57600080fd5b506001600160a01b0381358116916020810135909116906040013561042b565b6102046104b2565b6040805160ff9092168252519081900360200190f35b6101986004803603604081101561023057600080fd5b506001600160a01b0381351690602001356104bb565b6102726004803603604081101561025c57600080fd5b506001600160a01b038135169060200135610509565b005b6101b46004803603602081101561028a57600080fd5b50356001600160a01b031661051f565b6102a261053a565b604080516001600160a01b039092168252519081900360200190f35b6100f761054e565b610198600480360360408110156102dc57600080fd5b506001600160a01b0381351690602001356105af565b6101986004803603604081101561030857600080fd5b506001600160a01b038135169060200135610617565b6101b46004803603604081101561033457600080fd5b506001600160a01b038135811691602001351661062b565b6102726004803603602081101561036257600080fd5b50356001600160a01b0316610656565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103fe5780601f106103d3576101008083540402835291602001916103fe565b820191906000526020600020905b8154815290600101906020018083116103e157829003601f168201915b5050505050905090565b600061041c610415610739565b848461073d565b50600192915050565b60025490565b6000610438848484610829565b6104a884610444610739565b6104a385604051806060016040528060288152602001610bc7602891396001600160a01b038a16600090815260016020526040812090610482610739565b6001600160a01b031681526020810191909152604001600020549190610984565b61073d565b5060019392505050565b60055460ff1690565b600061041c6104c8610739565b846104a385600160006104d9610739565b6001600160a01b03908116825260208083019390935260409182016000908120918c1681529252902054906106d8565b610511610a1b565b61051b8282610a66565b5050565b6001600160a01b031660009081526020819052604090205490565b60055461010090046001600160a01b031681565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103fe5780601f106103d3576101008083540402835291602001916103fe565b600061041c6105bc610739565b846104a385604051806060016040528060258152602001610c3860259139600160006105e6610739565b6001600160a01b03908116825260208083019390935260409182016000908120918d16815292529020549190610984565b600061041c610624610739565b8484610829565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b61065e610a1b565b6001600160a01b03811661067157600080fd5b6005546040516001600160a01b0380841692610100900416907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600580546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b600082820183811015610732576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b3390565b6001600160a01b0383166107825760405162461bcd60e51b8152600401808060200182810382526024815260200180610c146024913960400191505060405180910390fd5b6001600160a01b0382166107c75760405162461bcd60e51b8152600401808060200182810382526022815260200180610b7f6022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b03831661086e5760405162461bcd60e51b8152600401808060200182810382526025815260200180610bef6025913960400191505060405180910390fd5b6001600160a01b0382166108b35760405162461bcd60e51b8152600401808060200182810382526023815260200180610b5c6023913960400191505060405180910390fd5b6108be838383610b56565b6108fb81604051806060016040528060268152602001610ba1602691396001600160a01b0386166000908152602081905260409020549190610984565b6001600160a01b03808516600090815260208190526040808220939093559084168152205461092a90826106d8565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008184841115610a135760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156109d85781810151838201526020016109c0565b50505050905090810190601f168015610a055780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b60055461010090046001600160a01b03163314610a64576040805162461bcd60e51b815260206004820152600260248201526127a960f11b604482015290519081900360640190fd5b565b6001600160a01b038216610ac1576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b610acd60008383610b56565b600254610ada90826106d8565b6002556001600160a01b038216600090815260208190526040902054610b0090826106d8565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b50505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212200c2cc4636ff8deb32f059c5c832a60becf959eba666f04b4d15150e48e27efd264736f6c63430007060033","contractName":"Token"} as const;
export default artifact;