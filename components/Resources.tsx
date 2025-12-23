
import React from 'react';

const kits = [
  {
    title: "Tenancy Survival Kit",
    items: ["Model Tenancy Agreement", "Repair Liability Checklist", "Notice of Termination Guide"],
    color: "bg-amber-100",
    icon: "🏠"
  },
  {
    title: "Worker's Rights Hub",
    items: ["Statutory Pay Calculator", "Sick Leave Guidance", "Severance Entitlement Map"],
    color: "bg-stone-200",
    icon: "💼"
  },
  {
    title: "Civil Justice Guide",
    items: ["Small Claims Filing Steps", "Affidavit Writing 101", "Court Fee Schedule"],
    color: "bg-amber-200",
    icon: "⚖️"
  },
  {
    title: "Youth & The Law",
    items: ["Social Media & Libel", "Police Interaction Rights", "Intellectual Property Basics"],
    color: "bg-stone-100",
    icon: "🎓"
  }
];

interface ResourcesProps {
  searchQuery?: string;
}

const Resources: React.FC<ResourcesProps> = ({ searchQuery = '' }) => {
  const filteredKits = kits.filter(kit => 
    kit.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    kit.items.some(item => item.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="pt-32 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-800 font-bold uppercase tracking-widest text-xs">Knowledge Portal</span>
          <h1 className="text-5xl font-bold text-stone-900 mt-4 mb-6 serif">Legal Resource Kits</h1>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg">
            Downloadable PDFs, interactive checklists, and simplified walkthroughs for common legal scenarios in Hong Kong.
          </p>
        </div>

        {filteredKits.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {filteredKits.map((kit, i) => (
              <div key={i} className={`p-10 rounded-[2.5rem] ${kit.color} border border-amber-200/50 flex flex-col md:flex-row gap-8 hover:shadow-2xl transition-all duration-500`}>
                <div className="w-20 h-20 bg-white rounded-3xl shadow-lg flex items-center justify-center text-4xl flex-shrink-0">
                  {kit.icon}
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-stone-900 mb-6 serif">{kit.title}</h3>
                  <ul className="space-y-3 mb-8">
                    {kit.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 text-stone-700 font-medium">
                        <div className="w-1.5 h-1.5 bg-amber-800 rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button className="px-6 py-3 bg-white text-amber-900 font-bold rounded-xl shadow-sm hover:shadow-md transition-all border border-amber-200 flex items-center gap-2">
                    Access Kit
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center bg-stone-100 rounded-[3rem] border-2 border-dashed border-stone-200 mb-20">
            <h3 className="text-2xl font-bold text-stone-900 serif mb-4">No kits found</h3>
            <p className="text-stone-600">Try searching for broader terms like "Tenancy" or "Rights".</p>
          </div>
        )}

        <div className="bg-amber-900 rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-800/50 rounded-full -mr-48 -mt-48 blur-3xl"></div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 serif">Missing a topic?</h2>
              <p className="text-amber-100 text-lg mb-10 leading-relaxed">
                Our content roadmap is driven by community needs. If there's a legal area you'd like us to cover, please let us know. We prioritize based on public demand.
              </p>
              <button className="px-10 py-5 bg-white text-amber-900 font-bold rounded-2xl shadow-xl hover:scale-105 transition-all">
                Suggest a Topic
              </button>
            </div>
            <div className="bg-amber-800/40 backdrop-blur-md rounded-3xl p-8 border border-amber-700/50">
              <h4 className="font-bold text-xl mb-6 serif">Upcoming Guides</h4>
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-amber-700/30 pb-4">
                  <span className="font-medium text-amber-50">Estate Planning for Families</span>
                  <span className="text-[10px] font-bold px-2 py-1 bg-amber-500 rounded text-white">MARCH 2024</span>
                </div>
                <div className="flex justify-between items-center border-b border-amber-700/30 pb-4">
                  <span className="font-medium text-amber-50">Intellectual Property for SMEs</span>
                  <span className="text-[10px] font-bold px-2 py-1 bg-amber-500 rounded text-white">APRIL 2024</span>
                </div>
                <div className="flex justify-between items-center border-b border-amber-700/30 pb-4">
                  <span className="font-medium text-amber-50">Cybercrime & Security Law</span>
                  <span className="text-[10px] font-bold px-2 py-1 bg-amber-500 rounded text-white">MAY 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
