'use client'
import { Navbar } from "@/components/navbar";
import { useEffect, useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);
  const [isNavOnHero, setIsNavOnHero] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);

      // Verifica se a Hero Section (h-screen) está visível
      const heroSection = document.getElementById("hero-section");
      if (heroSection) {
        const heroSectionRect = heroSection.getBoundingClientRect();

        // Verifica se a Hero Section está visível na tela
        setIsNavOnHero(
          heroSectionRect.top <= window.innerHeight && heroSectionRect.bottom >= 0
        );
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [prevScrollPos, visible]);

  return (
    <>
      <Navbar visible={visible} isNavOnHero={isNavOnHero} />
      {children}
    </>
  );
}
