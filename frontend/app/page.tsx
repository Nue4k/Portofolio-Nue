import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white dark:bg-slate-900 min-h-screen">
      <Hero />
      <About />
      <Portfolio />
      <Footer />
    </main>
  );
}