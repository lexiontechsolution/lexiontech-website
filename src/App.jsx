import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Hero from './components/Hero';
import Header from './components/Header'; // Make sure to import Header

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <AnimatePresence mode='wait'>
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 flex items-center justify-center bg-white z-50"
          >
            <div className="flex flex-col items-center space-y-4">
              {/* Make sure the image path is correct - adjusted from ../src/assets to direct path */}
              <img
                src="../src/assets/logo.jpg" // Assuming logo.jpg is in your public folder
                alt="Loading..."
                className="w-24 h-24 object-contain" // Added object-contain for better image handling
              />
            </div>
          </motion.div>
        ) : (
          <>
            <Header />
            <main>
              <Hero />
              {/* Add other components here as needed */}
            </main>
            {/* Add footer or other sections here if needed */}
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
