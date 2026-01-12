
import React from 'react';

const InsightsSection: React.FC = () => {
  const insights = [
    {
      date: "Oct 24, 2023",
      title: "UK Property Law Changes: What Overseas Investors Need to Know",
      category: "REAL ESTATE"
    },
    {
      date: "Oct 12, 2023",
      title: "Navigating AI Regulation in the European Union and UK",
      category: "TECH"
    },
    {
      date: "Sep 28, 2023",
      title: "Post-Brexit Trade Agreements: A Review of Year Three",
      category: "TRADE"
    }
  ];

  return (
    <section id="insights" className="py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-sm uppercase tracking-[0.4em] text-accent mb-4 font-semibold">Our Insights</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white">Legal Thought Leadership</h3>
          </div>
          <a href="#" className="text-white border border-white/20 px-8 py-3 hover:bg-white hover:text-charcoal transition-all">
            View All Insights
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {insights.map((insight, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="text-[10px] text-accent font-bold tracking-widest mb-4">
                {insight.category} / {insight.date}
              </div>
              <h4 className="text-2xl font-serif text-white group-hover:text-accent transition-colors mb-4 leading-snug">
                {insight.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                An in-depth analysis of the current legal landscape and its implications for our global clients.
              </p>
              <div className="w-12 h-[1px] bg-white group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
