import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiPlay, FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-scroll'
import heroImage from '../assets/hero-image.png'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50/30 to-indigo-50/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(244,114,182,0.1),transparent_70%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-pink-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-pink-100/80 text-pink-600 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-2 animate-pulse"></span>
                #1 Digital Transformation Partner
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
                <span className="block text-slate-900 mb-4">
                  Empowering Your
                </span>
                <span className="block bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Digital Future
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
                Transform your business with cutting-edge technology solutions. We deliver
                <span className="font-medium text-slate-800"> custom web, mobile, and cloud applications</span> that
                drive growth and innovation.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="group inline-flex items-center px-8 py-3.5 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                  >
                    <span>Explore Services</span>
                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </motion.div>

                <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="group inline-flex items-center px-8 py-3.5 bg-white text-slate-700 font-medium rounded-lg shadow-sm hover:shadow-md border border-pink-200 hover:border-pink-300 transition-all duration-300 cursor-pointer"
                  >
                    <FiPlay className="mr-2 text-pink-500" />
                    <span>Watch Demo</span>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={heroImage}
              alt="Hero"
              // className="w-full max-w-md rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
