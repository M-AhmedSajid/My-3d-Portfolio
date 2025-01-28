import { WarpBackground } from "@/components/ui/warp-background";
import HeroSection from "./components/hero-section";

export default function Home() {
  return (
    <>
      <WarpBackground beamsPerSide={2}>
        <HeroSection />
      </WarpBackground>
      
      <section className="h-screen bg-white dark:bg-black"></section>
    </>
  );
}
