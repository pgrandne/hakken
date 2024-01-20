import { sepolia } from 'wagmi/chains'
import { useBalance } from 'wagmi'
import { GhoToken } from '../../../utils/contract'

export const BalanceSepolia = ({ address }: { address: `0x${string}` }) => {
	const { data, isError, isLoading } = useBalance({
		address: address,
		chainId: sepolia.id,
		token: GhoToken.Sepolia,
		formatUnits: 18,
	})

	if (isLoading) return <div>Fetching balance…</div>
	if (isError) return <div>Error fetching balance</div>

	const balanceWithoutDecimals = data?.formatted?.split('.')[0]
	return (
		<div>
			Gho Balance: on Sepolia {balanceWithoutDecimals} {data?.symbol}
		</div>
	)
}
