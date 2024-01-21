import { erc20ABI, useContractWrite } from 'wagmi'
import { GhoToken, TokenTransferorContract } from '../../../utils/contract'

export const Transfer = () => {
	const amount = 100 * 10 ** 18
	const { data, isLoading, isSuccess, write } = useContractWrite({
		address: GhoToken.Sepolia,
		abi: erc20ABI,
		functionName: 'transfer',
		args: [TokenTransferorContract, BigInt(amount)],
	})

	return (
		<div>
			<button className='custom-button' onClick={() => write()}>
				Transfer
			</button>
			{isLoading && <div>Check Wallet</div>}
		</div>
	)
}
