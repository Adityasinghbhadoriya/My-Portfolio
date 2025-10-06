"use client"

import React, { useEffect } from 'react';

function Eyes() {
    useEffect(() => {
        if (typeof window === 'undefined') return; 

        const handleMouseMove = (e) => {
            const moveEye = (eyeRef) => {
                if (eyeRef) {
                    const rect = eyeRef.getBoundingClientRect();
                    const eyeCenterX = rect.left + rect.width / 2;
                    const eyeCenterY = rect.top + rect.height / 2;
                    const dx = e.clientX - eyeCenterX;
                    const dy = e.clientY - eyeCenterY;
                    const angle = Math.atan2(dy, dx);
                    const distance = Math.min(rect.width / 4, Math.hypot(dx, dy)); 
                    const newX = Math.cos(angle) * distance;
                    const newY = Math.sin(angle) * distance;

                    eyeRef.querySelector('.pupil').style.transform = `translate(${newX}px, ${newY}px)`;
                }
            };

            moveEye(document.getElementById('left-eye'));
            moveEye(document.getElementById('right-eye'));
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className='lg:mt-35 mt-40 font-[font3]' >
            <div className="marquee overflow-hidden w-full h-22 lg:h-35 -mb-80 lg:-mb-20 p-3 flex gap-10 bg-orange-500">
                <div className="marquee-inner flex gap-20 text-6xl lg:text-9xl font-bold ">
                    <span className="text-stroke">CODE</span>
                    <span className='h-5 w-5 bg-white rounded-full mt-5 lg:mt-13'></span>
                    <span className="text-stroke">DESIGN</span>
                    <span className='h-5 w-5 bg-white rounded-full mt-5 lg:mt-13'></span>
                    <span className="text-stroke">CREATE</span>
                    <span className='h-5 w-5 bg-white rounded-full mt-5 lg:mt-13'></span>
                    <span className="text-stroke">INSPIRE</span>
                    <span className='h-5 w-5 bg-white rounded-full mt-5 lg:mt-13'></span>
                    <span className="text-stroke">CODE</span>
                    <span className='h-5 w-5 bg-white rounded-full mt-5 lg:mt-13'></span>
                    <span className="text-stroke">DESIGN</span>
                    <span className='h-5 w-5 bg-white rounded-full mt-5 lg:mt-13'></span>
                    <span className="text-stroke">CREATE</span>
                    <span className='h-5 w-5 bg-white rounded-full mt-5 lg:mt-13'></span>
                    <span className="text-stroke">INSPIRE</span>
                    <span className='h-5 w-5 bg-white rounded-full mt-5 lg:mt-13'></span>
                </div>
               <div className="marquee-inner flex gap-20 text-6xl lg:text-9xl font-bold ">
                    <span className="text-stroke">CODE</span>
                    <span className='h-5 w-5 bg-white rounded-full mt-5 lg:mt-13'></span>
                    <span className="text-stroke">DESIGN</span>
                    <span className='h-5 w-5 bg-white rounded-full mt-5 lg:mt-13'></span>
                    <span className="text-stroke">CREATE</span>
                    <span className='h-5 w-5 bg-white rounded-full mt-5 lg:mt-13'></span>
                    <span className="text-stroke">INSPIRE</span>
                    <span className='h-5 w-5 bg-white rounded-full mt-5 lg:mt-13'></span>
                    <span className="text-stroke">CODE</span>
                    <span className='h-5 w-5 bg-white rounded-full mt-5 lg:mt-13'></span>
                    <span className="text-stroke">DESIGN</span>
                    <span className='h-5 w-5 bg-white rounded-full mt-5 lg:mt-13'></span>
                    <span className="text-stroke">CREATE</span>
                    <span className='h-5 w-5 bg-white rounded-full mt-5 lg:mt-13'></span>
                    <span className="text-stroke">INSPIRE</span>
                    <span className='h-5 w-5 bg-white rounded-full mt-5 lg:mt-13'></span>
                </div>
            </div>
            <div className='eyes w-full min-h-screen overflow-hidden flex items-center justify-center'>
                <div data-scroll data-scroll-speed='-.7' className='relative h-100 w-150 bg-cover bg-center'>
                    <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                        <div className='flex items-center justify-center w-[16vw] h-[16vw] rounded-full bg-zinc-100'>
                            <div
                                id='left-eye'
                                className='w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900'
                            >
                                <div className='pupil w-1/6 h-1/6 rounded-full bg-zinc-100'></div>
                            </div>
                        </div>
                        <div className='w-[16vw] h-[16vw] flex rounded-full items-center justify-center bg-zinc-100'>
                            <div
                                id='right-eye'
                                className='w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900'
                            >
                                <div className='pupil w-1/6 h-1/6 rounded-full bg-zinc-100'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="marquee1 overflow-hidden w-full h-22 lg:h-35 -mt-80 lg:-mt-20 p-3 flex gap-10 bg-orange-500">
                <div className="marquee-inner1 flex gap-20 text-6xl lg:text-9xl font-bold ">
                    <span className="text-stroke">CODE</span>
                    <span className='h-5 w-5 bg-white rounded-full mt-5 lg:mt-13'></span>
                    <span className="text-stroke">DESIGN</span>
                    <span className='h-5 w-5 bg-white rounded-full mt-5 lg:mt-13'></span>
                    <span className="text-stroke">CREATE</span>
                    <span className='h-5 w-5 bg-white rounded-full mt-5 lg:mt-13'></span>
                    <span className="text-stroke">INSPIRE</span>
                    <span className='h-5 w-5 bg-white rounded-full mt-5 lg:mt-13'></span>
                    <span className="text-stroke">CODE</span>
                    <span className='h-5 w-5 bg-white rounded-full mt-5 lg:mt-13'></span>
                    <span className="text-stroke">DESIGN</span>
                    <span className='h-5 w-5 bg-white rounded-full mt-5 lg:mt-13'></span>
                    <span className="text-stroke">CREATE</span>
                    <span className='h-5 w-5 bg-white rounded-full mt-5 lg:mt-13'></span>
                    <span className="text-stroke">INSPIRE</span>
                    <span className='h-5 w-5 bg-white rounded-full mt-5 lg:mt-13'></span>
                </div>
               <div className="marquee-inner1 flex gap-20 text-6xl lg:text-9xl font-bold ">
                    <span className="text-stroke">CODE</span>
                    <span className='h-5 w-5 bg-white rounded-full mt-5 lg:mt-13'></span>
                    <span className="text-stroke">DESIGN</span>
                    <span className='h-5 w-5 bg-white rounded-full mt-5 lg:mt-13'></span>
                    <span className="text-stroke">CREATE</span>
                    <span className='h-5 w-5 bg-white rounded-full mt-5 lg:mt-13'></span>
                    <span className="text-stroke">INSPIRE</span>
                    <span className='h-5 w-5 bg-white rounded-full mt-5 lg:mt-13'></span>
                    <span className="text-stroke">CODE</span>
                    <span className='h-5 w-5 bg-white rounded-full mt-5 lg:mt-13'></span>
                    <span className="text-stroke">DESIGN</span>
                    <span className='h-5 w-5 bg-white rounded-full mt-5 lg:mt-13'></span>
                    <span className="text-stroke">CREATE</span>
                    <span className='h-5 w-5 bg-white rounded-full mt-5 lg:mt-13'></span>
                    <span className="text-stroke">INSPIRE</span>
                    <span className='h-5 w-5 bg-white rounded-full mt-5 lg:mt-13'></span>
                </div>
            </div>
        </div>
    );
}

export default Eyes;
