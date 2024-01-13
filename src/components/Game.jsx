import { Gltf, Stats, OrbitControls, Circle, KeyboardControls } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import Ecctrl from 'ecctrl'
import { Physics, RigidBody } from '@react-three/rapier'
import { Suspense } from 'react';

export function Game() {
  const keyboardMap = [
    { name: 'forward',  keys: ['ArrowDown', 'KeyS']},
    { name: 'backward', keys: ['ArrowUp', 'KeyW']  },
    { name: 'leftward', keys: ['ArrowRight', 'KeyD']},
    { name: 'rightward', keys: ['ArrowLeft', 'KeyA']  },
    { name: 'jump', keys: ['Space'] },
    { name: 'run', keys: ['Shift'] },
  ]
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Canvas shadows onPointerDown={(e) => e.target.requestPointerLock()}>
       <directionalLight intensity={0.7} castShadow shadow-bias={-0.0004} position={[-20, 20, 20]}>
      <orthographicCamera attach="shadow-camera" args={[-20, 20, 20, -20]} />
      </directionalLight>
      <ambientLight intensity={0.2} />
  <Physics timeStep="vary">
    <KeyboardControls map={keyboardMap}>
      {/* <Controller maxVelLimit={5}> */}
      <Ecctrl camInitDis= {4} >
        <Gltf castShadow receiveShadow scale={0.315} position={[0, -0.55, 0]} src="/models/ghost_w_tophat-transformed.glb" />
        </Ecctrl>
      {/* </Controller> */}
    </KeyboardControls>
    <RigidBody type="fixed" colliders="trimesh">
        <Gltf castShadow receiveShadow position={[0,-2,2]} scale={.8} src="/models/japanese_street_at_night_s.glb" />
     </RigidBody>
    </Physics> 
</Canvas>
</Suspense>
  )



}