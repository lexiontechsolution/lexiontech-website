import { motion } from 'framer-motion'
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram, FiMail, FiPhone, FiMapPin, FiArrowUp } from 'react-icons/fi'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const links = [
    {
      title: 'Services',
      items: ['Web Development', 'Mobile App Development', 'Cloud Solutions', 'UI/UX Design', 'Data Analytics'],
    },
    {
      title: 'Company',
      items: ['About Us', 'Mission & Vision', 'Why Choose Us', 'Careers', 'Internships'],
    },
    {
      title: 'Support',
      items: ['Contact Us', 'FAQs', 'Privacy Policy', 'Terms of Service', 'Sitemap'],
    },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-slate-950 pt-24 pb-12 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-pink-200/5 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-l from-pink-300/5 to-transparent"></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-pink-200/10 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-200 to-pink-300 rounded-xl flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-2xl font-bold text-white">LexionTech</span>
            </div>
            <p className="text-slate-400 max-w-xs mb-6 leading-relaxed">
              Simplifying technology for businesses of all scales to shape a smarter digital future.
            </p>
            
            <div className="flex space-x-4 mb-8">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-pink-200 transition-all duration-300"
              >
                <FiFacebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-pink-300 transition-all duration-300"
              >
                <FiTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-pink-400 transition-all duration-300"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-pink-500 transition-all duration-300"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center text-slate-400">
                <FiMail className="w-5 h-5 mr-3 text-pink-300" />
                <span>lexiontechsolution@gmail.com</span>
              </div>
              <div className="flex items-center text-slate-400">
                <FiPhone className="w-5 h-5 mr-3 text-pink-300" />
                <span>+91 63808 53637</span>
              </div>
              <div className="flex items-start text-slate-400">
                <FiMapPin className="w-5 h-5 mr-3 mt-1 text-pink-300" />
                <span>Coimbatore, Tamil Nadu, India</span>
              </div>
            </div>
          </motion.div>

          {/* Links columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:col-span-3 gap-8">
            {links.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <h4 className="text-lg font-semibold text-white mb-6 pb-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-gradient-to-r after:from-pink-200 after:to-pink-300">
                  {link.title}
                </h4>
                <ul className="space-y-3">
                  {link.items.map((item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-slate-400 hover:text-white transition duration-300 flex items-start group"
                      >
                        <span className="w-1.5 h-1.5 bg-pink-300 rounded-full mt-2 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        <span>{item}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-800 pt-10 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center md:text-left mb-6 md:mb-0"
            >
              <p className="text-slate-500">
                &copy; {new Date().getFullYear()} LexionTech. All rights reserved.
              </p>
            </motion.div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="text-slate-500 hover:text-pink-300 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-500 hover:text-pink-300 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-slate-500 hover:text-pink-300 text-sm">
                Cookie Policy
              </a>
              <a href="#" className="text-slate-500 hover:text-pink-300 text-sm">
                GDPR Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Back to top button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-pink-200 to-pink-300 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all z-50"
        aria-label="Back to top"
      >
        <FiArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  )
}

export default Footer