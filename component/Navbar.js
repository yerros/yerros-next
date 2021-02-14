import React, { useState } from "react";

function Navbar(props) {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="absolute top-0 left-0 flex flex-col items-center justify-between w-full px-6 py-6 lg:px-16 lg:flex-row">
      <div className="flex flex-row items-center justify-between w-full text-neon">
        <a
          className="text-4xl font-bold text-white uppercase transition duration-500 ease-in-out hover:text-red-600"
          href="#"
        >
          Y
        </a>
        <button
          className="focus:outline-none"
          onClick={() => setIsMobile(!isMobile)}
        >
          <svg
            className="block w-6 h-6 text-white text-neon lg:hidden"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <div
        className={`flex ${
          isMobile ? "block" : "hidden"
        } flex-col w-full lg:flex-row lg:block text-neon lg:w-auto`}
      >
        <a
          className="px-0 py-1 text-white transition duration-500 ease-in-out lg:px-6 hover:text-red-600"
          href="#"
        >
          Portfolio
        </a>
        <a
          className="px-0 py-1 text-white transition duration-500 ease-in-out lg:px-6 hover:text-red-600"
          href="#"
        >
          About
        </a>
        <a
          className="px-0 py-1 text-white transition duration-500 ease-in-out lg:px-6 hover:text-red-600"
          href="#"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
