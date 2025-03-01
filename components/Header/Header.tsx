"use client";

import React, { useState } from "react";
import Link from "next/link";
// import Image from 'next/image';
// import logo from '@/utils/logoFull.png'
const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  return (
    <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-transparent text-sm py-5 z-10 ">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center justify-between">
          <Link
            className="flex-none  text-xl font-semibold dark:text-white focus:outline-none focus:opacity-80"
            href="/"
            aria-label="Brand"
          >
            {/* <Image src={logo} width={100} height={100} alt='m & m Logo'/> */}
            <h1 className="text-4xl font-bold text-textGolden">
              M&M Associate
            </h1>
          </Link>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
              id="hs-navbar-example-collapse"
              aria-expanded="false"
              aria-controls="hs-navbar-example"
              aria-label="Toggle navigation"
              data-hs-collapse="#hs-navbar-example"
            >
              <svg
                className="hs-collapse-open:hidden shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </div>
        <div
          id="hs-navbar-example"
          className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block"
          aria-labelledby="hs-navbar-example-collapse"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            <div className="relative">
              <button
                type="button"
                className="font-medium text-lg text-white hover:text-gray-400 focus:outline-none focus:text-gray-400"
                onClick={() => setDropdownOpen(!isDropdownOpen)}
              >
                Services
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2  w-48 bg-white rounded-lg shadow-lg">
                  <Link
                    href="/mnm-construction"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    M&M ArcCon
                  </Link>
                  <Link
                    href="/mnm-interior"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    M&M Interio
                  </Link>
                  <Link
                    href="/mnm-lifts"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    M&M Lifts
                  </Link>
                </div>
              )}
            </div>
            <Link
              className="font-medium text-lg text-white hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
              href="#"
            >
              Blogs
            </Link>
            <Link
              className="font-medium  text-lg text-white hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
              href="/about"
            >
              About Us
            </Link>
            <Link
              className="font-medium text-lg text-white hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
              href="/contact"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;