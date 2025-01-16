import AboutSection from "@/components/about-section/about-section";
import HeroSection from "@/components/hero-section/hero-section";
import { ParallaxImages } from "@/components/parallax-images";
import PresentationSection from "@/components/presentation-section/presentation-section";
import ProductsSection from "@/components/products-section.tsx/products-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PresentationSection />
      <AboutSection />
      <ParallaxImages baseVelocity={150} />
      <ProductsSection />
    </>
  );
}
