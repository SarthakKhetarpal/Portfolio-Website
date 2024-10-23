import React from 'react';
import { MdErrorOutline } from "react-icons/md";

export const InputFieldError = ({text}) => {
  return (
    <span className='text-[#D02500] text-sm flex flex-row gap-2 items-center pt-2 pl-4'>
        <MdErrorOutline />
        {text}
    </span>
  )
}
