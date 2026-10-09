import SkillsSection from "@/components/skillsSection";
import BottomFooterSection from "@/components/bottomFooterSection";
import ProjectDisplaySection from "@/components/projectsDisplaySection";
import TopHeroSection from "@/components/topHeroSection";
import TopNavbarSection from "@/components/topNavbarSection";
import ExperienceSection from "@/components/experienceSection";
import AboutSection from "@/components/aboutSection";
import FAQSection from "@/components/faqSection";
import { faqItems, projects, LAST_MODIFIED, SITE } from "@/data/site";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE}/#person`,
      name: "Nikhil Nandanwar",
      alternateName: ["Nikhil", "nixhil", "nikhil-nandanwar"],
      url: SITE,
      image: `${SITE}/assets/preview-social.webp`,
      jobTitle: "Full Stack Developer",
      description:
        "Full stack developer building accessible web and mobile applications with React, Next.js, Node.js, MongoDB, Angular and .NET.",
      email: "contact@nixhil.dev",
      address: { "@type": "PostalAddress", addressLocality: "Bangalore", addressRegion: "Karnataka", addressCountry: "IN" },
      nationality: { "@type": "Country", name: "India" },
      knowsAbout: [
        "Full stack web development", "React", "Next.js", "Node.js", "MongoDB", "Angular",
        "C#", ".NET", "React Native", "Docker", "TailwindCSS", "Web accessibility", "Microservices",
      ],
      hasOccupation: { "@type": "Occupation", name: "Full Stack Developer", skills: "React, Next.js, Node.js, .NET, MongoDB" },
      sameAs: [
        "https://github.com/nikhil-nandanwar",
        "https://x.com/nixhil_",
        "https://www.linkedin.com/in/nandanwar-nikhil",
        "https://blogs.nixhil.dev/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "Nikhil Nandanwar",
      alternateName: "nixhil.dev",
      publisher: { "@id": `${SITE}/#person` },
      inLanguage: "en-IN",
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE}/#webpage`,
      url: SITE,
      name: "Nikhil Nandanwar | Full Stack Developer",
      description:
        "Nikhil Nandanwar is a full stack developer building thoughtful, accessible web applications.",

      isPartOf: { "@id": `${SITE}/#website` },
      about: { "@id": `${SITE}/#person` },
      mainEntity: { "@id": `${SITE}/#person` },
      inLanguage: "en-IN",
      dateModified: LAST_MODIFIED,
      primaryImageOfPage: { "@type": "ImageObject", url: `${SITE}/assets/preview-social.webp` },
    },
    {
      "@type": "ItemList",
      "@id": `${SITE}/#projects`,
      name: "Featured projects by Nikhil Nandanwar",
      itemListElement: projects.map((project, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "SoftwareApplication",
          name: project.title,
          description: project.description,
          url: project.href,
          applicationCategory: "WebApplication",
          operatingSystem: "Any",
          image: `${SITE}${project.image}`,
          codeRepository: project.code,
          author: { "@id": `${SITE}/#person` },
        },
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <TopNavbarSection />

      <main id="main-content">
        <TopHeroSection />

        <SkillsSection />

        <ProjectDisplaySection />

        <ExperienceSection />

        <AboutSection />
        <FAQSection />
      </main>

      <BottomFooterSection />
    </>
  );
}
