import { motion } from 'framer-motion';
import { FiStar, FiChevronLeft, FiChevronRight, FiMessageSquare } from 'react-icons/fi';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'TechNova Solutions',
      position: 'CTO',
      comment:
        'LexionTech delivered our e-commerce platform ahead of schedule. Their attention to detail and communication were exceptional throughout the project.',
      rating: 5,
      logo: 'TN',
      color: 'bg-blue-600',
    },
    {
      name: 'Priya Sharma',
      company: 'GreenLife Organics',
      position: 'Digital Transformation Lead',
      comment:
        'The mobile app they developed has significantly improved our customer engagement. Highly recommend their services!',
      rating: 5,
      logo: 'GL',
      color: 'bg-emerald-600',
    },
    {
      name: 'Vikram Patel',
      company: 'FinEdge Capital',
      position: 'Head of Technology',
      comment:
        'Their cloud solutions helped us scale our operations seamlessly. Professional team with deep technical expertise.',
      rating: 4,
      logo: 'FE',
      color: 'bg-indigo-600',
    },
    {
      name: 'Ananya Desai',
      company: 'MediCare Health Systems',
      position: 'CIO',
      comment:
        'The custom CMS solution transformed our content delivery. Their team demonstrated exceptional technical skills and industry knowledge.',
      rating: 5,
      logo: 'MC',
      color: 'bg-purple-600',
    },
  ];

  return (
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
                  {/* Using FiMessageSquare instead of FiQuote */}
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
                  {/* Using FiMessageSquare instead of FiQuote */}
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

        {/* Stats section */}
       

        {/* CTA section */}
        
      </div>
    </section>
  );
};

export default Testimonials;