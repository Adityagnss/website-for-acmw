import React from 'react';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description }) => {
  return (
    <div className="relative pl-8 pb-12 border-l-2 border-violet-400 last:border-0">
      <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[8px] rounded-full bg-violet-400 ring-4 ring-violet-400/30" />
      <div className="text-lg font-bold mb-2 animate-text bg-gradient-to-r from-violet-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
        {year}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-200">{description}</p>
    </div>
  );
};

const Timeline = () => {
  const milestones = [
    {
      year: '2020',
      month: 'september',
      title: 'ACM-W SRM STUDENT CHAPTER FOUNDATION',
      description: 'Established to promote women\'s participation in computer science.'
    },
    {
      year: '2020',
      month: 'september',
      title: 'CODING LEAGUE',
      description: 'Coding competition on hackerrank.'
    },
    {
      year: '2023',
      month: 'april',
      title: 'RESEARCH SLAM',
      description: 'A research slam is a condensed and creative presentation format that allows researchers to showcase their work in a few minutes using engaging language and visuals.'
    },
    {
      year: '2024',
      month: 'August',
      title: 'CODEQUEST 2024',
      description: 'Event on their coding skills, solve challenging problems, and connect with fellow tech enthusiasts all over the campus.'
    },
    {
      year: '2024',
      month: 'October',
      title: 'MAKEATHON 2024',
      description: 'ACM-W SRM Makeathon: A Journey of Innovation and Excellence! '
    }
  ];

  return (
    <div className="bg-black/20 backdrop-blur-sm p-8 rounded-xl">
      <div className="max-w-3xl mx-auto">
        {milestones.map((milestone, index) => (
          <TimelineItem
            key={index}
            year={milestone.year}
            title={milestone.title}
            description={milestone.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;