import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { TESTIMONIALS } from '../../constants';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <h4 className="text-accent font-bold tracking-[0.2em] uppercase mb-4 text-sm">Our Feedbacks</h4>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              What they’re talking about us
            </h2>
            <p className="text-gray-400 italic font-serif text-lg">
              "How to pursue pleasure rationally encounter consequences that painful again is there anyone who loves."
            </p>  
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <Reveal key={testimonial.id} delay={index * 200}>
              <div className="bg-navy-800 p-8 rounded-xl relative hover:-translate-y-2 transition-transform duration-300 border border-navy-700">
                <Quote className="absolute top-6 right-6 text-accent/20 w-10 h-10" />
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-gray-300 mb-8 leading-relaxed min-h-[80px]">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{testimonial.author}</h4>
                    <span className="text-gray-500 text-xs uppercase tracking-wide">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};