import React, { useRef } from 'react';
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

  return (
    <div  className="relative w-full overflow-x-hidden">
      <Hero />
      <About />
      <Projects />
      <Eyes />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
