/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { useEffect, useRef } from 'react'

import dragonScean from '../assets/3d/stylized_dragon.glb'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export const Dragon = () => {
    const ref = useRef()
    const {scene ,animations} = useGLTF(dragonScean)
    const{actions }= useAnimations (animations,ref)
    useEffect(()=>{
        actions['Wing flaps'].play()
    },[actions])

    // useFrame(({ clock, camera }) => {
    //   // Update the Y position to simulate bird-like motion using a sine wave
    //   ref.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;
  
    //   // Check if the bird reached a certain endpoint relative to the camera
    //   if (ref.current.position.x > camera.position.x - 10) {
    //     // Change direction to backward and rotate the bird 180 degrees on the y-axis
    //     ref.current.rotation.y = Math.LN10;
    //   } else if (ref.current.position.x < camera.position.x + 10) {
    //     // Change direction to forward and reset the bird's rotation
    //     ref.current.rotation.y = 0;
    //   }
  
    //   // Update the X and Z positions based on the direction
    //   if (ref.current.rotation.y === 0) {
    //     // Moving forward
    //     ref.current.position.x -= 0.01;
    //     ref.current.position.z += 0.01;
    //   } else {
    //     // Moving backward
    //     ref.current.position.x += 0.01;
    //     ref.current.position.z -= 0.01;
    //   }
    // });

    
  return (
    <mesh scale={1000} rotation={[ 0, 3, 0]} position={[-5, 3, 0]} ref={ref}>
        <primitive object={scene} />
    </mesh>
  )
}
