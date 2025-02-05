import AboutSection from "@/components/about-section/about-section";
import HeroSection from "@/components/hero-section/hero-section";
import { ParallaxImages } from "@/components/parallax-images";
import DividerSection from "@/components/presentation-section/divider-section";
import PhotosNDescriptionsMobile from "@/components/presentation-section/photos-mobile";
import PhotosNDescriptionsMobile2 from "@/components/presentation-section/photos-mobile2";
import PhotosNDescriptions from "@/components/presentation-section/photos-n-descriptions";
import PhotosNDescriptions2 from "@/components/presentation-section/photos-n-descriptions2";
import ProductsSection from "@/components/products-section.tsx/products-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      {/* <div className="max-md:py-16 bg-background">
        <PresentationSection />
      </div> */}
      <DividerSection>
        <PhotosNDescriptions />
        <PhotosNDescriptionsMobile />
      </DividerSection>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
      <div className="pb-12 md:pb-20 bg-secondary-50">
        <ParallaxImages baseVelocity={100} />
      </div>
      <DividerSection>
        <PhotosNDescriptions2 />
        <PhotosNDescriptionsMobile2 />
      </DividerSection>
      {/* <SeeOurMenu /> */}
      <ProductsSection />
    </>
  );
}
