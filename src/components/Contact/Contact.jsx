import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiMessageSquare, FiClock } from 'react-icons/fi';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const whatsappMessage = 
      `Name: ${formData.name}%0A` +
      `Email: ${formData.email}%0A` +
      `Subject: ${formData.subject}%0A` +
      `Message: ${formData.message}`;
    
    window.open(`https://wa.me/916380853637?text=${whatsappMessage}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-28 bg-gradient-to-br from-pink-50 via-white to-purple-50 overflow-hidden">
      {/* Background elements - updated to pink/purple */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-pink-50 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-l from-purple-50 to-transparent"></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-pink-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20 max-w-4xl mx-auto"
        >
          <motion.div 
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-pink-50 text-pink-700 rounded-full text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
            Get In Touch
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-5"
          >
            Let's Grow <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Together</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Have a project in mind? Reach out and let's create something amazing.
          </motion.p>
        </motion.div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Information - updated color scheme */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-2/5"
          >
            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center text-pink-600 mr-4">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-gray-700 mb-1">Email Us</h4>
                    <a
                      href="mailto:lexiontechsolution@gmail.com"
                      className="text-base text-pink-600 hover:text-pink-800 font-medium transition-colors"
                    >
                      lexiontechsolution@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center text-pink-600 mr-4">
                    <FiPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-gray-700 mb-1">Call Us</h4>
                    <a
                      href="tel:+916380853637"
                      className="text-base text-pink-600 hover:text-pink-800 font-medium transition-colors"
                    >
                      +91 63808 53637
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center text-pink-600 mr-4">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-gray-700 mb-1">Our Location</h4>
                    <p className="text-base text-gray-600">
                      Coimbatore, Tamil Nadu, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center text-pink-600 mr-4">
                    <FiMessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-gray-700 mb-1">WhatsApp</h4>
                    <a
                      href="https://wa.me/916380853637"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-pink-600 hover:text-pink-800 font-medium transition-colors"
                    >
                      Chat with our team
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-6 border-t border-gray-100">
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <FiClock className="mr-2 text-pink-600" />
                  Business Hours
                </h4>
                <div className="space-y-1">
                  <p className="text-gray-600">Monday - Friday: 9am - 6pm</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form - updated color scheme */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-3/5"
          >
            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Send Us a Message
                </h3>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you promptly.
                </p>
              </div>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
                    placeholder="How can we help?"
                    required
                  />
                </div>
                
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
                    placeholder="Tell us about your project requirements..."
                    required
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3.5 text-base font-medium flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg shadow-sm hover:from-pink-600 hover:to-purple-700 transition-all"
                  >
                    <FiSend className="w-4 h-4" />
                    Send via WhatsApp
                  </motion.button>
                  
                  <p className="text-gray-500 text-center text-xs mt-3">
                    By clicking this button, you'll be redirected to WhatsApp to complete your message
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact