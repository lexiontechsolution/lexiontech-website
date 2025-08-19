import React from 'react';
import { FiMail, FiPhone, FiMessageCircle } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-12">
          Have questions or want to work together? Reach out via any of the options below.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Email */}
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <FiMail className="text-blue-600 text-3xl mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-600 mb-4 text-sm">We'll respond within 24 hours</p>
            <a
              href="mailto:lexiontechsolution@gmail.com"
              className="text-blue-600 font-medium hover:underline"
            >
              lexiontechsolution@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <FiPhone className="text-purple-600 text-3xl mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-gray-600 mb-4 text-sm">Mon–Fri, 9AM–6PM IST</p>
            <a
              href="tel:+916380853637"
              className="text-purple-600 font-medium hover:underline"
            >
              +91 63808 53637
            </a>
          </div>

          {/* WhatsApp */}
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <FiMessageCircle className="text-green-600 text-3xl mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
            <p className="text-gray-600 mb-4 text-sm">Message us instantly</p>
            <a
              href="https://wa.me/916380853637"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 font-medium hover:underline"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
