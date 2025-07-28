"use client"
import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import ArtGallery from "@/components/ArtGallery";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

export default function Home() {
    const [loading, setLoading] = useState<boolean>(true);
  
    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 2000); // Simulated load
      return () => clearTimeout(timer);
    }, []);

  return (
    <>
    {loading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
}
