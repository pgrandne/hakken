import { useFrame, useThree } from '@react-three/fiber'
import {
	Dispatch,
	MutableRefObject,
	SetStateAction,
	useRef,
	useState,
} from 'react'
import { Gltf } from '@react-three/drei'
import { Matrix4, Object3D, Object3DEventMap, Vector3 } from 'three'
// @ts-ignore
import Ecctrl from 'ecctrl'

export const Ghost = ({
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
				matrixWorld?: Matrix4
				position?: Vector3
			} = ghostRef.current
			if (ghostObject.matrixWorld && ghostObject.position) {
				const position = new Vector3()
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
		<Ecctrl camInitDis={3}>
			<Gltf
				ref={ghostRef}
				castShadow
				receiveShadow
				scale={0.315}
				position={[0, -0.55, 0]}
				src='/models/ghost_w_tophat-transformed.glb'
			/>
		</Ecctrl>
	)
}
