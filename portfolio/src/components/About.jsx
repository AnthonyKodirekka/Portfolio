import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Cloud, Users, Award, Target } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const highlights = [
    {
      icon: Code,
      title: '5+ Years Experience',
      description: 'Professional software development experience'
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'ETL pipelines processing 5M+ records daily'
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'AWS, Azure, and microservices expertise'
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Mentored junior developers and Scrum Master'
    },
    {
      icon: Award,
      title: 'Master\'s Degree',
      description: 'Software Engineering at Northeastern University'
    },
    {
      icon: Target,
      title: 'Performance Focus',
      description: '50% efficiency improvements achieved'
    }
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I am a dedicated software engineer with over 5 years of professional experience in developing 
              enterprise-grade applications and solutions. With a Master's degree in Software 
              Engineering from Northeastern University, I combine advanced academic knowledge with extensive 
              industry experience.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              During my tenure at UBS, I led the development of critical risk reporting platforms, optimized 
              data processing pipelines handling 5M+ records daily, and provided technical mentorship to 
              junior developers. I specialize in creating robust, scalable solutions that deliver measurable 
              business value and operational excellence.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              My expertise spans across Java, Spring Boot, microservices architecture, cloud platforms (AWS, Azure), 
              and modern frontend technologies. I am passionate about building efficient systems and mentoring 
              the next generation of developers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg card-hover"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                    <highlight.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
