# Hakken

A journey in a japan street to discover Web3 with first transactions

## Description

This is a Web3 experiment we made to practice with 3D modeling. The ghost strolls in a Tokyo street during the night. There are 3 tasks to execute across it:

- Claim 100 GHO on Sepolia
- Bridge these 100 GHO from Sepolia to Goerli
- Mint a NFT on Goerli with these 100 GHO The first action is very simple to find, the second one is a little bit moredifficult to find because the indication is smaller and there is no indication for the third one.

## Deployments

| Contract            | Network | Address                                                     |
| ------------------- | ------- | ----------------------------------------------------------- |
| Faucet.sol          | Seoplia | [address](https://sepolia.etherscan.io/address#code)        |
| TokenTransferor.sol | Sepolia | [address] (https://sepolia.etherscan.io/address#code)       |
| GhoNFT              | Goerli  | [address](https://goerli.etherscan.io/address/address#code) |

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
