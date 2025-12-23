
import React from 'react';

interface HeroProps {
  setActiveTab: (tab: 'home' | 'resources') => void;
}

const Hero: React.FC<HeroProps> = ({ setActiveTab }) => {
  return (
    <section className="relative pt-32 pb-24 md:pt-52 md:pb-40 bg-stone-50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[50%] bg-amber-100 rounded-full blur-[100px] opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[40%] bg-stone-200 rounded-full blur-[100px] opacity-40 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-amber-200">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-600"></span>
            </span>
            Empowering the Hong Kong Public
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-amber-950 mb-8 leading-[1.1] serif">
            Clearer Laws. <br />
            <span className="text-amber-700 italic">Better Lives.</span>
          </h1>
          <p className="text-xl text-stone-700 mb-12 leading-relaxed font-medium">
            Lawpedia is a student-led non-profit organisation for accessible legal literacy. We translate complex statues into everyday language for students, families, and workers.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <button
              onClick={() => setActiveTab('resources')}
              className="px-10 py-5 bg-amber-800 text-white font-bold rounded-2xl shadow-2xl shadow-amber-900/30 hover:bg-amber-900 hover:scale-[1.02] transition-all"
            >
              Explore Knowledge Hub
            </button>
            <a
              href="#ai-tutor"
              className="px-10 py-5 bg-white text-amber-900 font-bold rounded-2xl border-2 border-amber-200 hover:border-amber-400 hover:bg-stone-50 transition-all text-center"
            >
              Ask Our AI Assistant
            </a>
          </div>
          
          <div className="mt-16 flex items-center gap-8 grayscale opacity-70">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-stone-800">15+</span>
              <span className="text-xs font-bold text-stone-500 uppercase">Legal Guides</span>
            </div>
            <div className="w-px h-8 bg-stone-300"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-stone-800">5,000+</span>
              <span className="text-xs font-bold text-stone-500 uppercase">Students Reached</span>
            </div>
            <div className="w-px h-8 bg-stone-300"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-stone-800">100%</span>
              <span className="text-xs font-bold text-stone-500 uppercase">Non-profit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
