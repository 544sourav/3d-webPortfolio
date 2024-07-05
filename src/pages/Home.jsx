/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber"
import { Island } from "../models/Island"
import { Suspense, useState } from "react"
import { Loader } from "../components/Loader"
import { Sky } from "../components/Sky"
import { HomeInfo } from "../components/HomeInfo"
import { Html } from "@react-three/drei"




export const Home = () => {
    const [ isRotating , setIsRotating]= useState(false)
    const [currentStage, setCurrentStage] = useState(1);
    const [loading, setLoading] =useState(true)
    const adjustUslandForScreenSize=()=>{
        let screenScale = null;
        let ScreenPosition=[1,1,10];
        let rotation = [0.1,4.7,0]

        if(window.innerWidth<768){
            screenScale = [0.9,0.9,0.9];
        }
        else{
            screenScale=[.01,.01,.01];
        }
        return [ screenScale,ScreenPosition,rotation]

    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    const [islandScale,islandPositon,islandRot] = adjustUslandForScreenSize();
    return (
      <div className="w-full h-screen relative">
        <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
          {(!loading && currentStage) && <HomeInfo currentStage={currentStage} />}
        </div>
        <Canvas className={`w-full h-screen bg-transparent ${isRotating?'cursor-grabbing':'cursor-grab'}`}
        camera={{near:.9,far:1000}}>
            <Suspense fallback={<Loader/>} >
            <Html>
              
            </Html>
            <directionalLight position={[1, 1, 1]} intensity={3.5}/>
            <pointLight position={[10, 5, 10]} intensity={2} />
            <spotLight  position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}/>
            <hemisphereLight
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={1.2}/>
            <ambientLight intensity={.5}/>
            {/* <Dragon/> */}
            <Sky isRotating={isRotating} />
            <Island 
            positon={islandPositon}
            scale={islandScale}
            rotation = {islandRot}
            isRotating = {isRotating}
            setIsRotating ={setIsRotating}
            setCurrentStage={setCurrentStage}
            />

            </Suspense>
            

        </Canvas>
      </div>
    )
  }
  