/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import  { Suspense, useState } from 'react'

import { ContactForm } from '../components/ContactForm'
import { Canvas } from '@react-three/fiber'
import { Loader } from '../components/Loader'
import { ContactDragon1 } from '../models/ContactDragon1'
import { Footer } from '../components/Footer'



export const Contact = () => {
    const [currentAnimation, setCurrentAnimation] = useState("Idle");
    
    
    
    
  return (
    
    <div  className='max-container'>
        
        <div className='flex flex-col lg:flex-row'>
        <div className='  min-w-[50%]' >
            <p className=' sm:text-4xl text-3xl  sm:leading-snug font-poppins blue-gradient_text font-semibold drop-shadow text-center'>Let's work to geather</p>
            <ContactForm setCurrentAnimation={setCurrentAnimation}/>
         </div>

         <div className='w-full'>
            <Canvas
            camera={{
                position:[0,0,5],
                fov: 75,
                near:0.1,
                far:1000
            }}>
                <directionalLight intensity={2.5} position={[0,0,1]}/>
                <Suspense fallback={<Loader/>}>
                  <ContactDragon1 currentAnimation={currentAnimation}/>
                </Suspense>
                
            </Canvas>
         </div>

        </div>
        <hr className='border-slate-200 mt-6' />
        <Footer/>
       
            
    </div>
  )
}
