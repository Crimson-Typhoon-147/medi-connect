import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaGithub,
  FaRegCopyright,
  FaDiscord,
  FaLinkedinIn,
  FaArrowUp,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // Corrected import for Twitter icon
import GoogleTranslate from './GoogleTranslate';
import Chatbot from '../Medical-Chatbot/Chatbot';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Define company links with distinct paths
  const aboutLinks = [
    { name: 'Our Hospital', path: '/our-hospital' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Pricing', path: '/pricing' },
  ];

  // Define quick links
  const servicesLinks = [
    { name: 'OPD Consultations', path: '/registerOPD' },
    { name: 'Lab Tests', path: '/labtest' },
    { name: 'Health Checkup', path: '/health-checkup' },
  ];

  // Define social media links
  const socialMedia = [
    {
      Icon: FaGithub,
      link: 'https://github.com/Luson045/medi-connect',
      color: '#333',
    },
    { Icon: FaDiscord, link: 'https://discord.gg', color: '#7289DA' },
    { Icon: FaXTwitter, link: 'https://twitter.com', color: '#1DA1F2' },
    { Icon: FaLinkedinIn, link: 'https://www.linkedin.com', color: '#0077B5' },
  ];

  // Define legal links with their paths if available
  const contactUsLinks = [
    { name: 'Business', path: '/business' },
    { name: 'Support Us', path: '/support-us' },
    { name: 'Customer Care', path: '/customer-care' },
  ];

  // Define feedback form
  const feedbackLinks = [{ name: 'Patient Feedback', path: '/feedback' }];

  return (
    <footer className="bg-gradient-to-r from-[#1f2937] via-[#133859] to-[#1f2937]  p-8 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Section */}
          <div className="space-y-4">
            <Link
              to="/"
              className="flex items-center gap-2 group transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <img
                src="../favicon.png"
                className="h-10 w-10 transition-transform duration-300 group-hover:rotate-6"
                alt="AgroTech AI Logo"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-[#b6dbfc] to-[#b6dbfc] bg-clip-text text-transparent group-hover:from-[#133859] group-hover:to-[#b6dbfc] transition-all duration-300">
                Med Space
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              The Med Space platform simplifies hospital management with
              efficient queuing models, lab test, OPDs, and inventory management
              for medicines and consumables.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className='text-lg font-semibold mb-4 relative inline-block after:content-[""] after:absolute after:w-0 after:h-0.5 after:bg-[#b6dbfc] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full'>
              About
            </h3>
            <ul className="space-y-2">
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="flex items-center group">
                    <span className="mr-2 transition-transform duration-300 group-hover:translate-x-1">
                      ›
                    </span>
                    <span className="relative overflow-hidden">
                      <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
                        {link.name}
                      </span>
                      <span className="absolute top-0 left-0 inline-block transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-[#b6dbfc]">
                        {link.name}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-semibold mb-4 relative inline-block after:content-[""] after:absolute after:w-0 after:h-0.5 after:bg-[#b6dbfc] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full'>
              Services
            </h3>
            <ul className="space-y-2">
              {servicesLinks.map((link) => (
                <li key={link.name} className="w-full">
                  <Link to={link.path} className="flex items-center group">
                    <span className="mr-2 transition-transform duration-300 group-hover:translate-x-1">
                      ›
                    </span>
                    <span className="relative overflow-hidden">
                      <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
                        {link.name}
                      </span>
                      <span className="absolute top-0 left-0 inline-block transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-[#b6dbfc]">
                        {link.name}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Feedback Link */}
          <div>
            <h3 className='text-lg font-semibold mb-4 relative inline-block after:content-[""] after:absolute after:w-0 after:h-0.5 after:bg-[#b6dbfc] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full'>
              Feedback
            </h3>
            <ul className="space-y-2">
              {feedbackLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="flex items-center group">
                    <span className="mr-2 transition-transform duration-300 group-hover:translate-x-1">
                      ›
                    </span>
                    <span className="relative overflow-hidden">
                      <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
                        {link.name}
                      </span>
                      <span className="absolute top-0 left-0 inline-block transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-[#b6dbfc]">
                        {link.name}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media and Legal */}
          <div>
            <h3 className='text-lg font-semibold mb-4 relative inline-block after:content-[""] after:absolute after:w-0 after:h-0.5 after:bg-[#b6dbfc] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full'>
              Follow us on
            </h3>
            <div className="flex space-x-4 mb-6">
              {socialMedia.map(({ Icon, link, color }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                  style={{
                    backgroundColor: 'white',
                    color: color,
                    boxShadow: '0 0 0 0 rgba(255,255,255,0.7)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = color;
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.boxShadow = `0 0 0 8px rgba(255,255,255,0.3)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.color = color;
                    e.currentTarget.style.boxShadow =
                      '0 0 0 0 rgba(255,255,255,0.7)';
                  }}
                  aria-label={`Social media link ${index + 1}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="flex flex-col space-y-1">
              {contactUsLinks.map((link) => (
                <Link key={link.name} to={link.path} className="text-sm">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-8">
        <p className="flex items-center space-x-1 text-sm">
          <FaRegCopyright className="inline-block" />
          <span>{currentYear} Med Space. All rights reserved.</span>
        </p>
        <GoogleTranslate />
        <Chatbot />
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          className="fixed bottom-5 right-5 bg-[#b6dbfc] text-[#133859] p-3 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-110"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp className="w-6 h-6" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
