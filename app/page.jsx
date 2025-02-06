import { WarpBackground } from "@/components/ui/warp-background";
import HeroSection from "./components/hero-section";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Bell, Calendar, FileInput, FileText, Globe } from "lucide-react";

const features = [
  {
    Icon: FileText,
    name: "👋 Hey, I'm M. Ahmed Sajid",
    description: "I'm a passionate Full-Stack Developer with a love for building scalable web applications. My expertise lies in Next.js, React, and Node.js, and I enjoy crafting smooth user experiences. When I'm not coding, you'll find me exploring new tech trends or writing dev content on LinkedIn.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "md:col-span-2 lg:row-span-3",
  },
  {
    Icon: FileInput,
    name: "Full text search",
    description: "Search through all your files in one place.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "col-span-1 lg:row-span-4",
  },
  {
    Icon: Globe,
    name: "Multilingual",
    description: "Supports 100+ languages and counting.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "col-span-1 lg:row-span-3",
  },
  {
    Icon: Calendar,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "col-span-1 lg:row-span-3",
  },
  {
    Icon: Bell,
    name: "Notifications",
    description:
      "Get notified when someone shares a file or mentions you in a comment.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "col-span-1 lg:row-span-2",
  },
];

export default function Home() {
  return (
    <main className="relative">
      <WarpBackground beamsPerSide={2}>
        <HeroSection />
      </WarpBackground>

      <section className="relative bg-white dark:bg-background z-10 px-3 py-10 lg:py-20">
        {/* <div className="flex justify-center items-center">
          <div className="w-full md:w-1/2 bg-red-500"></div>
          <div className="w-full md:w-1/2"></div>
        </div> */}
        <BentoGrid>
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </section>
    </main>
  );
}
