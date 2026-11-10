import { Header } from "@/components/header";
import { About, Certifications, Contact, Experiences, Footer, Hero, Projects, Skills } from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="contenu">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Experiences />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
