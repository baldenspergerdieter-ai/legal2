
import React from 'react';
import { Briefcase, Users, Globe, Building2, ShieldCheck, Scale, Landmark, FileText } from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Who We Are', href: '#who-we-are' },
  { label: 'Our Expertise', href: '#expertise' },
  { label: 'Our Insights', href: '#insights' },
  { label: 'Careers', href: '#careers' },
];

export const STATS = [
  { value: '8+', label: 'Partners' },
  { value: '50+', label: 'Solicitors & Paralegals' },
  { value: '18+', label: 'Languages Spoken' },
  { value: '15+', label: 'International Desks' },
];

export const EXPERTISE_GROUPS = [
  {
    title: 'Private Client',
    items: ['Trusts & Estates', 'Family Law', 'Tax Planning', 'Real Estate'],
    icon: <Users className="w-8 h-8 text-accent mb-4" />
  },
  {
    title: 'Business',
    items: ['Corporate Law', 'M&A', 'Employment', 'Commercial Contracts'],
    icon: <Briefcase className="w-8 h-8 text-accent mb-4" />
  },
  {
    title: 'Industries',
    items: ['Intellectual Property', 'Manufacturing', 'Tech', 'International Trade'],
    icon: <Building2 className="w-8 h-8 text-accent mb-4" />
  }
];

export const CONTACT_INFO = {
  name: "John David & Associates",
  address: "64 New Cavendish Street, London, W1G 8TB",
  generalEmail: "info@johndavidandassociates.co.uk",
  johnDavidEmail: "john.david@johndavidandassociates.co.uk",
  altEmail: "mrjohndavid.esq@gmail.com"
};
