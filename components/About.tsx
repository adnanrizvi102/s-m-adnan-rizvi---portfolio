
import React from 'react';

const aboutContent = {
    title: "About Me",
    text: "I am a dedicated and versatile software developer with a strong background in both front-end and back-end technologies. My experience in building robust applications, from machine learning models for flood prediction to scalable e-commerce platforms, reflects my passion for using technology to create impactful solutions. I thrive in collaborative environments and am constantly seeking new challenges to expand my skill set in areas like distributed systems, artificial intelligence, and cloud architecture."
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{aboutContent.title}</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
            {aboutContent.text}
        </p>
      </div>
    </section>
  );
};

export default About;
