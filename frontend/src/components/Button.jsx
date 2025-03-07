import React from "react";

const Button = ({ title, type }) => {
  return (
    <>
      {type === "pink" && (
        <button className=" w-28 py-2 text-white text-lg font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-cyan-200 hover:opacity-90 active:scale-95 transition duration-300">
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
