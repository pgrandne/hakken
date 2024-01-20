// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract GhoNFT is ERC721 {
    IERC20 public ghoToken;
    uint public tokenPrice;

    constructor(address _ghoToken) ERC721("GhoNFT", "GNFT") {
        ghoToken = IERC20(_ghoToken);
        tokenPrice = 100 * 10 ** 18; // 100 GHO
    }

    function mint(address to, uint tokenId) public {
        // Require that the sender has enough GHO
        require(ghoToken.balanceOf(msg.sender) >= tokenPrice, "Not enough GHO");

        // Transfer the GHO from the sender to this contract
        require(
            ghoToken.transferFrom(msg.sender, address(this), tokenPrice),
            "GHO transfer failed"
        );

        // Mint the NFT to the sender
        _mint(to, tokenId);
    }

    function tokenURI(
        uint256 tokenId
    ) public view virtual override returns (string memory) {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );

        // URL fixe vers le fichier JSON
        return "https://mywebsite.com/nft/metadata.json";
    }
}
