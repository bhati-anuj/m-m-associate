"use client";

import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="relative w-full bg-transparent text-sm py-5 z-10">
      <nav className="max-w-[85rem] w-full mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-4xl font-bold text-textGolden">
          M&M Associate
        </Link>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!isMenuOpen)}
          className="sm:hidden text-white focus:outline-none"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
          )}
        </button>

        {/* Navigation Links */}
        <div className={`${isMenuOpen ? "block" : "hidden"} sm:flex sm:items-center sm:space-x-6 absolute sm:relative top-full left-0 w-full sm:w-auto bg-gray-900 sm:bg-transparent p-5 sm:p-0`}>  
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="text-lg text-white hover:text-gray-400 focus:outline-none"
            >
              Services
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
                <Link href="/mnm-construction" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">M&M ArcCon</Link>
                <Link href="/mnm-interior" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">M&M Interio</Link>
                <Link href="/mnm-lifts" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">M&M Lifts</Link>
              </div>
            )}
          </div>
          <Link className="text-lg text-white hover:text-gray-400" href="#">Blogs</Link>
          <Link className="text-lg text-white hover:text-gray-400" href="/about">About Us</Link>
          <Link className="text-lg text-white hover:text-gray-400" href="/contact">Contact Us</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
