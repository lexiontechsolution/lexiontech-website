import { motion } from 'framer-motion';
import { FiTarget, FiTrendingUp, FiShield, FiHeart, FiStar, FiUsers, FiAward, FiZap, FiGlobe } from 'react-icons/fi';

const WhyChooseUs = () => {
  const mainFeatures = [
    {
      icon: <FiTarget className="w-8 h-8" />,
      title: 'Strategic Excellence',
      subtitle: 'Data-Driven Results',
      description: 'Our analytical approach combines market insights with cutting-edge technology to deliver measurable business outcomes.',
      metrics: ['40% Average ROI Increase', '95% Project Success Rate'],
      color: 'from-blue-500 to-indigo-600',
      bgPattern: 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: 'Innovation Leadership',
      subtitle: 'Future-Ready Solutions',
      description: 'We leverage emerging technologies and industry best practices to build solutions that scale with your business.',
      metrics: ['100+ Technologies Mastered', '500+ Solutions Delivered'],
      color: 'from-emerald-500 to-teal-600',
      bgPattern: 'bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50'
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: 'Enterprise Security',
      subtitle: 'Bank-Grade Protection',
      description: 'Advanced security protocols and compliance standards ensure your data remains protected against digital threats.',
      metrics: ['Zero Security Breaches', '99.9% Uptime Guarantee'],
      color: 'from-orange-500 to-red-600',
      bgPattern: 'bg-gradient-to-br from-orange-50 via-red-50 to-pink-50'
    },
    {
      icon: <FiHeart className="w-8 h-8" />,
      title: 'Partnership Commitment',
      subtitle: 'Long-term Success',
      description: 'Beyond project delivery, we provide ongoing strategic guidance and technical support for sustained growth.',
      metrics: ['98% Client Retention', '24/7 Dedicated Support'],
      color: 'from-purple-500 to-pink-600',
      bgPattern: 'bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50'
    }
  ];

  const achievements = [
    { icon: <FiUsers />, value: '', label: 'Global Clients' },
    { icon: <FiAward />, value: '', label: 'Industry Awards' },
    { icon: <FiGlobe />, value: '', label: 'Countries Served' },
    { icon: <FiZap />, value: '', label: 'Success Rate' }
  ];

  return (
    <div id="why-us" className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-12 lg:py-16">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-8 left-8 w-20 h-20 bg-blue-100 rounded-full mix-blend-multiply animate-pulse"></div>
          <div className="absolute top-16 right-12 w-24 h-24 bg-purple-100 rounded-full mix-blend-multiply animate-pulse delay-1000"></div>
          <div className="absolute bottom-12 left-1/4 w-22 h-22 bg-pink-100 rounded-full mix-blend-multiply animate-pulse delay-2000"></div>
          <div className="absolute bottom-16 right-1/3 w-18 h-18 bg-indigo-100 rounded-full mix-blend-multiply animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-50 to-purple-50 rounded-full text-pink-700 font-medium mb-6 border border-pink-100">
                <FiStar className="w-4 h-4 mr-2" />
                Why Industry Leaders Choose LexionTech
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Transforming Businesses with
                <span className="block bg-gradient-to-r from-pink-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                  Innovative Excellence
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We architect digital transformations that propel enterprises toward sustainable growth and competitive advantage.
              </p>
            </motion.div>

            {/* Achievement Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            >
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{achievement.value}</div>
                  <div className="text-base font-semibold text-gray-700">{achievement.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Our Competitive <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Differentiators</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Four pillars of excellence that set us apart in delivering transformative digital solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {mainFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className={`relative ${feature.bgPattern} rounded-2xl p-6 lg:p-8 h-full border border-white shadow-sm hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1`}>
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        {feature.icon}
                      </div>

                      {/* Content */}
                      <div className="space-y-4">
                        <div>
                          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                            {feature.subtitle}
                          </div>
                          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                            {feature.title}
                          </h3>
                          <p className="text-base text-gray-600 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>

                        {/* Metrics */}
                        <div className="space-y-2">
                          {feature.metrics.map((metric, i) => (
                            <div key={i} className="flex items-center">
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.color} mr-2`}></div>
                              <span className="text-sm text-gray-700 font-medium">{metric}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;