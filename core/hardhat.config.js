require('@nomicfoundation/hardhat-toolbox')
require('dotenv').config()

const alchemyId = process.env.ALCHEMY_ID
const privateKey = process.env.SEPOLIA_PRIVATE_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: '0.8.20',
	networks: {
		sepolia: {
			url: `https://eth-sepolia.g.alchemy.com/v2/${alchemyId}`,
			accounts: [privateKey],
		},
		goerli: {
			url: `https://polygon-mumbai.g.alchemy.com/v2/${alchemyId}`,
			accounts: [privateKey],
		},
	},
}
