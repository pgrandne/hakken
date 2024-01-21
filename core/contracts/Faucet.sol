// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

// Import the ERC20 interface
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

// Extend the IERC20 interface to include the decimals method
interface IERC20WithDecimals is IERC20 {
    function decimals() external view returns (uint8);
}

contract Faucet {
    // The address of the ERC20 token contract
    IERC20WithDecimals public token;

    // Initialize the contract with the ERC20 token address
    constructor(IERC20WithDecimals _token) {
        token = _token;
    }

    // Update the event to include the claimer's address and the claimed amount
    event Claimed(address indexed claimer, uint amount, uint when);

    function claim() public {
        uint decimals = token.decimals();
        uint amount = 100 * 10 ** decimals;

        // Check the balance of the sender
        uint balance = token.balanceOf(msg.sender);
        require(balance < amount, "You already have 100 GHO or more tokens");

        // Transfer the tokens
        require(token.transfer(msg.sender, amount), "Transfer failed");

        // Emit the updated event
        emit Claimed(msg.sender, amount, block.timestamp);
    }
}
