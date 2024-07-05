import  { useEffect, useState } from 'react'

export const CursorFollower = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
  
    const handleMouseMove = (e) => {
      setPosition({  x: e.clientX, 
        y: e.clientY});
    };
  
    useEffect(() => {
      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
  return (
    <div className= " hidden lg:block follower w-4 h-4 rounded-full  bg-gradient-to-r from-[#00c6ff] to-[#0072ff] fixed z-50 text-black-500" style={{ top: position.y+15, left: position.x+15 } }> </div>
  )
}
