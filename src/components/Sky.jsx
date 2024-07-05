/* eslint-disable react/prop-types */
import { useGLTF } from "@react-three/drei"


import skyPlane from '../assets/3d/sky.glb'
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
export const Sky = ({isRotating}) => {
    const Sky = useGLTF(skyPlane)
    const skyRef = useRef()

    useFrame((_,delta)=>{
      if(isRotating){
       // skyRef.current.rotation.x += 0.25*delta
        skyRef.current.rotation.y += 0.15*delta
        //skyRef.current.rotation.z += 0.25*delta
      }
    })
  return (
    <mesh ref={skyRef}>
        <primitive object={Sky.scene}/>
    </mesh>
  )
}
