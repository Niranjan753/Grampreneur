import React from 'react';

const AboutUs = () => {
  return (
    <section id="about-us" className="py-20 bg-gradient-to-b from-black to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-300 to-gray-600 animate-fade-in">
            About Us
          </span>
        </h2>
        <p className="text-lg text-center text-gray-400">
          GramPreneur is something that every top creator wishes they had when they <br /> <span className="bg-clip-text text-transparent text-lg bg-gradient-to-b from-[#AD49E1] via-[#AD49E1] to-[#AD49E1] animate-fade-in glow-purple shadow-lg shadow-purple-500/50">started their journey as a creator</span>.<br />
          It helps you to manage your social media <br /> and also find ideas on the content 
          that helps you grow your <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#AD49E1] via-[#AD49E1] to-[#AD49E1] animate-fade-in glow-purple shadow-lg shadow-purple-500/50">personal brand </span> <br/>
          and also monetize your followers.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;