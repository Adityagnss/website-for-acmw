import React from 'react';
import { Calendar, User, Tag } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  image,
  author,
  date,
  category,
  readTime
}) => {
  return (
    <div className="bg-black/20 backdrop-blur-sm rounded-lg overflow-hidden group">
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 mb-3">
          <span className="px-3 py-1 text-sm bg-violet-600/30 text-violet-200 rounded-full">
            {category}
          </span>
          <span className="text-gray-400 text-sm">{readTime} read</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-300 mb-4">{excerpt}</p>
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;