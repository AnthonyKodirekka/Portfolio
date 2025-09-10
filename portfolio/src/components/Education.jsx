import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, MapPin, Calendar, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const education = [
    {
      institution: 'Northeastern University',
      location: 'Boston, MA',
      degree: 'Master of Science in Software Engineering',
      period: 'Sep 2023 - May 2025',
      status: 'In Progress',
      statusColor: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
      gpa: '3.8/4.0',
      relevantCourses: [
        'Advanced Software Engineering',
        'Data Structures and Algorithms',
        'Database Design',
        'Software Testing and Quality Assurance',
        'Machine Learning Applications'
      ],
      achievements: [
        'Dean\'s List for Academic Excellence',
        'Graduate Research Assistant',
        'Active member of Software Engineering Society'
      ],
      icon: GraduationCap,
      color: 'from-blue-500 to-blue-600'
    },
    {
      institution: 'Motilal Nehru National Institute of Technology',
      location: 'Allahabad, India',
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      period: 'Aug 2014 - May 2018',
      status: 'Completed',
      statusColor: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
      gpa: '8.2/10.0',
      relevantCourses: [
        'Data Structures and Algorithms',
        'Computer Networks',
        'Operating Systems',
        'Database Management Systems',
        'Software Engineering',
        'Computer Architecture'
      ],
      achievements: [
        'First Class with Distinction',
        'Final Year Project: IoT-based Smart Home System',
        'Participated in multiple hackathons and coding competitions'
      ],
      icon: BookOpen,
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section id="education" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Academic foundation and continuous learning
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 card-hover"
            >
              <div className="grid md:grid-cols-3 gap-8">
                {/* Left Column - Basic Info */}
                <div className="md:col-span-1">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${edu.color}`}>
                      <edu.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {edu.institution}
                      </h3>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        {edu.location}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {edu.period}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                      <Award className="w-4 h-4 mr-2" />
                      GPA: {edu.gpa}
                    </div>
                    <div className="mt-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${edu.statusColor}`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Column - Details */}
                <div className="md:col-span-2">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    {edu.degree}
                  </h4>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Relevant Courses */}
                    <div>
                      <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                        Relevant Coursework:
                      </h5>
                      <ul className="space-y-1">
                        {edu.relevantCourses.map((course, courseIndex) => (
                          <li key={courseIndex} className="flex items-start space-x-2">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${edu.color} mt-2 flex-shrink-0`}></div>
                            <span className="text-sm text-gray-600 dark:text-gray-400">{course}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                        Key Achievements:
                      </h5>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-2">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${edu.color} mt-2 flex-shrink-0`}></div>
                            <span className="text-sm text-gray-600 dark:text-gray-400">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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

export default Education;
