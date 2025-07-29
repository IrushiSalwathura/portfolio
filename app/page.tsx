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
      const img = new Image();
      img.src = "/background.png";
  
      img.onload = () => {
        setLoading(false);
      };
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
