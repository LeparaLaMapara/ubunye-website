import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { CTA } from './components/sections/CTA';
import { Approach } from './components/sections/Approach';
import { Testimonials } from './components/sections/Testimonials';
import { Blog } from './components/sections/Blog';

function App() {
  return (
    <div className="font-sans text-slate-800 bg-white min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <CTA />
        <Approach />
        <Testimonials />
        <Blog />
        
        {/* Contact Section Placeholder (To anchor the header/footer links) */}
        <section id="contact" className="bg-slate-50 py-1"></section>
      </main>

      <Footer />
    </div>
  );
}

export default App;