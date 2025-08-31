import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import heroImage from './assets/hero-image.png' // ✅ fixed import
import backgroundImage from './assets/philipp-katzenberger-iIJrUoeRoCQ-unsplash.jpg'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center py-16 overflow-hidden"
    >
      {/* ✅ Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        role="img"
        aria-label="Digital transformation background"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50/10 via-purple-50/0 to-indigo-50/0 backdrop-blur-[2px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(244,114,182,0.1),transparent_70%)]"></div>
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-pink-300/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* ✅ Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/80 text-pink-600 rounded-full text-sm font-medium mb-6 backdrop-blur-sm shadow-sm">
              <span className="w-2 h-2 bg-pink-600 rounded-full mr-2 animate-pulse"></span>
              #1 Digital Transformation Partner
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span className="block text-white mb-4">Empowering Your</span>
              <span className="block bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Digital Future
              </span>
            </h1>

            <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mb-8 mx-auto"></div>

            <p className="text-lg sm:text-xl text-white/90 mb-10 leading-relaxed">
              Transform your business with cutting-edge technology solutions. We deliver
              <span className="font-medium text-white"> custom web, mobile, and cloud applications</span> that drive growth and innovation.
            </p>

            <div className="flex justify-center">
              <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
                <button
                  onClick={() => scrollToSection('services')}
                  className="group inline-flex items-center px-8 py-3.5 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <span>Explore Services</span>
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
