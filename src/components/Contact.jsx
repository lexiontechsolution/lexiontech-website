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
    <section id="contact" className="relative py-24 bg-gradient-to-b from-rose-50 to-pink-50 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-pink-500/5 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-l from-rose-500/5 to-transparent"></div>
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-pink-200/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-rose-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-white text-pink-700 rounded-full text-sm font-medium mb-6 shadow-sm border border-slate-100">
            <span className="w-2 h-2 bg-pink-500 rounded-full mr-2 animate-pulse"></span>
            Get In Touch
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-5"
          >
            Let's Build <span className="bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">Together</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Ready to discuss your project? Reach out through any of these channels
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-2/5"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-100 p-10 shadow-lg h-full">
              <h3 className="text-3xl font-bold text-slate-900 mb-8">
                Contact Information
              </h3>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-500 rounded-xl flex items-center justify-center text-white mr-6">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-700 mb-1">Email Us</h4>
                    <a
                      href="mailto:lexiontechsolution@gmail.com"
                      className="text-lg text-pink-600 hover:text-rose-700 font-medium transition-colors"
                    >
                      lexiontechsolution@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-500 rounded-xl flex items-center justify-center text-white mr-6">
                    <FiPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-700 mb-1">Call Us</h4>
                    <a
                      href="tel:+916380853637"
                      className="text-lg text-pink-600 hover:text-rose-700 font-medium transition-colors"
                    >
                      +91 63808 53637
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-500 rounded-xl flex items-center justify-center text-white mr-6">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-pink-600 mb-1">Visit Us</h4>
                    <p className="text-lg text-slate-700 hover:text-rose-700">
                      Coimbatore, Tamil Nadu, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-500 rounded-xl flex items-center justify-center text-white mr-6">
                    <FiMessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-700 mb-1">WhatsApp</h4>
                    <a
                      href="https://wa.me/916380853637"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-pink-600 hover:text-rose-700 font-medium transition-colors"
                    >
                      Chat with us instantly
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-200">
                <h4 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                  <FiClock className="mr-2 text-pink-500" />
                  Business Hours
                </h4>
                <p className="text-slate-600 mb-2">Monday - Friday: 9am - 6pm</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-3/5"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-100 p-10 shadow-lg">
              <h3 className="text-3xl font-bold text-slate-900 mb-8">
                Send Us a Message
              </h3>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-lg font-medium text-slate-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-lg font-medium text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-lg font-medium text-slate-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-5 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
                    placeholder="How can we help?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-lg font-medium text-slate-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 text-lg font-medium flex items-center justify-center gap-2 bg-gradient-to-r from-pink-400 to-rose-500 text-white rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <FiSend className="w-5 h-5" />
                  Send via WhatsApp
                </motion.button>

                <p className="text-slate-500 text-center text-sm">
                  Clicking "Send via WhatsApp" will open WhatsApp with your message
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Contact;