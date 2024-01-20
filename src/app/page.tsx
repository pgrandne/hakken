'use client'

import { ConnectKitButton } from '../components/ConnectKitButton'
import { Game } from '../components/Game/Game'
import { useAccount } from 'wagmi'
import { M_PLUS_Rounded_1c } from 'next/font/google'
import { useState } from 'react'
import { ModalBridge, ModalFaucet, ModalSwap } from '../components/Modal'

const mplus = M_PLUS_Rounded_1c({
	weight: ['900'],
	subsets: ['latin'],
	display: 'swap',
})

export function Page() {
	const { address, isConnected } = useAccount()
	const [modal, setModal] = useState({
		bridge: false,
		faucet: false,
		swap: false,
	})

	return (
		<>
			<h1 className='absolute w-screen top-3 text-7xl font-bold text-center text-red-700'>
				Hakken
			</h1>
			<div className='absolute top-3 right-3'>
				<ConnectKitButton theme='nouns' />
			</div>
			<div className='h-screen w-screen flex justify-center items-center'>
				{isConnected && address ? (
					<Game setModal={setModal} />
				) : (
					<div className={`text-lg ${mplus.className}`}>
						Please Connect to play
					</div>
				)}
			</div>
			{/* <br />
        <hr />
        <h2>Account</h2>
        <Account />
        <br />
        <hr />
        <h2>Balance</h2>
        <Balance />
        <br />
        <hr />
        <h2>Block Number</h2>
        <BlockNumber />
        <br />
        <hr />
        <h2>Read Contract</h2>
        <ReadContract />
        <br />
        <hr />
        <h2>Read Contracts</h2>
        <ReadContracts />
        <br />
        <hr />
        <h2>Read Contracts Infinite</h2>
        <ReadContractsInfinite />
        <br />
        <hr />
        <h2>Send Transaction</h2>
        <SendTransaction />
        <br />
        <hr />
        <h2>Send Transaction (Prepared)</h2>
        <SendTransactionPrepared />
        <br />
        <hr />
        <h2>Sign Message</h2>
        <SignMessage />
        <br />
        <hr />
        <h2>Sign Typed Data</h2>
        <SignTypedData />
        <br />
        <hr />
        <h2>Token</h2>
        <Token />
        <br />
        <hr />
        <h2>Watch Contract Events</h2>
        <WatchContractEvents />
        <br />
        <hr />
        <h2>Watch Pending Transactions</h2>
        <WatchPendingTransactions />
        <br />
        <hr />
        <h2>Write Contract</h2>
        <WriteContract />
        <br />
        <hr />
        <h2>Write Contract (Prepared)</h2>
        <WriteContractPrepared /> */}
			{/* </Connected> */}
			{address && modal.bridge && (
				<ModalBridge address={address} Modal={setModal} />
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
