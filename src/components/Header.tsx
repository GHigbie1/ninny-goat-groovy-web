
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'h-16 bg-ninny-cashmere/90 backdrop-blur-sm shadow-sm'
          : 'h-20 bg-ninny-cashmere'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center justify-between">
        <Link to="/" className="text-[#0F7776] text-2xl font-funkydori font-bold">
          + Ninny Goat & Co.
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="nav-link text-[#0F7776]">Home</a>
          <a href="#blog" className="nav-link text-[#0F7776]">Blog</a>
          <a href="#shop" className="nav-link text-[#0F7776]">Shop</a>
          <a href="#contact" className="nav-link text-[#0F7776]">Contact</a>
        </nav>
        
        <a href="#shop" className="retro-button text-sm hidden md:flex" style={{backgroundColor: '#F8B832'}}>
          Shop Now
        </a>
        
        <button 
          className="md:hidden"
          style={{ color: '#F8B832' }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F8B832" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F8B832" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          )}
        </button>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-ninny-cashmere absolute top-full left-0 w-full p-4 shadow-md z-50">
          <nav className="flex flex-col space-y-4">
            <a href="#home" className="nav-link text-[#0F7776]" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#blog" className="nav-link text-[#0F7776]" onClick={() => setMobileMenuOpen(false)}>Blog</a>
            <a href="#shop" className="nav-link text-[#0F7776]" onClick={() => setMobileMenuOpen(false)}>Shop</a>
            <a href="#contact" className="nav-link text-[#0F7776]" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <a href="#shop" className="retro-button text-sm self-start" style={{backgroundColor: '#F8B832'}} onClick={() => setMobileMenuOpen(false)}>Shop Now</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
