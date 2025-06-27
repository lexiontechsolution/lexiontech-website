const InternshipSection = () => {
  return (
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
                href="#apply"
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
  );
};

export default InternshipSection;