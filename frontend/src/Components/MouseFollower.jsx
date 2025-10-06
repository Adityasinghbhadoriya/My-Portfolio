import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const MouseFollower = ({ color = "orange", size = 20, speed = 0.2, containerRef }) => {
  const ballRef = useRef(null);

  useEffect(() => {
    const ball = ballRef.current;
    const container = containerRef?.current || document.body;

    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let pos = { x: mouse.x, y: mouse.y };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const animate = () => {
      const containerY = containerRef ? gsap.getProperty(container, "y") : 0;

      pos.x += (mouse.x - pos.x) * speed;
      pos.y += (mouse.y - pos.y) * speed;

      gsap.set(ball, {
        x: pos.x,
        y: pos.y - containerY,
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [containerRef, speed]);

  return (
    <div
      ref={ballRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: color,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
};

export default MouseFollower;
