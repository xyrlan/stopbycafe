"use client";
import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, HTMLMotionProps } from "framer-motion";
import { useInView } from "framer-motion";

import { Title } from "../title";

import AboutText from "./about-text";
import AboutTitle from "./about-title";

interface AboutPic {
  alt: string;
  src: string;
}

const AboutSection: React.FC = () => {
  const ref = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const aboutPics: AboutPic[] = [
    {
      alt: "Stop by cafe",
      src: "/about/1.jpg",
    },
    {
      alt: "Stop by cafe",
      src: "/about/2.jpg",
    },
    {
      alt: "Stop by cafe",
      src: "/about/3.jpg",
    },
    {
      alt: "Stop by cafe",
      src: "/about/4.jpg",
    },
  ];

  return (
    <motion.section
      ref={ref}
      animate={{ opacity: 1 }}
      className="overflow-hidden py-24 md:py-32 px-6 relative min-h-screen"
      id="about"
      initial={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Parallax Background Image */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src="/central-park.jpg"
          alt="Central Park View"
          fill
          className="object-cover brightness-[0.85]"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-secondary-50/95" />
      </motion.div>

      <div className="sm:max-w-7xl mx-auto relative z-10">
        <motion.div
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-row max-md:flex-col md:gap-12 md:items-center"
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <AboutTitle />
          <motion.div
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="px-6 py-4 max-w-md text-primary/90 font-light italic text-lg bg-white/10 backdrop-blur-sm rounded-sm shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="tracking-wider">
              A cherished destination in the heart of Manhattan, where artisanal
              traditions meet contemporary elegance.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="my-20 md:my-28"
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-5xl md:text-7xl font-light text-primary/90 tracking-wide backdrop-blur-sm bg-white/5 p-6 rounded-sm inline-block">
            Where Every Bite Tells
            <br />
            <Title>
              <motion.span
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                className="text-default"
                initial={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                a Story of Elegance
              </motion.span>
            </Title>
          </h2>
        </motion.div>

        <div className="flex md:flex-row flex-col justify-between gap-12 md:gap-24">
          <motion.div
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="grid grid-cols-2 gap-6 overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {aboutPics.map((pic, index) => (
              <motion.div
                key={index}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                className="flex flex-col justify-center items-center overflow-hidden transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
              >
                <Image
                  alt={pic.alt}
                  className="transform transition-all duration-1000 hover:scale-105 hover:brightness-110 shadow-lg ring-1 ring-primary/10 hover:ring-primary/30"
                  height={300}
                  src={pic.src}
                  width={400}
                />
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <AboutText />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
