import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'Team', path: '/team' },
    { title: 'About Us', path: '/about' },
    { title: 'Events', path: '/events' },
    { title: 'Projects', path: '/projects' },
    { title: 'Join Us', path: '/joinus' },
  ];

  return (
    <nav className="fixed w-full bg-black/30 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="../pic/logo.png" 
                alt="ACMW Logo" 
                className="h-16 w-24 mr-3 bg-white p-1 rounded-full"
              />
              <span className="text-white font-bold text-lg">ACM-W SRM</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.path}
                  className="text-gray-300 hover:bg-violet-700/50 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/30 backdrop-blur-md">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="text-gray-300 hover:bg-violet-700/50 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;