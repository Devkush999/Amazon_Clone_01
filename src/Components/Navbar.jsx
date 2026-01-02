import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { AiFillCaretDown } from "react-icons/ai";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-gray-700 text-white relative z-50">
      <div className="flex items-center justify-between px-4 py-2 md:gap-4">
        <div
          className="flex items-center font-bold gap-1 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <FaBars className="text-xl" />
          <p className="text-base md:block">All</p>
        </div>
        <div
          className={`absolute top-full left-0 w-full  md:w-auto bg-gray-700 md:bg-transparent transition-all duration-300 ease-in-out overflow-hidden z-50 ${
            open ? "h-auto py-2" : "h-0"
          }`}
        >
          <ul className="flex flex-col md:flex-row gap-2 md:gap-4">
            <li className="flex items-center gap-1 cursor-pointer">
              Fresh <AiFillCaretDown className="text-sm text-gray-400" />
            </li>
            <li className="cursor-pointer">MX Player</li>
            <li className="cursor-pointer">Sell</li>
            <li className="cursor-pointer">Bestsellers</li>
            <li className="cursor-pointer">Today's Deals</li>
            <li className="cursor-pointer">Mobile</li>
            <li className="cursor-pointer">New Releases</li>
            <li className="cursor-pointer">Electronics</li>
            <li className="flex items-center gap-1 cursor-pointer">
              Prime <AiFillCaretDown className="text-sm text-gray-400" />
            </li>
            <li className="cursor-pointer">Customer Service</li>
            <li className="cursor-pointer">Fashion</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
