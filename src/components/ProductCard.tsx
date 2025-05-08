
import React from 'react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  title: string;
  description: string; // Keep the prop to maintain compatibility
  iconBg: string;
  iconSrc?: string;
  children?: React.ReactNode;
  link?: string;
}

const ProductCard = ({
  title,
  iconBg,
  iconSrc,
  children,
  link = "/shop"
}: ProductCardProps) => {
  return (
    <article className="product-card bg-ninny-cashmere rounded-lg p-6 hover:shadow-md transition-shadow flex flex-col items-center text-center">
      <div className={`w-20 h-20 ${iconBg} rounded-full flex items-center justify-center mb-4 overflow-hidden`}>
        {iconSrc ? <img src={iconSrc} alt={`${title} icon`} className="w-full h-full object-cover" /> : children}
      </div>
      <h3 className="text-ninny-water text-xl uppercase mb-4 font-genty">{title}</h3>
      <Link to="/shop" className="text-ninny-mandarin font-loubag font-bold hover:underline">
        Explore
      </Link>
    </article>
  );
};

export default ProductCard;
