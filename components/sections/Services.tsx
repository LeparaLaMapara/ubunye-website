import React from 'react';
import { ArrowRight, Code, Cloud, ShieldCheck, Brain, LineChart, PenTool, LucideIcon } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { SERVICES } from '../../constants';

// Icon mapping helper
const iconMap: Record<string, LucideIcon> = {
  Code,
  Cloud,
  ShieldCheck,
  Brain,
  LineChart,
  PenTool
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <h4 className="text-accent font-bold tracking-[0.2em] uppercase mb-4 text-sm">Our Services</h4>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-6">
              Why you should get our Professional Services
            </h2>
            <p className="text-gray-600 text-lg">
              We provide comprehensive technology solutions that help businesses grow and innovate in today’s competitive landscape.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <Reveal key={service.id} delay={index * 100}>
                <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col hover:-translate-y-2">
                  <div className="w-14 h-14 bg-blue-50 text-accent rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-4 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  <button className="flex items-center text-navy-900 font-semibold text-sm uppercase tracking-wide group-hover:text-accent transition-colors mt-auto">
                    Learn More <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};