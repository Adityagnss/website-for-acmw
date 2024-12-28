import React, { useState } from 'react';
import FeaturedPost from './FeaturedPost';
import BlogCard from './BlogCard';
import CategoryFilter from './CategoryFilter';

const Blogs: React.FC = () => {
  const categories = ['All', 'Tech Insights', 'Women in Tech', 'Events', 'Career Growth'];
  const [activeCategory, setActiveCategory] = useState('All');

  const featuredPost = {
    title: "Breaking Barriers: Women Leading Tech Innovation",
    excerpt: "Discover how women are reshaping the technology landscape and leading innovative projects across various domains.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=500",
    author: "Sarah Johnson",
    date: "March 8, 2024",
    category: "Women in Tech",
    readTime: "8 min"
  };

  const blogs = [
    {
      title: "The Future of AI in Education",
      excerpt: "Exploring how artificial intelligence is transforming the educational landscape.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=500",
      author: "Emily Chen",
      date: "March 5, 2024",
      category: "Tech Insights",
      readTime: "5 min"
    },
    {
      title: "Building Inclusive Tech Communities",
      excerpt: "Steps towards creating more diverse and welcoming spaces in technology.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=500",
      author: "Maria Garcia",
      date: "March 3, 2024",
      category: "Women in Tech",
      readTime: "6 min"
    },
    {
      title: "Highlights: Women in Tech Summit 2024",
      excerpt: "Key takeaways from our annual conference celebrating women in technology.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=500",
      author: "Alex Kim",
      date: "March 1, 2024",
      category: "Events",
      readTime: "4 min"
    }
  ];

  const filteredBlogs = activeCategory === 'All'
    ? blogs
    : blogs.filter(blog => blog.category === activeCategory);

  return (
    <div className="relative min-h-screen pb-32">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,0,255,0.1),rgba(120,0,255,0)_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,0,255,0.1),rgba(255,0,255,0)_50%)]"></div>
      </div>

      {/* Content */}
      <div className="relative pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="mt-24 text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl text-center mb-16">
            <span className="block animate-text bg-gradient-to-r from-violet-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Our Blog
            </span>
          </h2>

          <div className="mb-16">
            <h3 className="text-2xl tracking-tight font-extrabold sm:text-3xl md:text-4xl text-center mb-12 text-white">
              Featured Post
            </h3>
            <FeaturedPost {...featuredPost} />
          </div>

          <div>
            <h3 className="text-2xl tracking-tight font-extrabold sm:text-3xl md:text-4xl text-center mb-12 text-white">
              Latest Articles
            </h3>
            <div className="mb-8">
              <CategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog, index) => (
                <BlogCard key={index} {...blog} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;