/* eslint-disable react/no-unescaped-entities */



import { Footer } from "../components/Footer";
import {  skills } from "../data/index";
import { CursorFollower } from "../components/CursorFollower";



export  const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text  '>
        Hello, I'm {" "} 
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}Sourav Sharma  
        </span>{"  "}
        {/* <span><img src={dragon1} alt="" width={80} loading="lazy" className=' transform -scale-x-100 2 ml-3' /></span> */}
        
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        A dedicated and ambitious student, I am continuously expanding my knowledge and skills in web development
        </p>
      </div>

      <div className='py-10 flex flex-col'>
      <CursorFollower/>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap justify-center sm:justify-start  gap-y-12 gap-x-24 sm:gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  loading="lazy"
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className='border-slate-200' />

      <Footer/>
    </section>
  );
};

