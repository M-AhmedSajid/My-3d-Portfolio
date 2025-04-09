import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Title from "@/components/ui/title";

export default function HeroSection() {
  return (
    <section className="cursor-default" id="home">
      <div className="container px-5 md:px-0 flex flex-col justify-center items-center md:text-center h-screen">
        <Title Comp="h2" size={100} className="text-7xl md:text-8xl">
          Hi, I&apos;m M. Ahmed Sajid
        </Title>
        <Title Comp="h3" size={50} className="my-6 text-2xl md:text-4xl">
          Passionate Web Developer 🚀 &#38; Creative Designer 🎨
        </Title>
        <div className="flex justify-center items-center space-x-5">
          <Button>Hire Me</Button>
          <Link href="#" className="hover:text-primary duration-300">
            Learn More →
          </Link>
        </div>
      </div>
    </section>
  );
}
