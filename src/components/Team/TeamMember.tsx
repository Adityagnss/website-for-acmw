import React from 'react';
import { Linkedin, Github } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  github?: string;
  bio: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, linkedin, github, bio }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-black/20 backdrop-blur-sm">
      <div className="aspect-w-3 aspect-h-4">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <p className="text-violet-300 mb-2">{role}</p>
        <p className="text-gray-300 text-sm mb-4">{bio}</p>
        <div className="flex space-x-3">
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Linkedin size={20} />
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Github size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;