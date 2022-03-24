import React, { Suspense } from "react"
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Dollar from "../Dollar/Dollar";
import { useNavigate } from "react-router-dom";
import { CubeTextureLoader } from 'three'

function SkyBox() {
    const { scene } = useThree();
    const loader = new CubeTextureLoader();
    const texture = loader.load([
        '/skybox//river_walk_1/pix/posx.png', // front
        '/skybox//river_walk_1/pix/negx.png', // back
        '/skybox//river_walk_1/pix/posy.png', // up
        '/skybox//river_walk_1/pix/negy.png', // down 
        '/skybox//river_walk_1/pix/posz.png', // right
        '/skybox//river_walk_1/pix/negz.png', // left
    ])
    scene.background = texture;
    return null
}

export default function ThreeCanvas(props) {
    const navigate = useNavigate()
    return (
        <Canvas camera={{ position: [100, 0, 0] }} >
            <SkyBox />
            <ambientLight intensity={0.3} />
            <spotLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
                <Dollar onClick={() => navigate('auth')} />
                <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={0.5} enableDamping={true} />
            </Suspense>
        </Canvas>
    )
}
