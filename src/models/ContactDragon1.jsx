/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: HallowDragon (https://sketchfab.com/HallowDragon)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/dragon-8d79617919074f9e94abc3d2f44d6379
Title: Dragon
*/

import  { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import dragon1 from '../assets/3d/dragon.glb'

export function ContactDragon1({currentAnimation,...props}) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(dragon1)
  const { actions } = useAnimations(animations, group)
  useEffect(()=>{
    Object.values(actions).forEach((action) => action.stop());
    if(actions[currentAnimation]){
        actions[currentAnimation].play()
    }
   
},[actions,currentAnimation])
  return (
    <group ref={group} {...props} dispose={null} position={[0,-1,0]} rotation={[-1.5,0,2]} scale={2}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Sketchfab_model_0" rotation={[-Math.PI / 2, 0, Math.PI]} scale={20.91}>
                <group name="drgonfbx_1" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                  <group name="Object_2_2">
                    <group name="RootNode_3">
                      <group name="Object_4_4">
                        <group name="GLTF_created_0">
                          <primitive object={nodes.GLTF_created_0_rootJoint} />
                          <skinnedMesh
                            name="Object_95"
                            geometry={nodes.Object_95.geometry}
                            material={materials.BossLeiLong}
                            skeleton={nodes.Object_95.skeleton}
                          />
                          <group name="Object_7_7_correction">
                            <group name="Object_7_7" />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/dragon.glb')
