
import React from 'react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/channel/UCzauylw-znBRt6QJ-z1L35A',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/yourlawpedia/?viewAsMember=true',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/yourlawpedia',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'Linktree',
      url: 'https://linktr.ee/yourlawpedia',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.4 12h7.2L12 18.5 8.4 12zm3.6-12L6 8.5h4.8V12h2.4V8.5h4.8L12 0zM12 24l3.6-6.5h-7.2L12 24z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-stone-950 text-stone-500 py-20 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-amber-800 flex items-center justify-center rounded text-white font-bold serif">L</div>
              <span className="text-2xl font-bold text-white serif tracking-tight">Lawpedia</span>
            </div>
            <p className="text-sm leading-relaxed mb-8 font-medium">
              We are a student-led non-profit organisation dedicated to legal empowerment. Knowledge is the first step toward justice.
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-stone-800 flex items-center justify-center text-stone-500 hover:bg-amber-800 hover:text-white hover:border-amber-700 hover:scale-110 transition-all duration-300 shadow-sm"
                  title={social.name}
                >
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-amber-600 font-black text-xs uppercase tracking-widest mb-8">Resources</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Articles</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Legal AI Assistant</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">HK Basic Law Hub</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Community Forum</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-amber-600 font-black text-xs uppercase tracking-widest mb-8">Organization</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-amber-500 transition-colors">About Lawpedia</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Annual Report</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-amber-600 font-black text-xs uppercase tracking-widest mb-8">Support Us</h4>
            <p className="text-xs mb-6 font-medium leading-relaxed">Help us keep legal knowledge free for all Hong Kong residents.</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-stone-700">Contact us to find out how you can contribute.</p>
          </div>
        </div>
        
        <div className="border-t border-stone-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold uppercase tracking-widest text-center md:text-left">
            © {new Date().getFullYear()} Lawpedia Hong Kong (NPO). 
            <span className="mx-4 text-stone-800 hidden md:inline">|</span> 
            <br className="md:hidden" />
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <span className="mx-4 text-stone-800">|</span> 
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </p>
          <p className="text-[10px] font-bold uppercase tracking-widest text-stone-700">
            Powered by Gemini AI • Made in HK
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
