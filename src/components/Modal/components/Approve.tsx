import { erc20ABI } from 'wagmi'
import { useContractWrite } from 'wagmi'

export const Approve = ({
	contractGhoAddress,
	contractReceiptAddress,
}: {
	contractGhoAddress: `0x${string}`
	contractReceiptAddress: `0x${string}`
}) => {
	const amount = 100 * 10 ** 18
	const { data, isLoading, isSuccess, write } = useContractWrite({
		address: contractGhoAddress,
		abi: erc20ABI,
		functionName: 'approve',
		args: [contractReceiptAddress, BigInt(amount)],
	})

	return (
		<div>
			<button className='custom-button' onClick={() => write()}>
				Approve
			</button>
			{isLoading && <div>Check Wallet</div>}
		</div>
	)
}
