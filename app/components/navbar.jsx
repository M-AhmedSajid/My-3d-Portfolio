"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { motion } from "motion/react";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const links = [
  { txt: "Home", href: "#home" },
  { txt: "About", href: "#about" },
  { txt: "Work", href: "#work" },
  { txt: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const mouseEnter = (e) => {
    let target = e.target.closest("li"); // Ensures we get the correct list item

    if (!target) return; // Prevent errors if no valid element is found

    const rect = target.getBoundingClientRect();
    setPosition({
      width: rect.width,
      opacity: 1,
      left: target.offsetLeft + 8,
    });
  };

  const mouseleave = () => {
    setPosition((pv) => ({
      ...pv,
      opacity: 0,
    }));
  };

  const { setTheme } = useTheme();
  return (
    <header className="fixed top-0 z-50 w-full px-8 py-4">
      <div className="relative mx-auto flex flex-row justify-center rounded-full border p-2 shadow-sm backdrop-blur transition-colors lg:w-fit bg-white dark:bg-black">
        <NavigationMenu>
          <NavigationMenuList>
            {links.map((link) => (
              <NavigationMenuItem
                key={link.txt}
                onMouseEnter={(e) => mouseEnter(e)}
                onMouseLeave={() => mouseleave()}
              >
                <Link href={link.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {link.txt}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem
              onMouseEnter={(e) => mouseEnter(e)}
              onMouseLeave={() => mouseleave()}
              onClick={() =>
                setTheme((prevTheme) =>
                  prevTheme === "light" ? "dark" : "light"
                )
              }
            >
              <div className={`px-2 aspect-square ${navigationMenuTriggerStyle()}`}>
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <motion.div
          animate={position}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="absolute inset-0 my-2 rounded-full bg-primary opacity-0"
        />
      </div>
    </header>
  );
}
