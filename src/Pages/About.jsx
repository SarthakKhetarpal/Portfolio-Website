import React, { useEffect, useState } from 'react';
import { PageHeader } from '../components/Common/PageHeader';
import skills from '../data/skillsData';
import gfgIcn from '../assets/Skills/gfg.png';
import leetcodeIcn from '../assets/Skills/leetcode.png';
import { CodingProfileCard } from '../components/About/CodingProfileCard';
import { FaTrophy } from "react-icons/fa6";
import { AwardCertificationCard } from '../components/About/AwardCertificationCard';
import { PiCertificateBold } from "react-icons/pi";
import { EducationCard } from '../components/About/EducationCard';
import { ExperienceCard } from '../components/About/ExperienceCard';
import { CTButton } from '../components/Common/CTButton';
import { FaDownload } from "react-icons/fa";

export const About = ({currentMode}) => {

  // let currDate = Date.now();
  // let bdayDate = new Date(2000,10,22);

  // const calculateYears = () => {
  //   var diff = (currDate - bdayDate) / 1000;
  //   // Convert the difference from milliseconds to days
  //   diff /= (60 * 60 * 24);
  //   // Calculate the approximate number of years by dividing the difference in days by the average number of days in a year (365.25)
  //   return Math.abs(Math.round(diff / 365.25));
  // }

  const calculateAge = (birthday) => {
    const today = new Date();
    const birthDate = new Date(birthday);
  
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
  
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    return age;
  };

  const age = calculateAge('2000-10-22');

  // const leetcodeCount = "leetcodeCount";
  // const gfgCount = "gfgCount";

  const [leetcode,setLeetcode] = useState(null);
  const [gfg,setGfg] = useState(null);
  const [loading,setLoading] = useState(false);

  useEffect( () => {

    const fetchCodingProfileData = async() => {
      setLoading(true);
      try {
        const testGfg = await fetch("https://www.geeksforgeeks.org/user/sarthakkhetarpal22/");
        console.log(testGfg);
        const gfgApi = await fetch("https://geeks-for-geeks-stats-api.vercel.app/?raw=Y&userName=sarthakkhetarpal22");
        const gfgData = await gfgApi.json();
        // console.log("GFG : ",gfgData.totalProblemsSolved);
        setGfg(gfgData);
        // console.log(gfg.totalProblemsSolved);
        
        const leetApi = await fetch("https://alfa-leetcode-api.onrender.com/SarthakKhetarpal/solved");
        const leetData = await leetApi.json();
        // console.log("Leetcod data : ", leetData.solvedProblem);
        setLeetcode(leetData);
        // console.log(leetcode.solvedProblem);

      } catch(error) {
        console.log("Coding Profile API Error.....", error);
      }
      setLoading(false);
    }

    fetchCodingProfileData();
  },[currentMode]);

  // useEffect( () => {
  //   localStorage.setItem(leetcodeCount, leetcode?leetcode.solvedProblem:null);
  //   console.log("Leetcode LS : " + localStorage.getItem(leetcodeCount));
  //   localStorage.setItem(gfgCount, gfg?gfg.totalProblemsSolved:null);
  //   console.log("GFG LS : " + localStorage.getItem(gfgCount));
  // });

  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };

  useEffect( () => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    scrollToTop();
  },[]);

  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center gap-8 sm:gap-12 md:gap-16'>

      {/* Header */}
      <div>
        <PageHeader 
          BgHeading="RESUME" 
          MainHeading="ABOUT" 
          MainHeadingHighlighted="ME"
          currentMode={currentMode}
        />
      </div>
      {/* Body */}
      <div className={`${currentMode === "dark" ? "text-white" : "text-richblack-500"} pt-2 lg:pt-16 pb-40 max-w-[85%] lg:max-w-[100%]`}>

        {/* About Section */}
        <div className='w-full lg:max-w-[70%] flex flex-wrap flex-col lg:gap-0 gap-12 lg:flex-row lg:items-start items-center justify-center mx-auto'>

          <div className='lg:w-[45%] md:pl-[5%] pl-0 flex flex-col gap-10 items-start text-xs md:text-base'>
            <h1 className='font-semibold text-xl md:text-2xl'>Personal Info</h1>
            <div className='flex flex-row justify-center items-start gap-3 md:gap-6'>
              <div className='flex flex-col gap-4 justify-center items-start'>
                <p className='text-richblack-1200'>Name</p>
                <p className='text-richblack-1200'>Age</p>
                <p className='text-richblack-1200'>Phone</p>
                <p className='text-richblack-1200'>Email</p>
                <p className='text-richblack-1200'>Location</p>
                <p className='text-richblack-1200'>Nationality</p>
              </div>
              <div className='flex flex-col gap-4 justify-center items-start'>
                <p className='text-richblack-1200'>:</p>
                <p className='text-richblack-1200'>:</p>
                <p className='text-richblack-1200'>:</p>
                <p className='text-richblack-1200'>:</p>
                <p className='text-richblack-1200'>:</p>
                <p className='text-richblack-1200'>:</p>
              </div>
              <div className='flex flex-col gap-4 justify-center items-start'>
                <p className='font-medium'>Sarthak Khetarpal</p>
                <p className='font-medium'>{age}</p>
                <a href='tel:+91-8607879989' className='z-30 font-medium hover:text-orange cursor-pointer'>+91-8607879989</a>
                <a href='mailto:sarthakkhetarpal2000@icloud.com' className='z-30 font-medium hover:text-orange cursor-pointer'>sarthakkhetarpal2000@icloud.com</a>
                <p className='font-medium'>Hyderabad</p>
                <p className='flex justify-center items-center gap-1 font-medium'>Indian <span className='text-xl'>🇮🇳</span></p>
              </div>
            </div>

            <CTButton 
              text="Download CV" 
              icon={<FaDownload />} 
              clickHandler={() => window.open("https://drive.google.com/file/d/1QRtg_VAUM1mD-53qWbS_8Z0kTANr8zWy/view?usp=sharing", '_blank').focus()} 
              currentMode={currentMode} 
            />

          </div>

          <div className='lg:w-[45%] w-full flex lg:flex-col flex-row gap-4 sm:gap-8 items-center justify-center mx-auto lg:pl-[10%]'>

            {/* About Experience card */}
            <div className={`w-full h-[130px] md:h-[162px] lg:h-full flex flex-col gap-2 border-[1px] border-richblack-1100 ${currentMode === "dark" ? "border-opacity-50" : "border-opacity-15"} rounded-lg px-8 py-6`}>

              <div className='text-3xl sm:text-4xl md:text-5xl font-bold text-orange'>
                2+
              </div>
              <div className='flex flex-row items-center justify-start gap-2 text-base md:text-lg font-medium'>
                <div className='w-[15%] sm:w-[10%] h-[2px] bg-richblack-1200'></div>
                <p className='w-[85%] sm:w-[90%]'>YEARS OF EXPERIENCE</p>
              </div>
            </div>

            {/* About Rewards card */}
            <div className={`w-full h-[130px] md:h-[162px] lg:h-full flex flex-col gap-2 border-[1px] border-richblack-1100 ${currentMode === "dark" ? "border-opacity-50" : "border-opacity-15"} rounded-lg px-8 py-6`}>

              <div className='text-3xl sm:text-4xl md:text-5xl font-bold text-orange'>
                1
              </div>
              <div className='flex flex-row items-center justify-start gap-2 text-base md:text-lg font-medium'>
                <div className='w-[10%] h-[2px] bg-richblack-1200'></div>
                <p className='w-[90%]'>AWARDS WON</p>
              </div>
            </div>

          </div>
        </div>

        <div className='w-[60%] mx-auto h-[1px] bg-richblack-950 my-12 opacity-60'></div>

          {/* Technical Skills Section */}
        <div className='w-full lg:max-w-[70%] flex flex-col items-center justify-center mx-auto gap-12'>

          <p className='font-semibold  text-xl md:text-2xl'>
            Technical Skills
          </p>

          <div className='flex flex-row flex-wrap items-center justify-center mx-auto gap-x-14 sm:gap-x-20 gap-y-8 sm:gap-y-12 md:gap-y-20 md:gap-x-28'>
            {
              skills.map( (skill,index) => (
                <div key={index} className='flex flex-col gap-6 items-center justify-center group cursor-pointer z-30 transition-all duration-500'>
                  <img src={skill.source} alt={skill.text} 
                   className='hover:scale-125 w-[60px] sm:w-[75px] md:w-[100px] lg:w-[120px]'
                   />
                  <p className={`text-xs font-extrabold invisible opacity-0 shadow-lg ${currentMode === "dark" ? "shadow-black" : "shadow-white"} group-hover:visible group-hover:opacity-100`}>
                    {skill.text}
                  </p>
                </div>
              ))
            }
          </div>

        </div>

        <div className='w-[60%] mx-auto h-[1px] bg-richblack-950 my-12 md:my-16 opacity-60'></div>

        {/* Education Section */}
        <div className='flex flex-col items-center justify-center gap-12'>

          <p className='font-semibold  text-xl md:text-2xl'>
            Education
          </p>

          <div className='w-[95%] md:w-[80%] lg:w-[60%]'>
              <EducationCard 
                duration="2019 - 2023"
                degree="Bachelors in Technology"
                institute="SRM University"
                about="Bachelors in Technology(B.Tech) in Computer Science Engineering with specialisation in Cloud and Mobile based applications"
                cgpa="8.56 CGPA"
                line={false}
                currentMode={currentMode}
              />
          </div>

        </div>

        <div className='w-[60%] mx-auto h-[1px] bg-richblack-950 my-12 md:my-16 opacity-60'></div>

        {/* Experience Section */}
        <div className='flex flex-col items-center justify-center mx-auto gap-12'>

          <p className='font-semibold text-xl md:text-2xl'>
            Experience
          </p>

          <div className='w-[95%] lg:w-[60%] flex flex-col gap-2 items-start justify-center'>
              <ExperienceCard 
                line={true}
                duration={`September'2024  -  Present`}
                designation={`Associate System Development Engineer`}
                organisation={`Hansa Solutions India Pvt. Ltd.`}
                about={<div className='pb-4'>
                  <ul>
                  <li><span className='font-bold'>Team :</span> Hansa Core Resources <b className='font-bold'>(Research & Development)</b></li>
                  <li><span className='font-bold'>Project Title : </span> Insurance One Products</li>
                  <li>• Working as a part of the core in house resource in <b className='font-bold'>Research and Development</b> team, Developing new modules for various Insurance One products along with enhancing the pre-existing modules.</li>
                  <li>• Unit Testing report along with the Test Cases for both negative and positive scenarios were developed.</li>
                  </ul>
                </div>}
                currentMode={currentMode}
              />
              <ExperienceCard 
                line={true}
                duration={`August'2023  -  September'2024`}
                designation={`Trainee System Development Engineer`}
                organisation={`Hansa Solutions India Pvt. Ltd.`}
                about={<div className='pb-4'>
                  <ul className='flex flex-col gap-1'>
                    <li><span className='font-bold'>Client :</span> ICICI Prudential Life Insurance</li>
                    <li><span className='font-bold'>Project Title :</span> Insurance One Snow White Ultra Group & Insurance One 4.0</li>
                    <li>• Developed and maintained all core submodules using VB.NET and SQL as Backend in IOneG application which enables complete automation of Group Insurance.</li>
                    <li>• Unit Testing report along with the Test Cases for both negative and positive scenarios were developed.</li>
                    <li>• Deployed the application on UAT and Production servers and along with that provided production support.</li>
                  </ul>
                </div>}
                currentMode={currentMode}
              />
              <ExperienceCard 
                line={false}
                duration={`Feburary'2023  -  July'2023`}
                designation={`Trainee System Development Intern`}
                organisation={`Hansa Solutions India Pvt. Ltd.`}
                about={<div className='pb-4'>
                  <ul>
                    <li><span className='font-bold'>Client :</span> ICICI Prudential Life Insurance</li>
                    <li><span className='font-bold'>Project Title :</span> Insurance One Snow White Ultra Group</li>
                    <li>• Developed and maintained New Business submodules using VB.NET and SQL as Backend in IOneG application which enables complete automation of Group Insurance.</li>
                    <li>• Unit Testing report along with the Test Cases for both negative and positive scenarios were developed.</li>
                  </ul>
                </div>}
                currentMode={currentMode}
              />
          </div>

        </div>

        <div className='w-[60%] mx-auto h-[1px] bg-richblack-950 my-12 md:my-16 opacity-60'></div>

        {/* Coding Profiles section */}
        <div className='flex flex-col items-center justify-center mx-auto gap-12'>

          <p className='font-semibold  text-xl md:text-2xl'>
            Coding Profiles
          </p>

          <div className='flex flex-col lg:flex-row gap-12 sm:gap-14 md:gap-20 items-center justify-center mx-auto w-full'>

            <a className='cursor-pointer z-30 group' target='blank'
            href='https://leetcode.com/SarthakKhetarpal/'>
              <CodingProfileCard icon={leetcodeIcn} total={leetcode?leetcode.solvedProblem:"-"} loading={loading}/>
            </a>

            <a className='cursor-pointer z-30' target='blank'
            href='https://www.geeksforgeeks.org/user/sarthakkhetarpal22/'>
              <CodingProfileCard icon={gfgIcn} total={gfg?gfg.totalProblemsSolved:"-"} loading={loading}/>
            </a>
            
          </div>

        </div>

        <div className='w-[60%] mx-auto h-[1px] bg-richblack-950 my-12 md:my-16 opacity-60'></div>

        {/* Awards & Certifications Section */}
        <div className='flex flex-col items-center justify-center mx-auto gap-12'>

          <p className='font-semibold text-xl md:text-2xl'>
            Awards & Certifications
          </p>

          <div className='flex flex-col justify-center items-center gap-6'>
            <AwardCertificationCard icon={<FaTrophy />} text="Tatva Award by ICICI Prudential Life Insurance for HFY-2024 in IT Category for Best Agent in Group Pricing." link="https://drive.google.com/file/d/18vAtuNBFi3xu8rStDxcvc0useBlWv-25/view?usp=sharing" line={true}/>
            <AwardCertificationCard icon={<PiCertificateBold />} text="The 4.5-month long comprehensive course of Web Development Bootcamp [MERN STACK] by CodeHelp." link="https://learn.codehelp.in/share-certificate?serialno=HQK3BPJU" line={true}/>
            <AwardCertificationCard icon={<PiCertificateBold />} text="The 4 month long comprehensive Low Level Design BootCamp by CodeHelp." link={"https://learn.codehelp.in/share-certificate?serialno=UCVWWZY7"} line={false}/>
          </div>

        </div>

      </div>

    </div>
  )
}
