import React, {useRef} from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

export default function Dollar({...props}) {
    const ref = useRef()
    const { nodes, materials } = useGLTF('/dollar/scene-transformed.glb')
    

    useFrame((state)=>{
        ref.current.position.y = Math.sin(state.clock.elapsedTime*2) * 2
        })
    
    
    return (
      
        <group ref={ref} {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 1, 0]}>
            <group position={[0, 9.5, 0]}>
              <mesh geometry={nodes['model-material'].geometry} material={materials['model-material']} />
            </group>
          </group>
        </group>
      </group>
      
    )
}

useGLTF.preload('/dollar/scene-transformed.glb')