import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Calendar, Code, Database, Cloud } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      title: 'EnrollAI',
      subtitle: 'Course Registration Chatbot',
      description: 'Built a generative AI chatbot using Large Language Models (LLMs) to help students with course registration, prerequisite checks, and schedule planning. Integrated Spring Boot APIs with MySQL database and deployed on AWS using Docker and Kubernetes for scalable, cloud-native operations.',
      image: '/api/placeholder/600/400',
      technologies: ['Java', 'MySQL', 'React.js', 'LangChain', 'GPT', 'Docker', 'Kubernetes', 'AWS'],
      features: [
        'Generative AI chatbot using LLMs and GPT',
        'Intelligent course registration assistance',
        'Automated prerequisite checking system',
        'Smart schedule planning recommendations',
        'LangChain integration for AI workflows',
        'Docker containerization and Kubernetes deployment',
        'AWS cloud infrastructure and services'
      ],
      icon: Code,
      color: 'from-purple-500 to-purple-600',
      github: '#',
      demo: '#',
      date: '2024'
    },
    {
      title: 'WareWhere',
      subtitle: 'Enterprise Warehouse Management Platform',
      description: 'Built a comprehensive warehouse leasing marketplace utilizing Spring Boot microservices architecture, React.js frontend, and Apache Kafka for real-time data streaming. Deployed on AWS infrastructure using Docker containerization and Kubernetes orchestration for scalable, cloud-native operations.',
      image: '/api/placeholder/600/400',
      technologies: ['Java', 'Spring MVC', 'MySQL', 'React.js', 'Apache Kafka', 'Docker', 'Kubernetes', 'AWS'],
      features: [
        'Microservices architecture with Spring Boot',
        'Real-time data streaming with Apache Kafka',
        'React.js frontend with responsive design',
        'Docker containerization and Kubernetes deployment',
        'AWS cloud infrastructure and services'
      ],
      icon: Database,
      color: 'from-blue-500 to-blue-600',
      github: '#',
      demo: '#',
      date: '2024'
    },
    {
      title: 'FitTrack',
      subtitle: 'Intelligent Health Management System',
      description: 'Engineered a sophisticated rule-based platform for personalized fitness and nutrition planning, featuring advanced calorie calculation algorithms and dynamic workout scheduling. Implemented with a comprehensive React.js dashboard for user management and analytics.',
      image: '/api/placeholder/600/400',
      technologies: ['Java', 'Spring Boot', 'Oracle', 'React.js'],
      features: [
        'Rule-based fitness recommendation engine',
        'Advanced calorie calculation algorithms',
        'Dynamic workout scheduling system',
        'React.js dashboard for user analytics',
        'Oracle database integration'
      ],
      icon: Code,
      color: 'from-green-500 to-green-600',
      github: '#',
      demo: '#',
      date: '2024'
    },
    {
      title: 'LeftOverHub',
      subtitle: 'Campus Sustainability Platform',
      description: 'Architected a mobile application solution for campus food waste reduction, enabling students to share surplus event food through real-time notifications. Promotes environmental sustainability and community engagement through innovative technology solutions.',
      image: '/api/placeholder/600/400',
      technologies: ['Java', 'Spring Boot', 'Oracle', 'React.js', 'Firebase'],
      features: [
        'Mobile-first responsive design',
        'Real-time notifications system',
        'Firebase integration for real-time updates',
        'Community engagement features',
        'Environmental impact tracking'
      ],
      icon: Cloud,
      color: 'from-purple-500 to-purple-600',
      github: '#',
      demo: '#',
      date: '2023'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Showcasing innovative solutions and technical expertise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden card-hover"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative h-64 md:h-auto bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                  <div className="text-center">
                    <div className={`p-4 rounded-full bg-gradient-to-r ${project.color} mb-4 inline-block`}>
                      <project.icon className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">{project.date}</span>
                    </div>
                    <div className="flex space-x-2">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.github}
                        className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      >
                        <Github className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.demo}
                        className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                      </motion.a>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color} mt-2 flex-shrink-0`}></div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
