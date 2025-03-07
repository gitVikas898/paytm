import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='bg-white container w-full mx-auto font-merriweather'>
      <div className='p-3 shadow-md rounded-sm'>
        <div className='flex items-center justify-between'>
          <img 
            src="https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/logo_new.svg" 
            alt="Paytm Logo" 
            className="h-8"
          />
          
          {/* Hamburger menu button - only visible on mobile */}
          <button 
            className='md:hidden p-2 hover:bg-gray-100 rounded-md'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >Menu
          </button>

          {/* Desktop menu */}
          <ul className='hidden md:flex gap-4 items-center font-semibold'>
            <li className='hover:text-blue-600 cursor-pointer'>Home</li>
            <li className='hover:text-blue-600 cursor-pointer'>About</li>
            <li className='hover:text-blue-600 cursor-pointer'>Contact</li>
            <li className='flex gap-2 items-center bg-blue-900 p-2 rounded-md text-white cursor-pointer hover:bg-blue-800'>
              Sign in 
              <span>
                <img 
                  src="https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/logoutImg.svg" 
                  alt="Sign in" 
                />
              </span>
            </li>
          </ul>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden mt-4`}>
          <ul className='flex flex-col gap-4 font-semibold'>
            <li className='hover:text-blue-600 cursor-pointer'>Home</li>
            <li className='hover:text-blue-600 cursor-pointer'>About</li>
            <li className='hover:text-blue-600 cursor-pointer'>Contact</li>
            <li className='flex gap-2 items-center bg-blue-900 p-2 rounded-md text-white cursor-pointer hover:bg-blue-800 justify-center'>
              Sign in 
              <span>
                <img 
                  src="https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/logoutImg.svg" 
                  alt="Sign in" 
                />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;