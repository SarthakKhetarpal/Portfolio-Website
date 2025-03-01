import studynotion from '../assets/projects/studynotion.png';
import portfolio from '../assets/projects/portfolio.png';
import razorpay from '../assets/projects/razorpay.png';
import weather from '../assets/projects/weather.png';
import passwordGenerator from '../assets/projects/passwordGenerator.png';
import ticTacToe from '../assets/projects/tictactoe.png';
import devDetective from '../assets/projects/devDetective.png';
import discord from '../assets/projects/discord.png';
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
import passwordGeneratorVideo from '../assets/videos/passwordGenerator.mov';
import ticTacToeVideo from '../assets/videos/tictactoeVideo.mov';
import studynotionVideo from '../assets/videos/studynotionVideo.mov';
import devDetectiveVideo from '../assets/videos/devDetectiveVideo.mov';
import discordVideo from '../assets/videos/discordVideo.mov';

export const projectData = [
    {
        id : 1,
        img : studynotion,
        video : studynotionVideo,
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
        desc : "This is Razorpay Clone website created using HTML, Tailwind CSS and Javascript. It is a responsive website.",
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
        skills: [{html},{css},{js}],
        github : "https://github.com/SarthakKhetarpal/Weather-Web-App.git" ,
        url : ""
    },
    {
        id : 5,
        img : devDetective,
        video : devDetectiveVideo,
        name : "Dev Detective",
        desc : "Dev Detective is a web app project which uses API call to find out GitHub user profile when the user provides a GitHub username.",
        skills: [{html},{css},{tailwind},{js}],
        github : "https://github.com/SarthakKhetarpal/Dev-Detective.git" ,
        url : ""
    },
    {
        id : 6,
        img : passwordGenerator,
        video : passwordGeneratorVideo,
        name : "Password Generator Web App",
        desc : "A random password generator web application which uses underline logic to generate a custom random password on the basis of choices selected by the user.",
        skills: [{html},{css},{tailwind},{js}],
        github : "https://github.com/SarthakKhetarpal/Password-Generator-WebApp.git" ,
        url : ""
    },
    {
        id : 7,
        img : ticTacToe,
        video : ticTacToeVideo,
        name : "Tic-Tac-Toe Game Web App",
        desc : "Tic-Tac-Toe game web application.",
        skills: [{html},{css},{js}],
        github : "https://github.com/SarthakKhetarpal/Tic-Tac-Toe.git" ,
        url : ""
    },
    {
        id : 8,
        img : discord,
        video : discordVideo,
        name : "Discord Website Clone",
        desc : "This is Discord Clone website created using HTML, CSS & Tailwind CSS. It is a responsive website.",
        skills : [{html},{css},{tailwind}],
        github : "https://github.com/SarthakKhetarpal/Discord-Website-Clone.git" ,
        url : ""
    },
    {
        id : 9,
        img : chair,
        video : chairVideo,
        name : "Animation Chair Project",
        desc : "Animation chair project is built on CSS responsiveness, animation and transition effects.",
        skills : [{html},{css}],
        github : "https://github.com/SarthakKhetarpal/Animation-Chair-Project.git" ,
        url : ""
    }
];