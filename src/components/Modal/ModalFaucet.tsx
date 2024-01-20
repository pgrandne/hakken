import { Dispatch, SetStateAction } from 'react'
import { useBalance, useNetwork, useSwitchNetwork } from 'wagmi'
import { Cross } from '../../utils/cross'

const Balance = () => {
	const { data, isError, isLoading } = useBalance({
		address: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
	})

	if (isLoading) return <div>Fetching balance…</div>
	if (isError) return <div>Error fetching balance</div>
	return (
		<div>
			Balance: {data?.formatted} {data?.symbol}
		</div>
	)
}

export const ModalFaucet = ({
	address,
	setModal,
}: {
	address: `0x${string}`
	setModal: Dispatch<
		SetStateAction<{
			bridge: boolean
			faucet: boolean
			swap: boolean
		}>
	>
}) => {
	const { chain } = useNetwork()
	const { chains, error, isLoading, pendingChainId, switchNetwork } =
		useSwitchNetwork()

	const Claim = () => {
		console.log('Claim')
	}
	console.log(chain)
	return (
		<>
			<div
				id='modal'
				className='fixed inset-0 bg-gray-900 opacity-80 z-50'
			></div>

			<div className='fixed inset-0 flex items-center justify-center z-50'>
				<div className=' h-3/4 w-11/12 rounded-md bg-white  p-5 md:w-1/2 '>
					<div className='flex h-auto w-full flex-col '>
						<div className='flex h-auto w-full items-center justify-center'>
							<div className='flex h-1/2 w-10/12 items-center justify-center py-3 text-2xl font-bold'>
								Claim 100 Free GHO
							</div>
							<div
								onClick={() => {
									setModal((prevModal) => ({
										...prevModal,
										faucet: false,
									}))
								}}
								className='flex h-auto w-1/12 cursor-pointer justify-center'
							>
								<Cross />
							</div>
						</div>
						<div className='flex h-auto w-full items-center justify-center rounded bg-gray-200 py-10 px-2 text-center text-gray-500'>
							Welcome on Gho Street. Here you can claim 100 Gho ! In next shops
							you can bridge these Gho and collect a NFT
						</div>
						<button className='m-2 border-8 border-red-700' onClick={Claim}>
							Claim
						</button>
						{chain && chain.id === 11155111 ? (
							<div>Bonne chain id</div>
						) : (
							<button onClick={() => switchNetwork?.(11155111)}>
								Switch
								{isLoading && pendingChainId === 11155111 && ' (switching)'}
							</button>
						)}
					</div>
				</div>
			</div>
		</>
	)
}
