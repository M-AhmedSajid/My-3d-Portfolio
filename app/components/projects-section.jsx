import { MagicCard } from "@/components/magicui/magic-card";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, Maximize } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
  {
    title: "Developer Junction Tech",
    des: "A professional IT services website offering web development, app development, and digital solutions. Built with a sleek and responsive design to showcase services, client testimonials, and a portfolio.",
    thumb: "/devjunction-thumb.webp",
    lg: "/devjunction.webp",
    md: "/devjunction-md.webp",
    sm: "/devjunction-sm.webp",
    link: "https://www.devjunctiontech.com/",
    github: "https://github.com/",
  },
  {
    title: "Nexora",
    des: "A sleek and responsive website offering comprehensive social media marketing and digital services. Features include service packages, client testimonials, and a user-friendly interface.",
    thumb: "/nexora-thumb.webp",
    lg: "/nexora.webp",
    md: "/nexora-md.webp",
    sm: "/nexora-sm.webp",
    link: "https://web-demo0.web.app/",
    github: "https://github.com/",
  },
  {
    title: "Spectra Tech Solutions",
    des: "A creative agency offering graphic design, video editing, web development, and content production — with a modern, responsive site showcasing services, portfolio, and testimonials.",
    thumb: "/spectra-thumb.webp",
    lg: "/spectra.webp",
    md: "/spectra-md.webp",
    sm: "/spectra-sm.webp",
    link: "https://www.spectratechsolutions.org/",
    github: "https://github.com/",
  },
  {
    title: "Smart Website",
    des: "A sleek, responsive Bootstrap template for an online data tracking tool — includes service details, team profiles, pricing, and a blog section.",
    thumb: "/smart-thumb.webp",
    lg: "/smart.webp",
    md: "/smart-md.webp",
    sm: "/smart-sm.webp",
    link: "https://fir-hosting-f8388.web.app/",
    github: "https://github.com/",
  },
];

// Define display options for different screen sizes
const screenSizes = [
  {
    value: "desktop",
    label: "Desktop",
    maxWidth: "max-w-2xl",
    imgKey: "lg",
    width: 664,
  },
  {
    value: "tablet",
    label: "Tablet",
    maxWidth: "max-w-md",
    imgKey: "md",
    width: 440,
  },
  {
    value: "mobile",
    label: "Mobile",
    maxWidth: "max-w-xs",
    imgKey: "sm",
    width: 312,
  },
];

export default function ProjectsSection() {
  return (
    <section id="work" className="!mt-0">
      <TextAnimate
        animation="slideLeft"
        by="character"
        as="h2"
        once
        className="text-center mb-5 text-4xl font-bold"
      >
        Projects.
      </TextAnimate>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 container">
        {projects.map((project) => (
          <Drawer key={project.title}>
            <DrawerTrigger>
              <MagicCard className="cursor-pointer flex-col items-center justify-center text-4xl aspect-square shadow-lg">
                <Image
                  src={project.thumb}
                  fill
                  className="object-cover object-top opacity-20 dark:opacity-10 rounded-xl"
                  alt={project.title}
                />
                <p className="z-40 relative h-full flex items-center justify-center">
                  {project.title}
                </p>
              </MagicCard>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>{project.title}</DrawerTitle>
                <DrawerDescription>{project.des}</DrawerDescription>
              </DrawerHeader>
              <Tabs
                defaultValue="desktop"
                className="flex flex-col items-center"
              >
                <div className="pb-3 mt-3 sticky top-0 z-10 w-full justify-center bg-background flex items-center">
                  <TabsList>
                    {screenSizes.map((screen) => (
                      <TabsTrigger key={screen.value} value={screen.value}>
                        {screen.label}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>

                {screenSizes.map((screen) => (
                  <TabsContent key={screen.value} value={screen.value}>
                    <div
                      className={`${screen.maxWidth} mx-auto w-full relative h-full md:h-[19.375rem] md:overflow-auto md:scroll-image`}
                    >
                      <Image
                        src={project[screen.imgKey]}
                        width={screen.width}
                        height={374}
                        alt={project.title}
                      />
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
              <DrawerFooter>
                <Link href={project.link} target="_blank">
                  <Button asChild>
                    <Maximize />
                    Live Preview
                  </Button>
                </Link>
                <Link href={project.github} target="_blank">
                  <Button variant="outline" asChild>
                    <Github />
                    Github
                  </Button>
                </Link>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        ))}
      </div>
    </section>
  );
}
