import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { InputFieldError } from './InputFieldError';
import { FaPaperPlane } from "react-icons/fa";
import toast from 'react-hot-toast';
// import mailSender from '../../mail/mailSender';

export const ContactForm = ({currentMode, sendEmail}) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful }
    } = useForm();

    useEffect( () => {
        if(isSubmitSuccessful) {
            reset();
        }
    }, [reset, isSubmitSuccessful])

    const submitContactForm = async (data) => {
        console.log("Form Data : ", data);
        toast.loading("Sending message...");
        try {
            //add mailing fucntionality
            // sendEmail(data.email);
            toast.dismiss();
            toast.success("Message sent");
        }
        catch(error) {
            toast.dismiss();
            toast.error("Message sending failed");
            console.log("Mail failed : " , error);
        }
    }

  return (
    <form onSubmit={handleSubmit(submitContactForm)}>

        <div className={`${currentMode==="dark"? "text-white" : "text-richblack-500"} flex flex-col gap-8 w-full pl-4 md:pl-10 mx-auto`}>
            <div className='flex flex-col md:flex-row gap-6 w-full gap-x-[4%] z-10'>
                <div className='flex flex-col w-[95%] md:w-[48%]'>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="YOUR NAME"
                        className={`${currentMode==="dark"? "bg-richblack-1100" : "bg-white"} rounded-[22px] py-3 px-4 focus:outline-orange focus:outline-none focus:border-none text-sm placeholder:text-richblack-550 border-2 border-opacity-25 border-richblack-1100`}
                        {...register("name", {
                            required: {
                                value: true,
                                message: "Name is required"
                            }
                        })}
                    />
                    {
                        errors.name && (
                            <InputFieldError text={errors.name.message}/>
                        )
                    }
                </div>

                <div className='flex flex-col w-[95%] md:w-[48%]'>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="YOUR EMAIL"
                        className={`${currentMode==="dark"? "bg-richblack-1100" : "bg-white"} rounded-[22px] py-3 px-4 focus:outline-orange focus:outline-none focus:border-none text-sm placeholder:text-richblack-550 border-2 border-opacity-25 border-richblack-1100`}
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Email is required"
                            }
                        })}
                    />
                    {
                        errors.email && (
                            <InputFieldError text={errors.email.message}/>
                        )
                    }
                </div>
                
            </div>

            <div className="z-10 w-[95%] md:w-full">
                <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="YOUR SUBJECT"
                    className={`w-full ${currentMode==="dark"? "bg-richblack-1100" : "bg-white"} rounded-[22px] py-3 px-4 focus:outline-orange focus:outline-none focus:border-none text-sm placeholder:text-richblack-550 border-2 border-opacity-25 border-richblack-1100`}
                    {...register("subject", {
                        required: {
                            value: true,
                            message: "Subject is required"
                        }
                    })}
                />
                {
                    errors.subject && (
                        <InputFieldError text={errors.subject.message}/>
                    )
                }
            </div>

            <div className="z-10 w-[95%] md:w-full">
                <textarea
                    name="message"
                    id="message"
                    placeholder="YOUR MESSAGE"
                    className={`w-full h-[220px] ${currentMode==="dark"? "bg-richblack-1100" : "bg-white"} rounded-[22px] py-4 px-4 focus:outline-orange focus:outline-none focus:border-none text-sm placeholder:text-richblack-550 border-2 border-opacity-25 border-richblack-1100`}
                    {...register("message", {
                        required: {
                            value: true,
                            message: "Message is required"
                        }
                    })}
                />
                {
                    errors.message && (
                        <InputFieldError text={errors.message.message}/>
                    )
                }
            </div>

            <button
                type='submit' 
                className={`flex gap-4 items-center justify-center border border-orange w-fit rounded-full z-10
                 ${currentMode==="dark" ? "text-white" : "text-richblack-500"} transition-all duration-300 cursor-pointer`} 
                 >
                <div className='pl-6 pr-1 py-4 text-sm font-semibold'>
                    SEND MESSAGE
                </div>
                <span className='bg-orange rounded-full px-4 py-4 text-2xl text-white'>
                    <FaPaperPlane />
                </span>
                <span className="bg-overlay"></span>
            </button>

        </div>

    </form>
  )
}
