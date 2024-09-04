'use client'

import React from 'react';
import Link from 'next/link';
import { SiNotion, SiReddit, SiUpwork, SiGumroad, SiPatreon} from 'react-icons/si';
import { FaBriefcase, FaMediumM, FaStore } from 'react-icons/fa';
import Image from 'next/image';
// import community from '../../public/community.png';

const HomePage = () => {
  return (
    <div className='bg-black min-h-screen relative overflow-hidden'>
      <div className='absolute inset-0 z-0'>
        <div className='absolute inset-0 bg-repeat animate-blur' style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          opacity: 0.1,
          maskImage: 'radial-gradient(circle, black 50%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(circle, black 50%, transparent 100%)'
        }}></div>
      </div>
      <nav className="w-full fixed top-4 z-50 flex justify-center hover:animate-">
        <div className="bg-gradient-to-r from-silver via-silver to-black backdrop-blur-md rounded-full px-3 py-4 flex items-center space-x-6 border border-gray-700 transition-all duration-1000 hover:bg-gradient-to-r hover:from-black hover:via-silver hover:to-black hover:border-silver hover:shadow-lg hover:shadow-silver/20">
          <NavLink href="/">Home</NavLink>
          <NavLink href="#use-cases">About Us</NavLink>
          <NavLink href="/features">Build now</NavLink>
          <NavLink href="/team">SMM</NavLink>
          {/* <a
          href="https://github.com/your-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-1 rounded-full text-sm transition duration-300 animate-blur"
          >
            Github →
          </a> */}
        </div>
      </nav>
      <div className="flex flex-col justify-center items-center h-screen text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 mt-20">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-300 to-gray-600 animate-fade-in">
            Begin your Journey
            <br />
            with <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#2E073F] via-[#7A1CAC] to-[#AD49E1] animate-fade-in glow-purple shadow-lg shadow-purple-500/50"> Grampreneur
            </span>
          </span>
        </h1>
        <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto text-gray-400">
          Grampreneur is everything you need as a Digital entrepreneur, grow your personal brand, and grow your business.
        </p>
        <div className="mt-16 w-full overflow-hidden">
          <p className="text-white mb-4 text-m">Imagine all these in one place with no hassle of switching between apps.</p>
          <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
            <div className="flex animate-scroll">
              {Array(10).fill().map((_, i) => (
                <React.Fragment key={i}>
                  <AppLogo Icon={ SiPatreon } name="Patreon" />
                  <AppLogo Icon={SiGumroad} name="Gumroad" />
                  <AppLogo Icon={ SiUpwork} name="Upwork" />
                </React.Fragment>
              ))}
            </div>
            {/* Gradient overlay */}
            <div className="absolute top-0 bottom-0 left-0 w-1/6 bg-gradient-to-r from-black to-transparent"></div>
            <div className="absolute top-0 bottom-0 right-0 w-1/6 bg-gradient-to-l from-black to-transparent"></div>
          </div>
        </div>
      </div>

      {/* New Use Cases Section */}
      <section id="use-cases" className="py-20 bg-gradient-to-b from-black to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-300 to-gray-600 animate-fade-in">
              what is Grampreneur ?
            </span>
          </h2>
          <p className="text-lg text-center text-gray-400">
            GramPreneur is something that every top creators wish they had when they started their journey as a creator.<br />
            It helps you to manage your social media and also find ideas on the content <br />
            that helps you grow your <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#2E073F] via-[#7A1CAC] to-[#AD49E1] animate-fade-in glow-purple shadow-lg shadow-purple-500/50">personal brand.
            </span> <br />
            and also monetize your followers.
            {/* <Image src="../community.png" alt="community" className="w-1/2 mx-auto mt-8 w-100" /> */}
          </p>
        </div>
        
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 bg-gradient-to-b from-black to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#0A3B0A] via-[#1E8E1E] to-[#4CAF50] animate-fade-in glow-green shadow-lg shadow-green-500/50">
              Launching Soon!
            </span>
            <p className="text-gray-400 text-sm mt-2">Keep waiting..</p>
          </h2>
        </div>
      </section>
    </div>
  );
};

const NavLink = ({ href, children }) => (
  <Link 
    href={href}
    className="text-gray-300 hover:text-white text-sm transition duration-300"
    onClick={(e) => {
      if (href.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }}
  >
    {children}
  </Link>
);

const AppLogo = ({ Icon, name }) => {
  if (!Icon) return null; // Return null if Icon is not provided
  return (
    <div className="flex flex-col items-center justify-center w-32 mx-16 flex-shrink-0">
      <Icon className="text-4xl text-white mb-2" />
      <span className="text-xs text-gray-300">{name}</span>
    </div>
  );
};



export default HomePage;
