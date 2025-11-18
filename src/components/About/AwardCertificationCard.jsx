import React from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";

export const AwardCertificationCard = ({icon,text,line,link}) => {
  return (
    <div className='flex flex-col justify-start items-center'>

    <div className='flex flex-row gap-6 justify-start items-center w-screen max-w-[75%] lg:max-w-[63%]'>

        <div className='flex flex-col items-center justify-center'>

            <div className='p-2 sm:p-3 rounded-full bg-orange text-lg sm:text-xl md:text-2xl text-white'>
                {icon}
            </div>
            
        </div>

        <a href={link} target='blank' 
         className='text-xs sm:text-sm md:text-base font-medium flex flex-row gap-4 items-center justify-center z-30 cursor-pointer hover:text-orange'>
            {text}
            <div className='text-md sm:text-lg md:text-xl lg:text-sm'>
                <FaExternalLinkAlt />
            </div>
        </a>

    </div>

</div>

  )
}
