
import React from 'react';

interface BlogCardProps {
  title: string;
  description: string;
}

const BlogCard = ({ title, description }: BlogCardProps) => {
  return (
    <article className="bg-ninny-cashmere rounded-3xl shadow-md p-8 transition-all hover:translate-y-[-6px] hover:shadow-xl">
      <h3 className="text-ninny-water text-xl mb-2">{title}</h3>
      <p className="text-ninny-raspberry mb-4">{description}</p>
      <a href="#" className="text-ninny-mandarin font-bold hover:underline flex items-center gap-1">
        Read
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6"/>
        </svg>
      </a>
    </article>
  );
};

export default BlogCard;
