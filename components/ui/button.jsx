"use client";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { useCursor } from "@/context/cursor-context";
import { forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md relative text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring group-disabled:pointer-events-none group-disabled:cursor-not-allowed group-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:text-black dark:hover:text-primary-foreground shadow lg:hover:bg-transparent",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = forwardRef(
  ({ children, className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const { setButton } = useCursor();

    const onEnter = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } =
        e.currentTarget.getBoundingClientRect();
      setButton({
        clientX,
        clientY,
        left,
        top,
        width,
        height,
      });
    };

    return (
      <Comp
        onMouseEnter={(e) => onEnter(e)}
        onMouseLeave={() => setButton(null)}
        ref={ref}
        {...props}
        className="group disabled:cursor-not-allowed"
      >
        <div className={cn(buttonVariants({ variant, size, className }))}>
          {children}
          <span className="block absolute w-full h-full lg:hover:scale-[3]" />
        </div>
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
