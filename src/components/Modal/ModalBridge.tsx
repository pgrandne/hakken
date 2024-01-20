import { Dispatch, SetStateAction, useState } from 'react'
import Image from 'next/image'

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
	const [isButtonDisabled, setButtonDisabled] = useState(true)

	const handleAccept = async () => {
		setButtonDisabled(false)
	}

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
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									stroke='#000000'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
									className='feather feather-x'
								>
									<line x1='18' y1='6' x2='6' y2='18'></line>
									<line x1='6' y1='6' x2='18' y2='18'></line>
								</svg>
							</div>
						</div>
						<div className='flex h-auto w-full items-center justify-center rounded py-4 px-2 flex-col text-center text-gray-500'>
							<div className='bg-custom flex  justify-center items-center flex-col p-4 rounded-md '>
								<Image
									src='/images/gho.png'
									width={50}
									height={50}
									alt='Picture of the author'
								/>
								<p className='text-2xl text-violet-200 pt-2 font-bold'>
									100 GHO
								</p>
							</div>

							<div className='flex items-center p-4 gap-2'>
								<span className='font-bold'>Sepolia</span>
								<Image
									src='/images/arrow3.gif'
									width={25}
									height={25}
									alt='Picture of the author'
								/>{' '}
								<span className='font-bold'>Mumbai</span>
							</div>
							<div className='flex justify-center p-4 gap-6 w-full'>
								<button className='bg-custom py-2 px-10 rounded-md text-violet-200'>
									Approve
								</button>
								<button
									onClick={handleAccept}
									className={`py-2 px-10 rounded-md text-violet-200 ${
										isButtonDisabled ? 'bg-gray-600' : 'bg-custom'
									}`}
								>
									Bridge
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
