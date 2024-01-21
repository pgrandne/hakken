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
		<div className='flex flex-col w-4/12'>
			<div className='bg-[#f8f8f836] rounded-md p-2 text-center border border-gray-400 box-shadow-custom'>
				<p className='text-gray-600 font-bold mb-1'>Sepolia</p>
				<span className='balance py-1 px-4 rounded-md border w-full font-light text-sm'>
					{/* {balanceWithoutDecimals}  */}
					{/* 100 {data?.symbol} */}
					100 GHO
				</span>
				<p className='font-light text-sm mt-1'>Balance</p>
			</div>
		</div>
	)
}
