
import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "NextConnect",
      status: "In Development",
      category: "Internet & Network Infrastructure",
      description: "NEXLUME VENTURES’ core connectivity initiative focused on delivering stable, affordable internet access to universities, campuses, underserved communities, and select households facing poor or unreliable network coverage.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
      impact: "Network infrastructure design, deployment, and optimization.",
      highlights: ["Campus-wide coverage", "Shared connectivity systems", "Low-latency backhaul"]
    },
    {
      title: "NEXA",
      status: "Planned",
      category: "Fintech & Crypto Infrastructure",
      description: "A fintech platform designed to bridge cryptocurrency and traditional banking in Africa. The application will enable users to perform crypto transactions, convert digital assets to Naira, and transfer funds directly to local bank accounts.",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800",
      impact: "Simplifying digital finance while maintaining compliance.",
      highlights: ["Crypto-to-Naira conversion", "Direct bank transfers", "Secure wallet infrastructure"]
    },
    {
      title: "AFRIMART",
      status: "Planned",
      category: "E-commerce",
      description: "An Africa-focused e-commerce platform built to enable cross-border trade within the continent. The platform will allow individuals and businesses to buy and sell products online, starting with African markets before expanding further.",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800",
      impact: "Scaling African merchants through digital infrastructure.",
      highlights: ["Cross-border payments", "Verified merchant network", "Regional trade optimization"]
    },
    {
      title: "NEXLOGISTICS",
      status: "Planned",
      category: "Logistics & Supply Chain",
      description: "A logistics and delivery infrastructure project created to support e-commerce operations and regional trade. Providing reliable movement of goods across cities and regions for internal and external partners.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
      impact: "Foundational layer for scaling digital commerce across Africa.",
      highlights: ["Last-mile delivery", "Warehousing tech", "Regional distribution hubs"]
    },
    {
      title: "SCHOLARA",
      status: "Planned",
      category: "Education Technology",
      description: "An education platform designed to strengthen the connection between lecturers and students. The platform focuses on improving academic engagement, access to learning resources, and collaborative learning.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
      impact: "Structured digital environment for learning continuity.",
      highlights: ["Collaborative tools", "Resource sharing", "Student-Lecturer engagement"]
    }
  ];

  return (
    <div className="pt-24 lg:pt-32 bg-slate-50 min-h-screen pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16 text-center lg:text-left">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4">
            Strategic Initiatives
          </span>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 mb-6">Our Portfolio</h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            At Nexlume Ventures, we identify and build the essential infrastructure layers required to power Africa's digital economy.
          </p>
        </header>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-[40px] overflow-hidden shadow-sm border border-slate-200 flex flex-col lg:flex-row hover:shadow-2xl hover:border-blue-100 transition-all duration-500"
            >
              <div className="lg:w-2/5 h-72 lg:h-auto overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden"></div>
                <div className="absolute bottom-6 left-6 lg:hidden">
                   <span className="text-white text-2xl font-bold">{project.title}</span>
                </div>
              </div>
              
              <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="bg-slate-900 text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    {project.category}
                  </span>
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border ${
                    project.status === 'In Development' 
                    ? 'bg-green-50 text-green-700 border-green-200' 
                    : 'bg-blue-50 text-blue-700 border-blue-200'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6">{project.title}</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100">
                    <h4 className="text-sm font-bold text-blue-900 uppercase tracking-tight mb-2">Core Impact</h4>
                    <p className="text-blue-800 text-sm">{project.impact}</p>
                  </div>
                  <div className="flex flex-col justify-center">
                    <ul className="space-y-2">
                      {project.highlights.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Footer */}
        <div className="mt-24 p-12 lg:p-20 bg-blue-600 rounded-[50px] text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Interested in our pipeline?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              We are actively seeking strategic partners and investors for our upcoming project phases.
            </p>
            <a href="#/contact" className="inline-block bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-colors shadow-xl">
              Partner With Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
