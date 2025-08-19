import { motion } from 'framer-motion';
import { FiStar, FiLinkedin } from 'react-icons/fi';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Mr. Attrait Dovin Fedrick',
      company: 'International Journal of English for Academic Excellence (IJEAE)',
      position: 'Board of Editors',
      comment: 'From a call to reality! Sanjeev s team brought my e-journal vision to life with their expertise. Their professionalism, constant support, and effective communication built trust and ensured great results. A bold attempt turned into success thanks to their dedication. Highly recommend their services!',
      rating: 5,
      avatar: 'ADF',
      linkedin: 'https://www.linkedin.com/in/attrait-dovin-fedrick-s-735b73240/'
    }
  ];

  return (
    <section id='testimonials' className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Clients Simply Love Our Work
          </h2>
          
          <div className="flex justify-center items-center mb-6">
            {[...Array(5)].map((_, i) => (
              <FiStar
                key={i}
                className={`w-6 h-6 mx-1 ${i < 5 ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
              />
            ))}
          </div>
          
          <p className="text-lg text-gray-600 mb-8">
          </p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-2xl w-full">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-all"
              >
                <blockquote className="text-lg text-gray-700 italic mb-8 text-center">
                  "{testimonial.comment}"
                </blockquote>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 font-bold mb-4">
                    {testimonial.avatar}
                  </div>
                  <div className="text-center mb-3">
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.position} – {testimonial.company}</div>
                  </div>
                  <a 
                    href={testimonial.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                    aria-label={`View ${testimonial.name}'s LinkedIn profile`}
                  >
                    <FiLinkedin className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;