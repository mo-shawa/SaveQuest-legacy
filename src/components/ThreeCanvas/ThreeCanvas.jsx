import React, { Suspense, useRef } from "react"
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import Dollar from "../Dollar/Dollar";

export default function ThreeCanvas() {
    return (
        <Canvas camera={{position: [100,0,0]}} >
            <ambientLight intensity={0.3}/>
            <spotLight position={[10,10,10]} />
            <Suspense fallback={null}>
            <Dollar />

            <OrbitControls />
            </Suspense>
      </Canvas>
    )
}
