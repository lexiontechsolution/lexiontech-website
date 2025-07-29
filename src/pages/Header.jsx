import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

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
    <div className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'py-0 bg-white shadow-md' : 'py-2 bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.nav 
          className="flex items-center justify-between h-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={() => handleClick('home')}
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <img 
                src={logo}
                alt="LexionTech Logo" 
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <span className="text-xl font-bold text-gray-800 hidden sm:block">
              Lexion<span className="text-blue-600">Tech</span>
            </span>
          </motion.div>
          
          {/* Desktop Navigation - Modern underline style */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div 
                key={item.section}
                className="relative"
                onMouseEnter={() => setHoveredItem(item.section)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <button
                  onClick={() => handleClick(item.section)}
                  className={`px-1 py-2 font-medium transition-colors ${
                    activeSection === item.section 
                      ? 'text-blue-600' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                  {item.section === 'services' && (
                    <FiChevronDown className="inline ml-1" size={16} />
                  )}
                </button>
                
                {/* Animated underline */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 ${
                    activeSection === item.section ? 'w-full' : 'w-0'
                  }`}
                  animate={{
                    width: (hoveredItem === item.section || activeSection === item.section) ? '100%' : '0%'
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            ))}
            
            {/* CTA Button */}
            <motion.button
              onClick={() => handleClick('contact')}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-gray-600 rounded-md hover:bg-gray-100 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </motion.nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-white rounded-lg shadow-xl p-4 mt-2 space-y-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => handleClick(item.section)}
                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors flex items-center ${
                  activeSection === item.section 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.name}
                {activeSection === item.section && (
                  <div className="ml-2 w-2 h-2 bg-blue-600 rounded-full"></div>
                )}
              </button>
            ))}
            <button
              onClick={() => handleClick('contact')}
              className="w-full mt-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-medium shadow-md"
            >
              Get Started
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
