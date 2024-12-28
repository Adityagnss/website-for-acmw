import React from 'react';

interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
            activeCategory === category
              ? 'bg-violet-600 text-white'
              : 'bg-black/20 text-gray-300 hover:bg-violet-600/50'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;