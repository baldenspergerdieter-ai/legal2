
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Printer } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { Page } from '../App';

interface FooterProps {
  navigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ navigate }) => {
  return (
    <footer id="contact" className="bg-charcoal border-t border-white/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Col 1: About */}
          <div>
             <button onClick={() => navigate('home')} className="flex flex-col mb-8 text-left outline-none">
              <span className="text-2xl font-serif font-bold tracking-tight text-white leading-none">
                JOHN DAVID
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-accent font-medium mt-1">
                & ASSOCIATES
              </span>
            </button>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              A premier England-based law firm providing bespoke legal services to private clients and global businesses. Navigating complexity with clarity and integrity.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Col 2: Quick Links (Expertise) */}
          <div>
            <h4 className="text-white font-serif text-xl mb-8">Expertise</h4>
            <ul className="space-y-4">
              {['Private Client', 'Corporate Law', 'Property', 'Intellectual Property', 'International Disputes'].map((link) => (
                <li key={link}>
                  <button onClick={() => navigate('expertise')} className="text-gray-500 text-sm hover:text-white transition-colors text-left outline-none">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Policies */}
          <div>
            <h4 className="text-white font-serif text-xl mb-8">Governance</h4>
            <ul className="space-y-4">
              {['Accessibility', 'Equality & Diversity', 'GDPR & Privacy', 'Cybersecurity', 'Legal Notice'].map((link) => (
                <li key={link}>
                  <button onClick={() => navigate('home')} className="text-gray-500 text-sm hover:text-white transition-colors text-left outline-none">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact info */}
          <div>
            <h4 className="text-white font-serif text-xl mb-8">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start">
                <MapPin size={18} className="text-accent mr-4 mt-1 flex-shrink-0" />
                <span className="text-gray-500 text-sm leading-relaxed">
                  {CONTACT_INFO.address}
                </span>
              </li>
              <li className="flex flex-col space-y-2">
                <div className="flex items-center">
                  <Mail size={18} className="text-accent mr-4 flex-shrink-0" />
                  <a href={`mailto:${CONTACT_INFO.generalEmail}`} className="text-gray-500 text-sm hover:text-white transition-colors">
                    {CONTACT_INFO.generalEmail}
                  </a>
                </div>
                <div className="flex items-center ml-8">
                  <a href={`mailto:${CONTACT_INFO.johnDavidEmail}`} className="text-gray-500 text-[11px] hover:text-white transition-colors italic">
                    {CONTACT_INFO.johnDavidEmail}
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-accent mr-4 flex-shrink-0" />
                <span className="text-gray-500 text-sm">+44 (0) 20 7946 0123</span>
              </li>
              <li className="flex items-center">
                <Printer size={18} className="text-accent mr-4 flex-shrink-0" />
                <span className="text-gray-500 text-sm">+44 (0) 20 7946 0124</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-[11px] text-gray-600 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} John David & Associates. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <button onClick={() => navigate('home')} className="hover:text-white transition-colors outline-none">Sitemap</button>
            <button onClick={() => navigate('home')} className="hover:text-white transition-colors outline-none">Terms of Use</button>
            <button onClick={() => navigate('home')} className="hover:text-white transition-colors outline-none">Cookies</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
