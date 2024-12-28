import React from 'react';
import TeamSection from './TeamSection';
import TeamMember from './TeamMember';

const Team = () => {
  const teamData = {
    leadership: [
      {
        name: "Sarah Johnson",
        role: "President",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=500",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        bio: "Leading ACMW's initiatives to empower women in technology."
      },
      {
        name: "Emily Chen",
        role: "Vice President",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=500",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        bio: "Coordinating events and workshops for our tech community."
      },
    ],
    technical: [
      {
        name: "Maria Garcia",
        role: "Technical Lead",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=500",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        bio: "Driving technical initiatives and mentoring team members."
      },
      {
        name: "Alex Kim",
        role: "Project Manager",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=500",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        bio: "Managing and coordinating technical projects."
      },
    ],
  };

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-12">
        <h1 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Meet Our Team
          </span>
        </h1>

        <TeamSection title="Leadership Team">
          {teamData.leadership.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </TeamSection>

        <TeamSection title="Technical Team">
          {teamData.technical.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </TeamSection>
      </div>
    </div>
  );
};

export default Team;