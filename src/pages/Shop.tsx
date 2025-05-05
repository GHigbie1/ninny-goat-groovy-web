
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DutchieEmbed from '@/components/DutchieEmbed';

const Shop = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          <h1 className="text-4xl font-poppins font-bold text-ninny-water mb-8 text-center">
            Our Shop
          </h1>
          
          {/* Embed the Dutchie e-commerce store */}
          <DutchieEmbed />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Shop;
