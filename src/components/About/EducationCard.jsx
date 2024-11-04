import React from 'react';
import { FaBook } from "react-icons/fa";

export const EducationCard = ({duration,degree,institute,about,line,currentMode, cgpa}) => {
  return (
    <div className='flex flex-col justify-center items-center'>

        <div className='flex flex-row gap-6 justify-start items-start'>

            <div className='flex flex-col items-center justify-center'>

                <div className='p-2 sm:p-3 rounded-full bg-orange text-lg sm:text-xl md:text-2xl text-white'>
                    <FaBook />
                </div>
                
                {line === true && (
                    <div className='w-[2px] h-12 bg-richblack-950 opacity-40'></div>
                )}
            
            </div>

            <div className='flex flex-col gap-1'>
                <div className={`${currentMode === "light" ? "bg-richblack-5" : "bg-richblack-950 text-white"}
                 w-fit rounded-full px-3 py-1 text-xs font-bold`}>
                    {duration}
                </div>
                <div className='flex flex-row justify-between'>
                    <p className='font-semibold text-sm sm:text-md'>
                        {degree}
                    </p>
                    <p className={`${currentMode === "light" ? "bg-richblack-5" : "bg-richblack-950 text-white"}
                        w-fit rounded-full px-3 py-1 text-xs my-auto text-center`}>
                        {cgpa}
                    </p>
                </div>
                <p className='font-bold text-sm sm:text-md text-richblack-1200'>
                    -{" "}{institute}
                </p>
                <p className='text-xs sm:text-sm font-light'>
                    {about}
                </p>
            </div>

        </div>
    </div>
  )
}
