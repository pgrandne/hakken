'use client'

import { ConnectKitButton } from '../components/ConnectKitButton'
import { Game } from '../components/Game/Game'
import { useAccount, useNetwork } from 'wagmi'
import { M_PLUS_Rounded_1c } from 'next/font/google'
import { useState } from 'react'
import { ModalBridge, ModalFaucet, ModalSwap } from '../components/Modal'
import Image from 'next/image'
import { Raleway } from 'next/font/google'
import { polygonMumbai, sepolia } from 'wagmi/chains'

// If loading a variable font, you don't need to specify the font weight
const raleway = Raleway({
	weight: '400',
	subsets: ['latin'],
})

const mplus = M_PLUS_Rounded_1c({
	weight: ['500'],
	subsets: ['latin'],
	display: 'swap',
})

export function Page() {
	const { address, isConnected } = useAccount()
	const { chain } = useNetwork()
	const [modal, setModal] = useState({
		bridge: false,
		faucet: false,
		swap: false,
	})

	return (
		<>
			<div className='absolute  hover:animate-bounce '>
				<Image
					src='/images/ghosty.png'
					width={70}
					height={70}
					alt='Picture of the author'
				/>
			</div>

			{/* <  Image src = '../../public/images/ghosty.png'/> */}
			<h1
				className={`absolute w-screen top-3 text-5xl text-center text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-violet-300 ${mplus.className}`}
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
				(chain.id === sepolia.id || chain.id === polygonMumbai.id) ? (
					<Game setModal={setModal} />
				) : (
					<div className={`text-lg ${mplus.className}`}>
						Please Connect to play
					</div>
				)}
			</div>
			{address && modal.bridge && (
				<ModalBridge address={address} setModal={setModal} />
			)}
			{address && !modal.faucet && (
				<ModalFaucet address={address} setModal={setModal} />
			)}
			{address && modal.swap && (
				<ModalSwap address={address} setModal={setModal} />
			)}
		</>
	)
}

export default Page
