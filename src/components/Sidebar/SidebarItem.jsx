import React from 'react';
import { Link } from 'react-router-dom';

export const SidebarItem = ({ path, title, icon, currentPath, setCurrentPath, currentMode }) => {

  return (
    <Link to={path} className='text-[25px]'>
      <div 
        className={`flex items-center justify-center rounded-full py-[10px] px-3 md:px-4 md:py-4 
          ${currentPath === path ? "bg-orange text-white" 
            : currentMode === "light" ? "bg-richblack-5" : "bg-richblack-950 text-white"} 
          group transition-all duration-500 ease-in-out cursor-pointer hover:bg-orange hover:text-white`}
      >
        <div className='w-[22px] md:w-[25px] flex justify-center'>
          {icon}
        </div>
        <span className='hidden md:group-hover:block text-sm md:text-[15px] font-bold uppercase px-4'>
          {title}
        </span>
      </div>
    </Link>
  );
}