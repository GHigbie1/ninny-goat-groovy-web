
import React from 'react';

interface BlogCardProps {
  title: string;
  description: string;
  image?: string;
  date?: string;
  author?: string;
  link?: string;
}

const BlogCard = ({ title, description, image, date = "June 15, 2023", author = "Ninny Goat Team", link = "#" }: BlogCardProps) => {
  return (
    <article className="bg-ninny-cashmere rounded-3xl shadow-md p-8 transition-all hover:translate-y-[-6px] hover:shadow-xl">
      {image && (
        <div className="mb-4 rounded-xl overflow-hidden">
          <img src={image} alt={title} className="w-full h-48 object-cover" />
        </div>
      )}
      <div className="mb-2 text-black text-sm">
        <span>{date}</span> • <span>{author}</span>
      </div>
      <h3 className="text-ninny-water text-xl font-genty uppercase mb-2">{title}</h3>
      <p className="text-black mb-4">{description}</p>
      <a href={link} className="text-ninny-mandarin font-bold hover:underline flex items-center gap-1">
        Read More
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6"/>
        </svg>
      </a>
    </article>
  );
};

export default BlogCard;
