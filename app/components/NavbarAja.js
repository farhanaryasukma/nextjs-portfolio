"use client";
import { useState } from "react";

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  console.log(navbarOpen);
  return (
    <>
    {/* <div className="absolute top-0 left-0 blur-lg z-10 h-48 w-full"></div> */}
    <nav
      className="z-20 sticky top-0 px-5 py-5 flex items-center justify-between flex-wrap text-neutral-800 shadow-lg bg-white/50 rounded-mds drop-shadow-md md:mx-5 backdrop-blur-lg"
      data-te-navbar-ref
    >
      <div className="flex flex-initial w-full lg:w-auto items-center justify-between">
        <h1 className="text-black-700 font-bold font-sans text-3xl">
          <a href="/">Farhan Arya Sukma</a>
        </h1>
        <div
          className="px-3 cursor-pointer lg:hidden"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={"w-6 h-6" + (navbarOpen ? "hidden" : "")}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
      <div className="justify-self-end w-full lg:w-auto">
        <ul className={`${navbarOpen ? 'flex flex-col absolute top-24 inset-x-0 z-10 bg-white backdrop-blur-md' : 'hidden'} justify-center items-center text-xl lg:flex-row lg:flex lg:justify-between lg:gap-x-6`}>
          <li className="flex items-center py-10 border-2 w-full justify-center m-auto lg:my-0 lg:w-auto">Home</li>
          <li className="flex items-center py-10 border-2 w-full justify-center m-auto lg:w-auto">Porfolio</li>
          <li className="flex items-center py-10 border-2 w-full justify-center m-auto lg:my-0 lgw-auto">Experience & Education</li>
          <li className="flex items-center py-10 border-2 w-full justify-center m-auto lg:w-auto">Youtube</li>
        </ul>
      </div>
    </nav>
    </>
  );
};
// (navbarOpen ? "flex-col justify-self-center " : "hidden ")
