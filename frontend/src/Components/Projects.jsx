import React, { useState } from 'react'
import edemy from '../assets/Edemy.png'
import feasitfy from '../assets/FeastiFy.png'
import k72 from '../assets/K72.png'
import lazrev from '../assets/Lazrev.png'
import learnedge from '../assets/Learnedge.png'
import novalnexus from '../assets/Novalnexus.png'
import realtrust from '../assets/Realtrust.png'
import sundown from '../assets/Sundown.png'
import urbanloom from '../assets/Urbanloom.png'
import codex from '../assets/Codexai.png'

const projects = [
  { 
    name: "Edemy", 
    img: edemy, 
    tech: "#mern",
    desc: "A full-stack e-learning platform with secure authentication, course enrollment, and progress tracking for 50+ students.",
    link: null // Under development
  },
  { 
    name: "UrbanLoom", 
    img: urbanloom, 
    tech: "#mernstack",
    desc: "A sustainable clothing marketplace featuring dynamic filtering, wishlist, and real-time shopping cart updates.",
    link: "https://urban-loom-murex.vercel.app/"
  },
  { 
    name: "FeastiFy", 
    img: feasitfy, 
    tech: "#mernstack",
    desc: "A food ordering platform with menu browsing, cart management, live order tracking, and payment integration.",
    link: null // Not pushed to GitHub yet
  },
  { 
    name: "Codex AI", 
    img: codex, 
    tech: "#mernstack",
    desc: "An AI-powered coding assistant that generates, refactors, and debugs code using natural language prompts.",
    link: "https://www.linkedin.com/posts/aditya-singh-bhadoriya_ai-reactjs-nodejs-activity-7349630837329489920-1FKi"
  },
  { 
    name: "Sundown Studios", 
    img: sundown, 
    tech: "#javascript",
    desc: "An interactive agency portfolio showcasing animations, scroll effects, and responsive creative layouts.",
    link: "https://www.linkedin.com/posts/aditya-singh-bhadoriya_connections-webdevelopment-frontend-activity-7200350101062455297-gDwN"
  },
  { 
    name: "Real Trust", 
    img: realtrust, 
    tech: "#mernstack",
    desc: "A real-estate platform to browse, filter, and compare properties with a modern and intuitive UI.",
    link: "https://real-trust-website-vpek.vercel.app/"
  },
  { 
    name: "Noval Nexus", 
    img: novalnexus, 
    tech: "#mernstack",
    desc: "A collaboration hub designed for startups to manage tasks, track progress, and communicate effectively.",
    link: "https://www.linkedin.com/posts/aditya-singh-bhadoriya_fullstackdevelopment-reactjs-tailwindcss-activity-7277577018748121088-wHnG"
  },
  { 
    name: "LearnEdge", 
    img: learnedge, 
    tech: "#mernstack",
    desc: "A mobile-first platform providing micro-courses, quizzes, and gamified learning experiences.",
    link: "https://learn-edge.vercel.app/"
  },
  { 
    name: "K72.ca", 
    img: k72, 
    tech: "#reactjs",
    desc: "A professional business website with SEO optimization, dynamic content, and responsive layouts.",
    link: "https://github.com/Adityasinghbhadoriya/K72.ca"
  },
  { 
    name: "Lazrev", 
    img: lazrev, 
    tech: "#javascript",
    desc: "A SaaS dashboard for business analytics with charts, data visualization, and real-time insights.",
    link: "https://www.linkedin.com/posts/aditya-singh-bhadoriya_journeytofrontend-gsapanimations-locomotivescroll-activity-7347258236636401664-L6U8"
  },
]

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  const handleCardClick = (link) => {
    if (link) {
      window.open(link, "_blank");
    } else {
      alert("🚧 This project is under development. Stay tuned!");
    }
  };

  return (
    <div id='work' className='relative font-[font2] min-h-screen pt-50 px-20'>

      <div className="relative z-10">
        <h1 className='text-6xl'>Projects</h1>
      </div>

      {/* Decorative circles */}
      <div className='absolute h-80 w-80 bg-orange-500 rounded-full blur-3xl top-130 right-10 -z-10'></div>
      <div className='circle absolute h-80 w-80 bg-orange-500 rounded-full blur-3xl top-150 right-50 -z-10'></div>

      {/* Project Grid */}
      <div className='flex flex-wrap gap-10 mt-20 relative z-10 justify-center'>
        {visibleProjects.map((project, index) => (
          <div 
            key={index}
            onClick={() => handleCardClick(project.link)}
            className={`w-160 h-115 bg-zinc-500 rounded-xl overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${
              !project.link && 'opacity-80 cursor-not-allowed'
            }`}
          >
            <img className='h-80 w-full object-cover' src={project.img} alt={project.name} />

            <div className='h-40 w-full bg-zinc-900'>
              <div className='flex justify-between p-5 items-center'>
                {/* Name + dot + SVG */}
                <div className='flex gap-3 items-center'>
                  <h1 className='text-3xl'>{project.name}</h1>

                  {/* Orange dot disappears on hover */}
                  <div className='h-3 w-3 bg-orange-400 rounded-full transition-opacity duration-300 group-hover:opacity-0'></div>

                  {/* SVG slides in from left */}
                  <svg
                    className='w-5 opacity-0 -translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0'
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                </div>

                {/* Tech tag */}
                <div>
                  <h2 className='bg-zinc-800 text-zinc-400 px-1 rounded-md border border-zinc-600'>
                    {project.tech}
                  </h2>
                </div>
              </div>

              {/* Description */}
              <div className='px-5'>
                <p className='text-start text-zinc-400'>{project.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Show more / less button */}
      <div className='flex justify-center items-center mt-10 mr-10 relative z-10'>
        <button
          onClick={() => setShowAll(!showAll)}
          className='px-6 py-3 bg-zinc-700 rounded-xl hover:bg-zinc-600 transition cursor-pointer'
        >
          {showAll ? "Show Less" : "View All Projects"}
        </button>
      </div>
    </div>
  )
}

export default Projects
  