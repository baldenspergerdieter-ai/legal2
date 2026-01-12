
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with London Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 scale-105"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop')` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-charcoal/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="max-w-2xl fade-in-up">
          <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 leading-[1.1]">
            Your Legal <br />
            <span className="italic text-accent">Partner.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light mb-12 leading-relaxed">
            Navigating complexity together. Bespoke legal services for private clients and global businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="#expertise" 
              className="px-10 py-5 bg-accent text-charcoal font-semibold text-center hover:bg-white transition-all duration-300"
            >
              Explore Our Expertise
            </a>
            <a 
              href="#who-we-are" 
              className="px-10 py-5 border border-white/30 text-white font-medium text-center hover:bg-white hover:text-charcoal transition-all duration-300"
            >
              Discover Who We Are
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50 animate-bounce">
        <div className="w-[1px] h-12 bg-white mb-2"></div>
        <span className="text-[10px] uppercase tracking-[0.3em] text-white">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
