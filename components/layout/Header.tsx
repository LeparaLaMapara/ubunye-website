import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../constants';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy-900/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
           <div className="w-10 h-10 bg-gradient-to-br from-accent to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:rotate-3 transition-transform">
             U
           </div>
           <span className="text-2xl font-bold text-white tracking-tight">UAIE</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-accent font-medium transition-colors text-sm uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a
             href="#contact"
             className="px-5 py-2 rounded-full border border-white/20 text-white hover:bg-accent hover:border-accent transition-all text-sm font-semibold"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white hover:text-accent transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-navy-900 border-t border-gray-800 shadow-xl transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col p-6 gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-300 hover:text-accent font-medium text-lg"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};