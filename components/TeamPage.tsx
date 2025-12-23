
import React from 'react';

interface TeamPageProps {
  setActiveTab: (tab: 'home' | 'resources' | 'team') => void;
}

const fullTeam = [
  { name: 'Anson Kwok', role: 'Co-Founder & Legal Lead', bio: 'Former HKU Law researcher specializing in administrative law and public advocacy.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400' },
  { name: 'Clarice Tam', role: 'Head of Education', bio: 'Expert in curriculum design for secondary schools and youth legal empowerment.', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400' },
  { name: 'Dr. Samuel Lau', role: 'Board Advisor', bio: 'Senior legal professional with 20+ years in the Hong Kong court system.', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400' },
  { name: 'Jasmine Lee', role: 'Senior Project Manager', bio: 'Passionate about streamlining public access to legal aid resources.', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400' },
  { name: 'Derek Ho', role: 'Lead Researcher', bio: 'Focused on clarifying Land Law and Tenancy regulations for HK residents.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400' },
  { name: 'Tiffany Ng', role: 'Community Outreach', bio: 'Building strong partnerships between Lawpedia and local grassroots NGOs.', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400' },
  { name: 'Ryan Wong', role: 'Technology Director', bio: 'Software engineer and architect of our Gemini-powered AI Legal Tutor.', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400' },
  { name: 'Michelle Chan', role: 'Content Strategist', bio: 'Award-winning editor focused on translating complex jargon into plain English.', image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400' },
  { name: 'Kevin Tong', role: 'Volunteer Coordinator', bio: 'Managing our network of pro-bono law students from major HK universities.', image: 'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=400' },
  { name: 'Sophie Lam', role: 'School Liaison', bio: 'Developing interactive legal literacy workshops for high schools across HK.', image: 'https://images.unsplash.com/photo-1598550874175-4d0fe4a2c943?w=400' },
];

const TeamPage: React.FC<TeamPageProps> = ({ setActiveTab }) => {
  return (
    <div className="pt-32 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-700 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation / Header */}
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

        <div className="text-center mb-20">
          <span className="text-amber-800 font-bold uppercase tracking-widest text-sm">Our People</span>
          <h1 className="text-5xl md:text-6xl font-bold text-stone-900 mt-4 mb-6 serif">Meet Our Team</h1>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Our mission is powered by a dedicated collective of legal experts, educators, and volunteers 
            working to demystify the law for every Hong Kong citizen.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
          {fullTeam.map((member, i) => (
            <div key={i} className="group">
              <div className="relative mb-6">
                {/* Image container with shadow and lift effect */}
                <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-stone-200 shadow-lg group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  {/* Decorative Amber Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Abstract decorative shape */}
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-amber-100 rounded-2xl -z-10 group-hover:rotate-12 transition-transform"></div>
              </div>
              
              <div className="text-center sm:text-left px-2">
                <h3 className="text-2xl font-bold text-stone-900 serif mb-1">{member.name}</h3>
                <p className="text-amber-800 font-bold text-xs uppercase tracking-widest mb-3">{member.role}</p>
                <p className="text-stone-500 text-sm leading-relaxed font-medium line-clamp-2">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Join the team banner */}
        <div className="mt-32 p-12 lg:p-16 rounded-[3rem] bg-amber-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-800/30 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 serif">Join the Lawpedia Volunteer Network</h2>
              <p className="text-amber-100/90 text-lg leading-relaxed">
                We are always looking for law students, retired solicitors, and community workers 
                passionate about legal education. Help us build a more legally literate Hong Kong.
              </p>
            </div>
            <button className="px-10 py-5 bg-white text-amber-900 font-bold rounded-2xl shadow-xl hover:scale-105 transition-all flex-shrink-0">
              Apply to Volunteer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
