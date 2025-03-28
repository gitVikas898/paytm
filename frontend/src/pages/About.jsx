import React from 'react';
import GradientHeading from '../components/GradientHeading';
import Subheading from '../components/Subheading';
import GradientSub from '../components/GradientSub';
import Card from '../components/Card';
import features from '../constants/features.json';
import backend from '../constants/backend.json';
import frontend from '../constants/frontend.json';
import technical from '../constants/technical.json';

const About = () => {
  return (
    <section className="min-h-screen px-4 py-12 flex flex-col items-center text-center">
      <div className="max-w-5xl w-full flex flex-col items-center gap-8">
        <GradientHeading label="About Our Project" />
        <Subheading text="Overview" />
        <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700 max-w-3xl">
          This project enables users to manage their accounts, view balances,
          and easily transfer funds to contacts. Our mission was to create a
          streamlined, user-friendly payment experience with a modern tech stack.
        </p>

        <GradientHeading label="What Our Platform Does" />
        <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700 max-w-3xl">
          Our payment system provides a comprehensive solution for digital
          transactions with these key features:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {features.map((feature, index) => (
            <Card key={index}>
              <div className="flex flex-col items-center text-center p-4">
                <h1 className="text-xl font-semibold">{feature.title}</h1>
                <p className="text-lg text-gray-700">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <GradientHeading label="Tech Stack" />
        <div className="w-full text-left max-w-3xl">
          <Subheading text="Backend Development" />
          <ul className="list-disc list-inside text-lg text-gray-800">
            {backend.map((tech, index) => (
              <li key={index}>{tech.title}: {tech.description}</li>
            ))}
          </ul>

          <Subheading text="Frontend Development" />
          <ul className="list-disc list-inside text-lg text-gray-800">
            {frontend.map((tech, index) => (
              <li key={index}>{tech.title}: {tech.description}</li>
            ))}
          </ul>

          <Subheading text="Technical Highlights" />
          <ul className="list-disc list-inside text-lg text-gray-800">
            {technical.map((tech, index) => (
              <li key={index}>{tech.title}: {tech.description}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
