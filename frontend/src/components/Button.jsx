import React from "react";

const Button = ({ title, type }) => {
  return (
    <>
      {type === "blue" && (
        <button className="px-6 py-3 w-full bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 active:scale-95 transition duration-300">
          {title}
        </button>
      )}

      {type === "glass" && (
        <button className="px-6 py-3 backdrop-blur-lg bg-white/10 border border-white/20 text-white rounded-lg shadow-md hover:bg-white/20 transition duration-300">
          {title}
        </button>
      )}
       {type === "gradient" && (
        <button className=" w-full py-2 text-white text-lg font-semibold rounded-lg bg-gradient-to-r from-blue-700 to-blue-500 hover:opacity-90 active:scale-95 transition duration-300">
          {title}
        </button>
      )}
    </>
  );
};

export default Button;
