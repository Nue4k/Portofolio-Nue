import Hero from "@/components/Hero";
import About from "@/components/About";
import Project from "@/components/Project";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Project />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  );
}