
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Careers: React.FC = () => {
  const positions = [
    { title: "Senior Associate - Corporate/M&A", location: "London", type: "Full-time" },
    { title: "Paralegal - Family Law", location: "London", type: "Full-time" },
    { title: "Trainee Solicitor (2025 Cohort)", location: "London", type: "Training Contract" }
  ];

  return (
    <div className="bg-charcoal pt-32">
      <section className="py-24 bg-slate/20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h1 className="text-sm uppercase tracking-[0.5em] text-accent font-bold mb-6">Careers</h1>
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-10 leading-tight">Join the <span className="italic text-accent">Associates.</span></h2>
          <p className="text-xl text-gray-400 leading-relaxed font-light">
            We are looking for analytical minds and ambitious professionals who thrive in solving complex legal challenges.
          </p>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-4xl mx-auto px-8">
          <h3 className="text-white font-serif text-3xl mb-12">Current Opportunities</h3>
          <div className="space-y-8">
            {positions.map((p, i) => (
              <div key={i} className="p-8 border border-white/5 hover:border-accent transition-all group cursor-pointer flex justify-between items-center">
                <div>
                  <h4 className="text-xl text-white font-medium mb-2">{p.title}</h4>
                  <div className="flex space-x-4 text-xs text-gray-500 uppercase tracking-widest">
                    <span>{p.location}</span>
                    <span className="text-accent">•</span>
                    <span>{p.type}</span>
                  </div>
                </div>
                <ArrowUpRight className="text-gray-500 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
            ))}
          </div>
          
          <div className="mt-20 p-12 bg-charcoal border border-accent/20 text-center">
            <h4 className="text-white text-2xl mb-6 font-serif">Speculative Applications</h4>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">We are always interested in meeting exceptional talent. Send your CV and cover letter to our recruitment desk.</p>
            <a href="mailto:careers@johndavidandassociates.co.uk" className="text-accent font-bold tracking-widest text-sm border-b border-accent pb-1">recruitment@johndavidandassociates.co.uk</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
