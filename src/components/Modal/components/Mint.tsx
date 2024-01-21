import { ABI_GhoNFT } from '../../../utils/ABI'
import { useContractWrite } from 'wagmi'
import { GhoNFTContract } from '../../../utils/contract'

export const Mint = () => {
	const amount = 100 * 10 ** 18
	const { data, isLoading, isSuccess, write } = useContractWrite({
		address: GhoNFTContract,
		abi: ABI_GhoNFT,
		functionName: 'mint',
	})

	return (
		<div>
			<button className='custom-button' onClick={() => write()}>
				Mint
			</button>
			{isLoading && <div>Check Wallet</div>}
		</div>
	)
}
