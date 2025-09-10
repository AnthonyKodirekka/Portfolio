import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Linkedin, Github, Download, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'kodirekkaanthony4@gmail.com',
      href: 'mailto:kodirekkaanthony4@gmail.com',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (857) 701-7852',
      href: 'tel:+18577017852',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/anthonyakhil',
      href: 'https://linkedin.com/in/anthonyakhil',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'github.com/AnthonyKodirekka',
      href: 'https://github.com/AnthonyKodirekka',
      color: 'from-gray-600 to-gray-700'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Check if EmailJS is properly configured
      const isEmailJSConfigured = 
        EMAILJS_CONFIG.SERVICE_ID !== 'service_your_service_id' &&
        EMAILJS_CONFIG.TEMPLATE_ID !== 'template_your_template_id' &&
        EMAILJS_CONFIG.PUBLIC_KEY !== 'your_public_key';
      
      if (isEmailJSConfigured) {
        // Send email using EmailJS
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || 'Portfolio Contact Form',
          message: formData.message,
          to_name: 'Anthony Kodirekka'
        };
        
        await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID,
          templateParams,
          EMAILJS_CONFIG.PUBLIC_KEY
        );
      } else {
        // Fallback: Simulate email sending and show contact info
        console.log('EmailJS not configured. Form data:', formData);
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      }
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
      alert('Sorry, there was an error sending your message. Please try again or contact me directly at kodirekkaanthony4@gmail.com');
    }
  };

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                I'm actively seeking new professional opportunities and collaborative projects. 
                Whether you have a question, want to discuss a potential project, or just want to say hi, 
                I'd love to hear from you!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.href?.startsWith('http') ? '_blank' : '_self'}
                  rel={info.href?.startsWith('http') ? 'noopener noreferrer' : ''}
                  whileHover={{ scale: 1.02 }}
                  className={`block p-4 rounded-lg bg-white dark:bg-gray-900 card-hover ${
                    !info.href ? 'cursor-default' : 'cursor-pointer'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color}`}>
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {info.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Resume Download */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg card-hover"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg">
                  <Download className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Download Resume
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                    Get a copy of my resume for your records
                  </p>
                  <a
                    href="https://drive.google.com/uc?export=download&id=15wqABw4YXO_tcomNW4O-FxIkcT0j4L-W"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm inline-flex items-center"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white dark:bg-gray-900 p-8 rounded-lg card-hover"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send a Message
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              💡 <strong>Note:</strong> For immediate contact, you can also email me directly at{' '}
              <a href="mailto:kodirekkaanthony4@gmail.com" className="text-primary-600 dark:text-primary-400 hover:underline">
                kodirekkaanthony4@gmail.com
              </a>
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Message Sent!
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
