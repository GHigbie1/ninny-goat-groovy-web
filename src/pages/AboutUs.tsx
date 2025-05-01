
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Import images that match the 70s vintage/disco aesthetic
const vinylImage = "/lovable-uploads/f8a25f50-412a-4b92-9b9a-042bc5274479.jpg";
const recordsImage = "/lovable-uploads/d085a8fe-a733-4b4b-9cfa-3e0edc83be45.jpg";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-ninny-cashmere pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-center font-genty text-ninny-raspberry mb-6">About Us</h1>
          <p className="text-center text-2xl md:text-3xl font-genty text-ninny-water mb-8">
            Fairlee, VT's Black and Woman-Owned Cannabis Destination
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow bg-ninny-cashmere">
        {/* Intro Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <p className="text-black text-lg mb-6">
                At Ninny Goat Dispensary, we're more than just a place to buy cannabis — we're a community built on passion, inclusivity, and empowerment. Proudly Black and Woman-Owned, our mission is to set a new standard in cannabis retail by creating a welcoming space where everyone feels at home.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src={vinylImage} 
                alt="Vintage Records" 
                className="rounded-2xl shadow-lg w-full h-auto max-h-96 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-12 bg-ninny-marigold/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-ninny-raspberry font-genty mb-12">Our Mission</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Mission Card 1 */}
              <div className="bg-ninny-cashmere p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-ninny-mandarin font-genty mb-4">Elevating the Standard</h3>
                <p className="text-black">
                  We are dedicated to sourcing only the highest-quality cannabis products, thoughtfully curated to deliver a premium experience every time you visit.
                </p>
              </div>
              
              {/* Mission Card 2 */}
              <div className="bg-ninny-cashmere p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-ninny-mandarin font-genty mb-4">Promoting Inclusivity</h3>
                <p className="text-black">
                  Everyone deserves access to safe, supportive, and stigma-free cannabis education and products. Our dispensary is a judgment-free zone where cannabis lovers from all backgrounds can connect and feel welcomed.
                </p>
              </div>
              
              {/* Mission Card 3 */}
              <div className="bg-ninny-cashmere p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-ninny-mandarin font-genty mb-4">Educating and Empowering</h3>
                <p className="text-black">
                  We believe that knowledge is power. That's why we're committed to providing clear, comprehensive information so you can make informed choices about the products that best fit your lifestyle and needs.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Experience Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-ninny-raspberry font-genty mb-6">Immerse Yourself in the Ninny Goat Experience</h2>
              <p className="text-black mb-4">
                Born from true cannabis enthusiasts, Ninny Goat Dispensary is infused with love for the plant and a commitment to our community. Step into our finely curated space—designed by cannabis people, for cannabis people—and enjoy a shopping experience that feels personal, relaxed, and real.
              </p>
              <p className="text-black">
                Whether you're new to cannabis or a seasoned pro, Ninny Goat is your local haven for great vibes, trusted products, and honest connections.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src={recordsImage} 
                alt="70s Disco Vibe" 
                className="rounded-2xl shadow-lg w-full h-auto max-h-96 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Decorative Element */}
        <div className="py-16 overflow-hidden bg-ninny-marigold/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center">
              <svg className="h-24 w-24 text-ninny-mandarin opacity-30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="6"></circle>
                <circle cx="12" cy="12" r="2"></circle>
              </svg>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
