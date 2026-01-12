
import React from 'react';
import { EXPERTISE_GROUPS } from '../constants';
import { ChevronRight } from 'lucide-react';

const ExpertiseSection: React.FC = () => {
  return (
    <section id="expertise" className="py-32 bg-slate/30">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm uppercase tracking-[0.4em] text-accent mb-4 font-semibold">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white">Specialized in Success</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {EXPERTISE_GROUPS.map((group, idx) => (
            <div 
              key={idx}
              className="bg-charcoal p-10 border border-white/5 hover:border-accent/30 transition-all duration-500 hover:-translate-y-2 group"
            >
              {group.icon}
              <h4 className="text-2xl font-serif text-white mb-6 group-hover:text-accent transition-colors">
                {group.title}
              </h4>
              <ul className="space-y-4 mb-8">
                {group.items.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-400 text-sm border-b border-white/5 pb-2">
                    <span className="w-1.5 h-1.5 bg-accent/50 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#" className="flex items-center text-sm font-medium text-accent hover:text-white transition-colors">
                Learn More <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
