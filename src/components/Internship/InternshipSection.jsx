import { motion } from 'framer-motion';
import { FiBriefcase, FiAward, FiUsers, FiClock, FiChevronRight } from 'react-icons/fi';
import { FaCode, FaChartLine } from 'react-icons/fa';

const InternshipSection = () => {
  const programFeatures = [
    {
      icon: <FiBriefcase className="w-6 h-6" />,
      title: "Real Projects",
      description: "Work on actual client projects that make an impact",
    },
    {
      icon: <FiAward className="w-6 h-6" />,
      title: "Expert Mentors",
      description: "Learn from senior engineers and designers",
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Peer Network",
      description: "Join a community of ambitious builders",
    },
    {
      icon: <FiClock className="w-6 h-6" />,
      title: "Flexible Schedule",
      description: "3-6 month programs to fit your needs",
    }
  ];

  const focusAreas = [
    {
      icon: <FaCode className="w-5 h-5" />,
      title: "Software Engineering",
      skills: ["React/Next.js", "Node.js", "TypeScript", "APIs"],
    },
    {
      icon: <FaChartLine className="w-5 h-5" />,
      title: "Data Engineering",
      skills: ["Python", "SQL", "Data Pipelines", "Analytics"],
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4 shadow-sm"
          >
            Career Accelerator
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Launch Your Tech Career
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            A 16-week immersive program to jumpstart your journey in tech
          </motion.p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {programFeatures.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-purple-200 transition-all backdrop-blur-sm bg-opacity-80"
            >
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 mb-4 shadow-inner">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Focus Areas */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm backdrop-blur-sm bg-opacity-80 mb-16"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            Focus Areas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {focusAreas.map((area, index) => (
              <motion.div 
                key={index}
                whileHover={{ x: 5 }}
                className="bg-gray-50 p-5 rounded-lg border border-gray-200 hover:border-purple-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 shadow-inner">
                    {area.icon}
                  </div>
                  <h4 className="font-medium text-gray-900 text-lg">{area.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {area.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-white text-gray-800 text-sm rounded-full border border-gray-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA - Moved to where Timeline was */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <p className="text-gray-600 mb-6 max-w-md mx-auto text-lg">
              
            </p>
            <motion.button
  onClick={() => window.open("https://forms.gle/ThoJwWpW4RgKNNFu7", "_blank")}
  whileHover={{ scale: 1.03, boxShadow: "0 5px 15px rgba(124, 58, 237, 0.3)" }}
  whileTap={{ scale: 0.98 }}
  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg font-medium text-lg hover:from-purple-700 hover:to-purple-800 transition-all shadow-md"
>
  Apply Now <FiChevronRight className="inline ml-1" />
</motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InternshipSection;