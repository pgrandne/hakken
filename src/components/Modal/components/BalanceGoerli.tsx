import { goerli } from 'wagmi/chains'
import { useBalance } from 'wagmi'
import { GhoToken } from '../../../utils/contract'

export const BalanceGoerli = ({ address }: { address: `0x${string}` }) => {
	const { data, error, isError, isLoading } = useBalance({
		address: address,
		chainId: goerli.id,
		token: GhoToken.Goerli,
		formatUnits: 18,
	})

	if (isLoading) return <div>Fetching balance…</div>
	if (isError) return <div>Error fetching balance </div>

	const balanceWithoutDecimals = data?.formatted?.split('.')[0]

	return (
		<div className='flex flex-col'>
			<p>Goerli</p>
			<p>Balance</p>
			{balanceWithoutDecimals} {data?.symbol}
		</div>
	)
}
