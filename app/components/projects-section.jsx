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
    lg: "/devjunction.png",
    md: "/devjunction-md.png",
    sm: "/devjunction-sm.png",
    link: "https://www.devjunctiontech.com/",
    github: "https://github.com/",
  },
  {
    title: "Nexora",
    des: "A sleek and responsive website offering comprehensive social media marketing and digital services. Features include service packages, client testimonials, and a user-friendly interface.",
    lg: "/nexora.png",
    md: "/nexora-md.png",
    sm: "/nexora-sm.png",
    link: "https://web-demo0.web.app/",
    github: "https://github.com/",
  },
  {
    title: "Spectra Tech Solutions",
    des: "A dynamic company specializing in graphic design, video editing, web development, and content production. The website features a modern, responsive design that highlights their diverse services, showcases a portfolio of past projects, and includes client testimonials.",
    lg: "/spectra.png",
    md: "/spectra-md.png",
    sm: "/spectra-sm.png",
    link: "https://www.spectratechsolutions.org/",
    github: "https://github.com/",
  },
  {
    title: "Smart Website",
    des: "A modern, responsive website template designed for an online tool that offers data tracking and analysis services. Features include service descriptions, team member profiles, pricing plans, and a blog section, all built using Bootstrap for a sleek and user-friendly interface.",
    lg: "/smart.png",
    md: "/smart-md.png",
    sm: "/smart-sm.png",
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
    <section>
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
              <MagicCard className="cursor-pointer flex-col items-center justify-center text-4xl aspect-square">
                <Image
                  src={project.lg}
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
                <TabsList className="mb-3">
                  {screenSizes.map((screen) => (
                    <TabsTrigger key={screen.value} value={screen.value}>
                      {screen.label}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {screenSizes.map((screen) => (
                  <TabsContent key={screen.value} value={screen.value}>
                    <div
                      className={`${screen.maxWidth} mx-auto w-full relative h-[19.375rem] overflow-auto scroll-image`}
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
