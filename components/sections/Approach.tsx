import React from 'react';
import { Settings, RefreshCw, CheckCircle } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { APPROACH_STEPS } from '../../constants';
import { Button } from '../ui/Button';

const iconMap = [Settings, RefreshCw, CheckCircle];

export const Approach: React.FC = () => {
  return (
    <section id="approach" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <div className="lg:w-1/2 sticky top-24">
            <Reveal>
              <h4 className="text-accent font-bold tracking-[0.2em] uppercase mb-4 text-sm">Our Approach</h4>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-6 leading-tight">
                Product Development & Delivery Excellence
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We combine innovative product development strategies with efficient delivery processes to ensure your technology solutions are built right and delivered on time.
              </p>
              <Button variant="outline" icon>Learn Our Process</Button>
            </Reveal>
          </div>

          <div className="lg:w-1/2 grid gap-6">
            {APPROACH_STEPS.map((step, index) => {
              const Icon = iconMap[index];
              return (
                <Reveal key={step.id} delay={index * 200}>
                  <div className="bg-slate-50 p-8 rounded-xl border-l-4 border-accent hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="bg-white p-3 rounded-full shadow-sm text-accent">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-navy-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};