import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import ArtGallery from "@/components/ArtGallery";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="bg-[url(/background.png)]">
        <Hero />
        <About />
        <Projects />
        <ArtGallery />
      </section>
      <Footer />
    </>
  );
}
