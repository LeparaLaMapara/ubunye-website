import React from 'react';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { STATS } from '../../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Technology Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-900/80 bg-gradient-to-r from-navy-900 via-navy-900/90 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 py-20">
        <div className="max-w-3xl">
          <Reveal>
            <div className="inline-block px-3 py-1 bg-accent/20 border border-accent/30 rounded-full text-accent font-semibold text-xs tracking-wider mb-6">
              INNOVATION PARTNER
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              UAIE <span className="text-accent">|</span> Leading South African Tech & IT Research Lab
            </h1>
          </Reveal>
          
          <Reveal delay={200}>
            <p className="text-xl md:text-2xl text-gray-300 font-light mb-8">
              Experts in technology driving digital transformation
            </p>
          </Reveal>

          <Reveal delay={400}>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl">
              We deliver cutting-edge solutions across the technology spectrum, from agile software delivery to cloud computing. Our team of experts helps organizations navigate digital transformation with strategic assurance, data science expertise, and advanced AI & machine learning capabilities.
            </p>
          </Reveal>

          <Reveal delay={600}>
            <div className="flex gap-4">
              <Button icon variant="primary" onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}>
                Read More
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-navy-900" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
                Contact Us
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Stats Grid */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-10">
          {STATS.map((stat, index) => (
            <Reveal key={stat.id} delay={800 + (index * 100)}>
              <div className="text-center md:text-left">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-accent font-medium uppercase text-sm tracking-wide">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};