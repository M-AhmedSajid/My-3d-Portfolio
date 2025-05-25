import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Title from "@/components/ui/title";
import { BoxReveal } from "@/components/magicui/box-reveal";

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
          <BoxReveal>
            <Link href="#contact">
              <Button asChild>Hire Me</Button>
            </Link>
          </BoxReveal>
          <BoxReveal>
            <Link
              href="/Muhammad Ahmed Sajid - Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary duration-300"
            >
              Download Resume →
            </Link>
          </BoxReveal>
        </div>
      </div>
    </section>
  );
}
