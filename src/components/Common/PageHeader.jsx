import React from 'react';

export const PageHeader = ({BgHeading,MainHeading,MainHeadingHighlighted,currentMode}) => {
  return (
    <div className='relative w-screen h-full flex items-center justify-center pt-16 transition-all duration-200'>

        <p className='absolute text-richblack-200 text-[78px] sm:text-[108px]  md:text-[8rem] font-bold opacity-20 z-0
        top-[10px]'>
            {BgHeading}
        </p>

        <div className='flex flex-row gap-4 font-bold text-4xl sm:text-5xl md:text-6xl z-10 items-center justify-center mx-auto pt-0 md:pt-[10px]'>
          <p className={`${currentMode === "dark" ? "text-white" : "text-richblack-500"}`}>
              {MainHeading}
          </p>
          <p className='text-orange'>
              {MainHeadingHighlighted}
          </p>
        </div>

    </div>
  )
}
