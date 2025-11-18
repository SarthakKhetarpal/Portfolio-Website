import React, { useEffect, useState } from "react";
import { PageHeader } from "../components/Common/PageHeader";
import skills from "../data/skillsData";
import gfgIcn from "../assets/Skills/gfg.png";
import leetcodeIcn from "../assets/Skills/leetcode.png";
import { CodingProfileCard } from "../components/About/CodingProfileCard";
import { FaLaptopCode, FaTrophy } from "react-icons/fa6";
import { AwardCertificationCard } from "../components/About/AwardCertificationCard";
import { EducationCard } from "../components/About/EducationCard";
import { ExperienceCard } from "../components/About/ExperienceCard";
import { CTButton } from "../components/Common/CTButton";
import { FaDownload } from "react-icons/fa";
import { certificationsAndAwardsData } from "../data/certificationAndAwardsData";
import { experienceData } from "../data/experienceData";

export const About = ({ currentMode }) => {

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

  const age = calculateAge("2000-10-22");

  const [leetcode, setLeetcode] = useState(null);
  const [gfg, setGfg] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCodingProfileData = async () => {
      setLoading(true);
      try {
        //Leetcode
        const leetApi = await fetch(
          "https://alfa-leetcode-api.onrender.com/SarthakKhetarpal/solved"
        );
        const leetData = await leetApi.json();
        setLeetcode(leetData);

        //GeeksForGeeks
        const gfgTestApi = await fetch(
          `${process.env.REACT_APP_BASE_URL}/api/gfgdata`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        // Convert response to JSON
        const gfgTestData = await gfgTestApi.json();

        // Set the value correctly
        setGfg(gfgTestData.total_problem_solved);
      } catch (error) {
        console.log("Coding Profile API Error.....", error);
      }
      setLoading(false);
    };

    fetchCodingProfileData();
  }, [currentMode]);

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    scrollToTop();
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-8 sm:gap-12 md:gap-16">
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
      <div
        className={`${
          currentMode === "dark" ? "text-white" : "text-richblack-500"
        } pt-2 lg:pt-16 pb-40 max-w-[85%] lg:max-w-[100%]`}
      >
        {/* About Section */}
        <div className="w-full lg:max-w-[70%] flex flex-wrap flex-col lg:gap-0 gap-12 lg:flex-row lg:items-start items-center justify-center mx-auto">
          <div className="lg:w-[45%] md:pl-[5%] pl-0 flex flex-col gap-10 items-start text-xs md:text-base">
            <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl">
              Personal Info
            </h1>
            <div className="flex flex-row justify-center items-start gap-3 md:gap-6">
              <div className="flex flex-col gap-4 justify-center items-start">
                <p className="text-richblack-1200">Name</p>
                <p className="text-richblack-1200">Age</p>
                <p className="text-richblack-1200">Phone</p>
                <p className="text-richblack-1200">Email</p>
                <p className="text-richblack-1200">Location</p>
                <p className="text-richblack-1200">Nationality</p>
              </div>
              <div className="flex flex-col gap-4 justify-center items-start">
                <p className="text-richblack-1200">:</p>
                <p className="text-richblack-1200">:</p>
                <p className="text-richblack-1200">:</p>
                <p className="text-richblack-1200">:</p>
                <p className="text-richblack-1200">:</p>
                <p className="text-richblack-1200">:</p>
              </div>
              <div className="flex flex-col gap-4 justify-center items-start">
                <p className="font-medium">Sarthak Khetarpal</p>
                <p className="font-medium">{age}</p>
                <a
                  href="tel:+91-8607879989"
                  className="z-30 font-medium hover:text-orange cursor-pointer"
                >
                  +91-8607879989
                </a>
                <a
                  href="mailto:sarthakkhetarpal2000@icloud.com"
                  className="z-30 font-medium hover:text-orange cursor-pointer"
                >
                  sarthakkhetarpal2000@icloud.com
                </a>
                <p className="font-medium">Chandigarh</p>
                <p className="flex justify-center items-center gap-1 font-medium">
                  India <span className="text-xl">🇮🇳</span>
                </p>
              </div>
            </div>

            <CTButton
              text="Download CV"
              icon={<FaDownload />}
              clickHandler={() =>
                window
                  .open(
                    "https://drive.google.com/file/d/1RoZC9lqN40Qo382KBzjU2k4rgpUugWI8/view?usp=sharing",
                    "_blank"
                  )
                  .focus()
              }
              currentMode={currentMode}
            />
          </div>

          <div className="lg:w-[42%] w-full flex lg:flex-col flex-row gap-4 sm:gap-8 items-center justify-center mx-auto lg:pl-[10%]">
            {/* About Experience card */}
            <div
              className={`shadow-orange shadow-md w-full h-[130px] md:h-[162px] lg:h-full flex flex-col gap-2 border-[1px] border-richblack-1100 ${
                currentMode === "dark"
                  ? "border-opacity-50"
                  : "border-opacity-15"
              } rounded-lg px-8 py-6`}
            >
              <div className="flex flex-row items-start justify-between text-3xl sm:text-4xl md:text-5xl font-bold text-orange">
                <span>
                  {(() => {
                    const start = new Date(2023, 1);
                    const now = new Date();

                    const years = now.getFullYear() - start.getFullYear();
                    const months = now.getMonth() - start.getMonth();
                    const totalMonths = years * 12 + months;

                    return (totalMonths / 12).toFixed(1);
                  })()}
                  +
                </span>
                <span>
                  <FaLaptopCode />
                </span>
              </div>
              <div className="flex flex-row items-center justify-start gap-2 text-base md:text-lg font-medium">
                <div className="w-[15%] sm:w-[10%] h-[2px] bg-richblack-1200"></div>
                <p className="w-[85%] sm:w-[90%]">YEARS OF EXPERIENCE</p>
              </div>
            </div>

            {/* About Rewards card */}
            <div
              className={`shadow-orange shadow-md w-full h-[130px] md:h-[162px] lg:h-full flex flex-col gap-2 border-[1px] border-richblack-1100 ${
                currentMode === "dark"
                  ? "border-opacity-50"
                  : "border-opacity-15"
              } rounded-lg px-8 py-6`}
            >
              <div className="flex flex-row items-start justify-between text-3xl sm:text-4xl md:text-5xl font-bold text-orange">
                <span>2</span>
                <span>
                  <FaTrophy />
                </span>
              </div>
              <div className="flex flex-row items-center justify-start gap-2 text-base md:text-lg font-medium">
                <div className="w-[10%] h-[2px] bg-richblack-1200"></div>
                <p className="w-[90%]">AWARDS WON</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[60%] mx-auto h-[1px] bg-richblack-950 my-12 opacity-60"></div>

        {/* Technical Skills Section */}
        <div className="w-full lg:max-w-[70%] flex flex-col items-center justify-center mx-auto gap-12">
          <p className="font-semibold text-3xl sm:text-4xl md:text-5xl">
            Technical Skills
          </p>

          <div className="flex flex-row flex-wrap items-center justify-center mx-auto gap-x-14 sm:gap-x-20 gap-y-8 sm:gap-y-12 md:gap-y-20 md:gap-x-28">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 items-center justify-center group cursor-pointer z-30 transition-all duration-500"
              >
                <p
                  className={`
                              ${
                                currentMode === "light"
                                  ? "bg-black text-white"
                                  : "bg-white text-black"
                              }
                              px-2 py-1 rounded-lg text-xs font-extrabold shadow-lg
                              ${
                                currentMode === "dark"
                                  ? "shadow-black"
                                  : "shadow-white"
                              }

                              invisible opacity-0 translate-y-4

                              transition-all duration-1000 ease-in-out

                              group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:animate-bounce
                            `}
                >
                  {skill.text}
                </p>
                <img
                  src={
                    currentMode === "light"
                      ? skill.sourceLight
                      : skill.sourceDark
                  }
                  alt={skill.text}
                  className="hover:scale-110 w-[50px] sm:w-[65px] md:w-[75px] lg:w-[90px] xl:w-[100px]"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-[60%] mx-auto h-[1px] bg-richblack-950 my-12 md:my-16 opacity-60"></div>

        {/* Education Section */}
        <div className="flex flex-col items-center justify-center gap-12">
          <p className="font-semibold  text-3xl sm:text-4xl md:text-5xl">
            Education
          </p>

          <div className="w-[95%] md:w-[80%] lg:w-[60%]">
            <EducationCard
              duration="2019 - 2023"
              degree="Bachelor of Technology"
              institute="SRM University"
              about="Bachelor of Technology(B.Tech) in Computer Science Engineering with specialisation in Cloud and Mobile based applications"
              cgpa="8.56 CGPA"
              line={false}
              currentMode={currentMode}
            />
          </div>
        </div>

        <div className="w-[60%] mx-auto h-[1px] bg-richblack-950 my-12 md:my-16 opacity-60"></div>

        {/* Experience Section */}
        <div className="flex flex-col items-center justify-center mx-auto gap-12">
          <p className="font-semibold text-3xl sm:text-4xl md:text-5xl">
            Experience
          </p>

          <div className="w-[95%] lg:w-[60%] flex flex-col gap-2 items-start justify-center">
            {
              experienceData.map((data, index) => (
                <ExperienceCard 
                key={index}
                line={data.line}
                duration={data.duration}
                designation={data.designation}
                organisation={data.organisation}
                about={data.about}
                currentMode={currentMode}
              />
              ))
            }
          </div>
        </div>

        <div className="w-[60%] mx-auto h-[1px] bg-richblack-950 my-12 md:my-16 opacity-60"></div>

        {/* Coding Profiles section */}
        <div className="flex flex-col items-center justify-center mx-auto gap-12">
          <p className="font-semibold  text-3xl sm:text-4xl md:text-5xl">
            Coding Profiles
          </p>

          <div className="flex flex-col lg:flex-row gap-10 sm:gap-12 md:14 lg:gap-16 items-center justify-center mx-auto w-[75%]">
            <a
              className="cursor-pointer z-30 group"
              target="blank"
              href="https://leetcode.com/SarthakKhetarpal/"
            >
              <CodingProfileCard
                icon={leetcodeIcn}
                total={leetcode ? leetcode.solvedProblem : "-"}
                loading={loading}
              />
            </a>

            <a
              className="cursor-pointer z-30"
              target="blank"
              href="https://www.geeksforgeeks.org/user/sarthakkhetarpal22/"
            >
              <CodingProfileCard
                icon={gfgIcn}
                total={gfg ? gfg : "-"}
                loading={loading}
              />
            </a>
          </div>
        </div>

        <div className="w-[60%] mx-auto h-[1px] bg-richblack-950 my-12 md:my-16 opacity-60"></div>

        {/* Awards & Certifications Section */}
        <div className="flex flex-col items-center justify-center mx-auto gap-12">
          <p className="font-semibold text-3xl sm:text-4xl md:text-5xl">
            Awards & Certifications
          </p>

          <div className="flex flex-col justify-center items-center gap-6">
            {certificationsAndAwardsData.map((data,index) => (
              <AwardCertificationCard
                key={index}
                icon={data.icon}
                text={data.text}
                link={data.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
