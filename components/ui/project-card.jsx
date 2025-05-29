"use client";
import React from "react";
import { AvatarCircles } from "@/components/magicui/avatar-circles";
import { Tilt } from "react-tilt";
import Image from "next/image";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./drawer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";
import Link from "next/link";
import { Button } from "./button";
import { Github, Maximize } from "lucide-react";

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

export default function ProjectCard({ thumb, title, des, techs, pics, link, github }) {
  return (
    <div className="w-full md:w-1/2 xl:w-1/3 md:p-3.5 p-2" data-aos="zoom-in">
      <Drawer>
        <DrawerTrigger>
          <Tilt
            options={{ max: 45, scale: 1, speed: 450 }}
            className="p-3 md:p-5 rounded-2xl bg-white dark:bg-black shadow-lg text-left"
          >
            <div className="relative w-full aspect-video shadow rounded-lg overflow-hidden">
              <Image
                src={thumb}
                alt={title}
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="mt-2">
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="my-2 text-gray-600 dark:text-gray-400 line-clamp-3">
                {des}
              </p>
              <div>
                <AvatarCircles techs={techs} />
              </div>
            </div>
          </Tilt>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{title}</DrawerTitle>
            <DrawerDescription>{des}</DrawerDescription>
          </DrawerHeader>
          <Tabs defaultValue="desktop" className="flex flex-col items-center">
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
                    src={pics[screen.imgKey]}
                    width={screen.width}
                    height={374}
                    alt={title}
                  />
                </div>
              </TabsContent>
            ))}
          </Tabs>
          <DrawerFooter>
            <Link href={link} target="_blank">
              <Button asChild>
                <Maximize />
                Live Preview
              </Button>
            </Link>
            <Link href={github} target="_blank">
              <Button variant="outline" asChild>
                <Github />
                Github
              </Button>
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
