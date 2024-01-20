import { Dispatch, SetStateAction } from 'react'
import { useNetwork, useSwitchNetwork } from 'wagmi'
import { sepolia } from 'wagmi/chains'
import { BalanceSepolia } from './components/BalanceSepolia'
import { BalanceMumbai } from './components/BalanceMumbai'
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
				<div className=' h-3/4 w-11/12 rounded-md bg-white  p-5 md:w-1/2 '>
					<div className='flex h-auto w-full flex-col '>
						<div className='flex h-auto w-full items-center justify-center'>
							<BalanceSepolia address={address} />
							<BalanceMumbai address={address} />
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
								<IconCross />
							</div>
						</div>
						<div className='flex h-auto w-full items-center justify-center rounded bg-gray-200 py-10 px-2 text-center text-gray-500'>
							Welcome on Gho Street. Here you can claim 100 Gho ! In next shops
							you can bridge these Gho and collect a NFT
						</div>
						<button onClick={notify}>Notify !</button>
						<Faucet />
						{chain && chain.id === sepolia.id ? (
							<div>Bonne chain id</div>
						) : (
							<button onClick={() => switchNetwork?.(sepolia.id)}>
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
