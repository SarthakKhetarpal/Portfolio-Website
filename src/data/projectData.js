import studynotion from '../assets/projects/studynotion.png';
import portfolio from '../assets/projects/portfolio.png';
import weather from '../assets/projects/weather.png';
import devDetective from '../assets/projects/devDetective.png';

// Professional work thumbnails
import ecommerce from '../assets/projects/ecommerce.png';
import grocery from '../assets/projects/grocery.png';
import onekindact from '../assets/projects/onekindact.png';
import virtualdcs from '../assets/projects/virtualdcs.png';

import html from '../assets/Skills/stack/HTML.png';
import css from '../assets/Skills/stack/CSS.png';
import js from '../assets/Skills/stack/Javascript.svg';
import ts from '../assets/Skills/stack/Typescript.svg';
import tailwind from '../assets/Skills/stack/Tailwind.png';
import react from '../assets/Skills/stack/React.png';
import next from '../assets/Skills/nextjs.png';
import express from '../assets/Skills/stack/Express.png';
import node from '../assets/Skills/stack/NodeJs.svg';
import mongodb from '../assets/Skills/stack/MongoDB.svg';
import postgresql from '../assets/Skills/postgresql.png';

import portfolioVideo from '../assets/videos/portfolioVideo.mov';
import weatherVideo from '../assets/videos/weatherVideo.mov';
import studynotionVideo from '../assets/videos/studynotionVideo.mov';
import devDetectiveVideo from '../assets/videos/devDetectiveVideo.mov';

export const projectData = [
    // ---------- Professional Work (client projects — no public code) ----------
    {
        id : 1,
        img : virtualdcs,
        video : null,
        name : "VirtualDCS - Application Security Hardening",
        desc : "Ongoing security engagement for VirtualDCS, a cloud services provider (via Poplify). Migrated hardcoded secrets from source code to Azure Key Vault with secret rotation, secured API endpoints, and implemented role-based authorization (RBAC) across the application.",
        skills : [{node},{express},{ts},{react}],
        github : "",
        url : ""
    },
    {
        id : 2,
        img : ecommerce,
        video : null,
        name : "eCommerce Platform (Client Project)",
        desc : "Led the end-to-end development of a full-stack eCommerce platform at Neebha Web Services as Unit Lead of a 4-member MERN team — product catalog, cart and order workflows, secure authentication, and optimized REST APIs, built for scalability and seamless user experience.",
        skills : [{react},{next},{node},{express},{mongodb},{tailwind},{ts}],
        github : "",
        url : ""
    },
    {
        id : 3,
        img : grocery,
        video : null,
        name : "Online Grocery Store (Client Project)",
        desc : "Designed and delivered the backend and storefront for an online grocery platform at Neebha Web Services — inventory, ordering and delivery workflows modeled with clean, modular services and optimized database queries for performance and maintainability.",
        skills : [{react},{node},{express},{postgresql},{tailwind},{js}],
        github : "",
        url : ""
    },
    {
        id : 4,
        img : onekindact,
        video : null,
        name : "One Kind Act - NGO Platform",
        desc : "Full-stack web platform delivered end-to-end for the NGO One Kind Act (via Poplify) — architecture, development, and production release, giving the organisation a modern web presence built on the MERN stack.",
        skills : [{react},{next},{node},{express},{mongodb},{tailwind},{ts}],
        github : "",
        url : ""
    },

    // ---------- Personal Projects (open source) ----------
    {
        id : 5,
        img : studynotion,
        video : studynotionVideo,
        name : "StudyNotion - EdTech Complete Solution",
        desc : "A MERN stack EdTech platform with two user roles — teachers create and manage courses, students purchase and consume them through a Razorpay-integrated payment gateway.",
        skills : [{html},{css},{tailwind},{js},{mongodb},{react},{express},{node}],
        github : "https://github.com/SarthakKhetarpal/StudyNotion---EdTech-Web-App.git",
        url : ""
    },
    {
        id : 6,
        img : portfolio,
        video : portfolioVideo,
        name : "Portfolio Website",
        desc : "This website — designed and built from scratch with React and Tailwind CSS, with serverless API functions on Vercel powering the live coding-profile stats and contact form.",
        skills : [{html},{css},{tailwind},{js},{react},{express},{node}],
        github : "https://github.com/SarthakKhetarpal/Portfolio-Website.git" ,
        url : "https://sarthakkhetarpal-portfolio.vercel.app"
    },
    {
        id : 7,
        img : weather,
        video : weatherVideo,
        name : "Weather Web App",
        desc : "A weather forecast web application which uses API calls to fetch the latest weather update for the user's current location or requested location.",
        skills: [{html},{css},{js}],
        github : "https://github.com/SarthakKhetarpal/Weather-Web-App.git" ,
        url : ""
    },
    {
        id : 8,
        img : devDetective,
        video : devDetectiveVideo,
        name : "Dev Detective",
        desc : "Dev Detective is a web app project which uses API call to find out GitHub user profile when the user provides a GitHub username.",
        skills: [{html},{css},{tailwind},{js}],
        github : "https://github.com/SarthakKhetarpal/Dev-Detective.git" ,
        url : ""
    }
];
