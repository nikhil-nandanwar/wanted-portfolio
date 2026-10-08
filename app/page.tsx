import SkillsSection from "@/components/skillsSection";
import BottomFooterSection from "@/components/bottomFooterSection";
import ProjectDisplaySection from "@/components/projectsDisplaySection";
import TopHeroSection from "@/components/topHeroSection";
import TopNavbarSection from "@/components/topNavbarSection";
import ExperienceSection from "@/components/experienceSection";
import AboutSection from "@/components/aboutSection";

const SITE = "https://www.nixhil.dev";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE}/#person`,
      name: "Nikhil Nandanwar",
      alternateName: ["Nikhil", "nixhil", "nikhil-nandanwar"],
      url: SITE,
      image: `${SITE}/assets/preview.webp`,
      jobTitle: "Full Stack Developer",
      description:
        "Full stack developer building accessible web and mobile applications with React, Next.js, Node.js, MongoDB, Angular and .NET.",
      email: "mailto:nikhilnandanwar429@gmail.com",
      address: { "@type": "PostalAddress", addressLocality: "Banglore", addressRegion: "Karnataka", addressCountry: "IN" },
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
      isPartOf: { "@id": `${SITE}/#website` },
      about: { "@id": `${SITE}/#person` },
      mainEntity: { "@id": `${SITE}/#person` },
      inLanguage: "en-IN",
      dateModified: "2026-10-08",
      primaryImageOfPage: { "@type": "ImageObject", url: `${SITE}/assets/preview.webp` },
    },
    {
      "@type": "ItemList",
      "@id": `${SITE}/#projects`,
      name: "Featured projects by Nikhil Nandanwar",
      itemListElement: [
        {
          n: "ShareVault",
          d: "Secure file and text sharing with a 6-digit code.",
          u: "https://share-vault-mango.vercel.app/",
          c: "https://github.com/nikhil-nandanwar/ShareVault",
          img: "onlineClipboard"
        },
        {
          n: "GeminiChat",
          d: "AI chat app powered by Google Gemini with sharing and persistence.",
          u: "https://ai-by-gemini.netlify.app/",
          c: "https://github.com/nikhil-nandanwar/GeminiApp",
          img: "geminiChat"
        },
        {
          n: "Mines Game",
          d: "Browser-based Minesweeper with adjustable difficulty.",
          u: "https://mines-game.netlify.app/",
          c: "https://github.com/nikhil-nandanwar/Mines",
          img: "minesGame"
        },
      ].map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "SoftwareApplication",
          name: p.n,
          description: p.d,
          url: p.u,
          applicationCategory: "WebApplication",
          operatingSystem: "Any",
          image: `${SITE}/assets/${p.img}.webp`,
          codeRepository: p.c,
          author: { "@id": `${SITE}/#person` },
        },
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          q: "Who is Nikhil Nandanwar?",
          a: "Nikhil Nandanwar is a full stack developer from India who builds accessible web and mobile applications with React, Next.js, Node.js, MongoDB, Angular and .NET."
        },
        {
          q: "What technologies does Nikhil Nandanwar work with?",
          a: "React, Next.js, Node.js, MongoDB, Angular, C#, .NET, React Native, SQL, Docker, Git and TailwindCSS."
        },
        {
          q: "What is Nikhil Nandanwar's experience?",
          a: "Internships as a Full Stack Developer at Nabham Tech, a Full Stack Engineer at Cognizant, and a Frontend Developer at Living Pixel Labs."
        },
        {
          q: "How can I hire or contact Nikhil Nandanwar?",
          a: "Email nikhilnandanwar429@gmail.com or reach out on LinkedIn, GitHub or X."
        },
      ].map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
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
