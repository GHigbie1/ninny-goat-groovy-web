
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AgeGate: React.FC = () => {
  const navigate = useNavigate();
  const [hasVerified, setHasVerified] = useState<boolean>(false);

  useEffect(() => {
    // Check if user has already verified their age in this session
    const verified = sessionStorage.getItem('age-verified');
    // Check if this is the initial page load
    const isInitialPageLoad = !localStorage.getItem('has-visited-site');
    
    if (verified === 'true' || !isInitialPageLoad) {
      setHasVerified(true);
    }
    
    // Mark that the user has visited the site
    localStorage.setItem('has-visited-site', 'true');
  }, []);

  const handleVerify = () => {
    // Store verification in session storage
    sessionStorage.setItem('age-verified', 'true');
    setHasVerified(true);
  };
  
  // If user has verified, don't show the age gate
  if (hasVerified) {
    return null;
  }
  
  return (
    <div className="fixed inset-0 z-[100] bg-ninny-cashmere flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-ninny-cashmere border-4 border-ninny-mandarin rounded-3xl p-8 shadow-2xl text-center">
        <img
          src="/lovable-uploads/9105d860-b1f1-4c9d-a68c-2b6236e5f43a.png"
          alt="Ninny Goat & Co. Logo"
          className="h-20 mx-auto mb-6"
        />
        
        <h2 className="font-genty text-3xl mb-6 text-ninny-raspberry">ARE YOU 21+</h2>
        
        <p className="mb-8 text-lg">You must be at least 21 years old to access this website.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={handleVerify}
            className="px-6 py-3 rounded-full font-bold uppercase tracking-wider text-ninny-cashmere transition-all hover:opacity-90"
            style={{ backgroundColor: '#0F7776' }}
          >
            Yes! Enter here.
          </button>
          
          <a 
            href="https://www.google.com"
            className="px-6 py-3 rounded-full font-bold uppercase tracking-wider text-ninny-cashmere transition-all hover:opacity-90"
            style={{ backgroundColor: '#C22328' }}
          >
            No! Hope to see you soon.
          </a>
        </div>
      </div>
    </div>
  );
};

export default AgeGate;
