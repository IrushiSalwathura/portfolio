import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import ArtGallery from "@/components/ArtGallery";

export default function Home() {
  return (
    <>
    {/* <main className="relative bg-yellow-200 flex flex-col overflow-hidden"> */}
      {/* <div className="mt-24 w-full mx-auto"> */}
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <ArtGallery />
        <Footer />
      {/* </div> */}
    {/* </main> */}
    </>
  );
}
