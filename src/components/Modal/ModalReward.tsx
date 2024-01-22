import { Dispatch, SetStateAction, useState } from 'react'
import { IconCross } from '../../utils/IconCross'
import Image from 'next/image'
import { BalanceSepolia } from './components/BalanceSepolia'
import { BalanceArbitrum } from './components/BalanceArbitrum'
import { useNetwork, useSwitchNetwork } from 'wagmi'
import { arbitrumSepolia } from 'wagmi/chains'
import { Approve } from './components/Approve'
import { GhoNFTContract, GhoToken } from '../../utils/contract'
import { Mint } from './components/Mint'

export const ModalReward = ({
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
	const { chain } = useNetwork()
	const { chains, error, isLoading, pendingChainId, switchNetwork } =
		useSwitchNetwork()

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
								<h1 className='text-slate-800 '>Mint a NFT for 100 GH0!</h1>
							</div>
							<div
								onClick={() => {
									setModal((prevModal) => ({
										...prevModal,
										reward: false,
									}))
								}}
								className='flex h-auto w-1/12 cursor-pointer justify-center absolute right-3'
							>
								<IconCross />
							</div>
						</div>
						<div className='modal-container-color rounded-md box-shadow-custom py-4 px-8 text-center text-gray-700 justify-center flex flex-col items-center'>
							<div className='flex h-auto w-full items-center justify-center rounded  px-2 flex-col text-center text-gray-500'>
								<p className='text-xl text-slate-600 pt-2 pb-4  font-bold'>
									<div className='flex justify-center gap-8 pb-6'>
										<BalanceSepolia address={address} />
										<BalanceArbitrum address={address} />
									</div>
									You can mint a NFT on Arbitrum Sepolia with 100 GHO
								</p>
								<div className='bg-gradient-to-b from-fuchsia-900 to-sky-600  to-sky-700   flex box-shadow-custom justify-center items-center flex-col p-4 rounded-md '>
									<Image
										src='/images/ghosty.png'
										width={60}
										height={60}
										alt='Picture of the author'
										className='animate-bounce'
									/>
								</div>
								<div className='flex justify-center p-4 gap-6 w-full'>
									{chain && chain.id === arbitrumSepolia.id ? (
										<>
											<Approve
												contractGhoAddress={GhoToken.ArbitrumSepolia}
												contractReceiptAddress={GhoNFTContract}
											/>
											<Mint />
										</>
									) : (
										<button
											className='custom-button'
											onClick={() => switchNetwork?.(arbitrumSepolia.id)}
										>
											Switch Network to Arbitrum Sepolia
											{isLoading &&
												pendingChainId === arbitrumSepolia.id &&
												' (switching)'}
										</button>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
