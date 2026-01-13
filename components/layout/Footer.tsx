import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { SERVICES } from '../../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-gray-300 pt-20 pb-10 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
               <div className="w-8 h-8 bg-gradient-to-br from-accent to-blue-600 rounded flex items-center justify-center text-white font-bold">
                 U
               </div>
               <span className="text-2xl font-bold text-white tracking-tight">UAIE</span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              End-to-end research and technology services driving innovation through strategic solutions.
            </p>
            <div className="flex gap-4 pt-2">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-accent">
              Our Services
            </h3>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a href="#" className="hover:text-accent transition-colors text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50"></span>
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-accent">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <a href="mailto:info@etihuku.com" className="hover:text-white transition-colors">info@uaie.com</a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <a href="tel:+27114700724" className="hover:text-white transition-colors">+27 795 399 012</a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>99 Smit str Braamfontein, Gauteng, South Africa</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-accent">
              Stay Connected
            </h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for the latest updates.</p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-navy-800 border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent text-white"
              />
              <button className="bg-accent text-white font-semibold py-3 rounded-lg hover:bg-cyan-600 transition-colors text-sm uppercase tracking-wide">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} UAIE. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};