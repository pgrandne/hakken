// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract GhoNFT is ERC721 {
    uint256 private _nextTokenId;
    IERC20 public ghoToken;
    uint public tokenPrice;

    constructor(address _ghoToken) ERC721("GhoNFT", "GNFT") {
        ghoToken = IERC20(_ghoToken);
        tokenPrice = 100 * 10 ** 18; // 100 GHO
    }

    function mint() public {
        // Require that the sender has enough GHO
        require(ghoToken.balanceOf(msg.sender) >= tokenPrice, "Not enough GHO");

        // Transfer the GHO from the sender to this contract
        require(
            ghoToken.transferFrom(msg.sender, address(this), tokenPrice),
            "GHO transfer failed"
        );
        // Autoincrement the token ID
        uint256 tokenId = _nextTokenId++;

        // Mint the NFT to the sender
        _mint(msg.sender, tokenId);
    }

    function tokenURI() public view virtual returns (string memory) {
        return "ipfs://QmNb5vEXbAjp3bVaALLpVN2HBRGM4mAAoGUffWB5Epp4f2";
    }
}
