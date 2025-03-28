import React from "react";

const Card = ({ children }) => {
  return (
    <div className="bg-white border border-gray-200 shadow-lg rounded-2xl p-6 m-4 md:m-6 lg:m-8 transition-all duration-300 hover:shadow-xl flex flex-col">
      {children}
    </div>
  );
};

export default Card;
