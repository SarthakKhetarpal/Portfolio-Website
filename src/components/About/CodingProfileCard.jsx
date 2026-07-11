import React from 'react'
import { Spinner } from '../Common/Spinner'
import AnimatedNumber from 'react-animated-numbers'

export const CodingProfileCard = ({icon,total,loading}) => {
  // Guard: AnimatedNumber renders "NaN" for non-numeric input (e.g. "-",
  // "Not found", null while an API is down). Only animate real numbers.
  const numericTotal = Number(total);
  const isNumeric = Number.isFinite(numericTotal) && total !== null && total !== "";

  return (
    <div className='flex flex-row gap-10 py-4 px-4 sm:px-8 md:px-10 justify-center items-center z-30 transition-all duration-200
    border-[1px] border-opacity-40 border-richblack-950 hover:shadow-lg hover:shadow-orange hover:scale-110
    rounded-lg'>

        <img className='w-16 md:w-24' src={icon} loading='lazy' alt='Logo'/>

        <div className='flex flex-col gap-1'>
            <p className='text-sm sm:text-base md:text-lg font-semibold'>
                Total Problems Solved
            </p>
            {
                loading===true ? (
                    <Spinner/>
                ) : isNumeric ? (
                    <AnimatedNumber
                        includeComma
                        className="font-bold text-orange"
                        transitions={(index) => ({
                        type: "spring",
                        duration: index + 0.3,
                        })}
                        animateToNumber={numericTotal}
                        fontStyle={{
                            fontSize: 50,
                            color: "orange",
                        }}
                    />
                ) : (
                    <p className='font-bold text-orange text-[50px] leading-none'>—</p>
                )
            }
        </div>

    </div>
  )
}
