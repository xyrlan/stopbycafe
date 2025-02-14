import AboutSection from "@/components/about-section/about-section";
import HeroSection from "@/components/hero-section/hero-section";
import { ParallaxImages } from "@/components/parallax-images";
import BrazilianSweetsSection from "@/components/brazilian-sweets/brazilian-sweets-section";
import ProductsSection from "@/components/products-section.tsx/products-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      {/* <div className="max-md:py-16 bg-background">
        <PresentationSection />
      </div> */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
      <div className="pb-12 md:pb-20 bg-secondary-50">
        <ParallaxImages baseVelocity={100} />
      </div>
      <BrazilianSweetsSection />
      {/* <SeeOurMenu /> */}
      <ProductsSection />
    </>
  );
}
