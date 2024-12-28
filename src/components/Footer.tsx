import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/30 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">ACM-W STUDENT CHAPTER</h3>
            <p className="text-gray-400 text-sm">
              Empowering women in technology through innovation, education, and community building.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Events', 'Team'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {['Projects', 'Join Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(' ', '')}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {[
                { Icon: Github, href: 'https://github.com/Acmwstudents' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/company/srm-university-acm-w-student-chapter/' },
                { Icon: Instagram, href: 'https://www.instagram.com/acmwsrm' },
                { Icon: Mail, href: 'mailto:Acmw.students@srmist.edu.in' }
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            {new Date().getFullYear()} ACM-W SRM. All rights reserved.
            created by{' '}
            <a
              href="https://www.linkedin.com/in/adityagnss/"
              className="text-violet-400 hover:text-violet-600 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gadey Aditya
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;