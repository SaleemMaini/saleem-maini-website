import { About } from "@/components/About";
import { CaseStudies } from "@/components/CaseStudies";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Metrics } from "@/components/Metrics";
import { Navbar } from "@/components/Navbar";
import { Skills } from "@/components/Skills";
import { hasCv } from "@/lib/cv";

export default function Home() {
  return (
    <>
      <Navbar hasCv={hasCv} />
      <main id="main">
        <Hero hasCv={hasCv} />
        <Metrics />
        <Experience />
        <CaseStudies />
        <Skills />
        <About />
        <Contact hasCv={hasCv} />
      </main>
      <Footer />
    </>
  );
}
