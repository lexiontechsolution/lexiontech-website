import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiArrowRight, FiPlay, FiCode, FiSmartphone, FiCloud, FiCheck, FiMonitor, FiEdit3, FiSearch, FiShoppingCart, FiDatabase, FiShield, FiZap, FiGlobe, FiTarget, FiTrendingUp, FiHeart, FiStar, FiUsers, FiAward } from 'react-icons/fi';
import { FaLaptopCode, FaMobileAlt, FaServer, FaChartLine } from 'react-icons/fa';

// Header Component
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'Services', to: 'Services' },
    { name: 'Our Work', to: 'Our work' },
    { name: 'Why Us', to: 'why-us' },
    { name: 'Contact', to: 'contact' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-sm border-b border-pink-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-slate-900 tracking-tight">
                LexionTech
              </span>
              <span className="text-[10px] text-slate-500 -mt-1 tracking-wider uppercase">
                Digital Solutions
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <button
                  onClick={() => scrollToSection(item.to)}
                  className="relative text-slate-700 hover:text-pink-500 font-medium cursor-pointer transition-all duration-200 py-2 text-[15px] tracking-wide"
                >
                  {item.name}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </button>
              </motion.div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <motion.a
              href="tel:+916380853637"
              className="relative inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-pink-400 to-purple-500 text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden border border-pink-300"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center space-x-2 text-sm tracking-wide">
                <span>Get Started</span>
                <FiArrowRight className="transition-transform duration-300 text-base" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-slate-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <FiX size={24} className="text-slate-800" />
              ) : (
                <FiMenu size={24} className="text-slate-700" />
              )}
            </motion.div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white rounded-xl mt-2 shadow-lg border border-pink-100"
            >
              <nav className="flex flex-col p-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => scrollToSection(item.to)}
                      className="text-slate-700 hover:text-pink-500 font-medium py-3 px-4 cursor-pointer transition-colors duration-200 block rounded-lg hover:bg-pink-50 w-full text-left"
                    >
                      {item.name}
                    </button>
                  </motion.div>
                ))}
                <motion.a
                  href="tel:+916380853637"
                  className="mt-3 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-pink-400 to-purple-500 text-white font-medium rounded-lg shadow-sm text-sm tracking-wide"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
export default Header;