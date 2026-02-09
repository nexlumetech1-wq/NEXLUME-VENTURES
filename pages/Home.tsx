
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-blue-50/50 rounded-bl-[100px] hidden lg:block"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center">
            <div className="lg:w-1/2">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                Infrastructure for the Future
              </span>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-8">
                Empowering <span className="gradient-text">Africa</span> Through <span className="gradient-text">Innovative Tech.</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
                Nexlume Ventures Limited builds and operates high-impact infrastructure projects that drive progress and connectivity for the next generation across the continent.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/projects" className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 text-center">
                  Explore Projects
                </Link>
                <Link to="/about" className="bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-xl text-lg font-bold hover:border-blue-600 transition-all text-center">
                  Learn Our Vision
                </Link>
              </div>
            </div>
            <div className="mt-16 lg:mt-0 lg:w-1/2 flex justify-center relative">
               <div className="relative w-full max-w-md">
                 <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" 
                    alt="Connectivity Infrastructure" 
                    className="rounded-3xl shadow-2xl relative z-10"
                 />
                 <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-slate-100 max-w-[240px]">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <span className="font-bold text-slate-900">NextConnect</span>
                    </div>
                    <p className="text-sm text-slate-600">Infrastructure deployment active in key underserved hubs.</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Investor Summary */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-extrabold text-blue-400 mb-2">5+</div>
              <p className="text-slate-400 font-medium">Core Ventures</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-extrabold text-blue-400 mb-2">36+</div>
              <p className="text-slate-400 font-medium">Regional Presence</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-extrabold text-blue-400 mb-2">99.9%</div>
              <p className="text-slate-400 font-medium">Connectivity Target</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-extrabold text-blue-400 mb-2">24/7</div>
              <p className="text-slate-400 font-medium">Venture Operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Flagship Initiative</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="bg-white rounded-[40px] overflow-hidden shadow-sm border border-slate-100 lg:flex items-stretch">
            <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">NextConnect: Eliminating Digital Gaps</h3>
              <p className="text-lg text-slate-600 mb-8">
                Our core connectivity initiative delivering stable, affordable internet access to campuses and underserved communities facing poor network coverage across the region.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-5 h-5 bg-blue-600 rounded-full"></div>
                  Infrastructure design & optimization
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-5 h-5 bg-blue-600 rounded-full"></div>
                  Shared connectivity systems
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-5 h-5 bg-blue-600 rounded-full"></div>
                  High-speed campus networks
                </li>
              </ul>
              <div>
                <Link to="/projects" className="text-blue-600 font-bold hover:underline">View all ventures →</Link>
              </div>
            </div>
            <div className="lg:w-1/2 bg-slate-200">
               <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000" alt="Team working on connectivity" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-700 rounded-full translate-x-1/3 translate-y-1/3 opacity-50"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-8">Building Africa's Digital Backbone</h2>
          <p className="text-xl text-blue-100 mb-12">
            NEXLUME VENTURES is at the forefront of digital transformation. Join us in building the infrastructure for the next billion users.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-white text-blue-600 px-10 py-5 rounded-xl text-lg font-bold hover:bg-slate-100 transition-all shadow-xl">
              Get in Touch
            </Link>
            <Link to="/projects" className="bg-blue-700 text-white border border-blue-400 px-10 py-5 rounded-xl text-lg font-bold hover:bg-blue-800 transition-all">
              See Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
