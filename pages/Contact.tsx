
import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="bg-charcoal pt-32">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h1 className="text-sm uppercase tracking-[0.5em] text-accent font-bold mb-6">Contact Us</h1>
                <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight">Start a <br /><span className="italic text-accent">Conversation.</span></h2>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <div className="flex items-center text-accent"><MapPin size={20} className="mr-3"/> <h4 className="font-serif text-white">Location</h4></div>
                  <p className="text-gray-400 text-sm leading-relaxed">{CONTACT_INFO.address}</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center text-accent"><Mail size={20} className="mr-3"/> <h4 className="font-serif text-white">Email</h4></div>
                  <p className="text-gray-400 text-sm leading-relaxed">{CONTACT_INFO.generalEmail}</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center text-accent"><Phone size={20} className="mr-3"/> <h4 className="font-serif text-white">Phone</h4></div>
                  <p className="text-gray-400 text-sm leading-relaxed">+44 (0) 20 7946 0123</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center text-accent"><Clock size={20} className="mr-3"/> <h4 className="font-serif text-white">Hours</h4></div>
                  <p className="text-gray-400 text-sm leading-relaxed">Mon - Fri: 09:00 - 18:00 GMT</p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-80 bg-slate grayscale border border-white/5 flex items-center justify-center">
                <span className="text-gray-600 text-xs uppercase tracking-widest font-bold">Interactive Map Context</span>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white/5 p-12 border border-white/5">
              <h3 className="text-white font-serif text-3xl mb-8">Inquiry Form</h3>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] text-gray-500 uppercase tracking-widest block mb-2 font-bold">Full Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-white/20 py-3 focus:border-accent outline-none text-white transition-all" placeholder="Enter your name" />
                  </div>
                  <div>
                    <label className="text-[10px] text-gray-500 uppercase tracking-widest block mb-2 font-bold">Email Address</label>
                    <input type="email" className="w-full bg-transparent border-b border-white/20 py-3 focus:border-accent outline-none text-white transition-all" placeholder="Enter your email" />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] text-gray-500 uppercase tracking-widest block mb-2 font-bold">Nature of Inquiry</label>
                  <select className="w-full bg-transparent border-b border-white/20 py-3 focus:border-accent outline-none text-white transition-all appearance-none cursor-pointer">
                    <option className="bg-charcoal">Select a service</option>
                    <option className="bg-charcoal">Private Client</option>
                    <option className="bg-charcoal">Corporate Law</option>
                    <option className="bg-charcoal">Property</option>
                    <option className="bg-charcoal">Dispute Resolution</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] text-gray-500 uppercase tracking-widest block mb-2 font-bold">Message</label>
                  <textarea rows={5} className="w-full bg-transparent border-b border-white/20 py-3 focus:border-accent outline-none text-white transition-all resize-none" placeholder="Tell us about your requirements"></textarea>
                </div>
                <div className="pt-6">
                  <button type="submit" className="w-full py-5 bg-accent text-charcoal font-bold uppercase tracking-[0.2em] text-xs hover:bg-white transition-all">
                    Send Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
