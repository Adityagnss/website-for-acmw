import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative min-h-screen pb-32">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,0,255,0.1),rgba(120,0,255,0)_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,0,255,0.1),rgba(255,0,255,0)_50%)]"></div>
      </div>

      {/* Hero Section */}
      <div className="relative pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="mt-24 text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block animate-text bg-gradient-to-r from-violet-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Bringing Diversity to the
              </span>
              <span className="block mt-2 animate-text bg-gradient-to-r from-violet-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Heart of Technology
              </span>
            </h1>
            
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
              Join us in our mission to empower and inspire women in technology through innovation, education, and community.
            </p>

            <div className="mt-8 flex justify-center">
              <Link
                to="/joinus"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-violet-500 to-blue-500 hover:from-violet-600 hover:to-blue-600"
              >
                Join Us
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Featured Section */}
          <div className="mt-32 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Workshops',
                description: 'Hands-on learning experiences in cutting-edge technologies',
                image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=500'
              },
              {
                title: 'Mentorship',
                description: 'Connect with industry professionals and experienced peers',
                image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=500'
              },
              {
                title: 'Community',
                description: 'Be part of a supportive and inspiring tech community',
                image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=500'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 bg-black/20 backdrop-blur-sm"
              >
                <div className="relative h-48">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;