import { Gltf, Stats, OrbitControls, Circle, KeyboardControls } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import Controller from 'ecctrl'
import { Physics, RigidBody } from '@react-three/rapier'
import { Suspense } from 'react';

export function Game() {
  const keyboardMap = [
    { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
    { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
    { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
    { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
    { name: 'jump', keys: ['Space'] },
    { name: 'run', keys: ['Shift'] },
  ]

  return (
    // <Canvas camera={{ position: [-0.5, 1, 2] }} shadows>
    //   <directionalLight position={[3.3, 1.0, 4.4]} intensity={3} castShadow />
    //   <primitive
    //     object={gltf.scene}
    //     position={[0, 1, 0]}
    //     children-0-castShadow
    //   />
    //   <OrbitControls target={[0, 1, 0]} />
    //   <Stats />
    // </Canvas>

    <Suspense fallback={<div>Loading...</div>}>
      <Canvas shadows onPointerDown={(e) => e.target.requestPointerLock()}>
        <directionalLight intensity={0.7} castShadow shadow-bias={-0.0004} position={[-20, 20, 20]}>
      <orthographicCamera attach="shadow-camera" args={[-20, 20, 20, -20]} />
      </directionalLight>
      <ambientLight intensity={0.2} />
  <boxGeometry args={[1, 1, 1]} />
  <Physics timeStep="vary">
    <KeyboardControls map={keyboardMap}>
      <Controller maxVelLimit={5}>
        <Gltf castShadow receiveShadow scale={0.315} position={[0, -0.55, 0]} src="/models/ghost_w_tophat-transformed.glb" />
      </Controller>
    </KeyboardControls>
    <RigidBody type="fixed" colliders="trimesh">
        <Gltf castShadow receiveShadow rotation={[0, 0,0]} scale={1} src="/models/japanese_street_at_night_s.glb" />
    </RigidBody>
    </Physics>
</Canvas>
</Suspense>
  )



}