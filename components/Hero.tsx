
import React from 'react';
import { personalInfo } from '../constants';
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from './Icons';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center text-center">
      <div className="max-w-4xl mx-auto">
        {/* Profile Picture */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img 
              src="/images/profile.jpg" 
              alt="S M Adnan Rizvi" 
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-cyan-400/30 shadow-2xl shadow-cyan-400/20"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-cyan-400/20 to-transparent"></div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-50 to-gray-400 pb-4">
          {personalInfo.name}
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-cyan-400 font-semibold">
          {personalInfo.title}
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-gray-300">
          {personalInfo.bio}
        </p>
        <div className="mt-8 flex justify-center items-center space-x-6">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <GithubIcon className="h-8 w-8" />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <LinkedinIcon className="h-8 w-8" />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-white transition-colors">
            <MailIcon className="h-8 w-8" />
          </a>
          <a href={`tel:${personalInfo.phone}`} className="text-gray-400 hover:text-white transition-colors">
            <PhoneIcon className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
