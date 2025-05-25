import { WarpBackground } from "@/components/ui/warp-background";
import HeroSection from "./components/hero-section";
import { Bell, Calendar, FileText, Globe } from "lucide-react";
import AboutSection from "./components/about-section";
import ProjectsSection from "./components/projects-section";
import ExpSection from "./components/exp-section";
import ContactSection from "./components/contact-section";

export default function Home() {
  return (
    <main className="relative">
      <WarpBackground beamsPerSide={2} beamSize={10}>
        <HeroSection />
      </WarpBackground>
      <div className="relative dark:bg-background z-10 px-3 pt-10 space-y-10">
        <AboutSection />
        <ProjectsSection />
        <ExpSection />
        <ContactSection />
      </div>
    </main>
  );
}
