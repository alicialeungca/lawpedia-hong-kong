
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Articles from './components/Articles';
import LegalAI from './components/LegalAI';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resources from './components/Resources';
import TeamPage from './components/TeamPage';
import ArticlesPage from './components/ArticlesPage';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'resources' | 'team' | 'articles'>('home');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 font-sans">
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
      />
      <main className="flex-grow">
        {activeTab === 'home' ? (
          <>
            <Hero setActiveTab={setActiveTab} />
            <About />
            <LegalAI />
            <Articles setActiveTab={setActiveTab} searchQuery={searchQuery} />
            <Team setActiveTab={setActiveTab} />
            <Contact />
          </>
        ) : activeTab === 'resources' ? (
          <Resources searchQuery={searchQuery} />
        ) : activeTab === 'team' ? (
          <TeamPage setActiveTab={setActiveTab} />
        ) : (
          <ArticlesPage setActiveTab={setActiveTab} searchQuery={searchQuery} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
