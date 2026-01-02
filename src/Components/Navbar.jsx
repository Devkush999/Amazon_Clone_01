import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { AiFillCaretDown } from "react-icons/ai";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-gray-700 text-white  left-0 z-50 shadow-md">
      <div className="flex items-center justify-between px-4 py-3 md:justify-start md:gap-6">
        <div
          className="flex items-center gap-2 cursor-pointer md:hidden"
          onClick={() => setOpen(!open)}
        >
          <FaBars className="text-xl" />
          <span className="text-base font-bold">All</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-row gap-6">
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

      {/* Mobile Popup Menu */}
      <div
        className={`fixed top-36 left-40 -translate-x-1/2 w-11/12 max-w-xs bg-gray-800 text-white p-4 z-50 md:hidden shadow-lg transition-all duration-300 ease-in-out ${
          open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-4 max-h-72 overflow-y-auto">
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
  );
}

export default Navbar;
