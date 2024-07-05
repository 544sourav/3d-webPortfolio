/* eslint-disable react/prop-types */
import { HomeInfoData } from '../data/homeinfo'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";
import dragon from "../assets/3d/littleDragon.gif"


export const HomeInfo = ({currentStage}) => {
    
  return (
    <div>
      {HomeInfoData.map((data) => {
        if (currentStage === data.id) {
          return (
            <div key={data.id} className='info-box'>
                <img src={dragon} alt="" width={50}  loading="lazy"className='absolute transform -scale-x-100 -top-9 -left-5 -rotate-12 ' />
              <p className='font-medium sm:text-xl text-center'>
                {data.desc}
              </p>
              {
                data.id===1 &&(<p className='text-xs font-thin underline'>Grab & rotate</p>)
              }
              {data.btnText && data.path && (
                <Link to={data.path} 
                className='neo-brutalism-blue neo-btn'>
                  {data.btnText}
                  <FaArrowRightLong/>
                </Link>
              )}
            </div>
          );
        }
        return null; // Render nothing if currentStage doesn't match data.id
      })}
    </div>
  )
}
