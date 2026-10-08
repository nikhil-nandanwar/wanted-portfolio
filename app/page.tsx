import SkillsSection from "@/components/skillsSection";
import BottomFooterSection from "@/components/bottomFooterSection";
import ProjectDisplaySection from "@/components/projectsDisplaySection";
import TopHeroSection from "@/components/topHeroSection";
import TopNavbarSection from "@/components/topNavbarSection";
import ExperienceSection from "@/components/experienceSection";
import AboutSection from "@/components/aboutSection";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.nixhil.dev/#person",
      name: "Nikhil Nandanwar",
      url: "https://www.nixhil.dev",
      jobTitle: "Full Stack Developer",
      image: "https://www.nixhil.dev/assets/preview.webp",
      sameAs: [
        "https://github.com/nikhil-nandanwar",
        "https://x.com/nixhil_",
        "https://www.linkedin.com/in/nandanwar-nikhil",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.nixhil.dev/#website",
      url: "https://www.nixhil.dev",
      name: "Nikhil Nandanwar",
      publisher: { "@id": "https://www.nixhil.dev/#person" },
      inLanguage: "en-IN",
    },
    {
      "@type": "WebPage",
      "@id": "https://www.nixhil.dev/#webpage",
      url: "https://www.nixhil.dev",
      name: "Nikhil Nandanwar | Full Stack Developer",
      description:
        "Nikhil Nandanwar is a full stack developer building thoughtful, accessible web applications.",
      isPartOf: { "@id": "https://www.nixhil.dev/#website" },
      about: { "@id": "https://www.nixhil.dev/#person" },
      inLanguage: "en-IN",
      mainEntity: { "@id": "https://www.nixhil.dev/#person" },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <TopNavbarSection />

      <main id="main-content">
        <TopHeroSection />

        <SkillsSection />

        <ProjectDisplaySection />

        <ExperienceSection />

        <AboutSection />
      </main>

      <BottomFooterSection />
    </>
  );
}
