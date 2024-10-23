import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BsMoon } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import { SidebarItem } from './SidebarItem';
import { SidebarData } from '../../data/SidebarData';


export const Sidebar = ({currentMode,setCurrentMode}) => {

    const location = useLocation();

    const [currentPath,setCurrentPath] = useState(location.pathname);

    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location.pathname]);

  return (
    <div className=''>

            <div className={`absolute flex items-center justify-center right-1 -top-1 lg:top-8 rounded-full p-4 cursor-pointer mr-1 md:mr-8
              ${currentMode === "light" ? "bg-richblack-5" : "bg-richblack-950 text-white"}`}
            onClick={() => setCurrentMode(currentMode === "light" ? "dark" : "light")}>
                <div className='w-[25px]'>
                    <div className="text-[25px]" >
                        {
                            currentMode === "light" ? (<BsMoon />) : (<BsSun />)
                        }
                    </div>
                </div>
            </div>

        <div className='flex lg:flex-col sm:flex-row items-end justify-center gap-7 pr-8 text-richblack-500'>

            {
                SidebarData.map( (element, index) => {
                    return (
                        <SidebarItem path={element.path} 
                        title={element.title} 
                        icon={element.icon} 
                        currentPath={currentPath} 
                        setCurrentPath={setCurrentPath} 
                        currentMode={currentMode}
                        key={index}
                        />
                    )
                })
            }

        </div>

    </div>
  )
}
