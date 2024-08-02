// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0;

import "../utils/Opener.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract ERC721Collectibles is Opener, ERC721URIStorage {

    constructor (
        string memory name, string memory symbol,
        uint256 limitedAmount,
        ERC20 _purchaseToken,
        address baseFeeAddress,
        address feeAddress,
        address otherAddress) public ERC721(name, symbol) Opener(_purchaseToken, baseFeeAddress, feeAddress, otherAddress, limitedAmount) {}

    string baseURI = "";

    function setTokenURI(uint256 tokenId, string memory uri) public onlyOwner {
        _setTokenURI(tokenId, uri);
    }

    function setBaseURI(string memory _baseURI) public onlyOwner {
        baseURI = _baseURI;
    }

    function mint(uint256 tokenIdToMint) public {
        require(
            tokenIdToMint <= _currentTokenId,
            "Token Id not registered"
        );

        require(registeredIDs[msg.sender][tokenIdToMint], "Token was not registered or not the rightful owner");
        require(!alreadyMinted[tokenIdToMint], "Already minted");

        alreadyMinted[tokenIdToMint] = true;
        _safeMint(msg.sender, tokenIdToMint);
    }

    function openPack(uint256 amount) public {
        _openPack(amount);
    }

    function getRegisteredIDs(address _address) public view returns(uint256[] memory) {
        return registeredIDsArray[_address];
    }
}