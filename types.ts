export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  id: number;
  value: string;
  label: string;
}

export interface ApproachStep {
  id: number;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  rating: number;
}

export interface BlogPost {
  id: number;
  category: string;
  title: string;
  description: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}