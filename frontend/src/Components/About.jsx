import React from 'react'
import aboutimg from '../assets/websitecreator1.svg'

const About = () => {
  return (
    <div id='about' className='relative font-[font2] pt-50 pl-20 h-screen'>
      <div>
        <h1 className='text-6xl'>About Me</h1>
      </div>

      <div className='circle h-80 w-80 bg-orange-500 absolute rounded-full blur-3xl bottom-10 left-10 z-0'></div>

      <div className='mt-10 relative z-10 flex gap-10'>
        <p className='text-2xl'>
          I’m a developer who enjoys turning ideas into thoughtful digital experiences. <br />
          For me, building software isn’t just about writing code — it’s about crafting <br />
          interfaces and products that feel intuitive, reliable, and enjoyable to use. <br /> <br />
          Over the years, I’ve had the chance to work on a variety of projects, from small <br />
          experiments to full-fledged platforms, each teaching me something new about <br />
          design, collaboration, and the balance between speed and quality. I’ve also <br />
          taken part in hackathons and team projects, where I learned the value of creative <br />
          problem-solving under pressure and the excitement of bringing an idea to life <br />
          in a short time. <br /> <br />
          Outside of work, I’m curious by nature. I love exploring new tools and technologies, <br />
          learning how things are built, and experimenting with ways to make them better. <br />
          When I’m not coding, you’ll usually find me playing sports, reading, or diving into <br />
          something creative that sparks my interest.
        </p>
        <img src={aboutimg} alt="" className='w-124'/>
      </div>
    </div>
  )
}

export default About
