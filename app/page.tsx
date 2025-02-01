import AboutSection from "@/components/about-section/about-section";
import HeroSection from "@/components/hero-section/hero-section";
import { ParallaxImages } from "@/components/parallax-images";
import PresentationSection from "@/components/presentation-section/presentation-section";
import SeeOurMenu from "@/components/see-our-menu/see-our-menu";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <div className="py-16 md:py-24 bg-background">
        <PresentationSection />
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
      <div className="py-12 md:py-20 bg-secondary-50">
        <ParallaxImages baseVelocity={100} />
      </div>
      <SeeOurMenu />
      {/* <ProductsSection /> */}
    </>
  );
}
