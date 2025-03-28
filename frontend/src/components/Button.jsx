import React from 'react';

const Button = ({ title, type, onClick }) => {
  const baseStyles = "py-2 text-white text-lg font-semibold rounded-lg hover:opacity-90 active:scale-95 transition duration-300";
  
  const buttonStyles = {
    pink: "bg-gradient-to-r from-pink-500 to-red-400 w-28",
    gradient: "bg-gradient-to-r p-4 from-blue-700 to-blue-500 w-full",
    green: "bg-gradient-to-r from-green-700 to-green-500 w-full",
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${buttonStyles[type] || 'bg-gray-500 w-auto'}`}>
      {title}
    </button>
  );
};

export default Button;
