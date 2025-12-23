
import React, { useState } from 'react';

interface NavbarProps {
  activeTab: 'home' | 'resources' | 'team' | 'articles';
  setActiveTab: (tab: 'home' | 'resources' | 'team' | 'articles') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, searchQuery, setSearchQuery }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#', tab: 'home' },
    { name: 'AI Assistant', href: '#ai-tutor', tab: 'home' },
    { name: 'Articles', href: '#articles', tab: 'articles' },
    { name: 'Our Team', href: '#team', tab: 'team' },
    { name: 'Resources', href: '#resources', tab: 'resources' },
    { name: 'Contact', href: '#contact', tab: 'home' },
  ];

  const handleNavClick = (tab: any, href: string) => {
    setActiveTab(tab as 'home' | 'resources' | 'team' | 'articles');
    setIsOpen(false);
    if (tab === 'home' && href.startsWith('#') && href !== '#') {
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-stone-50/95 backdrop-blur-md border-b border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center gap-4">
          <button 
            onClick={() => handleNavClick('home', '#')}
            className="flex-shrink-0 flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-amber-800 flex items-center justify-center rounded-lg shadow-md">
              <span className="text-white font-bold text-xl serif">L</span>
            </div>
            <span className="text-2xl font-bold text-amber-900 serif tracking-tight hidden sm:block">Lawpedia</span>
          </button>
          
          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-grow max-w-md mx-8">
            <div className="relative w-full group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-4 w-4 text-stone-400 group-focus-within:text-amber-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles & resources..."
                className="block w-full pl-11 pr-4 py-2.5 bg-stone-100/50 border border-stone-200 rounded-2xl text-sm placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-stone-400 hover:text-amber-600"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.tab, link.href)}
                className={`px-3 py-2 text-sm font-semibold transition-all duration-200 ${
                  activeTab === link.tab && (link.tab !== 'home' || (link.tab === 'home' && link.name === 'Home'))
                  ? 'text-amber-900 border-b-2 border-amber-800'
                  : 'text-stone-600 hover:text-amber-800'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-amber-900 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-stone-50 border-b border-amber-200 shadow-xl overflow-hidden animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-4 pb-6 space-y-4">
            {/* Search Bar - Mobile */}
            <div className="relative w-full group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-4 w-4 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="block w-full pl-11 pr-10 py-3 bg-stone-100 border border-stone-200 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-stone-400"
                >
                  <svg className="h-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            <div className="space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.tab, link.href)}
                  className="block w-full text-left px-4 py-3 text-stone-700 hover:bg-amber-50 hover:text-amber-900 rounded-xl font-bold transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
