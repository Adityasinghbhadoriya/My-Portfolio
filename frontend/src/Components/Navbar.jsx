import React, { useState, useRef, useEffect } from 'react';
import lettera from '../../public/letter-a.png';
import { FaDownload, FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = React.forwardRef((props, ref) => {
  const [activeLink, setActiveLink] = useState('Home');
  const [underlineStyle, setUnderlineStyle] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const navRefs = useRef({});

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const currentRef = navRefs.current[activeLink];
    if (currentRef) {
      setUnderlineStyle({
        left: currentRef.offsetLeft,
        width: currentRef.offsetWidth,
      });
    }
  }, [activeLink]);

  return (
    <div ref={ref} className="pt-5 lg:px-20 px-0">
      <div
        className="fixed top-5 left-5 right-5 lg:left-20 lg:right-20 font-[font2] h-18 flex justify-between 
                   pr-10 pl-10 border border-zinc-700 rounded-lg bg-zinc-900 z-50"
      >
        <div className="w-14 pt-2">
          <img src={lettera} alt="" />
        </div>
        <div className="pt-5 flex justify-between">
          <div className="hidden md:flex gap-8 pl-8 text-zinc-400 relative">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                ref={(el) => (navRefs.current[link.name] = el)}
                className="relative z-10 cursor-pointer hover:text-orange-400 transition-colors"
                onClick={() => setActiveLink(link.name)}
              >
                {link.name}
              </a>
            ))}
            <span
              className="absolute top-7 h-0.5 bg-orange-400 transition-all duration-300"
              style={{
                left: underlineStyle.left || 0,
                width: underlineStyle.width || 0,
              }}
            />
          </div>
          <div className="md:hidden flex items-center mb-5">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes size={24} className="text-zinc-400" /> : <FaBars size={24} className="text-zinc-400" />}
            </button>
          </div>
        </div>
        <div className="hidden md:flex gap-8 text-zinc-400 pt-5">
          <a href="https://www.linkedin.com/in/aditya-singh-bhadoriya/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition">
            <FaLinkedin size={22} />
          </a>
          <a href="https://github.com/Adityasinghbhadoriya" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition">
            <FaGithub size={22} />
          </a>
          <div className='flex gap-5'>
            <a href="https://drive.google.com/file/d/18Yn2yw6nmIBnxcXv_FV4TC8TGuEep_0W/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition">
              <FaDownload size={22} />
            </a>
            <h1>Resume</h1>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-zinc-900 bg-opacity-95 flex flex-col items-center justify-center gap-10 z-40">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => { setActiveLink(link.name); setIsOpen(false); }}
              className="text-2xl text-zinc-400 hover:text-orange-400 transition"
            >
              {link.name}
            </a>
          ))}

          <div className="flex gap-8 text-zinc-400 mt-8">
            <a href="https://www.linkedin.com/in/aditya-singh-bhadoriya/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition">
              <FaLinkedin size={28} />
            </a>
            <a href="https://github.com/Adityasinghbhadoriya" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition">
              <FaGithub size={28} />
            </a>
            <div className='flex gap-2 items-center'>
              <a href="https://drive.google.com/file/d/18Yn2yw6nmIBnxcXv_FV4TC8TGuEep_0W/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition">
                <FaDownload size={28} />
              </a>
              <span className="text-zinc-400">Resume</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

export default Navbar;
