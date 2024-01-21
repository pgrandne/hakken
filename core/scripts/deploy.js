// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require('hardhat')

async function main() {
	const Router = '0x0bf3de8c5d3e8a2b34d2beeb17abfcebaf363a59'
	const Link = '0x779877A7B0D9E8603169DdbD7836e478b4624789'
	const contract = await hre.ethers.deployContract('TokenTransferor', [
		Router,
		Link,
	])

	await contract.waitForDeployment()

	console.log('Contract address:', await contract.getAddress())
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error)
	process.exitCode = 1
})
