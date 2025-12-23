import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setIsSubmitted(false);

    try {
      const response = await fetch("https://formspree.io/f/xjgbjwkl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
      } else {
        const data = await response.json();
        if (data && Object.prototype.hasOwnProperty.call(data, 'errors')) {
          setError(data.errors.map((error: any) => error.message).join(", "));
        } else {
          setError("Oops! There was a problem submitting your form.");
        }
      }
    } catch (err) {
      setError("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(120,53,15,0.15)] overflow-hidden flex flex-col lg:flex-row border border-amber-100">
          {/* Left Panel: Brand & Info */}
          <div className="lg:w-2/5 bg-amber-900 p-12 lg:p-16 text-white relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-800/50 rounded-bl-full pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-8 serif">Reach Out</h2>
              <p className="text-amber-100/80 text-lg mb-12 leading-relaxed">
                Want to invite us to your school? Or interested in contributing as a legal researcher? We'd love to hear from you.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-amber-800 rounded-2xl flex items-center justify-center group-hover:bg-amber-700 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-amber-300 uppercase tracking-widest mb-1">Email Us</p>
                    <p className="text-lg font-medium">outreach@lawpedia.org.hk</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-amber-800 rounded-2xl flex items-center justify-center group-hover:bg-amber-700 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-amber-300 uppercase tracking-widest mb-1">Visit Us</p>
                    <p className="text-lg font-medium">The Hive, Wan Chai, HK</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-20 flex gap-4">
              {['FB', 'IG', 'LI'].map((social) => (
                <a key={social} href="#" className="w-12 h-12 bg-amber-800/40 hover:bg-white hover:text-amber-900 transition-all rounded-xl flex items-center justify-center text-sm font-black tracking-tighter border border-amber-700/30">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Right Panel: The Form */}
          <div className="lg:w-3/5 p-12 lg:p-16">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-black text-stone-500 uppercase tracking-widest ml-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    name="name"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full px-6 py-4 bg-stone-50 border-2 border-stone-100 rounded-2xl focus:outline-none focus:border-amber-500 focus:bg-white transition-all text-stone-900"
                    placeholder="e.g. David Chan"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-stone-500 uppercase tracking-widest ml-1">Email Address</label>
                  <input 
                    type="email" 
                    required
                    name="email"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full px-6 py-4 bg-stone-50 border-2 border-stone-100 rounded-2xl focus:outline-none focus:border-amber-500 focus:bg-white transition-all text-stone-900"
                    placeholder="david@example.com"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-stone-500 uppercase tracking-widest ml-1">Message / Inquiry</label>
                <textarea 
                  rows={5}
                  required
                  name="message"
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full px-6 py-4 bg-stone-50 border-2 border-stone-100 rounded-2xl focus:outline-none focus:border-amber-500 focus:bg-white transition-all text-stone-900 resize-none"
                  placeholder="How can we collaborate or assist you?"
                  disabled={isSubmitting}
                ></textarea>
              </div>
              
              {error && (
                <div className="p-4 bg-red-50 text-red-700 rounded-xl text-sm font-medium border border-red-100 flex items-center gap-2">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {error}
                </div>
              )}

              {isSubmitted && (
                <div className="p-4 bg-green-50 text-green-800 rounded-xl text-sm font-bold border border-green-200 flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-700">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Thank you! Your message has been sent.
                </div>
              )}

              <button 
                type="submit"
                disabled={isSubmitting}
                className="group w-full md:w-auto px-12 py-5 bg-amber-800 hover:bg-amber-900 text-white font-bold rounded-2xl transition-all shadow-xl shadow-amber-900/20 flex items-center justify-center gap-3 disabled:bg-stone-400 disabled:shadow-none"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Inquiry
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;