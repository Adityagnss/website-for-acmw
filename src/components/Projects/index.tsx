import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectFilter from './ProjectFilter';

const Projects: React.FC = () => {
  const categories = ['All', 'Web Development', 'Machine Learning', 'Mobile Apps'];
  const [activeCategory, setActiveCategory] = useState('All');

  const projects = [
    {
      title: 'AI-Powered Study Assistant',
      description: 'An intelligent study companion using natural language processing to help students learn more effectively.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=500',
      technologies: ['Python', 'TensorFlow', 'NLP'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'Machine Learning'
    },
    {
      title: 'Women in Tech Platform',
      description: 'A community platform connecting women in technology for mentorship and collaboration.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=500',
      technologies: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
      category: 'Web Development'
    },
    {
      title: 'Health & Fitness App',
      description: 'Mobile application for tracking fitness goals and maintaining healthy habits.',
      image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&q=80&w=500',
      technologies: ['React Native', 'Firebase'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'Mobile Apps'
    }
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

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
              Our Projects
            </span>
          </h2>

          <div className="mb-12">
            <h3 className="text-2xl tracking-tight font-extrabold sm:text-3xl md:text-4xl text-center mb-8 text-white">
              Featured Work
            </h3>
            <ProjectFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;