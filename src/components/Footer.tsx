
import React from 'react';
import { Link } from 'react-router-dom';

const logoUrl = "/lovable-uploads/f8a25f50-412a-4b92-9b9a-042bc5274479.jpg";

const Footer = () => {
  return (
    <footer className="bg-ninny-water text-ninny-cashmere" id="contact">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <img
              src={logoUrl}
              alt="Ninny Goat & Co. Logo"
              className="h-14 w-auto"
              style={{ maxHeight: 56 }}
            />
            <p className="text-sm opacity-80 text-black">
              512 US-5<br />
              Fairlee, VT 05045<br />
              802-222-6105
            </p>
            <p className="text-xs opacity-60 text-black">
              Adult-use cannabis products. For use by adults 21 and older. Keep out of reach of children.
            </p>
          </div>
          
          {/* Shop Links */}
          <div className="space-y-2">
            <h4 className="text-ninny-marigold font-funkydori">Shop</h4>
            <nav className="flex flex-col gap-2 text-black">
              <Link to="/shop" className="hover:text-ninny-mandarin transition-colors">Flower</Link>
              <Link to="/shop" className="hover:text-ninny-mandarin transition-colors">Edibles</Link>
              <Link to="/shop" className="hover:text-ninny-mandarin transition-colors">Vapes</Link>
              <Link to="/shop" className="hover:text-ninny-mandarin transition-colors">Concentrates</Link>
              <Link to="/shop" className="hover:text-ninny-mandarin transition-colors">Accessories</Link>
            </nav>
          </div>
          
          {/* Navigation */}
          <div className="space-y-2">
            <h4 className="text-ninny-marigold font-funkydori">Navigation</h4>
            <nav className="flex flex-col gap-2 text-black">
              <Link to="/" className="hover:text-ninny-mandarin transition-colors">Home</Link>
              <Link to="/about" className="hover:text-ninny-mandarin transition-colors">About</Link>
              <a href="#blog" className="hover:text-ninny-mandarin transition-colors">Blog</a>
              <Link to="/shop" className="hover:text-ninny-mandarin transition-colors">Shop</Link>
              <Link to="/events" className="hover:text-ninny-mandarin transition-colors">Events</Link>
              <Link to="/coa" className="hover:text-ninny-mandarin transition-colors">COA</Link>
              <a href="#contact" className="hover:text-ninny-mandarin transition-colors">Contact</a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-ninny-cashmere/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-black opacity-80">
            © 2025 Ninny Goat & Co. All rights reserved.
          </p>
          
          <div className="flex gap-6 items-center">
            <nav className="flex gap-6 text-sm text-black opacity-80">
              <a href="#" className="hover:text-ninny-marigold transition-colors">Terms</a>
              <a href="#" className="hover:text-ninny-marigold transition-colors">Privacy</a>
              <a href="#" className="hover:text-ninny-marigold transition-colors">Cookies</a>
            </nav>
            
            <div className="flex gap-4 text-black ml-6">
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
