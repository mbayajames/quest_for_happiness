import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Statistics from "@/components/Statistics";
import Academics from "@/components/Academics";
import ChildrensHome from "@/components/ChildrensHome";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

function Index() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Statistics />
      <Academics />
      <ChildrensHome />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingContact />
    </div>
  );
}

export default Index;
