import studynotion from '../assets/projects/studynotion.png';
import portfolio from '../assets/projects/portfolio.png';
import razorpay from '../assets/projects/razorpay.png';
import weather from '../assets/projects/weather.png';
import chair from '../assets/projects/chair.png';
import html from '../assets/Skills/stack/HTML.png';
import css from '../assets/Skills/stack/CSS.png';
import js from '../assets/Skills/stack/Javascript.svg';
// import java from '../assets/Skills/java.png';
// import cpp from '../assets/Skills/cpp.png';
import tailwind from '../assets/Skills/stack/Tailwind.png';
import react from '../assets/Skills/stack/React.png';
import express from '../assets/Skills/stack/Express.png';
import node from '../assets/Skills/stack/NodeJs.svg';
// import plsql from '../assets/Skills/plsql.png';
// import mysql from '../assets/Skills/mysql.png';
import mongodb from '../assets/Skills/stack/MongoDB.svg';
// import git from '../assets/Skills/stack/Git.svg';
// import github from '../assets/Skills/stack/Github.svg';
import portfolioVideo from '../assets/videos/portfolioVideo.mov';
import chairVideo from '../assets/videos/chairVideo.mov';
import weatherVideo from '../assets/videos/weatherVideo.mov';
import razorpayVideo from '../assets/videos/razorpayVideo.mov';

export const projectData = [
    {
        id : 1,
        img : studynotion,
        video : portfolioVideo,
        name : "StudyNotion - EdTech Complete Solution",
        desc : "This is a MERN stack based web application for complete Ed-Tech solutions for students and teachers.",
        skills : [{html},{css},{tailwind},{js},{mongodb},{react},{express},{node}],
        github : "https://github.com/SarthakKhetarpal/StudyNotion---EdTech-Web-App.git",
        url : ""
    },
    {
        id : 2,
        img : portfolio,
        video : portfolioVideo,
        name : "Portfolio Website",
        desc : "This is my personal portfolio website developed using MERN Stack.",
        skills : [{html},{css},{tailwind},{js},{mongodb},{react},{express},{node}],
        github : "https://github.com/SarthakKhetarpal/Portfolio-Website.git" ,
        url : "https://sarthakkhetarpal-portfolio.vercel.app"
    },
    {
        id : 3,
        img : razorpay,
        video : razorpayVideo,
        name : "Razorpay Website Clone",
        desc : "This is Razorpay Clone website created using HTML, Tailwind CSS and Javascript. This project was part of my MERN Stack course.",
        skills : [{html},{css},{tailwind},{js}],
        github : "https://github.com/SarthakKhetarpal/Razorpay-Website-Clone.git" ,
        url : ""
    },
    {
        id : 4,
        img : weather,
        video : weatherVideo,
        name : "Weather Web App",
        desc : "A weather forecast web application which uses API calls to fetch the latest weather update for the user's current location or requested location.",
        skills: [{html},{css},{tailwind},{js}],
        github : "https://github.com/SarthakKhetarpal/Weather-Web-App.git" ,
        url : ""
    },
    {
        id : 5,
        img : chair,
        video : chairVideo,
        name : "Animation Chair Project",
        desc : "Animation chair project is built on CSS responsiveness, animation and transition effects.",
        skills : [{html},{css},{tailwind}],
        github : "https://github.com/SarthakKhetarpal/Animation-Chair-Project.git" ,
        url : ""
    }
];