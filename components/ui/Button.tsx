import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm uppercase tracking-wider";
  
  const variants = {
    primary: "bg-accent text-white hover:bg-cyan-500 shadow-lg shadow-cyan-500/30",
    secondary: "bg-white text-navy-900 hover:bg-gray-100 shadow-lg",
    outline: "border-2 border-accent text-accent hover:bg-accent hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && <ArrowRight className="ml-2 w-4 h-4" />}
    </button>
  );
};