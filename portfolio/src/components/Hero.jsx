import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      text: 'kodirekkaanthony4@gmail.com',
      href: 'mailto:kodirekkaanthony4@gmail.com'
    },
    {
      icon: Phone,
      text: '+1 (857) 701-7852',
      href: 'tel:+18577017852'
    },
    {
      icon: Linkedin,
      text: 'linkedin.com/in/anthonyakhil',
      href: 'https://linkedin.com/in/anthonyakhil'
    },
    {
      icon: Github,
      text: 'github.com/AnthonyKodirekka',
      href: 'https://github.com/AnthonyKodirekka'
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container-custom">
        <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8 text-left max-w-4xl mx-auto"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex flex-col items-center mt-2">
                    <div className="w-3 h-3 bg-primary-500 rounded-full mb-2"></div>
                    <div className="w-1 h-16 bg-gradient-to-b from-primary-500 to-primary-600 rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                      <span className="text-gray-900 dark:text-white">Hi, I'm </span>
                      <span className="text-primary-600 dark:text-primary-400">Anthony</span>
                    </h1>
                  </div>
                </div>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mb-8">
                  Experienced software engineer with 5+ years of expertise in building scalable enterprise solutions,
                  microservices architecture, and cloud-based applications. Master's in Software Engineering
                  from Northeastern University.
                </p>
              </motion.div>

          {/* Contact Information Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-5xl mx-auto"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-lg hover:shadow-xl transition-all duration-300 h-14 flex items-center"
              >
                <div className="flex items-center space-x-3 w-full">
                  <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg flex-shrink-0">
                    <info.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : '_self'}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="text-sm text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        {info.text}
                      </a>
                    ) : (
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {info.text}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="btn-primary flex items-center justify-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Get In Touch</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="btn-secondary flex items-center justify-center space-x-2"
            >
              <span>View My Work</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
