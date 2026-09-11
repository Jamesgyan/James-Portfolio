import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { TechStack } from "@/components/portfolio/TechStack";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Services, WhyHireMe } from "@/components/portfolio/Services";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { WhatsAppFab } from "@/components/portfolio/WhatsAppFab";
import { CursorGlow } from "@/components/portfolio/fx/CursorGlow";
import { LenisProvider } from "@/components/portfolio/LenisProvider";
import { profile } from "@/lib/portfolio-data";
import ogCover from "@/assets/og-cover.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "James Gyan Prakash H — Software Developer & Data Scientist" },
      {
        name: "description",
        content:
          "Portfolio of James Gyan Prakash H — MSc Data Science graduate, full-stack React & Android developer, and data scientist based in Bengaluru.",
      },
      { property: "og:title", content: "James Gyan Prakash H — Software Developer & Data Scientist" },
      {
        property: "og:description",
        content:
          "MSc Data Science graduate crafting AI-powered applications, modern web platforms, Android apps and data-driven solutions.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: ogCover },
      { name: "twitter:image", content: ogCover },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: "Software Developer, Data Scientist",
          email: profile.email,
          telephone: profile.phone,
          address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressRegion: "Karnataka", addressCountry: "IN" },
          url: "/",
          sameAs: [profile.github, profile.linkedin],
          knowsAbout: [
            "React",
            "TypeScript",
            "Python",
            "Machine Learning",
            "Data Science",
            "Android Development",
            "Node.js",
            "Supabase",
          ],
        }),
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <>
      <LenisProvider />
      <CursorGlow />
      <Nav />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Education />
        <Services />
        <WhyHireMe />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
