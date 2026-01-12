
import React from 'react';

const Insights: React.FC = () => {
  const articles = [
    {
      img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071",
      title: "The Future of Crypto-Asset Regulation in London",
      category: "FINANCE",
      author: "By John David",
      date: "Nov 12, 2023"
    },
    {
      img: "https://images.unsplash.com/photo-1521791136064-7986c2959213?q=80&w=2070",
      title: "Impact of Global Minimum Tax on UK Holding Companies",
      category: "TAX",
      author: "By Sarah Miller",
      date: "Oct 28, 2023"
    },
    {
      img: "https://images.unsplash.com/photo-1454165833767-027eeed15135?q=80&w=2070",
      title: "Bespoke Contracts: Avoiding Litigation in Cross-Border Trade",
      category: "CORPORATE",
      author: "By Michael Thorne",
      date: "Oct 05, 2023"
    }
  ];

  return (
    <div className="bg-charcoal pt-32">
      <section className="py-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="text-sm uppercase tracking-[0.5em] text-accent font-bold mb-6">Our Insights</h1>
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-10">Thought <span className="italic text-accent">Leadership.</span></h2>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-16">
          {articles.map((art, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-video overflow-hidden mb-8">
                <img src={art.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={art.title} />
              </div>
              <div className="text-accent font-bold text-[10px] tracking-widest mb-4">{art.category}</div>
              <h3 className="text-2xl font-serif text-white group-hover:text-accent transition-colors mb-4">{art.title}</h3>
              <div className="flex justify-between items-center text-xs text-gray-500 uppercase tracking-widest border-t border-white/5 pt-4">
                <span>{art.author}</span>
                <span>{art.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Insights;
