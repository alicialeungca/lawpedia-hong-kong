
import React from 'react';
import { TeamMember } from '../types';

interface TeamProps {
  setActiveTab?: (tab: 'home' | 'resources' | 'team') => void;
}

const team: TeamMember[] = [
  {
    id: '1',
    name: 'Anson Kwok',
    role: 'Co-Founder & Legal Lead',
    bio: 'Former HKU Law researcher specializing in administrative law and public advocacy.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '2',
    name: 'Clarice Tam',
    role: 'Head of Education',
    bio: 'Dedicated to curriculum design for secondary schools. Passionate about youth empowerment.',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '3',
    name: 'Dr. Samuel Lau',
    role: 'Board Advisor',
    bio: 'Over 20 years of experience in the Hong Kong legal sector, advising on community legal aid.',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400'
  }
];

const Team: React.FC<TeamProps> = ({ setActiveTab }) => {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-amber-700 font-bold uppercase tracking-widest text-xs">Our People</span>
        <h2 className="text-4xl font-bold text-stone-900 mt-2 mb-4 serif">Driven by Purpose</h2>
        <p className="text-stone-600 max-w-2xl mx-auto mb-20 font-medium">A diverse collective of legal professionals, educators, and volunteers committed to legal equity.</p>
        
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          {team.map((member) => (
            <div key={member.id} className="group">
              <div className="relative mb-8 inline-block">
                <div className="absolute inset-0 bg-amber-800 rounded-3xl rotate-3 scale-105 group-hover:rotate-6 transition-transform"></div>
                <img 
                  src={member.imageUrl} 
                  alt={member.name}
                  className="relative w-56 h-72 rounded-3xl object-cover shadow-2xl transition-all duration-500 filter grayscale group-hover:grayscale-0"
                />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 serif mb-1">{member.name}</h3>
              <p className="text-amber-800 font-bold text-xs uppercase tracking-widest mb-4">{member.role}</p>
              <p className="text-stone-500 text-sm leading-relaxed max-w-xs mx-auto px-4">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

        {setActiveTab && (
          <div className="flex justify-center">
            <button 
              onClick={() => setActiveTab('team')}
              className="px-8 py-4 bg-amber-800 text-white font-bold rounded-xl shadow-lg hover:bg-amber-900 hover:scale-105 transition-all flex items-center gap-2 group"
            >
              Learn More
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Team;
