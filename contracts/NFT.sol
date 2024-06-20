// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
// import "@openzeppelin/contracts/access/Ownalble.sol";


contract NFTCollection is ERC721URIStorage {
    uint256 public tokenCount;

    constructor() ERC721("NFTCollection", "MNFT") {}

    function mint(string memory _tokenURI) public returns (uint256) {
        tokenCount += 1;
        _safeMint(msg.sender, tokenCount);
        _setTokenURI(tokenCount, _tokenURI);
        return tokenCount;
    }

    function mintMultiple(string[] memory _tokenURIs) public {
        for (uint i = 0; i < _tokenURIs.length; i++) {
            mint(_tokenURIs[i]);
        }
    }
}
