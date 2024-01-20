import { Dispatch, SetStateAction } from 'react'
import { useNetwork, useSwitchNetwork } from 'wagmi'
import { sepolia } from 'wagmi/chains'
import { BalanceSepolia } from './components/BalanceSepolia'
import { BalanceGoerli } from './components/BalanceGoerli'
import { Faucet } from './components/Faucet'
import { toast } from 'react-toastify'
import { IconCross } from '../../utils/IconCross'

export const ModalFaucet = ({
	address,
	setModal,
}: {
	address: `0x${string}`
	setModal: Dispatch<
		SetStateAction<{
			bridge: boolean
			faucet: boolean
			reward: boolean
		}>
	>
}) => {
	const notify = () => toast('Wow so easy !')
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
				<div className='h-auto w-11/12 rounded-md bg-gradient-to-r from-slate-400 to-violet-300 p-5 md:w-1/2 '>
					<div className='flex h-auto w-full flex-col '>
						<div className='flex h-auto w-full items-center justify-center relative'>
							<div className='flex h-auto w-10/12 items-center justify-center py-3 text-2xl font-bold '>
								<h1 className='text-slate-700 '>Claim GHO!</h1>
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
								<IconCross />
							</div>
						</div>
						<div className='flex h-auto w-full items-center justify-center rounded bg-gray-200 py-10 px-2 text-center text-gray-500'>
							Welcome on Gho Street. Here you can claim 100 Gho ! In next shops
							you can bridge these Gho and collect a NFT
						</div>
						<button
							className='custom-button'
							onClick={() => {
								setModal((prevModal) => ({
									...prevModal,
									faucet: true,
								}))

								notify()
							}}
						>
							Notify !
						</button>
						<Faucet />
						{chain && chain.id === sepolia.id ? (
							<div>Bonne chain id</div>
						) : (
							<button
								className='custom-button'
								onClick={() => switchNetwork?.(sepolia.id)}
							>
								Switch
								{isLoading && pendingChainId === sepolia.id && ' (switching)'}
							</button>
						)}
					</div>
				</div>
			</div>
		</>
	)
}
