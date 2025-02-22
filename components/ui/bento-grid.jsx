import { ArrowRightIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const BentoGrid = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "grid lg:grid-rows-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 container h-full",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({ children, className, title }) => (
  <div
    className={cn(
      "group relative flex flex-col justify-between overflow-hidden rounded-xl bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
  >
    <div className="z-10 transform-gpu relative flex flex-col h-full justify-center transition-all p-6 gap-1">
      {title && (
        <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300 group-hover:translate-x-3 pointer-events-none select-none">
          {title}
        </h3>
      )}
      {children}
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };
