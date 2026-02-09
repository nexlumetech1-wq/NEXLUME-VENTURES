
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-extrabold text-white flex items-center gap-2 mb-6">
              <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-lg font-bold">N</span>
              NEXLUME VENTURES
            </Link>
            <p className="text-slate-400 max-w-sm mb-8">
              Building and operating innovative technology and infrastructure projects across Africa. We bridge the digital divide through reliable, high-impact connectivity and logistics solutions.
            </p>
            
            {/* Newsletter Subscription */}
            <div className="max-w-xs">
              <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-widest">Stay Informed</h4>
              <form 
                action="https://formspree.io/f/mqedagoz" 
                method="POST"
                className="flex gap-2"
              >
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your email address" 
                  required
                  className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 w-full text-white placeholder:text-slate-500 transition-all"
                />
                <button 
                  type="submit" 
                  className="bg-blue-600 text-white px-4 py-2.5 rounded-lg text-sm font-bold hover:bg-blue-700 transition-all shrink-0"
                >
                  Join
                </button>
              </form>
              <p className="text-[10px] text-slate-500 mt-2">Get quarterly updates on our infrastructure pipeline.</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Investor Relations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li>Lagos, Nigeria</li>
              <li>info@nexlumeventures.com</li>
              <li>+234 800 NEXLUME</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {currentYear} Nexlume Ventures Limited. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
