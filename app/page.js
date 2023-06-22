"use client";
import Image from "next/image";
import { Navbar } from "./components/NavbarAja";
import { Hero } from "./components/Hero";

export default function Home() {
  return (
    <div className="container mx-auto max-w-screen-2xl">
      <Navbar />
      <Hero />
    </div>
  );
}
