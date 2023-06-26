"use client";
import Image from "next/image";
import { Navbar } from "./components/NavbarAja";
import { Hero } from "./components/Hero";
import { Example } from "./components/Navbar";
import SimpleFooter from "./components/Footer";
import Project from "./components/Project";

export default function Home() {
  return (
    <>
      {/* <Navbar />
       */}
      <Example />
      <div className="px-5 lg:px-20">
        <Hero />
        <Project />
        <SimpleFooter />
      </div>
    </>
  );
}
