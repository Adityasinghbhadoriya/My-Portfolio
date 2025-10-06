import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import arrow from '../assets/right.png';

// images
import bootstrap from '../assets/bootstrap.jpg'
import css from '../assets/CSS.png'
import expressjs from '../assets/express-js-icon.webp'
import html from '../assets/html.png'
import figma from '../assets/figma.png'
import javaScript from '../assets/javascript.png'
import mongodb from '../assets/mongodb.png'
import python from '../assets/python.png'
import github from '../assets/github.png'
import vscode from '../assets/vscode.png'
import tailwind from '../assets/tailwindcss.png'
import sql from '../assets/sql.png'
import react from '../assets/reactimage.png'
import nodejs from '../assets/nodejsimage.png'
import machinelearning from '../assets/machinelearning.png'
import api from '../assets/api.png'
import cpp from '../assets/cpp.avif'

const Skills = () => {
  const [openCategories, setOpenCategories] = useState([]);
  const containerRefs = useRef([]);
  const skillRefs = useRef([]);

  // mapping skills with images
  const categories = [
    {
      title: 'Programming Languages/Frameworks',
      skills: [
        { name: 'C++', image: cpp },
        { name: 'SQL', image: sql },
        { name: 'JavaScript', image: javaScript },
        { name: 'HTML', image: html },
        { name: 'CSS', image: css },
      ],
    },
    {
      title: 'Technologies',
      skills: [
        { name: 'React.js', image: react },
        { name: 'Node.js', image: nodejs },
        { name: 'Express.js', image: expressjs },
        { name: 'MongoDB', image: mongodb },
        { name: 'Bootstrap', image: bootstrap },
        { name: 'TailwindCSS', image: tailwind },
      ],
    },
    {
      title: 'Developer Tools',
      skills: [
        { name: 'VS Code', image: vscode },
        { name: 'GitHub', image: github },
        { name: 'Figma', image: figma },
      ],
    },
    {
      title: 'AI & Tools',
      skills: [
        { name: 'Python', image: python },
        { name: 'Basic ML Concepts', image: machinelearning },
        { name: 'Using AI APIs (Gemini/OpenAI)', image: api },
      ],
    },
  ];

  const toggleCategory = (index) => {
    setOpenCategories((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  useEffect(() => {
    categories.forEach((_, i) => {
      const timeline = gsap.timeline();
      if (openCategories[i]) {
        timeline.to(containerRefs.current[i], {
          height: 'auto',
          duration: 0.3,
          ease: 'power2.out',
        });
        timeline.fromTo(
          skillRefs.current[i],
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1, duration: 0.4, ease: 'power2.out' },
          '-=0.2'
        );
      } else {
        timeline.to(skillRefs.current[i], {
          y: 20,
          opacity: 0,
          stagger: 0.05,
          duration: 0.3,
          ease: 'power2.in',
        });
        timeline.to(
          containerRefs.current[i],
          { height: 0, duration: 0.3, ease: 'power2.in' },
          '-=0.2'
        );
      }
    });
  }, [openCategories]);

  return (
    <div id='skills' className="font-[font2] min-h-screen pt-50 px-20 pb-25">
      <h1 className="text-6xl">Skills</h1>
      <div className="mt-20 flex flex-col gap-5">
        {categories.map((category, index) => (
          <div key={category.title}>
            {/* Category heading */}
            <div
              className="heading relative h-35 w-full overflow-hidden border-zinc-200 border rounded-xl p-8 pt-13 flex justify-between cursor-pointer z-8"
              onClick={() => toggleCategory(index)}
            >
              <div className="subheading h-full w-full bg-zinc-100 absolute top-0 right-0 rounded-xl opacity-0"></div>
              <h1 className="uppercase text-4xl bg-gradient-to-r from-orange-700 to-orange-300 bg-clip-text text-transparent z-8">
                {category.title}
              </h1>
              <img
                src={arrow}
                alt=""
                className={`w-12 transition-transform duration-300 z-8 ${
                  openCategories[index] ? 'rotate-270 bg-black rounded-full' : 'rotate-90'
                }`}
              />
            </div>

            {/* Skills under the category */}
            <div
              ref={(el) => (containerRefs.current[index] = el)}
              className="overflow-hidden mt-5 flex flex-col gap-3"
              style={{ height: 0 }}
            >
              {category.skills.map((skill, i) => (
                <div
                  key={skill.name}
                  ref={(el) => {
                    if (!skillRefs.current[index]) skillRefs.current[index] = [];
                    skillRefs.current[index][i] = el;
                  }}
                  className="flex items-center gap-5 h-20 w-full bg-zinc-900 rounded-xl border-t border-black text-3xl p-5"
                >
                  <img src={skill.image} alt={skill.name} className="h-12 w-12 object-contain rounded-md" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
