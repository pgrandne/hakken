import { Dispatch, SetStateAction } from 'react'
import { useNetwork, useSwitchNetwork } from 'wagmi'
import { BalanceSepolia } from './components/BalanceSepolia'
import { BalanceGoerli } from './components/BalanceGoerli'
import { Faucet } from './components/Faucet'
import { toast } from 'react-toastify'
import { IconCross } from '../../utils/IconCross'
import Image from 'next/image'

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
				<div className='h-auto rounded-md bg-gradient-to-r from-slate-400 to-violet-300 p-5 md:w-1/2 '>
					<div className='flex h-auto flex-col '>
						<div className='flex h-auto w-full items-center justify-center relative'>
							<div className='flex h-auto w-10/12 items-center justify-center py-3 text-2xl font-bold '>
								<h1 className='text-slate-800 '>Claim 100 GHO!</h1>
							</div>
							<div
								onClick={() => {
									setModal((prevModal) => ({
										...prevModal,
										faucet: false,
									}))
								}}
								className='flex h-auto w-1/12 cursor-pointer justify-center absolute right-3'
							>
								<IconCross />
							</div>
						</div>
						<div className='flex justify-center  p-2'>
							<div className='modal-container-color rounded-md box-shadow-custom py-4 px-8 text-center text-gray-700 justify-center flex flex-col items-center'>
								<p className='text-xl text-slate-600 pt-2 pb-4 w-1/2 font-bold'>
									<div className='flex justify-center gap-8 pb-6'>
										<BalanceSepolia address={address} />
										<BalanceGoerli address={address} />
									</div>
								</p>

								<p>Welcome on Gho Street. Here you can claim 100 Gho !</p>
								<div className='w-1/6 flex bg-custom justify-center items-center flex-col p-2 rounded-md my-4'>
									<Image
										src='/images/gho.png'
										width={40}
										height={40}
										alt='Picture of the author'
									/>
									<p className='text-1xl text-violet-200 pt-2 font-bold'>
										100 GHO
									</p>
								</div>
								<Faucet />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
