// src/components/Navbar.jsx
import React, { useState } from "react";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import Guidance from "./Guidance";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-4 left-0 z-50 flex justify-center">
      <div className="w-[90%] max-w-7xl bg-white shadow-md rounded-xl px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-blue-900">AQUAMART</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Shop</li>
          <li className="hover:text-blue-600 cursor-pointer">Supplies</li>
          <li className="hover:text-blue-600 cursor-pointer">Accessories</li>
          <li className="hover:text-blue-600 cursor-pointer" href="#Guidance">Guide</li>
          <li className="hover:text-blue-600 cursor-pointer">About us</li>
        </ul>

        {/* Icons + Buttons */}
        <div className="flex items-center gap-4">
          <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-600" />
          <ShoppingCart className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-600" />

          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-2">
            <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg hover:bg-blue-600 transition font-semibold">
              Login
            </button>
            <button className="px-4 py-2 border border-gray-400 rounded-lg hover:bg-gray-100 transition font-semibold">
              Signup
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-[72px] w-[90%] max-w-7xl bg-white shadow-lg rounded-xl px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <li className="hover:text-blue-600 cursor-pointer">Shop</li>
            <li className="hover:text-blue-600 cursor-pointer">Supplies</li>
            <li className="hover:text-blue-600 cursor-pointer">Accessories</li>
            <li className="hover:text-blue-600 cursor-pointer">Guide</li>
            <li className="hover:text-blue-600 cursor-pointer">About us</li>
          </ul>
          <div className="mt-4 flex flex-col gap-2">
            <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 shadow-lg font-semibold">
              Login
            </button>
            <button className="w-full px-4 py-2 border border-gray-400 rounded-lg hover:bg-gray-100 transition font-semibold">
              Signup
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
