import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import About from "@/components/About";
import Experience from "@/components/Experience";
import FullStackShowcase from "@/components/FullStackShowcase";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="portfolio-page">
      <Navbar />
      <Hero />
      <Projects />
      <Stack />
      <About />
      <Experience />
      <FullStackShowcase />
      <Contact />
      <Footer />
    </main>
  );
}
