import AboutSection from "@/components/aboutSection";
import BottomFooterSection from "@/components/bottomFooterSection";
import ExperienceSection from "@/components/experienceSection";
import ProjectDisplaySection from "@/components/projectsDisplaySection";
import TopHeroSection from "@/components/topHeroSection";
import TopNavbarSection from "@/components/topNavbarSection";

export default function Home() {
  return (
    <>
      <TopNavbarSection />

      <main id="main-content">
        <TopHeroSection />

        <ProjectDisplaySection />

        <ExperienceSection />

        <AboutSection />
      </main>

      <BottomFooterSection />
    </>
  );
}
