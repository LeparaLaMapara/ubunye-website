import React from 'react';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';

export const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-navy-900 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-20">
         <div className="absolute -right-20 -top-20 w-96 h-96 bg-accent rounded-full blur-[100px]"></div>
         <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-blue-600 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Ready to transform your business?
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Our team of experts is ready to help you implement the right solutions for your unique business needs.
          </p>
        </Reveal>
        <Reveal delay={400}>
          <Button variant="primary" icon onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
            Contact Us Today
          </Button>
        </Reveal>
      </div>
    </section>
  );
};