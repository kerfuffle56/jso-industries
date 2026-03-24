import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import CtaBanner from "@/components/CtaBanner";
import ServiceAreas from "@/components/ServiceAreas";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import VantaBackground from "@/components/VantaBackground";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  return (
    <main>
      <CursorGlow />
      <VantaBackground />
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Process />
      <WhyUs />
      <CtaBanner />
      <ServiceAreas />
      <Contact />
      <Footer />
    </main>
  );
}
