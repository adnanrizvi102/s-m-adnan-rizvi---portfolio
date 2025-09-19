
import React from 'react';
import { personalInfo } from '../constants';
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-20">
      <div className="container mx-auto px-6 py-12 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Get In Touch</h3>
        <p className="text-gray-400 mb-6">
          Feel free to reach out for collaborations or just a friendly chat.
        </p>
        <div className="flex justify-center items-center space-x-6 mb-8">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <GithubIcon className="h-7 w-7" />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <LinkedinIcon className="h-7 w-7" />
          </a>
          <a href={`mailto:${personalInfo.email}`} aria-label="Email" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <MailIcon className="h-7 w-7" />
          </a>
          <a href={`tel:${personalInfo.phone}`} aria-label="Phone" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <PhoneIcon className="h-7 w-7" />
          </a>
        </div>
        <div className="text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p className="mt-1">Designed and built with React & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
