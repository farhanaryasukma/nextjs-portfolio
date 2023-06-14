"use client";
import { useState } from "react";

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  console.log(navbarOpen);
  return (
    <nav
      className="p-5 relative flex items-center justify-between flex-wrap text-neutral-200 shadow-lg md:p-20"
      data-te-navbar-ref
    >
      <div className="flex flex-initial w-full md:w-auto items-center justify-between">
        <h1 className="text-black-700 font-bold font-sans">
          <a href="/">Farhan Arya Sukma</a>
        </h1>
        <div
          className="px-3 cursor-pointer md:hidden"
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
      <div className="justify-self-end w-full md:w-auto">
        <ul className={`${navbarOpen ? 'flex flex-col' : 'hidden'} justify-center items-center md:flex-row md:flex md:justify-between md:gap-x-6`}>
          <li className="flex items-center h-20">Home</li>
          <li className="flex items-center h-20">Porfolio</li>
          <li className="flex items-center h-20">Experience & Education</li>
          <li className="flex items-center h-20">Youtube</li>
        </ul>
      </div>
    </nav>
  );
};
// (navbarOpen ? "flex-col justify-self-center " : "hidden ")
