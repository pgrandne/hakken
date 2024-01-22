require('@nomicfoundation/hardhat-toolbox')
require('dotenv').config()

const alchemyId = process.env.ALCHEMY_ID
const privateKey = process.env.SEPOLIA_PRIVATE_KEY
const infura = process.env.INFURA_ARBI_SEPO_API_KEY
const arbriscan = process.env.ARBRISCAN_API_KEY

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
		arbitrumSepolia: {
			chainId: 421614,
			url: `https://arbitrum-sepolia.infura.io/v3/${infura}`,
			accounts: [privateKey],
		},
	},
	etherscan: {
		apiKey: arbriscan,
		customChains: [
			{
				network: 'arbitrumSepolia',
				chainId: 421614,
				urls: {
					apiURL: `https://api-sepolia.arbiscan.io/api/`,
					browserURL: 'https://sepolia.arbiscan.io/',
				},
			},
		],
	},
}
