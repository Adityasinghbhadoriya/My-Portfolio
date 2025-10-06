import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const MouseFollower = () => {
  const followerRef = useRef(null);

  useEffect(() => {
    const follower = followerRef.current;

    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let pos = { x: mouse.x, y: mouse.y };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    gsap.ticker.add(() => {
      pos.x += (mouse.x - pos.x) * 0.15;
      pos.y += (mouse.y - pos.y) * 0.15;
      gsap.set(follower, { x: pos.x, y: pos.y });
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      gsap.ticker.remove(() => {});
    };
  }, []);

  return (
    <div
      ref={followerRef}
      className="fixed top-0 left-0 w-5 h-5 bg-orange-500 rounded-full pointer-events-none mix-blend-difference opacity-80"
      style={{
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
      }}
    ></div>
  );
};

export default MouseFollower;
