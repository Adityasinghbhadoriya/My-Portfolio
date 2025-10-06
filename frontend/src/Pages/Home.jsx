import React, { useRef, useLayoutEffect } from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Projects from '../Components/Projects';
import Skills from '../Components/Skills';
import Eyes from '../Components/Eyes';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import MouseFollower from '../Components/MouseFollower';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const containerRef = useRef(null);

  // useLayoutEffect(() => {
  //   const container = containerRef.current;
  //   const height = container.scrollHeight;
  //   document.body.style.height = `${height}px`;

  //   // Create the ScrollTrigger instance and store it
  //   const trigger = ScrollTrigger.create({
  //     trigger: document.body,
  //     start: "top top",
  //     end: "bottom bottom",
  //     scrub: 1,
  //     onUpdate: (self) => {
  //       gsap.set(container, { y: -self.scroll() });
  //     }
  //   });

  //   // Cleanup
  //   return () => {
  //     trigger.kill(); // ✅ Kill the specific instance
  //     document.body.style.height = "auto";
  //   };
  // }, []);

  return (
    <div ref={containerRef} className='absolute  top-0 left-0 w-full'>
        {/* <Navbar/> */}
        <Hero/>
        <About/>
        <Projects/>
        <Eyes/>
        <Skills/>
        <Contact/>
        {/* <MouseFollower color="orange" size={20} speed={0.2} containerRef={containerRef} /> */}
        <Footer/>
    </div>
  )
}

export default Home;
