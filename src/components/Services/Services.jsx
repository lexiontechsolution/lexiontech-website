import { motion } from 'framer-motion';
import { FiCode, FiEdit3, FiCloud, FiArrowRight, FiCheck, FiZap, FiLayers } from 'react-icons/fi';
import { FaPaintBrush, FaServer, FaMobileAlt, FaChartLine } from 'react-icons/fa';
import { IoMdRocket } from 'react-icons/io';
import { GiSpiderWeb } from 'react-icons/gi';

const Services = () => {
  const services = [
    {
      icon: <FaPaintBrush className="w-8 h-8" />,
      title: 'Digital Design',
      description: 'Crafting pixel-perfect interfaces that delight users and drive engagement.',
      color: 'from-fuchsia-500 to-purple-600',
      features: ['UI/UX Design', 'Prototyping', 'Design Systems', 'User Testing'],
      shape: 'rounded-tl-3xl rounded-br-3xl',
      bgShape: 'bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))]'
    },
    {
      icon: <GiSpiderWeb className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Building performant, accessible websites with modern frameworks.',
      color: 'from-blue-500 to-cyan-600',
      features: ['React/Next.js', 'Responsive Design', 'Web Performance', 'SEO'],
      shape: 'rounded-tr-3xl rounded-bl-3xl',
      bgShape: 'bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))]'
    },
    {
      icon: <FaServer className="w-8 h-8" />,
      title: 'Cloud Solutions',
      description: 'Scalable infrastructure optimized for security and performance.',
      color: 'from-indigo-500 to-blue-700',
      features: ['AWS/Azure', 'DevOps', 'Microservices', 'CI/CD Pipelines'],
      shape: 'rounded-tl-3xl rounded-br-3xl',
      bgShape: 'bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))]'
    },
    {
      icon: <FaMobileAlt className="w-8 h-8" />,
      title: 'Mobile Apps',
      description: 'Cross-platform mobile experiences that feel native.',
      color: 'from-emerald-500 to-teal-600',
      features: ['React Native', 'iOS/Android', 'Push Notifications', 'App Store Optimization'],
      shape: 'rounded-tr-3xl rounded-bl-3xl',
      bgShape: 'bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))]'
    }
  ];

  const process = [
    {
      title: "Discover",
      description: "We analyze your needs and goals",
      icon: <FiLayers className="w-6 h-6" />,
      color: "bg-fuchsia-100 text-fuchsia-600"
    },
    {
      title: "Design",
      description: "Creating wireframes and prototypes",
      icon: <FiEdit3 className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Develop",
      description: "Building with modern technologies",
      icon: <FiCode className="w-6 h-6" />,
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      title: "Deploy",
      description: "Launching and monitoring your solution",
      icon: <IoMdRocket className="w-6 h-6" />,
      color: "bg-indigo-100 text-indigo-600"
    }
  ];

  return (
    <div className="bg-slate-50 overflow-hidden">
      {/* Hero Section */}
      <section id='services'className="relative pt-32 pb-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(124,_58,_237,_0.05)_0,_transparent_70%)]"></div>
          <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-6 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-white text-fuchsia-600 rounded-full text-sm font-medium mb-6 shadow-sm border border-slate-200">
              Our Expertise
            </span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-slate-900 mb-6"
            >
              Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-blue-500">Solutions</span> That Scale
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-600 max-w-3xl mx-auto"
            >
              Comprehensive services designed to elevate your digital presence and drive measurable results.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`relative overflow-hidden ${service.shape} ${service.bgShape} bg-gradient-to-br ${service.color} p-8 text-white h-full`}
              >
                <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="mb-5 opacity-90">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <FiCheck className="mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
            >
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-blue-500">Process</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-slate-600"
            >
              A transparent workflow that ensures quality at every stage of your project.
            </motion.p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-fuchsia-500 via-blue-500 to-emerald-500 -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative z-10"
                >
                  <div className={`${step.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    {step.icon}
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
                    <div className="text-lg font-bold text-slate-900 mb-2">{step.title}</div>
                    <p className="text-slate-600">{step.description}</p>
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

export default Services;