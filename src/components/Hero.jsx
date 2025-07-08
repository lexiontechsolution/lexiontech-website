import InternshipProgram from './Internship/intro';
import logo from '../assets/logo load.png'
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiMail, FiPhone, FiMapPin, FiSend, FiMessageSquare, FiClock,
  FiFacebook, FiTwitter, FiLinkedin, FiInstagram, FiArrowUp,
  FiMenu, FiX, FiArrowRight, FiPlay, FiCode, FiSmartphone, 
  FiCloud, FiCheck, FiMonitor, FiEdit3, FiSearch, 
  FiShoppingCart, FiDatabase, FiShield, FiZap, FiGlobe, 
  FiTarget, FiTrendingUp, FiHeart, FiStar, FiUsers, FiAward
} from 'react-icons/fi';
import { FaLaptopCode, FaMobileAlt, FaServer, FaChartLine } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import heroImage from '../assets/hero-image.png';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'Services', to: 'Services' },
    { name: 'Our Work', to: 'Our work' },
    { name: 'Why Us', to: 'why-us' },
    { name: 'Contact', to: 'contact' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage =
      `Name: ${formData.name}%0A` +
      `Email: ${formData.email}%0A` +
      `Subject: ${formData.subject}%0A` +
      `Message: ${formData.message}`;
    window.open(`https://wa.me/916380853637?text=${whatsappMessage}`, '_blank');
  };

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

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'TechNova Solutions',
      position: 'CTO',
      comment: 'LexionTech delivered our e-commerce platform ahead of schedule. Their attention to detail and communication were exceptional throughout the project.',
      rating: 5,
      logo: 'TN',
      color: 'bg-blue-600',
    },
    {
      name: 'Priya Sharma',
      company: 'GreenLife Organics',
      position: 'Digital Transformation Lead',
      comment: 'The mobile app they developed has significantly improved our customer engagement. Highly recommend their services!',
      rating: 5,
      logo: 'GL',
      color: 'bg-emerald-600',
    },
    {
      name: 'Vikram Patel',
      company: 'FinEdge Capital',
      position: 'Head of Technology',
      comment: 'Their cloud solutions helped us scale our operations seamlessly. Professional team with deep technical expertise.',
      rating: 4,
      logo: 'FE',
      color: 'bg-indigo-600',
    },
    {
      name: 'Ananya Desai',
      company: 'MediCare Health Systems',
      position: 'CIO',
      comment: 'The custom CMS solution transformed our content delivery. Their team demonstrated exceptional technical skills and industry knowledge.',
      rating: 5,
      logo: 'MC',
      color: 'bg-purple-600',
    },
  ];

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

  const links = [
    {
      title: 'Services',
      items: ['Web Development', 'Mobile App Development', 'Cloud Solutions', 'UI/UX Design', 'Data Analytics'],
    },
    {
      title: 'Company',
      items: ['About Us', 'Mission & Vision', 'Why Choose Us', 'Careers', 'Internships'],
    },
    {
      title: 'Support',
      items: ['Contact Us', 'FAQs', 'Privacy Policy', 'Terms of Service', 'Sitemap'],
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-sm border-b border-pink-100' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-10 h-10 flex items-center justify-center">
              {/* Replace with your actual logo image */}
              <img 
                src={logo} 
                alt="LexionTech Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-slate-900 tracking-tight">
                LexionTech
              </span>
              <span className="text-[10px] text-slate-500 -mt-1 tracking-wider uppercase">
                Digital Solutions
              </span>
            </div>
          </motion.div>


            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(item.to)}
                    className="relative text-slate-700 hover:text-pink-500 font-medium cursor-pointer transition-all duration-200 py-2 text-[15px] tracking-wide"
                  >
                    {item.name}
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </button>
                </motion.div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <motion.a
                href="tel:+916380853637"
                className="relative inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-pink-400 to-purple-500 text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden border border-pink-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center space-x-2 text-sm tracking-wide">
                  <span>Get Started</span>
                  <FiArrowRight className="transition-transform duration-300 text-base" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-slate-700 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? (
                  <FiX size={24} className="text-slate-800" />
                ) : (
                  <FiMenu size={24} className="text-slate-700" />
                )}
              </motion.div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden overflow-hidden bg-white rounded-xl mt-2 shadow-lg border border-pink-100"
              >
                <nav className="flex flex-col p-4 space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.to}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.1 }}
                    >
                      <button
                        onClick={() => scrollToSection(item.to)}
                        className="text-slate-700 hover:text-pink-500 font-medium py-3 px-4 cursor-pointer transition-colors duration-200 block rounded-lg hover:bg-pink-50 w-full text-left"
                      >
                        {item.name}
                      </button>
                    </motion.div>
                  ))}
                  <motion.a
                    href="tel:+916380853637"
                    className="mt-3 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-pink-400 to-purple-500 text-white font-medium rounded-lg shadow-sm text-sm tracking-wide"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                  </motion.a>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Hero Section */}
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
                animate={{ opacity: 1, y: 0 }}
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
                    <a
                      href="#contact"
                      className="group inline-flex items-center px-8 py-3.5 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                    >
                      <span>Get Service</span>
                      <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </motion.div>

                  {/* <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
                    <a
                      href="https://www.youtube.com/@Lexiontech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center px-8 py-3.5 bg-white text-slate-700 font-medium rounded-lg shadow-sm hover:shadow-md border border-pink-200 hover:border-pink-300 transition-all duration-300 cursor-pointer"
                    >
                      <FiPlay className="mr-2 text-pink-500" />
                      <span>Watch Demo</span>
                    </a>
                  </motion.div> */}
                </div>
              </motion.div>
            </div>

            {/* Image Section */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={heroImage}
                alt="Hero"
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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

                    {/* <motion.button
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center text-pink-600 font-medium"
                    >
                      Learn More About {service.title.toLowerCase()}
                      <FiArrowRight className="ml-2" />
                    </motion.button> */}
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

      {/* Testimonials Section */}
      <section id="Our work" className="relative py-24 bg-gradient-to-b from-slate-50 to-blue-50 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-500/5 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-l from-indigo-500/5 to-transparent"></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section header */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-white text-blue-700 rounded-full text-sm font-medium mb-6 shadow-sm border border-slate-100"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              Client Success Stories
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-5"
            >
              Trusted by Industry <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Leaders</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-slate-600 max-w-3xl mx-auto"
            >
              Discover why enterprises choose LexionTech for their digital transformation journey
            </motion.p>
          </div>

          {/* Testimonials grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.slice(0, 2).map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <div className="h-full flex flex-col bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group p-8">
                    <FiMessageSquare className="w-10 h-10 text-blue-100 mb-4" />
                    
                    <div className="flex-grow">
                      <p className="text-lg text-slate-700 mb-6 italic relative">
                        "{testimonial.comment}"
                      </p>
                      
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <FiStar
                            key={i}
                            className={`w-5 h-5 ${
                              i < testimonial.rating
                                ? 'text-yellow-400 fill-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    
                    {/* Client info */}
                    <div className="flex items-center mt-auto pt-4 border-t border-slate-100">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${testimonial.color}`}>
                        {testimonial.logo}
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                        <p className="text-sm text-slate-600">{testimonial.position}, {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.slice(2).map((testimonial, index) => (
                <motion.div
                  key={index + 2}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <div className="h-full flex flex-col bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group p-8">
                    <FiMessageSquare className="w-10 h-10 text-blue-100 mb-4" />
                    
                    <div className="flex-grow">
                      <p className="text-lg text-slate-700 mb-6 italic relative">
                        "{testimonial.comment}"
                      </p>
                      
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <FiStar
                            key={i}
                            className={`w-5 h-5 ${
                              i < testimonial.rating
                                ? 'text-yellow-400 fill-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    
                    {/* Client info */}
                    <div className="flex items-center mt-auto pt-4 border-t border-slate-100">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${testimonial.color}`}>
                        {testimonial.logo}
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                        <p className="text-sm text-slate-600">{testimonial.position}, {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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

      {/* Internship Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Launch Your Career With Our Internship Program
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Gain real-world experience, build your network, and kickstart your professional journey
            </p>
            
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Benefits List */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Why Choose Us</h3>
                  <ul className="space-y-4 text-left">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="text-lg text-gray-800 font-medium">7000+ Internships with Stipend</span>
                        <p className="text-gray-600 text-sm">Competitive compensation for your work</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="text-lg text-gray-800 font-medium">100% Verified</span>
                        <p className="text-gray-600 text-sm">Authentic opportunities from trusted companies</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="text-lg text-gray-800 font-medium">Apply For Free</span>
                        <p className="text-gray-600 text-sm">No hidden charges or application fees</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Additional Features */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-6">What You'll Get</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-lg mr-4">
                        <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Industry Mentorship</h4>
                        <p className="text-gray-600 text-sm">Guidance from experienced professionals</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-purple-100 p-2 rounded-lg mr-4">
                        <svg className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Skill Development</h4>
                        <p className="text-gray-600 text-sm">Hands-on training in cutting-edge technologies</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-lg mr-4">
                        <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Career Opportunities</h4>
                        <p className="text-gray-600 text-sm">Potential for full-time positions after internship</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="#"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-200"
                >
                  Apply Now
                </a>
                <a
                  href="#learn-more"
                  className="inline-block bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-200"
                >
                  Learn More
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center">
                    <svg className="h-4 w-4 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Flexible durations (2-6 months)
                  </div>
                  <div className="flex items-center">
                    <svg className="h-4 w-4 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Remote & in-office options
                  </div>
                  <div className="flex items-center">
                    <svg className="h-4 w-4 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Certificate upon completion
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 bg-gradient-to-b from-rose-50 to-pink-50 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-pink-500/5 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-l from-rose-500/5 to-transparent"></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-pink-200/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-rose-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white text-pink-700 rounded-full text-sm font-medium mb-6 shadow-sm border border-slate-100">
              <span className="w-2 h-2 bg-pink-500 rounded-full mr-2 animate-pulse"></span>
              Get In Touch
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-5"
            >
              Let's Build <span className="bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">Together</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-slate-600 max-w-3xl mx-auto"
            >
              Ready to discuss your project? Reach out through any of these channels
            </motion.p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:w-2/5"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-100 p-10 shadow-lg h-full">
                <h3 className="text-3xl font-bold text-slate-900 mb-8">
                  Contact Information
                </h3>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-500 rounded-xl flex items-center justify-center text-white mr-6">
                      <FiMail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-700 mb-1">Email Us</h4>
                      <a
                        href="mailto:lexiontechsolution@gmail.com"
                        className="text-lg text-pink-600 hover:text-rose-700 font-medium transition-colors"
                      >
                        lexiontechsolution@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-500 rounded-xl flex items-center justify-center text-white mr-6">
                      <FiPhone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-700 mb-1">Call Us</h4>
                      <a
                        href="tel:+916380853637"
                        className="text-lg text-pink-600 hover:text-rose-700 font-medium transition-colors"
                      >
                        +91 63808 53637
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-500 rounded-xl flex items-center justify-center text-white mr-6">
                      <FiMapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-pink-600 mb-1">Visit Us</h4>
                      <p className="text-lg text-slate-700 hover:text-rose-700">
                        Coimbatore, Tamil Nadu, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-500 rounded-xl flex items-center justify-center text-white mr-6">
                      <FiMessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-700 mb-1">WhatsApp</h4>
                      <a
                        href="https://wa.me/916380853637"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg text-pink-600 hover:text-rose-700 font-medium transition-colors"
                      >
                        Chat with us instantly
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-200">
                  <h4 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                    <FiClock className="mr-2 text-pink-500" />
                    Business Hours
                  </h4>
                  <p className="text-slate-600 mb-2">Monday - Friday: 9am - 6pm</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:w-3/5"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-100 p-10 shadow-lg">
                <h3 className="text-3xl font-bold text-slate-900 mb-8">
                  Send Us a Message
                </h3>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-lg font-medium text-slate-700 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-5 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-lg font-medium text-slate-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-5 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-lg font-medium text-slate-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-5 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
                      placeholder="How can we help?"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-lg font-medium text-slate-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-5 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
                      placeholder="Tell us about your project..."
                      required
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-4 text-lg font-medium flex items-center justify-center gap-2 bg-gradient-to-r from-pink-400 to-rose-500 text-white rounded-xl shadow-md hover:shadow-lg transition-all"
                  >
                    <FiSend className="w-5 h-5" />
                    Send via WhatsApp
                  </motion.button>

                  <p className="text-slate-500 text-center text-sm">
                    Clicking "Send via WhatsApp" will open WhatsApp with your message
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-b from-gray-900 to-slate-950 pt-24 pb-12 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-pink-200/5 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-l from-pink-300/5 to-transparent"></div>
          <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-pink-200/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
            {/* Company Info */}
            <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
  className="mb-8"
>
  <div className="flex items-center mb-6">
    <div className="w-10 h-10 rounded-xl flex items-center justify-center mr-3">
      {/* Replace with your actual logo image */}
      <img 
        src={logo} 
        alt="LexionTech Logo" 
        className="w-full h-full object-contain"
      />
    </div>
    <span className="text-2xl font-bold text-white">LexionTech</span>
  </div>
  <p className="text-slate-400 max-w-xs mb-6 leading-relaxed">
    Simplifying technology for businesses of all scales to shape a smarter digital future.
  </p>
  
  <div className="flex space-x-4 mb-8">
    <a
      href="#"
      className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-pink-200 transition-all duration-300"
    >
      <FiFacebook className="w-5 h-5" />
    </a>
    <a
      href="https://x.com/Lexiontech01"
      className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-pink-300 transition-all duration-300"
    >
      <FiTwitter className="w-5 h-5" />
    </a>
    <a
      href="https://www.linkedin.com/company/lexiontech"
      className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-pink-400 transition-all duration-300"
    >
      <FiLinkedin className="w-5 h-5" />
    </a>
    <a
      href="https://www.instagram.com/lexiontech/"
      className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-pink-500 transition-all duration-300"
    >
      <FiInstagram className="w-5 h-5" />
    </a>
  </div>
  
  <div className="space-y-3">
    <div className="flex items-center text-slate-400">
      <FiMail className="w-5 h-5 mr-3 text-pink-300" />
      <span>lexiontechsolution@gmail.com</span>
    </div>
    <div className="flex items-center text-slate-400">
      <FiPhone className="w-5 h-5 mr-3 text-pink-300" />
      <span>+91 63808 53637</span>
    </div>
    <div className="flex items-start text-slate-400">
      <FiMapPin className="w-5 h-5 mr-3 mt-1 text-pink-300" />
      <span>Coimbatore, Tamil Nadu, India</span>
    </div>
  </div>
</motion.div>

            {/* Links columns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:col-span-3 gap-8">
              {links.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="mb-6"
                >
                  <h4 className="text-lg font-semibold text-white mb-6 pb-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-gradient-to-r after:from-pink-200 after:to-pink-300">
                    {link.title}
                  </h4>
                  <ul className="space-y-3">
                    {link.items.map((item, i) => (
                      <li key={i}>
                        <a
                          href="#"
                          className="text-slate-400 hover:text-white transition duration-300 flex items-start group"
                        >
                          <span className="w-1.5 h-1.5 bg-pink-300 rounded-full mt-2 mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                          <span>{item}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-800 pt-10 pb-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center md:text-left mb-6 md:mb-0"
              >
                <p className="text-slate-500">
                  &copy; {new Date().getFullYear()} LexionTech. All rights reserved.
                </p>
              </motion.div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a  className="text-slate-500 hover:text-pink-300 text-sm">
                  Privacy Policy
                </a>
                <a  className="text-slate-500 hover:text-pink-300 text-sm">
                  Terms of Service
                </a>
                <a  className="text-slate-500 hover:text-pink-300 text-sm">
                  Cookie Policy
                </a>
                <a  className="text-slate-500 hover:text-pink-300 text-sm">
                  GDPR Compliance
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Back to top button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-pink-200 to-pink-300 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all z-50"
          aria-label="Back to top"
        >
          <FiArrowUp className="w-5 h-5" />
        </motion.button>
      </footer>
    </div>
  );
};

export default App;