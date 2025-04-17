
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-ninny-water text-ninny-cashmere" id="contact">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-ninny-marigold text-xl font-bold font-funkydori">+ Ninny Goat & Co.</h3>
            <p className="text-sm opacity-80">
              123 Groovy Street<br />
              Funkytown, USA 12345<br />
              (555) 123-4567
            </p>
            <p className="text-xs opacity-60">
              Adult-use cannabis products. For use by adults 21 and older. Keep out of reach of children.
            </p>
          </div>
          
          {/* Shop Links */}
          <div className="space-y-2">
            <h4 className="text-ninny-marigold font-funkydori">Shop</h4>
            <nav className="flex flex-col gap-2 text-ninny-cashmere/80">
              <a href="#shop" className="hover:text-ninny-mandarin transition-colors">Flower</a>
              <a href="#shop" className="hover:text-ninny-mandarin transition-colors">Edibles</a>
              <a href="#shop" className="hover:text-ninny-mandarin transition-colors">Vapes</a>
              <a href="#shop" className="hover:text-ninny-mandarin transition-colors">Concentrates</a>
              <a href="#shop" className="hover:text-ninny-mandarin transition-colors">Accessories</a>
            </nav>
          </div>
          
          {/* Navigation */}
          <div className="space-y-2">
            <h4 className="text-ninny-marigold font-funkydori">Navigation</h4>
            <nav className="flex flex-col gap-2 text-ninny-cashmere/80">
              <a href="#home" className="hover:text-ninny-mandarin transition-colors">Home</a>
              <a href="#blog" className="hover:text-ninny-mandarin transition-colors">Blog</a>
              <a href="#shop" className="hover:text-ninny-mandarin transition-colors">Shop</a>
              <a href="#contact" className="hover:text-ninny-mandarin transition-colors">Contact</a>
            </nav>
          </div>
          
          {/* Subscribe */}
          <div className="space-y-4">
            <h4 className="text-ninny-marigold font-funkydori">Subscribe</h4>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="px-4 py-2 rounded-full bg-ninny-cashmere/10 border border-ninny-cashmere/20 focus:outline-none focus:border-ninny-cashmere/50 text-ninny-cashmere"
              />
              <button 
                type="submit" 
                className="bg-ninny-mandarin text-ninny-cashmere px-4 py-2 rounded-full font-bold uppercase tracking-wider hover:bg-ninny-marigold transition-colors"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-ninny-cashmere/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-80">
            © 2025 Ninny Goat & Co. All rights reserved.
          </p>
          
          <div className="flex gap-6 items-center">
            <nav className="flex gap-6 text-sm opacity-80">
              <a href="#" className="hover:text-ninny-marigold transition-colors">Terms</a>
              <a href="#" className="hover:text-ninny-marigold transition-colors">Privacy</a>
              <a href="#" className="hover:text-ninny-marigold transition-colors">Cookies</a>
            </nav>
            
            <div className="flex gap-4 text-ninny-cashmere ml-6">
              <a href="#" aria-label="Facebook" className="hover:text-ninny-marigold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-ninny-marigold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-ninny-marigold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
