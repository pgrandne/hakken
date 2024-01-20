import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import { ABI_Faucet } from '../../../utils/ABI'
import { FaucetContract } from '../../../utils/contract'

export const Faucet = () => {
	const { data, isLoading, isSuccess, write } = useContractWrite({
		address: FaucetContract,
		abi: ABI_Faucet,
		functionName: 'claim',
	})

	return (
		<div>
			<button onClick={() => write()}>Claim</button>
			{isLoading && <div>Check Wallet</div>}
			{isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
		</div>
	)
}
