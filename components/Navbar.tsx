
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Page } from '../App';

interface NavbarProps {
  scrolled: boolean;
  currentPage: Page;
  navigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled, currentPage, navigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: { label: string; page: Page }[] = [
    { label: 'Who We Are', page: 'who-we-are' },
    { label: 'Our Expertise', page: 'expertise' },
    { label: 'Our Insights', page: 'insights' },
    { label: 'Careers', page: 'careers' },
  ];

  const handleNav = (page: Page) => {
    navigate(page);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-charcoal/95 backdrop-blur-md py-4 shadow-xl border-b border-white/5' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        {/* Logo */}
        <button onClick={() => handleNav('home')} className="flex flex-col text-left outline-none">
          <span className="text-2xl font-serif font-bold tracking-tight text-white leading-none">
            JOHN DAVID
          </span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-accent font-medium mt-1">
            & ASSOCIATES
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.page)}
              className={`text-sm font-medium transition-colors relative group outline-none ${
                currentPage === link.page ? 'text-accent' : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-[1px] bg-accent transition-all duration-300 ${
                currentPage === link.page ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
          ))}
          <button
            onClick={() => handleNav('contact')}
            className={`px-6 py-2.5 border text-sm font-medium transition-all duration-300 outline-none ${
              currentPage === 'contact' 
                ? 'bg-accent border-accent text-charcoal' 
                : 'border-white/20 text-white hover:bg-white hover:text-charcoal'
            }`}
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-charcoal z-40 transition-transform duration-500 transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden flex flex-col h-screen`}>
        <div className="flex-1 flex flex-col justify-center items-center space-y-10">
          <button onClick={() => handleNav('home')} className="text-4xl font-serif text-white">Home</button>
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.page)}
              className={`text-3xl font-serif ${currentPage === link.page ? 'text-accent' : 'text-white'}`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('contact')}
            className="px-10 py-4 border border-accent text-accent font-medium text-xl"
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
