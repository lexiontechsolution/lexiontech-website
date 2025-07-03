import React from 'react';

const InternshipProgram = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-sans">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-2">Internship Program at LexionTech</h1>
        <p className="text-xl text-gray-600">Launch Your Career with LexionTech!</p>
      </header>

      {/* Intro */}
      <section className="mb-8 bg-blue-50 p-6 rounded-lg">
        <p className="text-lg">
          At <span className="font-bold text-blue-800">LexionTech</span>, we believe in nurturing the next generation of tech talent. Our <span className="font-bold">Internship Program</span> offers students and recent graduates the opportunity to gain hands-on experience, work on real-world projects, and learn from industry experts.
        </p>
      </section>

      {/* Why Join Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Why Join Our Internship Program?</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "✅ Real-World Experience – Work on cutting-edge projects in AI, software development, cybersecurity, and more.",
            "✅ Mentorship – Learn from seasoned professionals who guide you through challenges.",
            "✅ Skill Development – Enhance your technical and soft skills in a collaborative environment.",
            "✅ Networking – Connect with industry leaders and like-minded peers.",
            "✅ Career Growth – Top performers may receive full-time job offers!"
          ].map((item, index) => (
            <li key={index} className="bg-white p-4 rounded shadow-sm">{item}</li>
          ))}
        </ul>
      </section>

      {/* Tracks Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Internship Tracks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            "🔹 Software Development (Frontend, Backend, Full-Stack)",
            "🔹 Artificial Intelligence & Machine Learning",
            "🔹 Data Science & Analytics",
            "🔹 Cybersecurity",
            "🔹 Cloud Computing & DevOps",
            "🔹 UI/UX Design"
          ].map((track, index) => (
            <div key={index} className="bg-white p-3 rounded border-l-4 border-blue-500">
              {track}
            </div>
          ))}
        </div>
      </section>

      {/* Eligibility */}
      <section className="mb-8 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Eligibility</h2>
        <ul className="space-y-2">
          {[
            "✔ Currently enrolled in or recently graduated from a relevant degree program (CS, IT, Engineering, etc.)",
            "✔ Passion for technology and eagerness to learn",
            "✔ Strong problem-solving and teamwork skills"
          ].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Duration & Location */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Duration & Locations</h2>
        <div className="flex flex-wrap gap-4">
          <div className="bg-white p-4 rounded shadow-sm">
            <p className="font-bold">📅 3-6 months</p>
            <p className="text-gray-600">(Flexible start dates)</p>
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <p className="font-bold">📍 On-site (Bangalore/Hyderabad)</p>
            <p className="text-gray-600">& Remote Options</p>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="mb-8 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">How to Apply?</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Visit our Careers Page: <a href="https://www.lexiontech.com/careers" className="text-blue-600 underline">www.lexiontech.com/careers</a></li>
          <li>Submit your resume and a brief cover letter.</li>
          <li>Shortlisted candidates will be contacted for interviews.</li>
        </ol>
        <p className="mt-4 font-bold">Deadline: Rolling applications (Apply early!)</p>
      </section>

      {/* Footer */}
      <footer className="text-center border-t pt-6">
        <p className="text-xl font-bold mb-4">Join LexionTech and turn your potential into performance! 🚀</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
          <p>📧 <a href="mailto:internships@lexiontech.com" className="text-blue-600 underline">internships@lexiontech.com</a></p>
          <p>🔗 Follow us on <a href="https://linkedin.com/company/lexiontech" className="text-blue-600 underline">LinkedIn</a></p>
        </div>
        <p className="text-sm text-gray-500 italic">
          LexionTech is an equal-opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all interns and employees.
        </p>
      </footer>
    </div>
  );
};

export default InternshipProgram;