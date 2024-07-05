import { Html } from "@react-three/drei"

export const Loader = () => {
  return (
    <Html>
        <div className="grid place-content-center place-items-center">
        <div className="loader"></div>
        <div className="blue-gradient_text text-xl">Loading...</div>
    </div>
    </Html>
   
  )
}
