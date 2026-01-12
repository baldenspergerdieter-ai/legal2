
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';
import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
import Expertise from './pages/Expertise';
import Insights from './pages/Insights';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

export type Page = 'home' | 'who-we-are' | 'expertise' | 'insights' | 'careers' | 'contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home navigate={navigate} />;
      case 'who-we-are': return <WhoWeAre />;
      case 'expertise': return <Expertise />;
      case 'insights': return <Insights />;
      case 'careers': return <Careers />;
      case 'contact': return <Contact />;
      default: return <Home navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-accent selection:text-charcoal overflow-x-hidden flex flex-col">
      <Navbar scrolled={scrolled} currentPage={currentPage} navigate={navigate} />
      
      <main className="flex-grow">
        <div key={currentPage} className="animate-fade-in-up">
          {renderPage()}
        </div>
      </main>

      <Footer navigate={navigate} />
      <ChatAssistant />
    </div>
  );
};

export default App;
