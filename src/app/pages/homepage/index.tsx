"use client";

import Docs from "@/app/components/home/doc";
import Faq from "@/app/components/home/faq";
import Footer from "@/app/components/home/footer";
import HeroSection from "@/app/components/home/herosection";
import NavBar from "@/app/components/home/navbar";
import Image from "next/image";

function HomePage() {
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

export default HomePage;
