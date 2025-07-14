import { motion } from 'framer-motion';
import { FiTarget, FiLayers, FiShield, FiUsers } from 'react-icons/fi';

const WhyChooseUs = () => {
  const valueProps = [
    {
      icon: <FiTarget className="w-6 h-6" />,
      title: "Strategic Alignment",
      description: "We architect solutions that directly support your business objectives and growth targets",
      color: "bg-blue-600",
      accent: "from-blue-600 to-blue-700"
    },
    {
      icon: <FiLayers className="w-6 h-6" />,
      title: "Integrated Approach",
      description: "Seamless coordination across design, development, and deployment for cohesive solutions",
      color: "bg-purple-600",
      accent: "from-purple-600 to-purple-700"
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: "Enterprise-Grade Security",
      description: "Built-in protections and compliance measures at every layer of our solutions",
      color: "bg-emerald-600",
      accent: "from-emerald-600 to-emerald-700"
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Collaborative Partnership",
      description: "We work as an extension of your team with full transparency and shared goals",
      color: "bg-amber-600",
      accent: "from-amber-600 to-amber-700"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      {/* Hero Section */}
      <section id='why-us'className="relative pt-32 pb-24">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,_130,_246,_0.05)_0,_transparent_70%)]"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse -z-10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-white text-blue-700 rounded-full text-sm font-medium mb-6 shadow-sm border border-slate-200"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              Our Differentiators
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
            >
              Why Leading Enterprises <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Choose Us</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-600 max-w-3xl mx-auto"
            >
              We deliver more than technology—we create strategic advantages that drive measurable business outcomes.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="relative py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {valueProps.map((prop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-white rounded-2xl shadow-sm border border-slate-200 group-hover:shadow-md transition-all -z-10"></div>
                <div className="h-full p-8 relative z-10">
                  <div className={`w-14 h-14 rounded-xl ${prop.color} text-white flex items-center justify-center mb-6 shadow-lg`}>
                    {prop.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{prop.title}</h3>
                  <p className="text-slate-600 mb-6">{prop.description}</p>
                  <div className="w-full h-1 bg-gradient-to-r from-slate-200 to-transparent mb-6"></div>
                  <div className="flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
               
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Depth Section
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Depth of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Expertise</span>
                </h2>
                <p className="text-slate-300 text-lg mb-8">
                  Our specialists bring decades of combined experience solving complex challenges across industries. We don't just implement technology—we solve business problems.
                </p>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 mr-6">
                      <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-400">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Accelerated Delivery</h3>
                      <p className="text-slate-400">Proven methodologies that reduce time-to-value without compromising quality</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 mr-6">
                      <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center text-purple-400">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Future-Proof Solutions</h3>
                      <p className="text-slate-400">Architectures designed to evolve with your business needs</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -top-8 -left-8 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 p-8 shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="flex -space-x-3">
                      {[1,2,3].map((item) => (
                        <div key={item} className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 border-2 border-slate-900 flex items-center justify-center text-white font-bold text-sm">
                          {item === 1 ? 'JD' : item === 2 ? 'AS' : 'MR'}
                        </div>
                      ))}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Our Leadership Team</h4>
                      <p className="text-sm text-slate-400">Average 15+ years experience</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-400 mr-3">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                          </svg>
                        </div>
                        <h5 className="font-medium">Strategic Consulting</h5>
                      </div>
                      <p className="text-sm text-slate-400">Aligning technology initiatives with business objectives</p>
                    </div>
                    <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center text-purple-400 mr-3">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          </svg>
                        </div>
                        <h5 className="font-medium">Technical Excellence</h5>
                      </div>
                      <p className="text-sm text-slate-400">Cutting-edge solutions with enterprise-grade reliability</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-12 text-center relative overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.15),_transparent_70%)]"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Experience the Difference?
              </h3>
              <p className="text-blue-100 text-xl mb-8">
                Let's discuss how our approach can benefit your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white text-blue-700 font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  Schedule Consultation
                </motion.button>
                <motion.button
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-transparent text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-2 border-white"
                >
                  View Client Stories
                </motion.button>
              </div>
            </div> 
          </motion.div>
        </div>
      </section>*/}
    </div>
  );
};

export default WhyChooseUs;