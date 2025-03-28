import React from 'react';

const Input = ({ placeholder, label, onChange }) => {
  return (
    <div className='flex flex-col gap-2 w-full'>
      <label htmlFor={label} className='font-inter font-semibold text-gray-700'>
        {label}
      </label>
      <input
        onChange={onChange}
        name={label}
        placeholder={placeholder}
        className='font-inter w-full text-gray-900 py-2 px-4 rounded-lg outline-none border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition duration-200'
      />
    </div>
  );
};

export default Input;
