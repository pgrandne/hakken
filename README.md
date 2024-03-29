# Hakken

A journey in a japan street to discover Web3 with first transactions
Update : We replaced Goerli network by Arbitrum Sepolia for CCIP Bridge

## Description

This is a Web3 experiment we made to practice with 3D modeling. The ghost strolls in a Tokyo street during the night. There are 3 tasks to execute across it:

- Claim 100 GHO on Sepolia
- Bridge these 100 GHO from Sepolia to ~~Goerli~~ Arbitrum Sepolia
- Mint a NFT on ~~Goerli~~ Arbitrum Sepolia with these 100 GHO T

The first action is very simple to find, the second one is a little bit moredifficult to find because the indication is smaller and there is no indication for the third one.

## Deployments

| Contract            | Network          | Address                                                                                                                            |
| ------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Faucet.sol          | Seoplia          | [0x3247AbF0cd81Be49e6FbaBe616C15F90B4cB9Ad7](https://sepolia.etherscan.io/address/0x3247AbF0cd81Be49e6FbaBe616C15F90B4cB9Ad7#code) |
| TokenTransferor.sol | Sepolia          | [0x5Da01967D6b64c5b7B112536BdA473768Bd104C2](https://sepolia.etherscan.io/address/0x5Da01967D6b64c5b7B112536BdA473768Bd104C2#code) |
| GhoNFT              | Arbitrum Sepolia | [0xb577ED8dB5a965815b53d5141A83D1DEed438DBC](https://sepolia.arbiscan.io/address/0xb577ED8dB5a965815b53d5141A83D1DEed438DBC#code)  |

This is a [Next.js](https://nextjs.org/) project

## Instructions

##### Clone the project

Clone the repository on your local machine

```bash
$ git clone https://github.com/pgrandne/hakken.git
```

### Front End

We use NextJS 14. The Front End scripts are in "src" folder.
If you want to launch the Front End locally:

1. Install the dependencies

```bash
$ npm install
```

2. Launch the server locally

```bash
$ npm run dev
```

### Contracts

We use Hardhat. Contract and scripts are in "core" folder.
