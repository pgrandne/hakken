require('@nomicfoundation/hardhat-toolbox')
require('dotenv').config()

const alchemyId = process.env.ALCHEMY_ID
const privateKey = process.env.SEPOLIA_PRIVATE_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: '0.8.22',
	networks: {
		sepolia: {
			url: `https://eth-sepolia.g.alchemy.com/v2/${alchemyId}`,
			accounts: [privateKey],
		},
		goerli: {
			url: `https://eth-goerli.g.alchemy.com/v2/${alchemyId}`,
			accounts: [privateKey],
		},
	},
	etherscan: {
		apiKey: 'DHWGSND25QBTCVFGZCWJKV42J8SXD2CF1E',
	},
}
