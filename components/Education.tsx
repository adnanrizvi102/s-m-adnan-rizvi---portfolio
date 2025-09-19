
import React from 'react';
import { education } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-32">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Education</h2>
        <div className="space-y-8">
          {education.map((item, index) => (
            <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold text-white">{item.institution}</h3>
                  <p className="text-cyan-400">{item.degree}</p>
                  {item.details && <p className="text-gray-400 text-sm mt-1">{item.details}</p>}
                </div>
                <div className="text-right flex-shrink-0 ml-4">
                  <p className="text-sm text-gray-400">{item.period}</p>
                  <p className="text-xs text-gray-500">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
