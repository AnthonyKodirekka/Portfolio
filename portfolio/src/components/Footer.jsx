import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Anthony Kodirekka
            </h3>
            <p className="text-gray-400 mb-4">
              Senior Software Engineer passionate about building scalable solutions and mentoring the next generation of developers.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:kodirekkaanthony4@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Email
              </a>
              <a
                href="https://linkedin.com/in/anthonyakhil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/anthonyakhil"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              <a
                href="#about"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Skills
              </a>
              <a
                href="#experience"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Projects
              </a>
              <a
                href="#education"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Education
              </a>
              <a
                href="#contact"
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Back to Top */}
          <div className="md:col-span-1 text-center md:text-right">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to Top</span>
            </motion.button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Anthony Kodirekka. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center">
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> using React & Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
