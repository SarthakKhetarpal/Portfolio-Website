import { Route } from "react-router-dom";
import "./App.css";
import { Routes } from "react-router-dom";
import { Home } from '../src/Pages/Home';
import { About } from '../src/Pages/About';
import { Portfolio } from '../src/Pages/Portfolio';
import { Contact } from '../src/Pages/Contact';
import { Sidebar } from "./components/Sidebar/Sidebar";
import { useState, useEffect } from "react";

function App() {

  const mode = "mode";

   // Initialize currentMode from local storage, default to "dark" if not set
   const [currentMode, setCurrentMode] = useState(() => {
    return localStorage.getItem(mode) || "light";
  });

  // Update local storage whenever currentMode changes
  useEffect(() => {
    localStorage.setItem(mode, currentMode);
    console.log("Current Mode -> ",currentMode);
  }, [currentMode]);

  return (
    <div className={`font-sans ${currentMode === "light" ? "bg-white" : "bg-richblack-1000"} transition-all duration-500 overflow-y-auto overflow-x-hidden`}>

      <div className="w-screen h-min-screen flex flex-col sm:gap-10 lg:flex-row-reverse lg:gap-0 flex-wrap">

        <div className="relative flex items-center justify-center mx-auto pt-16 lg:pt-0">
          <Routes>
            <Route path="/" element={<Home currentMode={currentMode}/>}/>
            <Route path="/about" element={<About currentMode={currentMode}/>}/>
            <Route path="/portfolio" element={<Portfolio currentMode={currentMode}/>}/>
            <Route path="/contact" element={<Contact currentMode={currentMode}/>}/>
          </Routes>
        </div>

        <div className={`fixed h-auto lg:h-full w-full lg:w-fit z-50 lg:z-0 lg:bg-transparent py-3
  ${currentMode === "light" ? "bg-richblack-5" : "bg-richblack-950 text-white"}`}>
          <div className="relative flex lg:flex-col sm:flex-row items-end justify-center h-full">
            <Sidebar currentMode={currentMode} setCurrentMode={setCurrentMode}/>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
