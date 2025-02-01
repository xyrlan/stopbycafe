import AboutSection from "@/components/about-section/about-section";
import HeroSection from "@/components/hero-section/hero-section";
import { ParallaxImages } from "@/components/parallax-images";
import PresentationSection from "@/components/presentation-section/presentation-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PresentationSection />
      <ParallaxImages baseVelocity={150} />
      {/* <ProductsSection /> */}
    </>
  );
}
