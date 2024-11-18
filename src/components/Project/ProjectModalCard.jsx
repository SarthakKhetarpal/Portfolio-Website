import React, { useEffect, useRef } from 'react';
import githubWhite from '../../assets/Skills/github-white.png';
import githubBlack from '../../assets/Skills/stack/Github.svg';

export const ProjectModalCard = ({ projectModal, currentMode, skillsImg, projectVideo }) => {

  // Initialize github ref
  //** Explore about useRef hook **
  const github = useRef(currentMode === "dark" ? githubWhite : githubBlack);

  useEffect(() => {
    // Update the github ref based on the currentMode
    github.current = currentMode === "dark" ? githubWhite : githubBlack;
  }, [currentMode]);

  return (
    <div className={`flex flex-col lg:flex-row w-[100%] h-[90%] gap-y-0 space-y-0 lg:h-fit overflow-y-scroll mx-auto my-auto`}>
      <video key={projectVideo} className='w-[100%] lg:w-[70%] h-fit lg:h-full' muted loop autoPlay>
        <source src={projectVideo} type="video/mp4" />
      </video>
      <div className={`lg:w-[30%] w-[100%] ${currentMode === "light" ? "bg-white" : "bg-richblack-1000"} h-full lg:h-auto p-4 flex flex-col gap-4 md:gap-5 overflow-y-scroll`}>
        <p className={`font-bold text-lg md:text-xl`}>
          {projectModal.name}
        </p>
        <p className='font-medium text-xs md:text-sm pt-2'>
          Project Description :
        </p>
        <p className={`text-xs md:text-sm italic px-1 ${currentMode === "dark" ? "text-white" : "text-richblack-500"}`}>
          {projectModal.desc}
        </p>
        <p className='font-medium text-xs md:text-sm'>
          Technical Skills Used :
        </p>
        <div className='flex flex-row flex-wrap gap-3 md:gap-x-4 md:gap-y-6 p-1 md:py-2 md:px-1'>
          {skillsImg.map((projectSkill, index) => {
            // Extract the URL from the object
            const skillUrl = Object.values(projectSkill)[0];
            return (
              <div key={index} className='cursor-pointer group'>
                <img src={skillUrl} alt='skill' className='w-7 md:w-10 group-hover:scale-125' />
              </div>
            )
          })}
        </div>
        <p className='font-medium text-xs md:text-sm'>
          GitHub Repository URL :
        </p>
        <a href={projectModal.url} className='cursor-pointer group'>
          <img src={github.current} alt='GitHub-Icon-URL' className='w-8 md:w-10 group-hover:scale-125' />
        </a>
      </div>
    </div>
  );
};