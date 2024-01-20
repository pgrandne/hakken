import { Dispatch, SetStateAction } from 'react'

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
	return (
		<>
			<div
				id='modal'
				className='fixed inset-0 bg-gray-900 opacity-80 z-50'
			></div>

			<div className='fixed inset-0 flex items-center justify-center z-50'>
				<div className='h-auto w-11/12 rounded-md bg-white  p-5 md:w-1/2 '>
					<div className='flex h-auto w-full flex-col '>
						<div className='flex h-auto w-full items-center justify-center'>
							<div className='flex h-auto w-10/12 items-center justify-center py-3 text-2xl font-bold'>
								Modal Reward
							</div>
							<div
								onClick={() => {
									setModal((prevModal) => ({
										...prevModal,
										reward: false,
									}))
								}}
								className='flex h-auto w-1/12 cursor-pointer justify-center'
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
						<div className='flex h-auto w-full items-center justify-center rounded bg-gray-200 py-10 px-2 text-center text-gray-500'>
							This is a text inside the modal. You can add your content here.
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
