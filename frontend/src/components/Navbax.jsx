import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import UserData from "./UserData";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const user = useSelector((state) => state.user.user);

  return (
    <nav className="bg-white px-6 py-4 shadow-md rounded-md mx-auto flex justify-between items-center relative w-full max-w-6xl">
      <Link to="/" className="text-2xl font-semibold">
        <span className="font-merriweather text-blue-500">Mobile</span>Pe
      </Link>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 font-merriweather font-bold">
        <Link to="/" className="hover:text-orange-400 transition-colors">Home</Link>
        <Link to="/about" className="hover:text-orange-400 transition-colors">About</Link>
        {!user ? (
          <Link to="/signin" className="hover:text-orange-400 transition-colors">Sign in</Link>
        ) : (
          <UserData name={user.name} email={user.email} />
        )}
      </div>
      
      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsMenu(!isMenu)}>
        <IoMenu size={30} className="cursor-pointer" />
      </button>
      
      {/* Mobile Menu */}
      <div
        className={`fixed md:hidden top-[4rem] right-0 w-40 p-4 bg-white shadow-lg rounded-l-lg transition-transform duration-300 ease-in-out ${isMenu ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="flex flex-col items-center  justify-end space-y-4 font-merriweather font-semibold text-center">
          <li>
            <Link to="/" onClick={() => setIsMenu(false)} className="block hover:text-orange-400">Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsMenu(false)} className="block hover:text-orange-400">About</Link>
          </li>
          <li>
            {!user ? (
              <Link to="/signin" onClick={() => setIsMenu(false)} className="block hover:text-orange-400">Sign in</Link>
            ) : (
              <UserData name={user.name} email={user.email} />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
