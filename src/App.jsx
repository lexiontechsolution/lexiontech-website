import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import InternshipSection from './components/InternshipSection'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 flex items-center justify-center bg-white z-50"
          >
            <div className="flex flex-col items-center space-y-4">
              {/* Image loader - make sure loader.gif exists in your public folder */}
              <img
                src="../src/assets/logo load.png"
                alt="Loading..."
                className="w-24 h-24"
              />
              {/* <h2 className="text-2xl font-bold text-gray-800">LexionTech</h2> */}
            </div>
          </motion.div>
        ) : (
          <>
            <Header />
            <main>
              <Hero />
              <Services />
              <WhyChooseUs />
              <Testimonials />
              <InternshipSection />
              <Contact />
            </main>
            <Footer />
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
