import SarthakImage from '../assets/sarthak2.png';
import SarthakImagePassport from '../assets/SarthakPassport.png';
import { TypeAnimation } from 'react-type-animation';
import { CTButton } from '../components/Common/CTButton';
import { useNavigate } from "react-router-dom";
import { TiArrowRightThick } from "react-icons/ti";
import { useEffect, useState } from 'react';

export const Home = ({currentMode}) => {

  // console.log("Inside Home",currentMode);
  const navigate = useNavigate();

  const [imgSource, setImgSource] = useState('');

  useEffect( () => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    scrollToTop();
  },[]);

  useEffect( () => {
    const updateImgSource = () => {
      if(window.innerWidth < 1024) {
        setImgSource(SarthakImagePassport);
      }
      else {
        setImgSource(SarthakImage);
      }
    };

    updateImgSource();

    window.addEventListener('resize',updateImgSource);

    return () => {
      window.removeEventListener('resize',updateImgSource);
    };

  },[]);

  return (
    <div className='home-effect flex lg:flex-row flex-col items-center justify-center w-screen min-h-screen
    transition-all duration-200 mb-10 lg:mb-0'>
      <div className='w-[80%] md:w-[70%] lg:w-[50%] mt-[15%] md:mt-[-15%] lg:mt-0 border-richblack-100'>
        <img src={imgSource} alt='Sarthak'
          className='2xl:w-[68%] lg:w-[75%] w-[65%] lg:rounded-3xl lg:my-0 mb-6 rounded-full
          mx-auto text-center shadow-2xl shadow-black'
        />
      </div>
      <div className='w-[80%] lg:w-[60%] flex flex-col justify-center items-center lg:items-start gap-y-4'>

        <p className='text-orange pt-4 text-xl sm:text-2xl md:text-4xl lg:text-[47px] font-bold'>
           - I'M SARTHAK KHETARPAL
        </p>

        <div className={`${currentMode==="dark" ? "text-white" : "text-richblack-500"} text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold`}>
          <TypeAnimation
            sequence={[
              'Software Engineer',
              2000,
              'Web Developer',
              2000,
              'Software Developer',
              2000
            ]}
            wrapper="span"
            speed={10}
            repeat={Infinity}
          />
        </div>

        <p className={`${currentMode==="dark" ? "text-white" : "text-richblack-500"} w-[90%] lg:w-[75%] text-xs md:text-sm leading-6 xl:text-[17px] py-[25px] xl:py-[35px]`}>
        I’m a passionate Software Development Engineer with a strong focus on building efficient, scalable, and user-friendly applications, with <b>2+ years</b> of experience in working on a wide range of projects, from full-stack web applications to system-level software.
        <br/><br/>Beyond my technical skills, I am a continuous learner, always exploring new technologies and staying up-to-date with industry trends to improve and expand my expertise.
        <br/><br/>Let’s create something great together!
        </p>

        <CTButton 
          text="MORE ABOUT ME" 
          icon={<TiArrowRightThick />} 
          clickHandler={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            navigate("/About");
          }} 
          currentMode={currentMode} 
          className="mb-12"
        />

      </div>

    </div>
  )
}