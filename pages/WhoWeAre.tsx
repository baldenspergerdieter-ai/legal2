
import React from 'react';
import { Shield, Target, Award, Users } from 'lucide-react';

const WhoWeAre: React.FC = () => {
  return (
    <div className="bg-charcoal pt-32">
      {/* Header Section */}
      <section className="py-24 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h1 className="text-sm uppercase tracking-[0.5em] text-accent font-bold mb-6">Our Legacy & Ethos</h1>
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-10 leading-tight">
            Commitment to <br />
            <span className="italic text-accent">Exceptional</span> Advocacy.
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed font-light">
            Founded in the heart of London, John David & Associates has grown from a specialized practice into a firm recognized for its strategic prowess in international law.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <Target className="text-accent" size={40} />, title: "Precision", desc: "We leave no stone unturned. Every case is handled with surgical legal precision." },
              { icon: <Shield className="text-accent" size={40} />, title: "Integrity", desc: "Transparency is the bedrock of our relationships with our global clients." },
              { icon: <Award className="text-accent" size={40} />, title: "Excellence", desc: "We strive for nothing less than the gold standard in every legal jurisdiction." }
            ].map((v, i) => (
              <div key={i} className="bg-slate/20 p-10 border border-white/5 hover:border-accent/20 transition-all">
                <div className="mb-6">{v.icon}</div>
                <h3 className="text-2xl font-serif text-white mb-4">{v.title}</h3>
                <p className="text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-32 bg-slate/10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop" 
                alt="Partner portrait" 
                className="w-full grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-8">
              <h3 className="text-sm uppercase tracking-widest text-accent font-bold">The Leadership</h3>
              <h4 className="text-4xl font-serif text-white">John David, Esq.</h4>
              <p className="text-accent italic">Senior Partner & Founder</p>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>With over three decades of experience in cross-border disputes and corporate structuring, John David leads the firm with a vision of global legal excellence.</p>
                <p>His approach combines traditional British legal rigor with an agile, modern perspective on global markets.</p>
              </div>
              <div className="pt-6">
                 <button className="px-8 py-3 bg-white text-charcoal font-medium hover:bg-accent transition-colors">View Professional CV</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
