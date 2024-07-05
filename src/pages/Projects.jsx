/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import {projects} from '../data/projectinfo.js'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaArrowRightLong, FaGithub } from 'react-icons/fa6';
import { Footer } from '../components/Footer.jsx';
import { CursorFollower } from '../components/CursorFollower.jsx';


export const Projects = () => {
  
    
  return (
    
    <section  className='max-container '>
      
       <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        Throughout my journey as a developer, I've dedicated myself to continuous learning and improvement. Each project I've undertaken has been a stepping stone, enriching my skills and broadening my horizons. I'm passionate about sharing knowledge and fostering a collaborative environment. Whether you're a seasoned developer or just starting, I believe there's always something to learn from one another. Dive into my projects, share your insights, and let's build something amazing together.
      </p>
      <hr className='border-slate-200 mt-12'  />
      
      <div className='mt-12 flex flex-col'>
     
      <VerticalTimeline>
        {
          projects.map((project)=>(
            <VerticalTimelineElement
              key={project.id}
              date={project.date}
              iconStyle={{background:project.theme}}
              icon={
                <div className='flex justify-center items-center w-full h-full '>
                  <p className='text-xl font-bold text-white'>{project.id}</p>
                </div>}

              contentStyle={{
                borderBottom: "8px",
                borderStyle: "solid",
                borderBottomColor: project.base,
                boxShadow: "none",
              }}
            >
               <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {project.name}
                  </h3>
                  <p
                    className='text-black-500 font-medium '
                    style={{ margin: 0 }}
                  >
                   Tech:-<span className='text-black-500 font-normal text-sm'>{project.tech}</span> 
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  
                    <li
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {project.description}
                    </li>
               
                </ul>
                <div className='mt-5 flex items-center gap-4 font-poppins'>
                  <Link to={project.git}
                         target='_blank'
                        rel='noopener noreferrer'
                  >
                    <FaGithub className='text-2xl' />
                  </Link>

                <Link
                  to={project.link} 
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold flex items-center gap-2 text-blue-600 '
                >
                  Visit
                  <FaArrowRightLong className='text-lg'/>
                </Link>

              </div>


            </VerticalTimelineElement>
          ))
        }
      </VerticalTimeline>
      <hr className='border-slate-200 mt-6' />
      <div className='mt-6'>
        <p className='text-black-500 font-medium sm:font-bold flex-1 text-lg sm:text-xl text-center'>Discover more of my innovative projects on <span className='blue-gradient_text text-xl sm:text-2xl drop-shadow font-semibold  sm:font-bold'> <Link target='_blank' rel='noopener noreferrer' to={'https://github.com/544sourav'}>GitHub</Link></span> and get inspired!</p>
      </div>
     </div>
     

     <Footer/>
     <CursorFollower/>


    </section>
  )
}
