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
        '/skybox/zeus_ft.jpg',
        '/skybox/zeus_bk.jpg',
        '/skybox/zeus_up.jpg',
        '/skybox/zeus_dn.jpg',
        '/skybox/zeus_rt.jpg',
        '/skybox/zeus_lf.jpg',
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
