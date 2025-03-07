import React from "react";
import User from "./User";

const Card = ({children}) => {
  return (
    <div className="bg-gradient-to-br border border-gray-100 from-gray-50 to-gray-100 p-6 rounded-2xl shadow-md">
        {children}
    </div>
  );
};

export default Card;
