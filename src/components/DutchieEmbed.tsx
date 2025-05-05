
import React, { useEffect, useRef } from 'react';

const DutchieEmbed: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create script element
    const script = document.createElement('script');
    script.async = true;
    script.id = 'dutchie--embed__script';
    script.src = 'https://dutchie.com/api/v2/embedded-menu/65528faae24f090009790d7d.js';
    
    // Append the script to the container
    containerRef.current.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      if (containerRef.current && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full min-h-screen"></div>;
};

export default DutchieEmbed;
