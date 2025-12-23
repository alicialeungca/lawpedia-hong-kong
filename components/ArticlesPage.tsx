
import React from 'react';
import { Article } from '../types';

interface ArticlesPageProps {
  setActiveTab: (tab: 'home' | 'resources' | 'team' | 'articles') => void;
  searchQuery?: string;
}

const allArticles: Article[] = [
  {
    id: '1',
    title: 'Navigating Tenancy Disputes',
    excerpt: 'The 2024 guide to rent increases, repairs, and the standard HKSAR tenancy agreement rules.',
    date: 'Feb 12, 2024',
    category: 'Tenancy',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '2',
    title: 'Understanding Employment Rights',
    excerpt: 'Dismissal, statutory holidays, and the Mandatory Provident Fund (MPF) explained for new graduates.',
    date: 'Jan 28, 2024',
    category: 'Employment',
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '3',
    title: 'Small Claims Tribunal 101',
    excerpt: 'A step-by-step walkthrough of filing a claim under $75,000 without the need for legal representation.',
    date: 'Jan 05, 2024',
    category: 'Procedural',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '4',
    title: 'Personal Data & Privacy in HK',
    excerpt: 'How the PDPO protects your information online and your rights against data breaches.',
    date: 'Dec 15, 2023',
    category: 'Rights',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '5',
    title: 'Consumer Rights Guide',
    excerpt: 'What to do when a merchant refuses a refund or provides misleading trade descriptions.',
    date: 'Nov 20, 2023',
    category: 'Consumer',
    imageUrl: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '6',
    title: 'Understanding Digital Libel',
    excerpt: 'The legal risks of posting defamatory comments on social media platforms in Hong Kong.',
    date: 'Oct 30, 2023',
    category: 'Criminal',
    imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=600'
  }
];

const ArticlesPage: React.FC<ArticlesPageProps> = ({ setActiveTab, searchQuery = '' }) => {
  const filteredArticles = allArticles.filter(article => 
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-32 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-700 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation */}
        <div className="mb-12">
          <button 
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-2 text-amber-800 font-bold hover:gap-3 transition-all group"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </button>
        </div>

        <div className="mb-20">
          <span className="text-amber-800 font-bold uppercase tracking-widest text-sm">Knowledge Hub</span>
          <h1 className="text-5xl font-bold text-stone-900 mt-4 mb-6 serif">Articles</h1>
          <p className="text-stone-600 max-w-2xl text-lg leading-relaxed">
            Our library of legal explanations, research papers, and step-by-step guides 
            designed for the Hong Kong community.
          </p>
        </div>

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
            {filteredArticles.map((article) => (
              <div key={article.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-stone-100 flex flex-col">
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1 bg-amber-900/90 text-white text-[10px] font-bold rounded-full uppercase tracking-tighter backdrop-blur-sm">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="text-stone-400 text-xs font-bold mb-3 uppercase tracking-widest">{article.date}</div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-4 serif group-hover:text-amber-800 transition-colors leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-stone-600 text-sm mb-8 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="mt-auto">
                    <button className="text-amber-800 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read Full Article
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center bg-white rounded-[3rem] border border-stone-200 shadow-xl mb-32">
            <h3 className="text-2xl font-bold text-stone-900 serif mb-4">No matches found</h3>
            <p className="text-stone-600">We couldn't find any articles matching your search for "{searchQuery}". Try a different keyword.</p>
          </div>
        )}

        {/* Instagram CTA */}
        <div className="bg-white rounded-[3rem] p-12 lg:p-20 border border-stone-200 shadow-xl text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full -mr-32 -mt-32 blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-tr from-amber-600 to-amber-900 text-white rounded-[1.5rem] flex items-center justify-center mx-auto mb-8 shadow-lg">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-stone-900 mb-6 serif">Stay Informed on IG</h2>
            <p className="text-stone-600 text-lg mb-10 leading-relaxed">
              We post bite-sized legal tips, workshop highlights, and community stories 
              regularly on our Instagram channel.
            </p>
            <a 
              href="https://instagram.com/yourlawpedia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-amber-800 text-white font-bold rounded-2xl hover:bg-amber-900 hover:scale-105 transition-all shadow-xl shadow-amber-900/20"
            >
              Follow @yourlawpedia
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;
