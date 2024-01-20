import { KeyboardControls, useProgress } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics, RigidBody } from '@react-three/rapier'
import { Dispatch, SetStateAction, Suspense, useEffect, useState } from 'react'
import { Ghost } from './Ghost'
import { InvisibleBox, Street } from './Street'
import { Loading } from './Loading'

export function Game({
	setModal,
}: {
	setModal: Dispatch<
		SetStateAction<{
			bridge: boolean
			faucet: boolean
			swap: boolean
		}>
	>
}) {
	const keyboardMap = [
		{ name: 'forward', keys: ['ArrowDown', 'KeyS'] },
		{ name: 'backward', keys: ['ArrowUp', 'KeyW'] },
		{ name: 'leftward', keys: ['ArrowRight', 'KeyD'] },
		{ name: 'rightward', keys: ['ArrowLeft', 'KeyA'] },
		{ name: 'jump', keys: ['Space'] },
		{ name: 'run', keys: ['Shift'] },
	]
	const { progress } = useProgress()

	return (
		<Suspense
			fallback={
				<button
					type='button'
					className='inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-red-800 transition ease-in-out duration-150 cursor-not-allowed'
					disabled
				>
					<Loading />
					Processing... {progress.toFixed(2)}%{' '}
				</button>
			}
		>
			<div
				className={`h-[80%] w-[80%] rounded-md ${
					progress === 100 ? 'border-8 border-red-700 bg-red-950' : ''
				}`}
			>
				<Canvas shadows>
					<directionalLight
						intensity={6}
						color='red'
						castShadow
						shadow-bias={-0.0004}
						position={[0, 10, 10]}
					>
						<orthographicCamera
							attach='shadow-camera'
							args={[-20, 20, 20, -20]}
						/>
					</directionalLight>
					<ambientLight intensity={0.2} />
					<Physics timeStep='vary'>
						{/* <KeyboardControls map={keyboardMap}>
							<Ghost setModal={setModal} />
						</KeyboardControls> */}
						<RigidBody type='fixed' colliders='trimesh'>
							<Street />
							<InvisibleBox />
						</RigidBody>
					</Physics>
				</Canvas>
			</div>
		</Suspense>
	)
}
