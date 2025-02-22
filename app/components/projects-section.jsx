"use client";
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "next-themes";
import React from "react";

export default function ProjectsSection() {
  const { theme } = useTheme();
  return (
    <section className="relative bg-white dark:bg-background z-10 px-3">
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 container">
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl aspect-square"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          Magic
        </MagicCard>
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl aspect-square"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          Card
        </MagicCard>
      </div>
    </section>
  );
}
