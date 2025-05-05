
import React, { useEffect, useRef } from 'react';

const DutchieEmbed: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Clean up any existing script to prevent duplicates
    const existingScript = document.getElementById('dutchie--embed_script');
    if (existingScript) {
      existingScript.remove();
    }
    
    // Create a new script element
    const script = document.createElement('script');
    script.id = 'dutchie--embed_script';
    script.src = 'https://dutchie.com/api/v2/embedded-menu/65528faae24f090009790d7d.js';
    script.async = true;
    
    // Add the script to the container
    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }
    
    // Cleanup function to remove script when component unmounts
    return () => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);
  
  return <div ref={containerRef} className="w-full min-h-screen" />;
};

export default DutchieEmbed;
