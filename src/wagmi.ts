import { getDefaultConfig } from 'connectkit'
import { createConfig } from 'wagmi'

const alchemyId = process.env.ALCHEMY_ID
const walletConnectProjectId = process.env.WALLETCONNECT_PROJECT_ID!

export const config = createConfig(
	getDefaultConfig({
		appName: 'Hakken',

		alchemyId,
		walletConnectProjectId,
	})
)
