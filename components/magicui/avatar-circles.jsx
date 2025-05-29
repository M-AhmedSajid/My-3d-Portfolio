/* eslint-disable @next/next/no-img-element */
"use client";;
import { cn } from "@/lib/utils";

export const AvatarCircles = ({
  className,
  techs
}) => {
  return (
    (<div className={cn("z-10 flex -space-x-3 rtl:space-x-reverse relative", className)}>
      {techs.map((tech, index) => (
        <span
          key={index}
          className="h-10 w-10 p-1.5 rounded-full border-2 border-gray-200 dark:border-gray-800 overflow-hidden flex items-center justify-center bg-white dark:bg-background shadow-md"
        >
          {tech}
        </span>
      ))}
    </div>)
  );
};
