import React from "react";
import logo from "../Header-Img/amazon-logo.png";
import { IoLocationOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import flag from "../Header-Img/flag.jpg";
import { AiFillCaretDown } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";

function Header() {
  return (
    <div className="w-full bg-black flex flex-wrap items-center justify-evenly text-white">
      <div className="w-25 ml-2">
        <img src={logo} alt="" className="hover:border-1 p-3" />
      </div>
      <div className="text-white hover:border-1 p-1">
        <p className="text-xs ml-6">Delivering to New Delhi</p>
        <div className="flex items-center font-bold">
          <IoLocationOutline className="text-[1.5rem]" />
          <p>Update location</p>
        </div>
      </div>
      <div className="text-white flex flex-1 max-w-[50rem] rounded-sm p-2">
        <select className="bg-gray-400 text-gray-800 rounded-l-sm p-2">
          <option>All</option>
        </select>
        <input
          type="text"
          placeholder="   Search Amazon.in"
          className=" bg-white flex-1 text-gray-800 font-semibold"
        />
        <button className="text-black bg-amber-200 w-9 rounded-r-sm p-2">
          <IoSearchOutline className="mx-auto" />
        </button>
      </div>
      <div className="text-white flex items-center gap-1 mt-4 hover:border-1 p-1">
        <img src={flag} alt="" className="w-4 h-3 mt-0.5" />
        <p className="font-bold text-sm">EN</p>
        <AiFillCaretDown className="mt-1.5 text-gray-400" />
      </div>
      <div className="hover:border-1 p-1">
        <p className="text-xs font-medium">Hello,sign in</p>
        <div className="flex gap-1 font-bold text-sm">
          <p>Account & Lists</p>
          <AiFillCaretDown className="mt-1.5 text-gray-400" />
        </div>
      </div>
      <div className="hover:border-1 p-1">
        <p className="text-xs font-medium">Returns</p>
        <div className="font-bold text-sm">
          <p>& Orders</p>
        </div>
      </div>
      <div className="flex font-bold hover:border-1 p-1">
        <BsCart3 className="text-3xl" />
        <p className="text-sm mt-3">Cart</p>
      </div>
    </div>
  );
}

export default Header;
