import { motion } from 'framer-motion';
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram, FiMail, FiPhone, FiMapPin, FiArrowUp } from 'react-icons/fi';
import logo from '../assets/logo load.png';
import msmeLogo from '../assets/msme.png';
import boss from '../assets/boss.png' // Import your MSME logo image

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const links = [
    // Your links array remains the same
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            <div className="flex items-center">
              <img 
                src={logo} 
                alt="LexionTech Logo" 
                className="h-10 w-auto mr-3"
              />
              <span className="text-2xl font-bold text-white">LexionTech</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Simplifying technology for businesses of all sizes to create a smarter digital future.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <FiFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/Lexiontech01"
                aria-label="Twitter"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <FiTwitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/lexiontech"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/lexiontech/"
                aria-label="Instagram"
                className="text-gray-400 hover:text-pink-400 transition-colors duration-300"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <FiMail className="w-5 h-5 mr-3 mt-1 text-blue-400 flex-shrink-0" />
                <a href="mailto:lexiontechsolution@gmail.com" className="hover:text-white transition-colors">
                  lexiontechsolution@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <FiPhone className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0" />
                <a href="tel:+916380853637" className="hover:text-white transition-colors">
                  +91 63808 53637
                </a>
              </div>
              <div className="flex items-start">
                <FiMapPin className="w-5 h-5 mr-3 mt-1 text-blue-400 flex-shrink-0" />
                <span>Coimbatore, Tamil Nadu, India</span>
              </div>
            </div>
          </motion.div>

          {/* Navigation Links */}
          {links.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white">{link.title}</h3>
              <ul className="space-y-2">
                {link.items.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.url}
                      className="text-gray-400 hover:text-white transition-colors flex items-start"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* MSME Logo - Added as a new column on the right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col items-center md:items-end justify-start"
          >
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <img 
                src={msmeLogo} 
                alt="MSME Registered" 
                className="h-20 w-auto" 
                title="Registered MSME under Government of India"
              />
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center md:text-right">
              Registered MSME under<br />Government of India
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col items-center md:items-end justify-start"
          >
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <img 
                src={boss} 
                alt="MSME Registered" 
                className="h-20 w-auto" 
                title="Boss Canva Collaboration"
              />
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center md:text-right">
              Boss Canva Collaboration<br />
            </p>
          </motion.div>
        </div>
        
        

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-gray-500 text-sm mb-4 md:mb-0"
            >
              &copy; {new Date().getFullYear()} LexionTech. All rights reserved.
            </motion.p>
          </div>
        </div>
      </div>
      

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all z-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
      >
        <FiArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;