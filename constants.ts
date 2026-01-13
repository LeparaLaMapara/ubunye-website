import { Service, Stat, ApproachStep, Testimonial, BlogPost } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#' },
  { name: 'Who We Are', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Approach', href: '#approach' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export const STATS: Stat[] = [
  { id: 1, value: '250+', label: 'Happy Clients' },
  { id: 2, value: '520', label: 'Projects Completed' },
  { id: 3, value: '5 Years', label: 'Experience' },
  { id: 4, value: '50+', label: 'Expert Developers' },
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'Agile Software Delivery',
    description: 'We help our clients develop software products and solutions using agile methodologies, which emphasize flexibility, collaboration, and customer feedback.',
    icon: 'Code'
  },
  {
    id: 2,
    title: 'Cloud Engineering',
    description: 'Offer cloud-based solutions and services, helping clients leverage cloud technology to scale, secure, and optimize their operations.',
    icon: 'Cloud'
  },
  {
    id: 3,
    title: 'Strategic Assurance',
    description: 'Ensuring that client’s technology and business strategies are aligned and secure, mitigating risks, and ensuring compliance with industry regulations.',
    icon: 'ShieldCheck'
  },
  {
    id: 4,
    title: 'Data Science & AI',
    description: 'We use data science and AI/ML techniques to extract meaningful information, build predictive models, automate processes, and drive data-driven decision-making for your business.',
    icon: 'Brain'
  },
  {
    id: 5,
    title: 'Business Analytics Insight',
    description: 'We assist businesses across different domains in analyzing their data to gain valuable insights that can inform decision-making and improve efficiency.',
    icon: 'LineChart'
  },
  {
    id: 6,
    title: 'Product Design',
    description: 'Helping clients design user-friendly and innovative products, which could include software applications or physical products.',
    icon: 'PenTool'
  },
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    id: 1,
    title: 'Agile Methodology',
    description: 'We employ agile practices for regular feedback and course correction.'
  },
  {
    id: 2,
    title: 'Continuous Delivery',
    description: 'Our CI/CD pipelines ensure reliable, automated product delivery.'
  },
  {
    id: 3,
    title: 'Quality Assurance',
    description: 'Our testing strategies ensure products meet the highest quality standards.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "Etihuku delivered a sophisticated AI system that greatly enhanced our security protocols and operational efficiency.",
    author: "Champion Mobile",
    role: "Client",
    rating: 5
  },
  {
    id: 2,
    quote: "UAIE built a robust Data Warehouse that has completely transformed how we analyze our business performance.",
    author: "ANE",
    role: "Client",
    rating: 5
  },
  {
    id: 3,
    quote: "UAIE developed an advanced AI-powered web application that helped us streamline our student management systems.",
    author: "University of Eswatini",
    role: "Client",
    rating: 5
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    category: "Technology",
    title: "Leveraging AI for Business Growth in 2023",
    description: "Discover how artificial intelligence is reshaping the corporate landscape and driving unprecedented growth.",
    author: "Sarah Johnson",
    date: "June 15, 2023",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    category: "Cloud",
    title: "Cloud Migration Strategies for Enterprise",
    description: "A comprehensive guide to moving your legacy systems to the cloud securely and efficiently.",
    author: "David Chen",
    date: "July 2, 2023",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    category: "Security",
    title: "The Future of Data Security in a Connected World",
    description: "Understanding the new threats in cybersecurity and how to protect your organization's digital assets.",
    author: "Michael Ross",
    date: "August 10, 2023",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];