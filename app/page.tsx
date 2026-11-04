import SkillsSection from "@/components/skillsSection";
import BottomFooterSection from "@/components/bottomFooterSection";
import ProjectDisplaySection from "@/components/projectsDisplaySection";
import TopHeroSection from "@/components/topHeroSection";
import TopNavbarSection from "@/components/topNavbarSection";
import ExperienceSection from "@/components/experienceSection";
import AboutSection from "@/components/aboutSection";
import FAQSection from "@/components/faqSection";
import {
  faqItems,
  projects,
  experience,
  DATE_CREATED,
  LAST_MODIFIED,
  SITE,
  SITE_DESCRIPTION,
  SITE_NAME,
} from "@/data/site";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    // ── Person ──────────────────────────────────────────────────────────────
    {
      "@type": "Person",
      "@id": `${SITE}/#person`,
      name: SITE_NAME,
      givenName: "Nikhil",
      familyName: "Nandanwar",
      alternateName: ["Nikhil", "nixhil", "nikhil-nandanwar"],
      url: SITE,
      image: {
        "@type": "ImageObject",
        url: `${SITE}/assets/preview-social.webp`,
        width: 1200,
        height: 630,
      },
      jobTitle: "Full Stack Developer",
      description: SITE_DESCRIPTION,
      email: "contact@nixhil.dev",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bangalore",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
      nationality: { "@type": "Country", name: "India" },
      knowsAbout: [
        "Full stack web development",
        "React",
        "Next.js",
        "Node.js",
        "MongoDB",
        "Angular",
        "C#",
        ".NET",
        "React Native",
        "Docker",
        "TailwindCSS",
        "TypeScript",
        "Web accessibility",
        "Microservices",
        "REST APIs",
        "Progressive Web Apps (PWA)",
        "DevOps",
        "CI/CD pipelines",
        "Agile software development",
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "Full Stack Developer",
        occupationLocation: {
          "@type": "City",
          name: "Bangalore",
        },
        skills:
          "React, Next.js, TypeScript, Node.js, .NET, C#, MongoDB, Angular, React Native, Docker, TailwindCSS, REST APIs, Microservices",
      },
      hasCredential: experience.map((e) => ({
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "WorkExperience",
        recognizedBy: { "@type": "Organization", name: e.company },
        name: e.role,
        startDate: e.start,
        endDate: e.end,
      })),
      sameAs: [
        "https://github.com/nikhil-nandanwar",
        "https://x.com/nixhil_",
        "https://www.linkedin.com/in/nandanwar-nikhil",
        "https://blogs.nixhil.dev/",
      ],
    },

    // ── WebSite ─────────────────────────────────────────────────────────────
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: SITE_NAME,
      alternateName: "nixhil.dev",
      description: SITE_DESCRIPTION,
      publisher: { "@id": `${SITE}/#person` },
      inLanguage: "en-IN",
      potentialAction: {
        "@type": "ReadAction",
        target: [SITE],
      },
    },

    // ── ProfilePage ─────────────────────────────────────────────────────────
    {
      "@type": "ProfilePage",
      "@id": `${SITE}/#webpage`,
      url: SITE,
      name: "Nikhil Nandanwar | Full Stack Developer in Bangalore",
      description: SITE_DESCRIPTION,
      isPartOf: { "@id": `${SITE}/#website` },
      about: { "@id": `${SITE}/#person` },
      mainEntity: { "@id": `${SITE}/#person` },
      inLanguage: "en-IN",
      dateCreated: DATE_CREATED,
      dateModified: LAST_MODIFIED,
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${SITE}/assets/preview-social.webp`,
        width: 1200,
        height: 630,
      },
      breadcrumb: { "@id": `${SITE}/#breadcrumb` },
    },

    // ── BreadcrumbList ──────────────────────────────────────────────────────
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE,
        },
      ],
    },

    // ── ItemList (Projects) ──────────────────────────────────────────────────
    {
      "@type": "ItemList",
      "@id": `${SITE}/#projects`,
      name: "Featured projects by Nikhil Nandanwar",
      description:
        "Open-source and production web applications engineered by Nikhil Nandanwar.",
      numberOfItems: projects.length,
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
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
        },
      })),
    },

    // ── QAPage for FAQ (FAQPage deprecated for SERP rich results May 2026) ───
    // Note: FAQPage rich results retired by Google; we use QAPage for genuine Q&A
    // and keep the structured content for AI citability and other search engines.
    {
      "@type": "QAPage",
      "@id": `${SITE}/#faq`,
      url: `${SITE}/#faq`,
      name: "Frequently Asked Questions – Nikhil Nandanwar",
      inLanguage: "en-IN",
      isPartOf: { "@id": `${SITE}/#webpage` },
      mainEntity: faqItems.map((f) => ({
        "@type": "Question",
        name: f.question,
        text: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
          upvoteCount: 1,
          author: { "@id": `${SITE}/#person` },
        },
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
