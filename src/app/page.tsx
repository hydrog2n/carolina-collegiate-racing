import { Hero } from "@/components/home/hero";
import { JoinSection } from "@/components/home/join-section";
import { PartnersSection } from "@/components/home/partners-section";
import { ProgramSection } from "@/components/home/program-section";
import { StorySection } from "@/components/home/story-section";
import { TeamSection } from "@/components/home/team-section";
import { SectionScrollspy } from "@/components/layout/section-scrollspy";
import { homeSectionLinks } from "@/content/site";

export default function Home() {
  return (
    <main id="main-content">
      <SectionScrollspy items={homeSectionLinks} />
      <Hero />
      <StorySection />
      <ProgramSection />
      <TeamSection />
      <PartnersSection />
      <JoinSection />
    </main>
  );
}
