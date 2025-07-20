import { motion } from 'framer-motion';
import { FiStar, FiLinkedin } from 'react-icons/fi';

const Testimonials = () => {
  const testimonials = [
   {
  name: '	Mr. Attrait Dovin Fedrick',
  company: 'International Journal of English for Academic Excellence (IJEAE)',
  position: 'Board of Editors',
  comment: 'LexionTech transformed our vision for IJEAE into a seamless, user-centric academic journal platform. Their dedication, technical expertise, and timely delivery helped us successfully launch a platform trusted by global researchers and scholars.',
  rating: 5,
  linkedin: 'https://www.linkedin.com/in/attrait-dovin-fedrick-s-735b73240/',
  avatar: 'ADF'
},
    {
      name: 'Michael Rodriguez',
      company: 'UrbanNest',
      position: 'Chief Product Officer',
      comment: 'The mobile experience LexionTech delivered exceeded our expectations. They understood our vision and translated it into an app that our customers love using daily.',
      rating: 5,
      linkedin: 'https://linkedin.com/in/michaelr-urbannest',
      avatar: 'MR'
    }
  ];

  return (
    <section id='testimonials'className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Client Experiences
          </h2>
          <p className="text-lg text-gray-600">
            Hear from leaders who've partnered with us
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-all"
            >
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              
              <blockquote className="text-lg text-gray-700 italic mb-8">
                "{testimonial.comment}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</div>
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
    </section>
  );
};

export default Testimonials;
