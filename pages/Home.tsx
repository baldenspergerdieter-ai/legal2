
import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import ExpertiseSection from '../components/ExpertiseSection';
import ContentBlocks from '../components/ContentBlocks';
import InsightsSection from '../components/InsightsSection';
import { Page } from '../App';

interface HomeProps {
  navigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ navigate }) => {
  return (
    <>
      <Hero />
      <Stats />
      
      <div id="who-we-are-preview" className="py-32 bg-charcoal border-b border-slate">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                Navigating complexity together.
              </h2>
              <div className="w-20 h-1 bg-accent"></div>
            </div>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                John David & Associates represents a new era of legal services—one where tradition meets 
                dynamic, future-forward thinking.
              </p>
              <button 
                onClick={() => navigate('who-we-are')}
                className="text-accent border-b border-accent pb-1 font-medium hover:text-white hover:border-white transition-all"
              >
                Learn about our ethos
              </button>
            </div>
          </div>
        </div>
      </div>

      <ExpertiseSection />
      <ContentBlocks />
      <InsightsSection />
    </>
  );
};

export default Home;
