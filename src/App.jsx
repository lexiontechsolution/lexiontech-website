import { useState, useEffect } from 'react'
import Header from './pages/Header'
import Hero from './Hero'
import Services from './components/Services/Services'
import WhyChooseUs from './components/why choose/WhyChooseUs' // ✅ fixed folder name
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './pages/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import logoLoad from './assets/logo load.png' // ✅ loader image
import { Helmet } from 'react-helmet-async' // ✅ SEO (final)

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
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>LexionTech | Digital Transformation Partner</title>
        <meta
          name="description"
          content="LexionTech empowers your digital future with web, mobile, and cloud solutions. Explore our services to transform your business."
        />
        <meta
          name="keywords"
          content="LexionTech, digital transformation, IT services, web development, mobile apps, cloud solutions"
        />
        <meta name="author" content="LexionTech" />

        {/* Open Graph (for social media preview) */}
        <meta property="og:title" content="LexionTech | Digital Transformation Partner" />
        <meta
          property="og:description"
          content="Custom web, mobile, and cloud applications that drive growth and innovation."
        />
        <meta property="og:url" content="https://www.lexiontech.xyz/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.lexiontech.xyz/logo.png" /> {/* ✅ Replace with your real logo path */}
      </Helmet>

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
              {/* ✅ loader image */}
              <img src={logoLoad} alt="LexionTech loading" className="w-24 h-24" />
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
