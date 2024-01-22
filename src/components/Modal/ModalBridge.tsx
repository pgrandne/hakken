import { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import { IconCross } from '../../utils/IconCross'
import { BalanceSepolia } from './components/BalanceSepolia'
import { BalanceArbitrum } from './components/BalanceArbitrum'
import { Transfer } from './components/Transfer'
import { Bridge } from './components/Bridge'

export const ModalBridge = ({
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
								<h1 className='text-slate-700 '>Make a bridge!</h1>
							</div>
							<div
								onClick={() => {
									setModal((prevModal) => ({
										...prevModal,
										bridge: false,
									}))
								}}
								className='flex h-auto w-1/12 cursor-pointer justify-center absolute right-3'
							>
								<IconCross />
							</div>
						</div>
						<div className='flex h-auto w-full items-center justify-center rounded py-4 px-2 flex-col text-center text-gray-500'>
							<div className='modal-container-color rounded-md  py-4 px-8 text-center text-gray-700 justify-center flex flex-col items-center w-full'>
								<div className='bg-custom flex  justify-center items-center flex-col p-4 rounded-md '>
									<Image
										src='/images/gho.png'
										width={50}
										height={50}
										alt='Picture of the author'
									/>
									<p className='text-1xl text-violet-200 pt-2 font-bold'>
										100 GHO
									</p>
								</div>

								<div className='flex items-center p-4 gap-2'>
									<span className='font-bold'>Sepolia</span>
									to
									<span className='font-bold'>Arbitrum Sepolia</span>
								</div>
								<div className='flex justify-center gap-4 pb-6 w-2/4'>
									<BalanceSepolia address={address} />
									<Image
										src='/images/arrow.gif'
										width={45}
										height={5}
										className='opacity-50'
										alt='Picture of the author'
									/>{' '}
									<BalanceArbitrum address={address} />
								</div>
								<div className='flex justify-center p-4 gap-6 w-full'>
									<Transfer />
									<Bridge address={address} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
