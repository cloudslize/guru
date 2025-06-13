import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { X, Menu, GraduationCap } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="text-xl md:text-2xl font-bold text-gradient">
            CloudSlize
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('[data-how-it-works]')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('[data-one-stop-solution]')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              One Stop Solution
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden md:block px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Log In
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-gradient rounded-lg hover:opacity-90 transition-opacity">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
