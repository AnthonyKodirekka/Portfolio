import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Database, 
  Cloud, 
  Cpu, 
  GitBranch, 
  Server, 
  BarChart3,
  Globe,
  Shield,
  Zap
} from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'Java', level: 95 },
        { name: 'Python', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'C/C++', level: 80 },
        { name: 'SQL', level: 95 },
        { name: 'Scala', level: 70 }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      icon: Globe,
      color: 'from-green-500 to-green-600',
      skills: [
        { name: 'Spring Boot', level: 95 },
        { name: 'React.js', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'REST APIs', level: 95 },
        { name: 'GraphQL', level: 80 },
        { name: 'Redux', level: 75 },
        { name: 'AngularJS', level: 70 }
      ]
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'Oracle', level: 95 },
        { name: 'MySQL', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Cassandra', level: 75 },
        { name: 'Redis', level: 80 },
        { name: 'DynamoDB', level: 75 },
        { name: 'Snowflake', level: 70 }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: Cpu,
      color: 'from-orange-500 to-orange-600',
      skills: [
        { name: 'Docker', level: 90 },
        { name: 'Kubernetes', level: 85 },
        { name: 'Jenkins', level: 85 },
        { name: 'Maven', level: 90 },
        { name: 'Git', level: 95 },
        { name: 'Terraform', level: 75 },
        { name: 'Airflow', level: 80 },
        { name: 'Unix/Linux', level: 90 }
      ]
    },
    {
      title: 'Cloud Platforms',
      icon: Cloud,
      color: 'from-cyan-500 to-cyan-600',
      skills: [
        { name: 'AWS (EC2, S3, IAM)', level: 90 },
        { name: 'Microsoft Azure', level: 85 },
        { name: 'Google Cloud Platform', level: 75 },
        { name: 'Datadog', level: 80 },
        { name: 'Hadoop', level: 70 },
        { name: 'Spark', level: 75 },
        { name: 'Hive', level: 70 }
      ]
    },
    {
      title: 'Data Engineering',
      icon: BarChart3,
      color: 'from-pink-500 to-pink-600',
      skills: [
        { name: 'ETL Pipelines', level: 95 },
        { name: 'Data Warehousing', level: 90 },
        { name: 'Data Modeling', level: 85 },
        { name: 'Apache Kafka', level: 80 },
        { name: 'JMS', level: 75 },
        { name: 'TIBCO EMS', level: 70 },
        { name: 'HDFS', level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Comprehensive expertise across the full technology stack
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 card-hover"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white ml-4">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
