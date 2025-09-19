
import React from 'react';
import { skills } from '../constants';
import type { Skill } from '../constants';

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="bg-gray-800/50 p-4 rounded-lg flex flex-col items-center justify-center text-center border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:bg-gray-800 transform hover:-translate-y-1">
    <div className="w-12 h-12 mb-3 text-cyan-400">{skill.icon}</div>
    <span className="text-sm font-medium text-gray-200">{skill.name}</span>
  </div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Technical Skills</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 md:gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
