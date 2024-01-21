import { erc20ABI } from 'wagmi'
import { useContractWrite } from 'wagmi'
import { ABI_TokenTransferor } from '../../../utils/ABI'
import { GhoToken, TokenTransferorContract } from '../../../utils/contract'

export const Bridge = ({ address }: { address: `0x${string}` }) => {
	const amount = 100 * 10 ** 18
	const { data, isLoading, isSuccess, write } = useContractWrite({
		address: TokenTransferorContract,
		abi: ABI_TokenTransferor,
		functionName: 'transferTokensPayNative',
		args: ['3478487238524512106', address, GhoToken.Sepolia, amount],
	})

	return (
		<div>
			<button className='custom-button' onClick={() => write()}>
				Bridge
			</button>
			{isLoading && <div>Check Wallet</div>}
		</div>
	)
}
