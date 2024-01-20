import { Box, Circle, Gltf, Plane, Text, useTexture } from "@react-three/drei";
import { useThree, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useControls } from "leva";

const chainlink = new TextureLoader().load("/images/chainlink.png");

// const { debug, image, scale } = useControls({
// 	debug: false,
// 	image: { image: "/images/gho.png" },
// 	scale: { value: 0.4, min: 0, max: 2 },
// });
export const InvisibleBox = () => {
	const texture = useLoader(TextureLoader, "/images/gho.png");
	const chainlink = useLoader(TextureLoader, "/images/chainlink.png");

	return (
		<>
			<Box args={[2, 2.5, 0.1]} position={[0, -0.55, 1.6]}>
				<meshStandardMaterial transparent opacity={0} attach="material" />
			</Box>
			<Box args={[2, 2.5, 5]} position={[3, -0.55, -6]}>
				<meshStandardMaterial transparent opacity={0} attach="material" />
			</Box>
			<Box args={[0.3, 0.5, 0.5]} position={[2, -1, 2]}>
				<meshStandardMaterial opacity={0} attach="material" />
			</Box>

			<Circle args={[0.4, 64]} position={[0.66, 0.8, 1.8]}>
				<meshStandardMaterial map={texture} color="white" attach="material" />
			</Circle>
			<Plane args={[0.25, 0.25]} position={[-0.74, -1.55, -4.9]}>
				<meshStandardMaterial map={chainlink} color="white" opacity={0.7}attach="material" />
			</Plane>

			{/* <Text
				position={[0.6, 0.7, 1.8]} // Remplacez x, y, z par les coordonnées où vous voulez placer le texte
				color="white" // Couleur du texte
				fontSize={0.18} // Taille du texte
				maxWidth={10} // Largeur maximale du texte
				lineHeight={1} // Hauteur de ligne du texte
				letterSpacing={0.02} // Espacement des lettres
				textAlign={"left"} // Alignement du texte
				font={"/path/to/font.ttf"} // Chemin d'accès à la police de caractères
				anchorX="center" // Alignement horizontal
				anchorY="middle" // Alignement vertical
			>
				Hakken
			</Text> */}
		</>
	);
};

export const Street = () => {
	const { gl } = useThree();

	// Désactiver les contrôles de la souris
	gl.domElement.style.pointerEvents = "none";
	return (
		<Gltf
			castShadow
			receiveShadow
			position={[0, -2, 2]}
			scale={0.8}
			src="/models/japon-street1.glb"
		/>
	);
};
