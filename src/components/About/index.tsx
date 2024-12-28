import React from 'react';
import MissionSection from './MissionSection';
import Timeline from './Timeline';
import StatCard from './StatCard';

const About: React.FC = () => {
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
              About Us
            </span>
          </h2>

          <div className="space-y-16">
            <div>
              <h3 className="text-2xl tracking-tight font-extrabold sm:text-3xl md:text-4xl text-center mb-8 text-white">
                Our Mission
              </h3>
              <MissionSection />
            </div>

            <div>
              <h3 className="text-2xl tracking-tight font-extrabold sm:text-3xl md:text-4xl text-center mb-8 text-white">
                Our Impact
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <StatCard number="40+" label="Members" />
                <StatCard number="10+" label="Events" />
                <StatCard number="15+" label="Projects" />
              </div>
            </div>

            <div>
              <h3 className="text-2xl tracking-tight font-extrabold sm:text-3xl md:text-4xl text-center mb-8 text-white">
                Our Journey
              </h3>
              <Timeline />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;