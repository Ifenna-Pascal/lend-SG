"use client";
import Docs from "@/app/components/home/doc";
import Faq from "@/app/components/home/faq";
import Footer from "@/app/components/home/footer";
import HeroSection from "@/app/components/home/herosection";
import NavBar from "@/app/components/home/navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  });
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Docs />
      <Faq />
      <Footer />
    </div>
  );
}
