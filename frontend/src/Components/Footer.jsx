import React from "react";
import leetcodeimg from '../assets/leetcode.png'
import gfgimg from '../assets/gfg.png'
import {
    FaLinkedin,
    FaGithub,
    FaGlobe,
    FaTwitter,
    FaEnvelope,
    FaPhoneAlt,
    FaInstagram
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-zinc-900 text-zinc-300 font-[font2]">
            <div className="max-w-6xl mx-auto px-6 py-12">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Brand / About */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4 text-white">Aditya Singh Bhadoriya</h2>
                        <p className="text-zinc-400 leading-relaxed">
                            MERN Stack Developer focused on building clean, high-performance,
                            and user-centric web applications.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:ml-20">
                        <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#about" className="hover:text-orange-400 transition">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="hover:text-orange-400 transition">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="#skills" className="hover:text-orange-400 transition">
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-orange-400 transition">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-white">Connect</h3>
                        <ul className="space-y-2 mb-4">
                            <li className="flex items-center gap-3">
                                <FaEnvelope className="text-orange-400" />
                                <a href="mailto:youremail@example.com" className="hover:text-orange-400">
                                    adityabhadoriya32@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaPhoneAlt className="text-orange-400" />
                                <a href="#" className="hover:text-orange-400">
                                    +91 9691035055
                                </a>
                            </li>
                        </ul>

                        <div className="flex space-x-5 mt-2">
                            <a href="https://www.linkedin.com/in/aditya-singh-bhadoriya/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition">
                                <FaLinkedin size={22} />
                            </a>
                            <a href="https://github.com/Adityasinghbhadoriya" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition">
                                <FaGithub size={22} />
                            </a>

                            <a href="https://www.instagram.com/__adityaa_3/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
                                <FaInstagram size={22} />
                            </a>
                            <a href="https://leetcode.com/u/AdityaBhadoriya/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition">
                              <img src={leetcodeimg} alt=""  className="bg-white bg-clip-text text-transparent w-6 h-6"/>
                            </a>
                            <a href="https://www.geeksforgeeks.org/user/aditya0315gz/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition">
                              <img src={gfgimg} alt=""  className="bg-white bg-clip-text text-transparent w-7 h-7"/>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-zinc-700 mt-10"></div>

                {/* Bottom Section */}
                <div className="mt-6 text-center text-zinc-500 text-sm">
                    <p>
                        &copy; {new Date().getFullYear()} Aditya. All rights reserved.
                    </p>
                    <p>
                        Designed & built with using React + Tailwind CSS.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
