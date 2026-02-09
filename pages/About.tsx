
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-24 lg:pt-32">
      {/* Header */}
      <section className="bg-slate-50 py-20 lg:py-32 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight">
              Pioneering <span className="text-blue-600">Infrastructure</span> for a Connected Africa.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Nexlume Ventures Limited is a Nigerian venture company dedicated to identifying, building, and operating essential technology projects.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-blue-600 rounded-full"></span>
                Our Mission
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To bridge critical infrastructure gaps in Nigeria through innovative technology solutions, starting with ubiquitous connectivity for higher education. We believe that access to the internet is a fundamental right that accelerates national development.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-blue-600 rounded-full"></span>
                Our Vision
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To become Africa's leading technology venture operator, recognized for transforming underserved regions into thriving hubs of digital innovation and economic activity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-slate-400">The principles that guide our investments and operations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <div className="text-blue-400 mb-6 text-3xl font-bold">01</div>
              <h3 className="text-xl font-bold mb-4">Integrity</h3>
              <p className="text-slate-400">We operate with transparency and hold ourselves accountable to our partners and the communities we serve.</p>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <div className="text-blue-400 mb-6 text-3xl font-bold">02</div>
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-slate-400">We don't just use technology; we leverage it to solve complex logistical and infrastructural challenges.</p>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <div className="text-blue-400 mb-6 text-3xl font-bold">03</div>
              <h3 className="text-xl font-bold mb-4">Impact</h3>
              <p className="text-slate-400">Every project we undertake must measurable improve the lives of Nigerians and create long-term value.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership / Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900">Expert Leadership</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Our team consists of veterans in telecommunications, infrastructure finance, and software engineering.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group">
                <div className="aspect-[4/5] bg-slate-100 rounded-3xl overflow-hidden mb-6">
                  <img src={`https://picsum.photos/seed/person${i}/600/750`} alt="Team Member" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Executive Director {i}</h3>
                <p className="text-blue-600 font-medium text-sm">Nexlume Ventures Limited</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
