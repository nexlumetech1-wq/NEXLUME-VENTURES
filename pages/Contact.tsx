
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'IDLE' | 'SUBMITTING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Partnership Inquiry',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('SUBMITTING');

    try {
      const response = await fetch("https://formspree.io/f/mqedagoz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('SUCCESS');
        setFormData({ name: '', email: '', subject: 'Partnership Inquiry', message: '' });
        // Reset status after 5 seconds to allow new messages
        setTimeout(() => setStatus('IDLE'), 5000);
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('ERROR');
    }
  };

  return (
    <div className="pt-24 lg:pt-32">
      <section className="bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex gap-16">
            {/* Contact Info */}
            <div className="lg:w-1/3 mb-16 lg:mb-0">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight">
                Let's Build the <span className="text-blue-600">Future</span> Together.
              </h1>
              <p className="text-lg text-slate-600 mb-12">
                Whether you are an investor, potential partner, or a university representative, we would love to hear from you.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Head Office</h4>
                    <p className="text-slate-600 text-sm mt-1">Victoria Island, Lagos, Nigeria</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Email Us</h4>
                    <p className="text-slate-600 text-sm mt-1">info@nexlumeventures.com</p>
                    <p className="text-slate-600 text-sm">invest@nexlumeventures.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Business Hours</h4>
                    <p className="text-slate-600 text-sm mt-1">Mon - Fri: 9am - 5pm WAT</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-2/3 bg-slate-50 p-8 lg:p-12 rounded-[40px] border border-slate-200 shadow-sm relative overflow-hidden">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
                <div className="col-span-1">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    disabled={status === 'SUBMITTING' || status === 'SUCCESS'}
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe" 
                    className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all disabled:opacity-50"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    disabled={status === 'SUBMITTING' || status === 'SUCCESS'}
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="john@company.com" 
                    className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all disabled:opacity-50"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Inquiry Type</label>
                  <select 
                    name="subject"
                    disabled={status === 'SUBMITTING' || status === 'SUCCESS'}
                    className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all disabled:opacity-50"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  >
                    <option>Partnership Inquiry</option>
                    <option>Investor Relations</option>
                    <option>University Connectivity</option>
                    <option>Vendor/Supplier</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                  <textarea 
                    name="message"
                    rows={6}
                    required
                    disabled={status === 'SUBMITTING' || status === 'SUCCESS'}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us how we can work together..." 
                    className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none disabled:opacity-50"
                  ></textarea>
                </div>

                {status === 'SUCCESS' && (
                  <div className="col-span-2 p-5 bg-green-50 border border-green-200 rounded-2xl text-green-700 font-bold flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Message sent successfully! Our team will contact you shortly.
                  </div>
                )}

                {status === 'ERROR' && (
                  <div className="col-span-2 p-5 bg-red-50 border border-red-200 rounded-2xl text-red-700 font-bold flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    Failed to send message. Please try again or email us directly.
                  </div>
                )}

                <div className="col-span-2">
                  <button 
                    type="submit" 
                    disabled={status === 'SUBMITTING' || status === 'SUCCESS'}
                    className={`w-full py-5 rounded-xl text-lg font-bold transition-all shadow-xl flex items-center justify-center gap-3 ${
                      status === 'SUBMITTING' 
                        ? 'bg-blue-400 cursor-not-allowed text-white' 
                        : status === 'SUCCESS' 
                          ? 'bg-green-600 text-white cursor-default'
                          : 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200'
                    }`}
                  >
                    {status === 'SUBMITTING' ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : status === 'SUCCESS' ? (
                      'Message Received'
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-slate-200 w-full overflow-hidden">
        <img src="https://picsum.photos/seed/lagosmap/2000/600" alt="Location Map" className="w-full h-full object-cover" />
      </section>
    </div>
  );
};

export default Contact;
