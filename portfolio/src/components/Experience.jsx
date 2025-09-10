import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, ChevronRight, Award, Users, Zap, Database } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'UBS',
      location: 'Pune, India',
      period: 'July 2018 - August 2023',
      duration: '5+ Years',
      type: 'Full-time',
      achievements: [
        'Spearheaded design and development of risk reporting platform by building custom ETL pipelines using Java, PL/SQL and multithreading on Oracle Star Schema processing 5M+ records daily for enterprise reporting',
        'Optimized critical workflows by applying advanced SQL tuning techniques, indexing, and normalization, boosting pipeline efficiency by 50% and enabling adoption of 15+ major credit risk dashboards across UBS',
        'Refactored legacy code into a modular, reusable, metadata-driven framework using Java Generics and configuration-driven design, reducing code duplication and improving new data source onboarding time by 50%',
        'Mentored new joiners and junior developers by providing technical guidance, code reviews, and onboarding',
        'Served as Scrum Master for an Agile team, facilitating sprint planning, daily stand-ups, and retrospectives to enhance collaboration, improve workflow efficiency, and drive successful project delivery'
      ],
      technologies: ['Java', 'Spring Boot', 'Oracle', 'PL/SQL', 'ETL', 'Microservices', 'Agile', 'Scrum'],
      icon: Award
    },
    {
      title: 'Software Engineer',
      company: 'UBS',
      location: 'Pune, India',
      period: 'July 2018 - August 2023',
      duration: '5+ Years',
      type: 'Full-time',
      achievements: [
        'Designed and implemented RESTful microservices using Java, Spring Boot, enabling dynamic SQL generation based on NLP engine inputs to retrieve data from Oracle database, ensuring scalable, efficient data processing',
        'Developed secure and efficient data ingress and egress solutions between on-premises systems and MEGDP, a regulated Azure cloud platform, using Azure Data Factory, ensuring seamless data exchange and compliance',
        'Designed and implemented scalable microservices using Spring Boot for risk reporting, developing optimized RESTful APIs to enhance communication, maintainability, and reduce response time by 30%',
        'Orchestrated Docker containerization of microservices, enabling smooth deployment within Kubernetes cluster',
        'Integrated CI/CD pipelines using GitLab CI, TeamCity, Bamboo, streamlining build, test, and release processes',
        'Served as Release Manager, coordinated production deployments, scheduling, and post-release validations'
      ],
      technologies: ['Java', 'Spring Boot', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'REST APIs', 'Microservices'],
      icon: Database
    }
  ];

  return (
    <section id="experience" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Building enterprise solutions with measurable business impact
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 to-secondary-600"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
              }`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 card-hover"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                        <exp.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs font-semibold px-2 py-1 rounded-full">
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{exp.type}</span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3 mb-4">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start space-x-2">
                        <ChevronRight className="w-4 h-4 text-primary-600 dark:text-primary-400 mt-1 flex-shrink-0" />
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
