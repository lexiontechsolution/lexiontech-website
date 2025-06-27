import { motion } from 'framer-motion';
import { FiCode, FiSmartphone, FiCloud, FiArrowRight, FiCheck, FiMonitor, FiEdit3, FiSearch, FiShoppingCart, FiDatabase, FiShield, FiZap, FiGlobe } from 'react-icons/fi';
import { FaLaptopCode, FaMobileAlt, FaServer, FaChartLine } from 'react-icons/fa';

const Services = () => {

  const mainServices = [
    {
      icon: <FiEdit3 className="w-8 h-8 text-white" />,
      title: 'WEB DESIGN',
      description: 'Creating visually stunning and user-centric designs that captivate your audience and drive conversions.',
      color: 'bg-gradient-to-br from-purple-500 to-pink-600',
      iconBg: 'from-purple-500 to-pink-600',
      features: [
        'UI/UX Design',
        'Responsive Design',
        'Brand Identity',
        'User Research',
        'Prototyping',
        'Design Systems'
      ],
      detailedServices: [
        { name: 'Custom Website Design', desc: 'Tailored designs that reflect your brand identity' },
        { name: 'Mobile-First Design', desc: 'Optimized for all devices and screen sizes' },
        { name: 'E-commerce Design', desc: 'Converting online store designs' },
        { name: 'Landing Page Design', desc: 'High-converting promotional pages' }
      ]
    },
    {
      icon: <FiCode className="w-8 h-8 text-white" />,
      title: 'WEB DEVELOPMENT',
      description: 'Building robust, scalable web applications with cutting-edge technologies and best practices.',
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      iconBg: 'from-blue-500 to-cyan-600',
      features: [
        'Frontend Development',
        'Backend Development',
        'Full-Stack Solutions',
        'API Integration',
        'Database Design',
        'Performance Optimization'
      ],
      detailedServices: [
        { name: 'Custom Web Applications', desc: 'Scalable solutions built with modern frameworks' },
        { name: 'E-commerce Development', desc: 'Complete online store solutions' },
        { name: 'CMS Development', desc: 'Content management systems' },
        { name: 'Progressive Web Apps', desc: 'App-like web experiences' }
      ]
    },
    {
      icon: <FiCloud className="w-8 h-8 text-white" />,
      title: 'CLOUD SERVICES',
      description: 'Secure, scalable cloud infrastructure solutions that grow with your business needs.',
      color: 'bg-gradient-to-br from-indigo-500 to-blue-700',
      iconBg: 'from-indigo-500 to-blue-700',
      features: [
        'Cloud Migration',
        'DevOps & CI/CD',
        'Infrastructure as Code',
        'Monitoring & Security',
        'Serverless Solutions',
        'Cloud Optimization'
      ],
      detailedServices: [
        { name: 'AWS Solutions', desc: 'Complete Amazon Web Services implementation' },
        { name: 'Azure Integration', desc: 'Microsoft Azure cloud services' },
        { name: 'Cloud Migration', desc: 'Seamless transition to cloud infrastructure' },
        { name: 'DevOps Automation', desc: 'Streamlined deployment processes' }
      ]
    }
  ];

  const stats = [
    { value: '', label: 'Projects Completed', icon: <FiCheck className="w-4 h-4 text-pink-600" /> },
    { value: '', label: 'Happy Clients', icon: <FaLaptopCode className="w-4 h-4 text-pink-600" /> },
    { value: '', label: 'Support Available', icon: <FaServer className="w-4 h-4 text-pink-600" /> },
    { value: '', label: 'Industry Experience', icon: <FaChartLine className="w-4 h-4 text-pink-600" /> },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'Understanding your requirements and creating a strategic roadmap.',
      icon: <FiSearch className="w-6 h-6 text-pink-600" />
    },
    {
      step: '02',
      title: 'Design & Prototype',
      description: 'Creating wireframes, mockups, and interactive prototypes.',
      icon: <FiEdit3 className="w-6 h-6 text-purple-600" />
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Building and rigorously testing your solution.',
      icon: <FiCode className="w-6 h-6 text-green-600" />
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'Deploying your project and providing ongoing maintenance.',
      icon: <FiZap className="w-6 h-6 text-orange-600" />
    }
  ];

  return (
    <section id="Services" className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-500/5 to-transparent -z-0"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-l from-indigo-500/5 to-transparent -z-0"></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse -z-0"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 bg-white text-pink-700 rounded-full text-sm font-medium mb-6 shadow-sm border border-slate-100"
            >
              <span className="w-2 h-2 bg-pink-500 rounded-full mr-2 animate-pulse"></span>
              Our Services
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-slate-900 mb-6"
            >
              Comprehensive <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">Digital Solutions</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-slate-600 max-w-3xl mx-auto"
            >
              From stunning web designs to robust development and scalable cloud solutions - we deliver end-to-end digital experiences that drive business growth.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center justify-center md:justify-start">
                <div className="w-10 h-10 rounded-lg bg-pink-100 flex items-center justify-center mr-4">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
            >
              What We <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">Offer</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-slate-600 max-w-2xl mx-auto"
            >
              Our comprehensive suite of digital services designed to transform your business presence and drive results.
            </motion.p>
          </div>

          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                {/* Service Info */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.iconBg} flex items-center justify-center shadow-lg`}>
                      {service.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key Features */}
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <FiCheck className="text-green-600 mr-2 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center text-pink-600 font-medium"
                  >
                    Learn More About {service.title.toLowerCase()}
                    <FiArrowRight className="ml-2" />
                  </motion.button>
                </div>

                {/* Service Details Card */}
                <div className="flex-1">
                  <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8">
                    <h4 className="text-xl font-bold text-slate-900 mb-6">Our {service.title.toLowerCase()} Services Include:</h4>
                    <div className="space-y-4">
                      {service.detailedServices.map((item, i) => (
                        <div key={i} className="flex items-start">
                          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${service.iconBg} mt-2 mr-4 flex-shrink-0`}></div>
                          <div>
                            <h5 className="font-semibold text-slate-900">{item.name}</h5>
                            <p className="text-slate-600 text-sm">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
            >
              Our <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">Process</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-slate-600 max-w-2xl mx-auto"
            >
              A proven methodology that ensures successful project delivery from concept to completion.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-lg">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 text-white text-sm font-bold flex items-center justify-center">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-pink-400 to-purple-500 rounded-3xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)]"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Your Project?
              </h3>
              <p className="text-blue-100 text-xl mb-8">
                Let's discuss how our digital solutions can transform your business and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white text-pink-700 font-medium rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  Get Started Today
                </motion.button>
                <motion.button
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-transparent text-white font-medium rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-2 border-white"
                >
                  View Our Portfolio
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default Services;