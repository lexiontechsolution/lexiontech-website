import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import logo from '../assets/logo load.png';
import { path } from 'framer-motion/client';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

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

  const toggleServicesDropdown = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  const navItems = [
    { name: 'Home', section: 'home' },
    { 
      name: 'Services', 
      section: '../components/Services',
      subItems: [
        { name: 'Web Development', section: 'web-development', path:'../components/Services/web-development.jsx' },
        { name: 'Mobile Apps', section: 'mobile-apps' },
        { name: 'UI/UX Design', section: 'ui-ux' },
        { name: 'Digital Marketing', section: 'digital-marketing' },
        { name: 'Cloud Solutions', section: 'cloud-solutions' }
      ]
    },
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
            <span className="text-xl font-bold text-pink-600 hidden sm:block">
              Lexion<span className="text-pink-600">Tech</span>
            </span>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div 
                key={item.section}
                className="relative"
                onMouseEnter={() => {
                  setHoveredItem(item.section);
                  if (item.subItems) setServicesDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  setHoveredItem(null);
                  if (item.subItems) setServicesDropdownOpen(false);
                }}
              >
                <div className="relative">
                  <button
                    onClick={(e) => {
                      if (item.subItems) {
                        toggleServicesDropdown(e);
                      } else {
                        handleClick(item.section);
                      }
                    }}
                    className={`px-3 py-2 font-medium transition-colors flex items-center ${
                      activeSection === item.section || 
                      (item.subItems && item.subItems.some(sub => sub.section === activeSection))
                        ? 'text-pink-600' 
                        : 'text-gray-700 hover:text-pink-600'
                    }`}
                  >
                    {item.name}
                    {item.subItems && (
                      servicesDropdownOpen ? <FiChevronUp className="ml-1" size={16} /> : <FiChevronDown className="ml-1" size={16} />
                    )}
                  </button>
                  
                  {/* Clickable overlay for dropdown (expands click area) */}
                  {item.subItems && (
                    <div 
                      className="absolute inset-0 cursor-pointer"
                      onClick={toggleServicesDropdown}
                    />
                  )}
                </div>
                
                {/* Animated underline */}
                {!item.subItems && (
                  <motion.div
                    className={`absolute bottom-0 left-0 h-0.5 bg-pink-600 ${
                      activeSection === item.section ? 'w-full' : 'w-0'
                    }`}
                    animate={{
                      width: (hoveredItem === item.section || activeSection === item.section) ? '100%' : '0%'
                    }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                
                {/* Services dropdown */}
                {item.subItems && servicesDropdownOpen && (
                  <motion.div
                    className="absolute left-0 mt-0 w-56 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.subItems.map((subItem) => (
                      <button
                        key={subItem.section}
                        onClick={() => handleClick(subItem.section)}
                        className={`w-full text-left px-4 py-2 font-medium transition-colors ${
                          activeSection === subItem.section
                            ? 'bg-pink-50 text-pink-600'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {subItem.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
            
            {/* CTA Button */}
            <motion.button
              onClick={() => handleClick('contact')}
              className="px-6 py-2 bg-gradient-to-r from-pink-600 to-pink-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
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
              <div key={item.section}>
                <div className="relative">
                  <button
                    onClick={() => {
                      if (!item.subItems) {
                        handleClick(item.section);
                      } else {
                        setServicesDropdownOpen(!servicesDropdownOpen);
                      }
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-between ${
                      activeSection === item.section || 
                      (item.subItems && item.subItems.some(sub => sub.section === activeSection))
                        ? 'bg-blue-50 text-pink-600' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                    {item.subItems ? (
                      servicesDropdownOpen ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />
                    ) : (
                      activeSection === item.section && (
                        <div className="ml-2 w-2 h-2 bg-pink-600 rounded-full"></div>
                      )
                    )}
                  </button>
                  
                  {/* Clickable overlay for mobile dropdown */}
                  {item.subItems && (
                    <div 
                      className="absolute inset-0 cursor-pointer"
                      onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                    />
                  )}
                </div>
                
                {/* Mobile services dropdown */}
                {item.subItems && servicesDropdownOpen && (
                  <div className="pl-4 mt-1 space-y-1">
                    {item.subItems.map((subItem) => (
                      <button
                        key={subItem.section}
                        onClick={() => handleClick(subItem.section)}
                        className={`w-full text-left px-4 py-2 rounded-md font-medium ${
                          activeSection === subItem.section
                            ? 'bg-pink-50 text-pink-600'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {subItem.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={() => handleClick('contact')}
              className="w-full mt-2 px-4 py-3 bg-gradient-to-r from-pink-600 to-pink-500 text-white rounded-lg font-medium shadow-md"
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