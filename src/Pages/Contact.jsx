import React, { useEffect } from 'react';
import { PageHeader } from '../components/Common/PageHeader';
import { ContactForm } from '../components/Contact/ContactForm';
import { FaRegAddressCard } from "react-icons/fa6";
import { RiMailOpenFill } from "react-icons/ri";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { ContactDetailCard } from '../components/Contact/ContactDetailCard';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

const detailsData = [
  {
    id: 1,
    icon: <FaRegAddressCard />,
    header: "CURRENT ADDRESS",
    text: "Hyderabad, India"
  },
  {
    id: 3,
    icon: <RiMailOpenFill />,
    header: "EMAIL ADDRESS",
    text: "sarthakkhetarpal2000@icloud.com"
  },
  {
    id: 3,
    icon: <FaPhoneSquareAlt />,
    header: "CONTACT NUMBER",
    text: "+91-8607879989"
  },
];

const socialData = [
  {
    id: 1,
    icon: <FaSquareGithub />,
    path: "https://github.com/SarthakKhetarpal"
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    path: "http://www.linkedin.com/in/sarthak-khetarpal-3b87411ab"
  },
  {
    id: 3,
    icon: <FaSquareXTwitter />,
    path: "https://x.com/sarthakkhetarp1/"
  }
];

export const Contact = ({currentMode}) => {
  
  useEffect( () => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    scrollToTop();
  },[]);
  
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center gap-16'>

      {/* Header */}
      <div>
        <PageHeader 
          BgHeading="CONTACT" 
          MainHeading="GET IN" 
          MainHeadingHighlighted="TOUCH"
          currentMode={currentMode}
        />
      </div>
      {/* Body */}
      <div className={`${currentMode === "dark" ? "text-white" : "text-richblack-500"} h-[80%] pt-2 lg:pt-16 pb-16
      flex lg:flex-row flex-col gap-12 lg:gap-0 w-full items-center justify-center lg:ml-[12%] lg:mr-[22%] md:max-w-[80%] lg:max-w-[100%]`}>
        
        {/* Contact Details */}
        <div className='w-[90%] lg:w-[35%] flex flex-col gap-8 md:px-16'>
          
          <p className='w-full text-2xl md:text-[28px] font-semibold leading-9 justify-self-end'>
            LET'S CONNECT !
          </p>

          <p className='md:text-base text-sm h-auto'>
          Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of a greater visions.
          </p>
 
          {
            detailsData.map( (card) => {
              return (
                <div>
                  <ContactDetailCard 
                    text={card.text} 
                    header={card.header}
                    icon={card.icon}
                    key={card.id}
                  />
                </div>
              )
            })
          }

          <div className='flex flex-row gap-4'>
            {
              socialData.map( (element) => {
                return (
                  <div key={element.id} className='text-4xl rounded-md text-richblack-1100 hover:text-orange hover:scale-140 hover:bg-richblack-950 z-10 cursor-pointer bg-white'>
                    <a href={element.path} target='blank'>
                      {element.icon}
                    </a>
                  </div>
                )
              })
            }
          </div>


        </div>

        {/* Contact Form */}
        <div className='w-full lg:w-[45%]'>
          <ContactForm currentMode={currentMode}/>
        </div>

      </div>

    </div>
  )
}
