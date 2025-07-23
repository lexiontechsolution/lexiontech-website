import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logo load.png';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['home', 'services', 'why-us', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', section: 'home' },
    { name: 'Services', section: 'services' },
    { name: 'Why Us', section: 'why-us' },
    { name: 'Our Work', section: 'testimonials' },
    { name: 'Contact', section: 'contact' },
  ];

  return (
    <motion.nav 
      className={`py-3 px-6 md:px-12 lg:px-24 sticky top-4 z-50 rounded-full max-w-7xl mx-auto mt-4 border transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-gray-200' 
          : 'bg-white/80 backdrop-blur-sm shadow-md border-gray-100'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center">
        {/* Logo with gradient */}
        <motion.div 
          className="flex items-center space-x-3 cursor-pointer"
          whileHover={{ scale: 1.02 }}
          onClick={() => handleClick('home')}
        >
          <div className="w-10 h-10 flex items-center justify-center">
            <img 
              src={logo}
              alt="LexionTech Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              LexionTech
            </span>
            <span className="text-[10px] text-gray-500 -mt-1 tracking-wider uppercase">
              Digital Solutions
            </span>
          </div>
        </motion.div>
        
        {/* Desktop Navigation - Pill-shaped tabs */}
        <div className="hidden md:flex space-x-1 bg-gray-100 rounded-full p-1">
          {navItems.map((item) => (
            <motion.button 
              key={item.section}
              onClick={() => handleClick(item.section)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
                activeSection === item.section 
                  ? 'bg-white text-blue-600 shadow-sm' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {item.name}
            </motion.button>
          ))}
        </div>
        
        

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-gray-600 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden mt-4 bg-white rounded-xl shadow-lg p-4 space-y-2"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item) => (
            <button
              key={item.section}
              onClick={() => handleClick(item.section)}
              className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                activeSection === item.section 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {item.name}
            </button>
          ))}
          
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;