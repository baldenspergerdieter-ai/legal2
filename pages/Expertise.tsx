
import React from 'react';
import { EXPERTISE_GROUPS } from '../constants';
import { Search, Scale, Landmark, FileText, Globe, Building2, ShieldCheck, Briefcase } from 'lucide-react';

const Expertise: React.FC = () => {
  return (
    <div className="bg-charcoal pt-32">
      <section className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl">
            <h1 className="text-sm uppercase tracking-[0.5em] text-accent font-bold mb-6">Our Domain</h1>
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-10 leading-tight">Expertise across <br /> every <span className="text-accent italic">border.</span></h2>
            <p className="text-xl text-gray-400 leading-relaxed font-light">
              We provide comprehensive legal solutions tailored to the needs of private individuals, families, and global corporations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            {EXPERTISE_GROUPS.map((group, idx) => (
              <div key={idx} className="space-y-12 border-b border-white/5 pb-16 last:border-0">
                <div className="flex items-center space-x-6">
                  {group.icon}
                  <h3 className="text-4xl font-serif text-white">{group.title}</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-8">
                  {group.items.map((item, i) => (
                    <div key={i} className="group cursor-pointer">
                      <h4 className="text-white font-medium mb-3 group-hover:text-accent transition-colors flex items-center">
                        <span className="w-1 h-1 bg-accent mr-3"></span>
                        {item}
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        In-depth guidance and representation ensuring strategic advantage in {item.toLowerCase()}.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-accent">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-charcoal font-serif text-4xl mb-8">Need specialized advice?</h2>
          <p className="text-charcoal/80 mb-10 text-lg">Our partners are ready to discuss your unique legal challenges.</p>
          <button className="bg-charcoal text-white px-10 py-4 hover:bg-slate transition-all font-medium uppercase tracking-widest text-xs">
            Book a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Expertise;
