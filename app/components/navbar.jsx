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
import React, { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const links = [
  { txt: "Home", href: "#home" },
  { txt: "About", href: "#about" },
  { txt: "Work", href: "#work" },
  { txt: "Experience", href: "#exp" },
  { txt: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  // Track scroll position to update active link
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;

  //     // Find which section is currently in view
  //     for (const link of links) {
  //       const sectionId = link.href.substring(1);
  //       const section = document.getElementById(sectionId);

  //       if (section) {
  //         const sectionTop = section.offsetTop;
  //         const sectionBottom = sectionTop + section.offsetHeight;

  //         if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
  //           setActiveLink(link.href);
  //           break;
  //         }
  //       }
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   // Initial check
  //   handleScroll();

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // Scroll tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    links.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

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

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setMobile(false);
  };

  return (
    <>
      <header className="fixed top-0 z-50 w-full px-8 py-4">
        <div className="lg:relative mx-auto flex flex-row justify-between items-center lg:justify-center rounded-full border p-2 px-4 lg:px-2 shadow-sm backdrop-blur transition-colors lg:w-fit bg-white dark:bg-black">
          <NavigationMenu>
            <NavigationMenuList>
              {links.map((link) => (
                <NavigationMenuItem
                  key={link.txt}
                  onMouseEnter={(e) => mouseEnter(e)}
                  onMouseLeave={() => mouseleave()}
                >
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} ${
                        activeLink === link.href ? "bg-primary text-primary-foreground" : ""
                      }`}
                      onClick={() => handleLinkClick(link.href)}
                    >
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
                <div
                  className={`px-2 aspect-square ${navigationMenuTriggerStyle()}`}
                >
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
            className="absolute inset-0 my-2 rounded-full bg-primary opacity-0 hidden lg:block"
          />

          {/* Mobile Nav */}
          <p className="lg:hidden">M. Ahmed Sajid</p>
          <div className="flex items-center justify-end space-x-3 lg:hidden">
            <div
              className={`inline-flex justify-center items-center`}
              onClick={() =>
                setTheme((prevTheme) =>
                  prevTheme === "light" ? "dark" : "light"
                )
              }
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </div>
            {mobile ? (
              <X className="h-5 w-5" onClick={() => setMobile(false)} />
            ) : (
              <Menu className="h-5 w-5" onClick={() => setMobile(true)} />
            )}
          </div>
        </div>
      </header>
      <ul
        className={`fixed  w-full h-full justify-center items-center flex-col bg-background/80 backdrop-blur-lg flex lg:hidden space-y-5 duration-500 ${
          mobile ? "opacity-100 z-40" : "opacity-0 -z-50"
        }`}
      >
        {links.map((link) => (
          <li
            key={link.txt}
            className={cn(
              "text-3xl",
              activeLink === link.href && "text-primary font-bold"
            )}
          >
            <Link href={link.href} onClick={() => handleLinkClick(link.href)}>
              {link.txt}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
