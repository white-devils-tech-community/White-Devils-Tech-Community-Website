import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CampusAmbassador from "@/components/CampusAmbassador";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <CampusAmbassador />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
