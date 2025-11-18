import React, { useState, useEffect } from 'react';
import { PageHeader } from '../components/Common/PageHeader';
import { projectData } from '../data/projectData';
import { ProjectCard } from '../components/Project/ProjectCard';
import { IoMdCloseCircle } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { ProjectModalCard } from '../components/Project/ProjectModalCard';

export const Portfolio = ({ currentMode }) => {
  const [projectModal, setProjectModal] = useState(null);

  useEffect(() => {
    if (projectModal) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Clean up when the component unmounts
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [projectModal]);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect( () => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    scrollToTop();
  },[]);

  // Left arrow button click function
  const leftButtonClick = () => {
    if (projectModal) {
      const prevProject = projectData.find((project) => (projectModal.id - 1) % projectData.length === project.id);
      setProjectModal(prevProject);
    }
  };

  // Right arrow button click function
  const rightButtonClick = () => {
    if (projectModal) {
      const nextProject = projectData.find((project) => (projectModal.id + 1) % (projectData.length + 1) === project.id);
      setProjectModal(nextProject);
    }
  };

  return (
    <div className='relative w-full min-h-screen flex flex-col items-center justify-center gap-16'>
      {/* Header */}
      <div>
        <PageHeader 
          BgHeading="WORKS" 
          MainHeading="MY" 
          MainHeadingHighlighted="PORTFOLIO"
          currentMode={currentMode}
        />
      </div>
      {/* Body */}
      <div className={`${currentMode === "dark" ? "text-white" : "text-richblack-500"} h-[80%] w-screen pt-2 lg:pt-16 pb-40 mx-auto transition-all duration-200`}>
        <div className='flex flex-wrap flex-row justify-center items-center mx-auto w-screen lg:max-w-[75%] gap-x-14 gap-y-8 md:gap-y-16'>
          {
            projectData.map((project) => (
              <div onClick={() => {
                scrollToTop();
                setProjectModal(project);
              }} key={project.id}>
                <ProjectCard 
                  img={project.img} 
                  name={project.name}
                  setProjectModal={setProjectModal}
                />
              </div>
            ))
          }
        </div>
      </div>

      {
        projectModal && (
          <div className='fixed inset-0 backdrop-blur-sm flex flex-col items-center justify-center z-[100]'>
            <div className='absolute top-[5%] right-[5%] text-orange cursor-pointer text-4xl md:text-6xl' onClick={() => setProjectModal(false)}>
              <IoMdCloseCircle />
            </div>
            <div className='transition-all duration-200 ease-linear w-full h-full flex flex-row text-6xl items-center justify-center mx-auto text-orange'>
              
              <MdOutlineKeyboardArrowLeft 
                className={`cursor-pointer mr-10 ${projectModal.id > 1 ? "opacity-100 visible" : "opacity-0 invisible"} rounded-full p-1 bg-richblack-950 font-bold hover:bg-richblack-1100 w-[10%] ml-[2%] lg:w-[5%] lg:ml-[5%]`}
                onClick={() => leftButtonClick()}
              />
              
              <ProjectModalCard 
                currentMode={currentMode}
                projectModal={projectModal}
                projectVideo={projectModal.video}
                skillsImg={projectModal.skills}
                className='w-full h-[85%] rounded-lg bg-[#1f1f1f9a] project-card transition-all duration-200 ease-linear'
              />
              
              <MdOutlineKeyboardArrowRight 
                className={`cursor-pointer ml-10 ${projectModal.id === projectData.length ? "opacity-0 invisible" : "opacity-100 visible"} rounded-full p-1 bg-richblack-950 font-bold hover:bg-richblack-1100 w-[10%] mr-[2%] lg:w-[5%] lg:mr-[5%]`}
                onClick={() => rightButtonClick()}
              />
            </div>
          </div>
        )
      }
    </div>
  );
};