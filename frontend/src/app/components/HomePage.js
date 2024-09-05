"use client";

import React from "react";
import Link from "next/link";
import {
  SiNotion,
  SiReddit,
  SiUpwork,
  SiGumroad,
  SiPatreon,
} from "react-icons/si";
import { FaBriefcase, FaMediumM, FaStore } from "react-icons/fa";
import Image from "next/image";
// import community from '../../public/community.png';
import {
  FaRocket,
  FaLightbulb,
  FaChartBar,
  FaPalette,
  FaCalendar,
  FaComments,
  FaMoneyBillWave,
  FaSearch,
  FaChartLine,
} from "react-icons/fa";
import AboutUs from "./AboutUs";
import Navbar from "./Navbar";
import Features from "./Features";
import Contact from "./Contact.jsx";

const HomePage = () => {
  return (
    <div className="bg-black min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-repeat animate-blur"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            opacity: 0.1,
            maskImage: "radial-gradient(circle, black 50%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(circle, black 50%, transparent 100%)",
          }}
        ></div>
      </div>
      <Navbar />
      <div className="flex flex-col justify-center items-center h-screen text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 mt-20">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-300 to-gray-600 animate-fade-in">
            Begin your Journey
            <br />
            with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#2E073F] via-[#AD49E1] to-[#AD49E1] animate-fade-in glow-purple shadow-lg shadow-purple-500/50">
              {" "}
              Grampreneur
            </span>
          </span>
        </h1>
        <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto text-gray-400">
          Grampreneur is everything you need as a Digital entrepreneur, grow
          your personal brand, and grow your business.
        </p>
        <div className="mt-16 w-full overflow-hidden">
          <p className="text-white mb-4 text-m">
            Imagine all these in one place with no hassle of switching between
            apps.
          </p>
          <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
            <div className="flex animate-scroll">
              {Array(10)
                .fill()
                .map((_, i) => (
                  <React.Fragment key={i}>
                    <AppLogo Icon={SiPatreon} name="Patreon" />
                    <AppLogo Icon={SiGumroad} name="Gumroad" />
                    <AppLogo Icon={SiUpwork} name="Upwork" />
                  </React.Fragment>
                ))}
            </div>
            {/* Gradient overlay */}
            <div className="absolute top-0 bottom-0 left-0 w-1/6 bg-gradient-to-r from-black to-transparent"></div>
            <div className="absolute top-0 bottom-0 right-0 w-1/6 bg-gradient-to-l from-black to-transparent"></div>
          </div>
        </div>
      </div>
      <AboutUs />
      <Features />
      <Contact />
    </div>
  );
};

const NavLink = ({ href, children }) => (
  <Link
    href={href}
    className="text-gray-300 hover:text-white text-sm transition duration-300"
    onClick={(e) => {
      if (href.startsWith("#")) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
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
