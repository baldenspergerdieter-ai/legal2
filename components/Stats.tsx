
import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => (
            <div 
              key={idx} 
              className="text-center group border-r border-gray-100 last:border-0"
            >
              <div className="text-4xl md:text-5xl font-serif text-charcoal mb-2 font-bold group-hover:text-accent transition-colors">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-widest text-gray-500 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
