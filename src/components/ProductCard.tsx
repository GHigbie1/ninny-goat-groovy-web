
import React from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  iconBg: string;
  iconSrc?: string;
  children?: React.ReactNode;
}

const ProductCard = ({ title, description, iconBg, iconSrc, children }: ProductCardProps) => {
  return (
    <article className="product-card">
      <div className={`w-20 h-20 ${iconBg} rounded-full flex items-center justify-center mb-4 overflow-hidden`}>
        {iconSrc ? (
          <img 
            src={iconSrc} 
            alt={`${title} icon`} 
            className="w-full h-full object-cover"
          />
        ) : (
          children
        )}
      </div>
      <h3 className="text-ninny-water text-xl mb-2">{title}</h3>
      <p className="text-ninny-raspberry mb-4">{description}</p>
      <a href="#" className="text-ninny-mandarin font-bold hover:underline">Explore</a>
    </article>
  );
};

export default ProductCard;
