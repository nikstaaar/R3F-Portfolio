import { OrbitControls } from '@react-three/drei'

export default function Experience()
{
    return <>

        <color args={[ '#695b5b' ]} attach="background"></color>

        <OrbitControls makeDefault />
        
        <mesh>
            <boxGeometry />
            <meshNormalMaterial />
        </mesh>

    </>
}