import React from 'react';
import { FaRocket, FaLightbulb, FaChartBar, FaPalette, FaCalendar, FaComments, FaMoneyBillWave, FaSearch, FaChartLine } from 'react-icons/fa';

const features = [
  { icon: <FaRocket />, title: "Social Media Management", description: "Manage all your social media accounts from one dashboard." },
  { icon: <FaLightbulb />, title: "Content Ideation", description: "AI-powered content ideas to keep your feed fresh and engaging." },
  { icon: <FaChartBar />, title: "Analytics", description: "Comprehensive analytics to track your growth and engagement." },
  { icon: <FaPalette />, title: "Design Tools", description: "Create stunning visuals with our built-in design tools." },
  { icon: <FaCalendar />, title: "Scheduling", description: "Plan and schedule your content across all platforms." },
  { icon: <FaComments />, title: "Community Management", description: "Engage with your audience efficiently with our community tools." },
  { icon: <FaMoneyBillWave />, title: "Monetization", description: "Explore various monetization options for your content." },
  { icon: <FaSearch />, title: "SEO Optimization", description: "Optimize your content for better discoverability." },
  { icon: <FaChartLine />, title: "Growth Hacking", description: "Access proven strategies to accelerate your brand growth." }
];

const Features = () => (
  <section id="features" className="py-20 bg-gradient-to-b from-black to-black">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-12 text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-300 to-gray-600 animate-fade-in">
          Platform Features
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="bg-black bg-opacity-80 p-4 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 hover:shadow-[#AD49E1]/50 hover:shadow-lg border border-transparent hover:border-[#AD49E1]">
            <div className="text-3xl mb-3 text-white">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
            <p className="text-sm text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
