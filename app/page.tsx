import HeroSlogan from "@/components/hero-section/hero-slogan";
import BackgroundCarousel from "@/components/hero-section/background-carousel";
import HeroNavbar from "@/components/hero-section/hero-navbar";
import CountryFlags from "@/components/country-flags";
import ScrollDown from "@/components/hero-section/scrolldown";
import Logo from "@/components/logo";

export default function Home() {

  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col justify-between items-center">
      <div className="z-20 flex flex-col items-center">
        <Logo />
        <HeroNavbar />
        <CountryFlags />
      </div>
      <HeroSlogan />
      <ScrollDown />
      <BackgroundCarousel />
    </section>
  );
}
