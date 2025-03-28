import React from 'react';

const GradientHeading = ({ label }) => {
  return (
    <h1 className="text-3xl sm:text-6xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-cyan-200 text-transparent bg-clip-text p-2 ">
      {label}
    </h1>
  );
};

export default GradientHeading;
