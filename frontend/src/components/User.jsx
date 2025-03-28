import React from 'react';
import { LOGO_URL } from '../constants/utils';
import Button from './Button';

const User = ({ field1, isPopupOpen, setIsPopupOpen }) => {
  return (
    <div className='flex gap-4 justify-between items-center font-firesans '>
      <div className='flex gap-3 items-center'>
        <div className='w-12 h-12 rounded-full overflow-hidden flex-shrink-0'>
          <img src={LOGO_URL} alt='USER' className='w-full h-full object-cover' />
        </div>
        <h1 className='text-lg font-semibold text-gray-800'>{field1}</h1>
      </div>
      <button
        className='px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition duration-200'
        onClick={() => setIsPopupOpen(!isPopupOpen)}
      >
        Send
      </button>
    </div>
  );
};

export default User;
