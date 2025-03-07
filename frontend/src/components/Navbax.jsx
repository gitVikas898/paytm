import React, { useState } from "react";
import LOGO_URL from "../assets/logo.jpg";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
const Navbax = () => {
  const [isMenu, setisMenu] = useState(false);
  return (
    <nav className="bg-white px-4 relative py-4 shadow-md rounded-sm  mx-auto flex justify-between">
      <div>
        <h1 className="text-2xl font-semibold">
          <span className="font-merriweather font-semibold text-blue-500">
            Mobile
          </span>
          Pe
        </h1>
      </div>
      {/* Desktop menu */}
      <div className="hidden md:block">
        <ul className="flex gap-4 font-merriweather font-semibold items-center justify-between">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/signin"}>Sign in</Link>
          </li>
        </ul>
      </div>
      {
        <button className="md:hidden" onClick={() => setisMenu(!isMenu)}>
          <IoMenu size={30} className="cursor-pointer" />
        </button>
      }
      <div
        className={`
        fixed md:hidden top-[3.90rem] right-0 w-32 p-2 bg-white min-h-[calc(100vh-4.5rem)]
        transform transition-transform duration-300 ease-in-out shadow-lg
        ${isMenu ? "translate-x-0" : "translate-x-full"}
      `}
      >
        <ul className="flex flex-col gap-4 font-merriweather font-semibold items-center justify-between">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/signin"}>Sign in</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbax;
