
import React from 'react';
import { certifications } from '../constants';
import { CheckIcon } from './Icons';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Certifications</h2>
        <div className="bg-gray-800/50 p-6 md:p-8 rounded-lg border border-gray-700">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {certifications.map((cert, index) => (
              <li key={index} className="flex items-start">
                <CheckIcon className="w-5 h-5 mr-3 mt-0.5 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-300">{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
