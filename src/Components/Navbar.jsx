import React from "react";
import { FaBars } from "react-icons/fa6";
import { AiFillCaretDown } from "react-icons/ai";

function Navbar() {
  return (
    <div className="w-full bg-gray-700 flex items-center p-1  text-white gap-2 flex-wrap ">
      <div className="flex items-center font-bold gap-1 ml-5 flex-wrap cursor-pointer hover:border-1 p-1">
        <FaBars className="text-xl" />
        <p className="text-base">All</p>
      </div>
      <div>
        <ul className="flex gap-2 flex-wrap items-center cursor-pointer">
          <li className="flex flex-wrap gap-0.5 cursor-pointer p-1 ">
            Fresh
            <AiFillCaretDown className="mt-2 text-sm text-gray-400" />
          </li>
          <li className="cursor-pointer p-1">MX player</li>
          <li className="cursor-pointer p-1">Sell</li>
          <li className="cursor-pointer p-1">Bestsellers</li>
          <li className="cursor-pointer p-1">Today'Deals</li>
          <li className="cursor-pointer p-1">Mobile</li>
          <li className="cursor-pointer p-1">New Releases</li>
          <li className="cursor-pointer p-1">Electronics</li>
          <li className="flex flex-wrap gap-0.5 cursor-pointer p-1">
            Prime
            <AiFillCaretDown className="mt-2 text-sm text-gray-400" />
          </li>
          <li className="cursor-pointer  p-1">
            Customer Service
          </li>
          <li className="cursor-pointer">Fashion</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
