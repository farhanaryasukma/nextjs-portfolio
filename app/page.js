"use client";
import Image from "next/image";
import { Hero } from "./components/Hero";
import { Example } from "./components/Navbar";
import SimpleFooter from "./components/Footer";
import Project from "./components/Project";
import Skill from "./components/Skill";

export default function Home() {
  return (
    <>
      {/* <Navbar />
       */}
      <Example />
      <div className="px-5 lg:px-20 dark:text-white">
        <Hero />
        <Skill />
        <Project />
        <SimpleFooter />
      </div>
    </>
  );
}
