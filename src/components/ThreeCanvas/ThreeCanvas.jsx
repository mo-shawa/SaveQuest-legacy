import React, { Suspense } from "react"
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Dollar from "../Dollar/Dollar";
import { useNavigate } from "react-router-dom";

export default function ThreeCanvas(props) {
    const navigate = useNavigate()
    return (
        <Canvas camera={{ position: [100, 0, 0] }} >
            <ambientLight intensity={0.3} />
            <spotLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
                <Dollar onClick={() => navigate('auth')} />
                <OrbitControls />
            </Suspense>
        </Canvas>
    )
}
