import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import FullStackShowcase from "@/components/FullStackShowcase";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <FullStackShowcase />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
