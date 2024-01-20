'use client'

import { ConnectKitButton } from '../components/ConnectKitButton'
import { Game } from '../components/Game/Game'
import { useAccount, useNetwork } from 'wagmi'
import { useState } from 'react'
import { ModalBridge, ModalFaucet, ModalReward } from '../components/Modal'
import Image from 'next/image'
import { Raleway } from 'next/font/google'
import { goerli, sepolia } from 'wagmi/chains'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const raleway = Raleway({
	weight: '400',
	subsets: ['latin'],
})

export default function Home() {
	const { address, isConnected } = useAccount()
	const { chain } = useNetwork()
	const [modal, setModal] = useState({
		bridge: false,
		faucet: false,
		reward: false,
	})

	return (
		<>
			<div className={`absolute ${!isConnected ? 'top-4 animate-bounce' : ''}`}>
				<Image
					src='/images/ghosty.png'
					width={70}
					height={70}
					alt='Picture of the author'
				/>
			</div>
			<h1
				className={`absolute w-screen top-3 text-5xl text-center text-transparent bg-clip-text bg-gradient-to-r from-black to-violet-300 ${raleway.className}`}
			>
				HAKKEN 発見
			</h1>
			<div className='absolute top-3 right-3'>
				<ConnectKitButton theme='nouns' />
			</div>

			<div className='h-screen w-screen flex justify-center items-center'>
				{isConnected &&
				address &&
				chain &&
				(chain.id === sepolia.id || chain.id === goerli.id) ? (
					<Game setModal={setModal} />
				) : (
					<div className={`text-lg text-white font-semibold`}>
						Please Connect to play
					</div>
				)}
			</div>
			{address && modal.bridge && (
				<ModalBridge address={address} setModal={setModal} />
			)}
			{address && modal.faucet && (
				<ModalFaucet address={address} setModal={setModal} />
			)}
			{address && modal.reward && (
				<ModalReward address={address} setModal={setModal} />
			)}
			<ToastContainer position='bottom-right' />
		</>
	)
}
