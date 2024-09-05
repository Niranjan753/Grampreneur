import React from 'react';
import { FaEnvelope, FaTwitter, FaInstagram, FaLinkedin , FaDiscord, FaCalendar} from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-300 to-black animate-fade-in">
            Get in Touch
          </span>
        </h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-400 mb-8">
            Have questions or want to learn more about Grampreneur?<br /> <span className="bg-clip-text text-transparent bg-gradient-to-b  text-white text-lg animate-fade-in glow-purple shadow-lg">We'd love to hear from you!</span>
          </p>text-lg 
          <div className="flex justify-center space-x-6 mb-8">
            <a href="mailto:contact@grampreneur.com" className="text-white hover:text-[#AD49E1] transition-colors duration-300">
              <FaEnvelope className="text-3xl text-[#AD49E1] glow-purple shadow-lg shadow-[#AD49E1]/50" />
            </a>
            <a href="https://twitter.com/grampreneur" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#AD49E1] transition-colors duration-300">
              <FaTwitter className="text-3xl text-[#AD49E1] glow-purple shadow-lg shadow-[#AD49E1]/50"/>
            </a>
            <a href="https://instagram.com/grampreneur" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#AD49E1] transition-colors duration-300">
              <FaInstagram className="text-3xl text-[#AD49E1] glow-purple shadow-lg shadow-[#AD49E1]/50" />
            </a>
            <a href="https://linkedin.com/company/grampreneur" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#AD49E1] transition-colors duration-300">
              <FaLinkedin className="text-3xl text-[#AD49E1] glow-purple shadow-lg shadow-[#AD49E1]/50" />
            </a>
          </div>
          <div className="space-y-6 max-w-md mx-auto">
            <div className="bg-gray-900/30 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Connect with Us</h3>
              <p className="text-gray-300 mb-4">We're always excited to hear from aspiring entrepreneurs and creators. Choose your preferred method to reach out:</p>
              <ul className="space-y-3">
                <li>
                  <a href="www.mail.google.com" className="flex items-center text-[#AD49E1] hover:text-[#8E3CB8] transition-colors duration-300">
                    <FaEnvelope className="mr-2" />
                    hello@grampreneur.com
                  </a>
                </li>
                <li>
                  <a href="https://calendly.com/grampreneur" target="_blank" rel="noopener noreferrer" className="flex items-center text-[#AD49E1] hover:text-[#8E3CB8] transition-colors duration-300">
                    <FaCalendar className="mr-2" />
                    Schedule a call
                  </a>
                </li>
                <li>
                  <a href="https://discord.gg/grampreneur" target="_blank" rel="noopener noreferrer" className="flex items-center text-[#AD49E1] hover:text-[#8E3CB8] transition-colors duration-300">
                    <FaDiscord className="mr-2" />
                    Join our community
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer className="mt-16 text-center text-gray-400">
        <p>&copy; 2024 Grampreneur. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
