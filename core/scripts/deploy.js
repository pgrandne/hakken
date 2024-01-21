// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require('hardhat')

async function main() {
	const GhoToken = '0xcbE9771eD31e761b744D3cB9eF78A1f32DD99211'
	const contract = await hre.ethers.deployContract('GhoNFT', [GhoToken])

	await contract.waitForDeployment()

	console.log('Contract address:', await contract.getAddress())
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error)
	process.exitCode = 1
})
