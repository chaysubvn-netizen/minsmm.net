import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialLogoSlider from "@/components/SocialLogoSlider";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <SocialLogoSlider />
      <AboutUs />
      <Services />
      <HowItWorks />
      <Stats />
      <CTASection />
      <FAQ />
      <Footer />
    </main>
  );
}
