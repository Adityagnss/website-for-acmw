import React from 'react';

interface StatCardProps {
  number: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, label }) => {
  return (
    <div className="bg-black/20 backdrop-blur-sm p-8 rounded-xl text-center transform transition-transform duration-300 hover:scale-105">
      <div className="text-4xl font-bold mb-2 animate-text bg-gradient-to-r from-violet-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
        {number}
      </div>
      <div className="text-xl font-semibold text-white">
        {label}
      </div>
    </div>
  );
};

export default StatCard;