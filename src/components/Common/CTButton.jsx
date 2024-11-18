import React from 'react';

export const CTButton = ({ text, icon, clickHandler, currentMode }) => {
  return (
    <button
      className={`z-20 relative flex gap-4 items-center justify-center border border-orange w-fit rounded-full overflow-hidden 
       ${currentMode === "dark" ? "text-white" : "text-richblack-500"} transition-all duration-300 
       hover:text-white`} 
      onClick={clickHandler}
    >
      <div className='pl-4 md:pl-6 md:pr-1 py-2 md:py-4 text-xs md:text-sm font-semibold'>
        {text}
      </div>
      <span className='bg-orange rounded-full p-3 md:p-4 text-lg md:text-2xl text-white'>
        {icon}
      </span>
      <span className="bg-overlay"></span>
    </button>
  );
}
