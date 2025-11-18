import React from 'react';

export const ProjectCard = ({id,img,name,setProjectModal}) => {
  return (
    <div className='group flex flex-col gap-9 justify-center items-start w-full cursor-pointer transition-all duration-200'
    >
        <img src={img} alt='Project Thumbnail' width={300} className='z-30 group-hover:scale-110 rounded-lg shadow-xl shadow-black'/>
        <p className='opacity-0 group-hover:opacity-100 font-bold text-sm'>
            {name}
        </p>
    </div>
  )
}
