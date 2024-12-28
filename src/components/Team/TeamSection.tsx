import React from 'react';

interface TeamSectionProps {
  title: string;
  children: React.ReactNode;
}

const TeamSection: React.FC<TeamSectionProps> = ({ title, children }) => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-white mb-8 text-center">
        <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {children}
      </div>
    </div>
  );
};

export default TeamSection;