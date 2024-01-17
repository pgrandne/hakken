import {
	Gltf,
	Box,
	OrbitControls,
	Circle,
	KeyboardControls,
} from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Physics, RigidBody } from '@react-three/rapier'
import {
	Dispatch,
	MutableRefObject,
	SetStateAction,
	Suspense,
	useEffect,
	useRef,
	useState,
} from 'react'
import * as THREE from 'three'
import { Object3D, Object3DEventMap } from 'three'
// import { PointerEvents } from '@react-three/xr';
// @ts-ignore
import Ecctrl from 'ecctrl'

const InvisibleBox = () => {
	return (
		<>
			<Box args={[2, 2.5, 0.1]} position={[0, -0.55, 1.6]}>
				<meshStandardMaterial transparent opacity={0} attach='material' />
			</Box>
			<Box args={[2, 2.5, 5]} position={[3, -0.55, -6]}>
				<meshStandardMaterial transparent opacity={0} attach='material' />
			</Box>
		</>
	)
}

const Ghost = ({
	setModal,
}: {
	setModal: Dispatch<SetStateAction<boolean>>
}) => {
	const ghostRef: MutableRefObject<Object3D<Object3DEventMap> | null> =
		useRef(null)
	const [timeExtension, setTimeExtension] = useState(false)
	const { gl } = useThree()

	// Désactiver les contrôles de la souris
	gl.domElement.style.pointerEvents = 'none'

	useFrame(() => {
		if (ghostRef.current) {
			const ghostObject: {
				matrixWorld?: THREE.Matrix4
				position?: THREE.Vector3
			} = ghostRef.current
			if (ghostObject.matrixWorld && ghostObject.position) {
				const position = new THREE.Vector3()
				position.setFromMatrixPosition(ghostObject.matrixWorld)
				if (
					!timeExtension &&
					position.x.toFixed(1) === '1.4' &&
					position.z.toFixed(1) === '1.3'
				) {
					setModal(true)
					ghostObject.position.set(0, -0.55, 0)
				}

				if (
					!timeExtension &&
					position.x.toFixed(1) === '-1.1' &&
					position.z.toFixed(1) === '-6.0'
				) {
					setModal(true)
					ghostObject.position.set(0, -0.55, 0)
				}

				if (!timeExtension && position.x.toFixed(1) === '1.6') {
					setModal(true)
					ghostObject.position.set(0, -0.55, 0)
				}
			}
		}
	})
	return (
		<Ecctrl
			camInitDis={3}
			onPointerUp={() => {}}
			onPointerDown={() => {}}
			onClick={() => {}}
			onPointerMissed={() => {}}
		>
			<Gltf
				ref={ghostRef}
				castShadow
				receiveShadow
				scale={0.315}
				position={[0, -0.55, 0]}
				src='/models/ghost_w_tophat-transformed.glb'
				onClick={() => {}}
				onPointerMissed={() => {}}
				onPointerUp={() => {}}
				onPointerDown={() => {}}
			/>
		</Ecctrl>
	)
}

const Street = () => {
	const { gl } = useThree()

	// Désactiver les contrôles de la souris
	gl.domElement.style.pointerEvents = 'none'
	return (
		<Gltf
			castShadow
			receiveShadow
			position={[0, -2, 2]}
			scale={0.8}
			src='/models/japanese_street_at_night_s.glb'
			onClick={() => {}}
			onPointerMissed={() => {}}
			onPointerUp={() => {}}
			onPointerDown={() => {}}
		/>
	)
}

export function Game({
	modal,
	setModal,
}: {
	modal: boolean
	setModal: Dispatch<SetStateAction<boolean>>
}) {
	const keyboardMap = [
		{ name: 'forward', keys: ['ArrowDown', 'KeyS'] },
		{ name: 'backward', keys: ['ArrowUp', 'KeyW'] },
		{ name: 'leftward', keys: ['ArrowRight', 'KeyD'] },
		{ name: 'rightward', keys: ['ArrowLeft', 'KeyA'] },
		{ name: 'jump', keys: ['Space'] },
		{ name: 'run', keys: ['Shift'] },
	]

	const canvasRef = useRef<any>()

	useEffect(() => {
		if (canvasRef.current) {
			const { gl } = canvasRef.current

			// Désactiver les contrôles de la souris
			gl.domElement.style.pointerEvents = 'none'
		}
	}, [canvasRef.current])

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<div className='h-[80%] w-[80%] rounded-md border-8 border-red-950 bg-red-950 cursor-not-allowed'>
				<Canvas
					shadows
					onClick={() => {}}
					onPointerUp={() => {}}
					onPointerDown={() => {}}
				>
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
							onClick={() => {}}
							onPointerMissed={() => {}}
							onPointerUp={() => {}}
							onPointerDown={() => {}}
						/>
					</directionalLight>
					<ambientLight intensity={0.2} />
					<Physics timeStep='vary'>
						<KeyboardControls map={keyboardMap}>
							{/* <Controller maxVelLimit={5}> */}
							{!modal && <Ghost setModal={setModal} />}

							{/* </Controller> */}
						</KeyboardControls>
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
