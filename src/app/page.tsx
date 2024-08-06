import Image from "next/image";
import NavBar from "./components/home/navbar";
import HeroSection from "./components/home/herosection";
import Faq from "./components/home/faq";
import Footer from "./components/home/footer";
import Docs from "./components/home/doc";

function Home() {
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

export default Home;
