/* eslint-disable react/prop-types */
import  { useEffect } from 'react'
import { apiConnector } from '../utils/apiConnector'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'




export const ContactForm = ({setCurrentAnimation}) => {
    const handleFocus = () => setCurrentAnimation("Walk");
    const handleBlur = () => setCurrentAnimation("Idle");
    

    

    const {
        register,
        handleSubmit,
        reset,
        formState:{errors, isSubmitSuccessful}
    }= useForm()
    
    

    const submitContactForm= async(data)=>{
        setCurrentAnimation("Roar/Angry");
        
        var formData = new FormData();
        formData.append('service_id', import.meta.env.VITE_SERVICE_ID);
        formData.append('template_id', import.meta.env.VITE_TEMPLATE_ID);
        formData.append('user_id', import.meta.env.VITE_USER_ID);
        formData.append("firstname", data.firstname)
        formData.append("lastname", data.lastname)
        formData.append("email", data.email)
        formData.append("contactnumber", data.contactnumber)
        formData.append("message", data.message)
           // console.log("form data",import.meta.env.VITE_API)

        const toastId = toast.loading("sending...")
        try{
            
            // eslint-disable-next-line no-unused-vars
            const response=await apiConnector("POST",import.meta.env.VITE_API,formData)

            //console.log(response)
            
                toast.success("sent")
           
            
        }
        catch(error){
                //console.log("Error-",error)
                toast.error("there is an error")
        }
        toast.dismiss(toastId)
        setTimeout (()=>{
            setCurrentAnimation("Idle");
        },3000)
        
    }

    useEffect(
        ()=>{
            if(isSubmitSuccessful){
                reset({
                    email:"",
                    firstname:"",
                    lastname:"",
                    message:"",
                    contactnumber:"",

                })
            }
        },[reset,isSubmitSuccessful]
    )
  return (
    <div className='grid place-items-center mt-10'>

            <form onSubmit={handleSubmit(submitContactForm)}  className="flex flex-col text-[#00c6ff] font-poppins gap-y-4 w-[80%]" >

            {/* first name and lastname */}
    
            <div className='flex sm:flex-row flex-col gap-5 w-full'>
    
                 {/* firstName */}
    
                 <label>
                            <p className="mb-1  text-[0.875rem] leading-[1.375rem] ">
                            First Name <span className="text-red-600 text-sm">*</span>
                            </p>
                            <input
                            
                            type="text"
                            name="firstname"
                            id="firstname"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            placeholder="Sourav"
                            style={{
                                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                            }}
                            className="rounded-lg bg-white p-3 text-[16px] leading-[24px] text-black   focus:outline-none w-full !pr-10"
                            {
                                ...register("firstname",{required:true})
                            }
                            />
                            {
                                errors.firstname&&(
                                    <span className="-mt-1 text-[12px] text-blue-400">
                                        please enter your name
                                    </span>
                                )
                            }
                           
                  </label>
    
                 {/* lastName */}
    
                  <label>
                            <p className="mb-1 text-[0.875rem] leading-[1.375rem] ">
                            Last Name 
                            </p>
                            <input
                            
                            type="text"
                            name="lastname"
                            id="lastname"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            placeholder="Sharma"
                            style={{
                                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                            }}
                            className="rounded-lg text-black bg-white p-3 text-[16px] leading-[24px]    focus:outline-none w-full !pr-10"
                            {
                                ...register("lastname")
                            }
                            />
                            {
                                errors.lastname&&(
                                    <span>
                                        please enter your name
                                    </span>
                                )
                            }   
                  </label>
            </div>
    
             {/* email */}
    
             <label>
                            <p className="mb-1 text-[0.875rem] leading-[1.375rem] ">
                             Email <span className="text-red-600 text-sm">*</span>
                            </p>
                            <input
                            
                            type="eamil"
                            name="email"
                            id="email"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            placeholder="Enter email"
                            style={{
                                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                            }}
                            className="rounded-lg text-black bg-white p-3 text-[16px] leading-[24px]    focus:outline-none w-full !pr-10"
                            {
                                ...register("email",{required:true})
                            }
                            />
                            {
                                errors.email&&(
                                    <span className="-mt-1 text-[12px] text-blue-400">
                                        please enter your email
                                    </span>
                                )
                            }   
             </label>

             {/* phoneNo */}
            <div className='flex flex-col gap-2'>
            <label className='flex flex-col gap-2'>
                            <p className="mb-1 text-[0.875rem] leading-[1.375rem] ">
                             Phone Number <span className="text-red-600 text-sm">*</span>
                            </p>
                            {/* ddropdown */}

                            <input
                            type="tel"
                            name="phoneno"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            id="phoneno"
                            placeholder="+91 123456789"
                            style={{
                                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                            }}
                            className="rounded-lg text-black bg-white p-3 text-[16px] leading-[24px]    focus:outline-none w-full !pr-10 "
                            {
                                ...register("contactnumber",{
                                    required:{value:true,message:"please enter Phone No"},
                                    maxLength:{value:14,message:"Invalid PhoneNo"},
                                    minLength:{value:8,message:"invalid phone No"}

                                })
                            }
                            />
                            {
                                errors.phoneno&&(
                                    <span className="-mt-1 text-[12px] text-blue-400">
                                        please enter your Phone No.
                                    </span>
                                )
                            }     
             </label>

            </div>

                    
             {/* message */}
    
             <label>
                            <p className="mb-1 text-[0.875rem] leading-[1.375rem] ">
                             Message <span className="text-red-600 text-sm">*</span>
                            </p>
                            <textarea
                            
                            type="message"
                            name="message"
                            id="message"
                            onFocus={handleFocus}
                            onBlur={handleBlur}

                            cols="30"
                            rows="3"
    
                            placeholder="Enter your message"
                            style={{
                                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                            }}
                            className="rounded-lg text-black bg-white p-3 text-[16px] leading-[24px]    focus:outline-none w-full !pr-10"
                            {
                                ...register("message",{required:true})
                            }
                            />
                            {
                                errors.email&&(
                                    <span className="-mt-1 text-[12px] text-blue-400">
                                        please enter your message
                                    </span>
                                )
                            }   
             </label>
                    
            {/* submit button */}
    
            <button type='submit'
                  className="mt-6 w-full rounded-[8px] btn py-[12px] px-[12px] font-medium ">
                                Send Message
            </button>
    
               
        </form>
        
</div>

  )
}
