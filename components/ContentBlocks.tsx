
import React from 'react';

const ContentBlocks: React.FC = () => {
  const blocks = [
    {
      title: "Intellectual Property",
      description: "In a digital-first world, your ideas are your most valuable assets. We specialize in comprehensive IP protection, from trademarks and copyright to complex licensing and litigation across multiple jurisdictions.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
      tag: "INNOVATION"
    },
    {
      title: "Manufacturing & Trade",
      description: "Supporting global supply chains with legal precision. We advise on international trade agreements, regulatory compliance, and cross-border manufacturing disputes to ensure your operations remain robust.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
      tag: "GLOBAL INDUSTRY",
      reverse: true
    },
    {
      title: "International Disputes",
      description: "When complexity leads to conflict, our litigation team steps in. We handle high-stakes arbitration and multi-jurisdictional court cases with a focus on resolving disputes efficiently and discreetly.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2069&auto=format&fit=crop",
      tag: "LITIGATION"
    }
  ];

  return (
    <section className="bg-charcoal">
      {blocks.map((block, idx) => (
        <div key={idx} className={`flex flex-col ${block.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} min-h-[600px]`}>
          <div className="w-full md:w-1/2 relative overflow-hidden group">
            <img 
              src={block.image} 
              alt={block.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/0 transition-all duration-500"></div>
          </div>
          <div className="w-full md:w-1/2 flex items-center p-12 lg:p-24 bg-charcoal">
            <div className="max-w-md mx-auto fade-in-up">
              <span className="text-[10px] tracking-[0.4em] text-accent font-bold uppercase mb-4 block">
                {block.tag}
              </span>
              <h3 className="text-4xl font-serif text-white mb-6">
                {block.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                {block.description}
              </p>
              <button className="text-white font-medium border-b border-accent pb-1 hover:text-accent transition-colors">
                Read our approach
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ContentBlocks;
