import { Html } from "@react-three/drei"

export const Loader = () => {
  return (
    <Html>
        <div className="flex items-center justify-center">
        <div className="loader"></div>
        <div className="blue-gradient_text text-xl">Loading...</div>
    </div>
    </Html>
   
  )
}
