import SkillsSection from "@/components/skillsSection";
import BottomFooterSection from "@/components/bottomFooterSection";
import ProjectDisplaySection from "@/components/projectsDisplaySection";
import TopHeroSection from "@/components/topHeroSection";
import TopNavbarSection from "@/components/topNavbarSection";
import ExperienceSection from "@/components/experienceSection";
import AboutSection from "@/components/aboutSection";

export default function Home() {
  return (
    <>
      <TopNavbarSection />

      <main id="main-content">
        <TopHeroSection />

        {/* <SkillsSection /> */}

        <ProjectDisplaySection />

        <ExperienceSection />

        <AboutSection />
      </main>

      <BottomFooterSection />
    </>
  );
}
