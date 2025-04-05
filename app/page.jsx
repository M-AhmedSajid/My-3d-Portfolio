import { WarpBackground } from "@/components/ui/warp-background";
import HeroSection from "./components/hero-section";
import { Bell, Calendar, FileText, Globe } from "lucide-react";
import AboutSection from "./components/about-section";
import ProjectsSection from "./components/projects-section";
import ExpSection from "./components/exp-section";

const features = [
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
      <div className="relative dark:bg-background z-10 px-3 py-10 space-y-10">
        <AboutSection />
        <ProjectsSection />
        <ExpSection />
      </div>
    </main>
  );
}
