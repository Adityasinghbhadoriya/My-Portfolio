import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';

const Stairs = ({ children, navbarRef }) => {
  const currentPath = useLocation().pathname;
  const stairParentRef = useRef(null);
  const pageRef = useRef(null);

  useGSAP(function () {
    window.scrollTo(0, 0);
    const tl = gsap.timeline();

    // Navbar hide at start
    tl.to(navbarRef.current, { opacity: 0, duration: 0.2 });

    // Stairs animation
    tl.to(stairParentRef.current, { display: 'block' });
    tl.from('.stair', {
      height: 0,
      stagger: { amount: -0.2 },
    });
    tl.to('.stair', {
      y: '100%',
      stagger: { amount: -0.2 },
    });
    tl.to(stairParentRef.current, { display: 'none' });
    tl.to('.stair', { y: '0%' });

    // Page content fade in
    gsap.from(pageRef.current, {
      opacity: 0,
      delay: 1.3,
      scale: 1.2,
    });

    // Navbar fade in after stairs
    tl.to(navbarRef.current, { opacity: 1, duration: 0.5 }, "-=0.5");
  }, [currentPath]);

  return (
    <div>
      <div ref={stairParentRef} className="h-screen w-full fixed z-20 top-0">
        <div className="h-full w-full flex">
          <div className="stair h-full w-1/5 bg-white"></div>
          <div className="stair h-full w-1/5 bg-white"></div>
          <div className="stair h-full w-1/5 bg-white"></div>
          <div className="stair h-full w-1/5 bg-white"></div>
          <div className="stair h-full w-1/5 bg-white"></div>
        </div>
      </div>
      <div ref={pageRef}>{children}</div>
    </div>
  );
};

export default Stairs;
