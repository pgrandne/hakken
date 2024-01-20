import { getDefaultConfig } from 'connectkit'
import { createConfig } from 'wagmi'
import { polygonMumbai, sepolia } from 'wagmi/chains'

const alchemyId = process.env.ALCHEMY_ID
const walletConnectProjectId = process.env.WALLETCONNECT_PROJECT_ID!
const chains = [polygonMumbai, sepolia]

export const config = createConfig(
	getDefaultConfig({
		appName: 'Hakken',
		alchemyId,
		walletConnectProjectId,
		chains,
	})
)
