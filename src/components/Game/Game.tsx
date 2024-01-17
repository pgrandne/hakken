import { KeyboardControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics, RigidBody } from '@react-three/rapier'
import { Dispatch, SetStateAction, Suspense, useEffect, useRef } from 'react'
import { Ghost } from './Ghost'
import { InvisibleBox, Street } from './Street'

export function Game({
	modal,
	setModal,
}: {
	modal: boolean
	setModal: Dispatch<SetStateAction<boolean>>
}) {
	const keyboardControlsRef = useRef(null)
	const keyboardMap = [
		{ name: 'forward', keys: ['ArrowDown', 'KeyS'] },
		{ name: 'backward', keys: ['ArrowUp', 'KeyW'] },
		{ name: 'leftward', keys: ['ArrowRight', 'KeyD'] },
		{ name: 'rightward', keys: ['ArrowLeft', 'KeyA'] },
		{ name: 'jump', keys: ['Space'] },
		{ name: 'run', keys: ['Shift'] },
	]

	// const noKeyboard: { name: string; keys: [] }[] = []

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<div className='h-[80%] w-[80%] rounded-md border-8 border-red-950 bg-red-950 cursor-not-allowed'>
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
						{!modal ? (
							<KeyboardControls map={keyboardMap}>
								<Ghost setModal={setModal} />
							</KeyboardControls>
						) : (
							<Ghost setModal={setModal} />
						)}
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
