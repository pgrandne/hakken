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
	setModal: Dispatch<
		SetStateAction<{
			bridge: boolean
			faucet: boolean
			reward: boolean
		}>
	>
}) => {
	const ghostRef: MutableRefObject<Object3D<Object3DEventMap> | null> =
		useRef(null)
	const [lastPosition, setLastPosition] = useState<string | null>(null)

	useFrame(() => {
		if (ghostRef.current) {
			const ghostObject: {
				matrixWorld?: Matrix4
				position?: Vector3
			} = ghostRef.current

			if (ghostObject.matrixWorld && ghostObject.position) {
				const position = new Vector3()
				position.setFromMatrixPosition(ghostObject.matrixWorld)
				console.log(position.x.toFixed(1))
				if (!lastPosition || position.x.toFixed(1) !== lastPosition) {
					if (
						position.x.toFixed(1) === '1.4' &&
						position.z.toFixed(1) === '1.3'
					) {
						setModal((prevModal) => ({
							...prevModal,
							faucet: true,
						}))
					}

					if (
						position.x.toFixed(1) === '-1.1' &&
						position.z.toFixed(1) === '-6.0'
					) {
						setModal((prevModal) => ({
							...prevModal,
							bridge: true,
						}))
					}

					if (position.x.toFixed(1) === '1.7') {
						setModal((prevModal) => ({
							...prevModal,
							reward: true,
						}))
					}
					setLastPosition(position.x.toFixed(1))
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
				src='/models/ghosty.glb'
			/>
		</Ecctrl>
	)
}
