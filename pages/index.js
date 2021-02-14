import React, { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <>
      <Head>
        <title>Personal Website | yerros.me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center justify-center min-h-screen overflow-hidden bg-black">
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
        <div
          id="box"
          className="relative flex items-center justify-center w-xl"
        >
          <div
            id="box-neon"
            className="absolute top-0 left-0 z-10 w-2 h-full bg-white rounded-full"
          ></div>
          <div
            id="running"
            className="absolute top-0 left-0 w-full h-full bg-black"
          ></div>
          <h2
            id="text-neon"
            className="text-5xl font-bold tracking-widest text-white lg:text-8xl"
          >
            yerros.me
          </h2>
        </div>
      </div>
    </>
  );
}
