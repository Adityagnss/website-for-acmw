import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface FeaturedPostProps {
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({
  title,
  excerpt,
  image,
  author,
  date,
  category,
  readTime
}) => {
  return (
    <div className="relative overflow-hidden rounded-lg bg-black/30 backdrop-blur-md mb-12">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/80 to-blue-900/80" />
      </div>
      <div className="relative p-8">
        <div className="inline-block px-4 py-1 bg-violet-600 rounded-full text-sm font-semibold text-white mb-4">
          Featured Post
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
        <p className="text-gray-200 mb-6 max-w-2xl">{excerpt}</p>
        <div className="flex items-center gap-6 mb-6">
          <div className="flex items-center gap-2 text-gray-200">
            <User className="w-5 h-5" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-200">
            <Calendar className="w-5 h-5" />
            <span>{date}</span>
          </div>
          <span className="text-gray-200">{readTime} read</span>
        </div>
        <button className="inline-flex items-center px-6 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors duration-300">
          Read More
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default FeaturedPost;