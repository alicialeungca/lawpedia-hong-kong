
import React from 'react';
import { Article } from '../types';

interface ArticlesProps {
  setActiveTab?: (tab: 'home' | 'resources' | 'team' | 'articles') => void;
  searchQuery?: string;
}

const sampleArticles: Article[] = [
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
  }
];

const Articles: React.FC<ArticlesProps> = ({ setActiveTab, searchQuery = '' }) => {
  const filteredArticles = sampleArticles.filter(article => 
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="articles" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-amber-700 font-bold uppercase tracking-widest text-xs">Knowledge Base</span>
            <h2 className="text-4xl font-bold text-stone-900 mt-2 mb-4 serif">Latest Articles</h2>
            <p className="text-stone-600 font-medium">Clear, concise explanations of the laws that affect your daily life in Hong Kong.</p>
          </div>
          {setActiveTab && (
            <button 
              onClick={() => setActiveTab('articles')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-800 text-white font-bold rounded-xl hover:bg-amber-900 transition-all shadow-lg shadow-amber-900/10"
            >
              View All Articles
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          )}
        </div>

        {filteredArticles.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-10">
            {filteredArticles.map((article) => (
              <div key={article.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-stone-100 flex flex-col">
                <div className="relative h-56 overflow-hidden">
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
          <div className="py-20 text-center bg-white rounded-3xl border border-stone-100">
            <p className="text-stone-500 font-medium">No articles found matching "{searchQuery}"</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Articles;
