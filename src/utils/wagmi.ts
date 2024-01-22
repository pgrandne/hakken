import { getDefaultConfig } from 'connectkit'
import { createConfig } from 'wagmi'
import { arbitrumSepolia, sepolia } from 'wagmi/chains'

const alchemyId = process.env.ALCHEMY_ID
const walletConnectProjectId = process.env.WALLETCONNECT_PROJECT_ID!
const chains = [sepolia, arbitrumSepolia]

export const config = createConfig(
	getDefaultConfig({
		appName: 'Hakken',
		alchemyId,
		walletConnectProjectId,
		chains,
	})
)
