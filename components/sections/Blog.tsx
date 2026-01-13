import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { BLOG_POSTS } from '../../constants';

export const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <Reveal>
            <h4 className="text-accent font-bold tracking-[0.2em] uppercase mb-4 text-sm">Our Blog</h4>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-2">
              Latest Insights & Articles
            </h2>
            <p className="text-gray-600 max-w-xl">
              Stay updated with our latest thoughts on technology, innovation, and business transformation.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <a href="#" className="inline-flex items-center text-navy-900 font-bold hover:text-accent transition-colors">
              View All Articles <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <Reveal key={post.id} delay={index * 150}>
              <article className="group bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 h-full flex flex-col hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-accent transition-colors">
                    <a href="#">{post.title}</a>
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                    <span className="text-xs font-bold text-navy-900">By {post.author}</span>
                    <a href="#" className="text-accent text-sm font-semibold hover:text-navy-900 transition-colors">Read Article</a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};