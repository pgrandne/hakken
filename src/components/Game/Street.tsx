import { Box, Gltf } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

export const InvisibleBox = () => {
	return (
		<>
			<Box args={[2, 2.5, 0.1]} position={[0, -0.55, 1.6]}>
				<meshStandardMaterial transparent opacity={0} attach='material' />
			</Box>
			<Box args={[2, 2.5, 5]} position={[3, -0.55, -6]}>
				<meshStandardMaterial transparent opacity={0} attach='material' />
			</Box>
			<Box args={[0.5, 0.5, 0.5]} position={[2, -1, 1.5]}>
				<meshStandardMaterial opacity={0} attach='material' />
			</Box>
		</>
	)
}

export const Street = () => {
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
		/>
	)
}
