
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DutchieEmbed from '../components/DutchieEmbed';

const Shop = () => {
  return (
    <div className="flex flex-col min-h-screen bg-ninny-cashmere">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-center mb-8">Our Shop</h1>
        <DutchieEmbed />
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
