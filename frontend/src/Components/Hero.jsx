import React, { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  const [showTyped, setShowTyped] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTyped(true);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="home" className="font-[font2] min-h-screen w-full pt-40 pl-5 lg:pl-20">
      <div className="right h-full w-full">
        <div className="bg-zinc-800 w-90  lg:w-[23vw] lg:h-8 p-1 rounded-md">
          <h1>Aditya Singh Bhadoriya — Full Stack Developer</h1>
        </div>

        <div className="mt-10 text-7xl lg:text-8xl leading-snug h-80">
          {showTyped && (
            <ReactTyped
              strings={[
                "Let's create something <span class='bg-gradient-to-r from-orange-700 to-orange-300 bg-clip-text text-transparent'>wonderful</span> together",
              ]}
              typeSpeed={60}
              backSpeed={40}
              backDelay={1500}
              cursorChar="."
            />
          )}
        </div>

        <div className="flex gap-5 pt-45 lg:pt-0 ">
          <a href="#contact" className="relative px-7 py-2 bg-zinc-100 text-black rounded-lg cursor-pointer overflow-hidden group hover:bg-zinc-700 hover:text-zinc-50 duration-200">
            Say hello
          </a>

          <a href="#work" className="relative px-7 py-2 bg-zinc-900 border border-zinc-700 text-white rounded-lg cursor-pointer overflow-hidden group">
            <div className="btn-bg absolute top-0 left-0 w-full h-full bg-white rounded-lg"></div>
            <h1 className="relative z-10 transition-colors duration-500 group-hover:text-black">
              See my work
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
