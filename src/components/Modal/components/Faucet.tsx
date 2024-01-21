import {
	useContractWrite,
	useNetwork,
	usePrepareContractWrite,
	useSwitchNetwork,
	useWaitForTransaction,
} from 'wagmi'
import { sepolia } from 'wagmi/chains'
import { ABI_Faucet } from '../../../utils/ABI'
import { FaucetContract } from '../../../utils/contract'
import { toast } from 'react-toastify'

export const Faucet = () => {
	const notify = () => toast('Transaction confirmed!')
	const { data, isLoading, isSuccess, write } = useContractWrite({
		address: FaucetContract,
		abi: ABI_Faucet,
		functionName: 'claim',
	})
	const { data: receipt, isLoading: isPending } = useWaitForTransaction({
		hash: data?.hash,
		onSuccess(receipt) {
			notify()
		},
	})
	const { chain } = useNetwork()
	const {
		chains,
		error,
		isLoading: isProcessing,
		pendingChainId,
		switchNetwork,
	} = useSwitchNetwork()

	return (
		<div className=' w-full'>
			{chain && chain.id === sepolia.id ? (
				<button className='custom-button w-full' onClick={() => write()}>
					Claim
				</button>
			) : (
				<button
					className='custom-button'
					disabled={false}
					onClick={() => switchNetwork?.(sepolia.id)}
				>
					Switch Network to Goerli
					{isProcessing && pendingChainId === sepolia.id && ' (switching)'}
				</button>
			)}
		</div>
	)
}
