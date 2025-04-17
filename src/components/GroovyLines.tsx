
import React, { useState, useEffect } from 'react';

const GroovyLines = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 300;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <svg 
      className="groovy-lines fixed inset-0 w-full h-auto pointer-events-none z-0"
      viewBox="0 0 1920 5000"
      preserveAspectRatio="xMidYMin slice"
    >
      <path 
        className={scrolled ? "animate-draw" : ""} 
        stroke="#0F7776" 
        d="M1600 -100 C 1650 300, 1500 600, 1650 900 S 1700 1200, 1600 1500 S 1500 1800, 1650 2100 S 1700 2400, 1600 2700 S 1500 3000, 1650 3300 S 1700 3600, 1600 3900 S 1500 4200, 1650 4500 S 1700 4800, 1600 5100"
      />
      <path 
        className={scrolled ? "animate-draw" : ""}  
        stroke="#7E1836" 
        d="M1630 -100 C 1680 300, 1530 600, 1680 900 S 1730 1200, 1630 1500 S 1530 1800, 1680 2100 S 1730 2400, 1630 2700 S 1530 3000, 1680 3300 S 1730 3600, 1630 3900 S 1530 4200, 1680 4500 S 1730 4800, 1630 5100"
      />
      <path 
        className={scrolled ? "animate-draw" : ""}  
        stroke="#EC7338" 
        d="M1660 -100 C 1710 300, 1560 600, 1710 900 S 1760 1200, 1660 1500 S 1560 1800, 1710 2100 S 1760 2400, 1660 2700 S 1560 3000, 1710 3300 S 1760 3600, 1660 3900 S 1560 4200, 1710 4500 S 1760 4800, 1660 5100"
      />
      <path 
        className={scrolled ? "animate-draw" : ""}  
        stroke="#F8B832" 
        d="M1690 -100 C 1740 300, 1590 600, 1740 900 S 1790 1200, 1690 1500 S 1590 1800, 1740 2100 S 1790 2400, 1690 2700 S 1590 3000, 1740 3300 S 1790 3600, 1690 3900 S 1590 4200, 1740 4500 S 1790 4800, 1690 5100"
      />
      <path 
        className={scrolled ? "animate-draw" : ""}  
        stroke="#C22328" 
        d="M1720 -100 C 1770 300, 1620 600, 1770 900 S 1820 1200, 1720 1500 S 1620 1800, 1770 2100 S 1820 2400, 1720 2700 S 1620 3000, 1770 3300 S 1820 3600, 1720 3900 S 1620 4200, 1770 4500 S 1820 4800, 1720 5100"
      />
    </svg>
  );
};

export default GroovyLines;
