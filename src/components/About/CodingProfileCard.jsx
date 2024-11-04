import React from 'react'
import { Spinner } from '../Common/Spinner'
import AnimatedNumber from 'react-animated-numbers'

export const CodingProfileCard = ({icon,total,loading}) => {
  return (
    <div className='flex flex-row gap-10 p-4 sm:p-8 md:p-10 justify-center items-center z-30 transition-all duration-200
    border-[1px] border-opacity-40 border-richblack-950 hover:shadow-lg hover:shadow-black hover:scale-110
    rounded-lg'>

        <img className='w-16 md:w-24' src={icon} loading='lazy' alt='Logo'/>

        <div className='flex flex-col gap-1'>
            <p className='text-sm sm:text-base md:text-lg font-semibold'>
                Total Problems Solved
            </p>
            {
                loading===true ? (
                    <Spinner/>
                ) : (
                    <AnimatedNumber
                        includeComma
                        className="font-bold text-orange"
                        transitions={(index) => ({
                        type: "spring",
                        duration: index + 0.3,
                        })}
                        animateToNumber={total}
                        fontStyle={{
                            fontSize: 50,
                            color: "orange",
                        }}
                    />
                )
            }
        </div>

    </div>
  )
}
