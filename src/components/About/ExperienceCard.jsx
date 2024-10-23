import React from 'react';
import { FaBriefcase } from "react-icons/fa";

export const ExperienceCard = ({line, duration, designation, organisation, about, currentMode}) => {
  return (
    <div className='h-full flex flex-col justify-center items-center relative'>

        <div className='h-full flex flex-row gap-6 justify-start items-start'>

            <div className='h-full  flex flex-col items-center justify-center'>

                <div className='p-3 z-[20] rounded-full bg-orange text-2xl text-white'>
                    <FaBriefcase />
                </div>
                
                {line === true && (
                    <div className='absolute top-0 z-[10] w-[1.5px] h-full bg-richblack-950 opacity-60'></div>
                )}
            
            </div>

            <div className='flex flex-col gap-1'>
                <div className={`${currentMode === "light" ? "bg-richblack-5" : "bg-richblack-950 text-white"}
                 w-fit rounded-full px-3 py-1 text-xs font-bold`}>
                    {duration}
                </div>
                <p className='font-semibold'>
                  {designation}
                </p>
                <p className='font-bold text-richblack-1200'>
                    -{" "}{organisation}
                </p>
                <p className='text-sm font-light'>
                    {about}
                </p>
            </div>

        </div>
    </div>
  )
}
