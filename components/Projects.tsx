
import React from 'react';
import { projects } from '../constants';
import type { Project } from '../constants';
import { CheckIcon } from './Icons';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 flex flex-col h-full transform transition-all duration-300 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2">
    <div className="flex-grow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <span className="text-xs font-mono text-gray-400 whitespace-nowrap bg-gray-700/50 px-2 py-1 rounded">{project.period}</span>
      </div>
      <p className="text-gray-400 text-sm mb-4">{project.description}</p>
      <ul className="space-y-2 mb-4">
        {project.achievements.map((achievement, index) => (
          <li key={index} className="flex items-start text-sm text-gray-300">
            <CheckIcon className="w-4 h-4 mr-2 mt-0.5 text-cyan-400 flex-shrink-0" />
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-700/50">
      {project.tech.map((tech) => (
        <span key={tech} className="bg-cyan-900/50 text-cyan-300 text-xs font-medium px-2.5 py-1 rounded-full">
          {tech}
        </span>
      ))}
    </div>
  </div>
);


const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Experience / Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
