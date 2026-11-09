import { Hero } from "@/components/home/hero";
import { JoinSection } from "@/components/home/join-section";
import { PartnersSection } from "@/components/home/partners-section";
import { ProgramSection } from "@/components/home/program-section";
import { SeasonSection } from "@/components/home/season-section";
import { StorySection } from "@/components/home/story-section";
import { TeamSection } from "@/components/home/team-section";
import { Ticker } from "@/components/home/ticker";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Ticker />
      <StorySection />
      <TeamSection />
      <ProgramSection />
      <SeasonSection />
      <PartnersSection />
      <JoinSection />
    </main>
  );
}
