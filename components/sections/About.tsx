import React from 'react';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative dots background */}
      <div className="absolute top-0 right-0 p-10 opacity-10">
        <div className="grid grid-cols-6 gap-2">
          {[...Array(36)].map((_, i) => (
             <div key={i} className="w-2 h-2 rounded-full bg-navy-900"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 relative">
             <Reveal>
               <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                 <img 
                   src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                   alt="Team collaboration" 
                   className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-transparent transition-colors"></div>
               </div>
               
               {/* Floating decorative card */}
               <div className="absolute -bottom-10 -left-10 bg-accent p-8 rounded-lg shadow-xl z-20 hidden md:block max-w-xs">
                 <h4 className="text-white font-bold text-xl mb-2">Excellence Driven</h4>
                 <p className="text-white/90 text-sm">Committed to delivering world-class technology solutions.</p>
               </div>
             </Reveal>
          </div>

          <div className="md:w-1/2">
            <Reveal delay={200}>
              <h4 className="text-accent font-bold tracking-[0.2em] uppercase mb-4 text-sm">Who We Are</h4>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-6 leading-tight">
                Experts in technology driving digital transformation
              </h2>
            </Reveal>

            <Reveal delay={400}>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                We deliver cutting-edge solutions across the technology spectrum, from agile software delivery to cloud computing. Our team of experts helps organizations navigate digital transformation with strategic assurance, data science expertise, and advanced AI & machine learning capabilities.
              </p>
              <p className="text-gray-600 leading-relaxed mb-10">
                At UAIE, we don't just build software; we engineer the future of your business. Our holistic approach ensures that every technological implementation aligns perfectly with your strategic goals.
              </p>
            </Reveal>

            <Reveal delay={600}>
              <Button icon>Read More</Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};