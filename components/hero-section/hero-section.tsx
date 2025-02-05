"use client";
import { motion } from "framer-motion";

import CountryFlags from "../country-flags";
import Logo from "../logo";

import BackgroundCarousel from "./background-carousel";
import HeroNavbar from "./hero-navbar";
import HeroSlogan from "./hero-slogan";
import ScrollDown from "./scrolldown";

const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.4,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const HeroSection = () => {
  return (
    <motion.section
      animate="visible"
      className="relative w-full h-screen overflow-hidden flex flex-col justify-between items-center px-2 pt-2"
      id="hero-section"
      initial="hidden"
      variants={containerVariants}
    >
      <motion.div
        className="z-20 flex flex-col items-center"
        variants={containerVariants}
      >
        <motion.div
          transition={{ duration: 0.3 }}
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          <Logo />
        </motion.div>
        <motion.div
          transition={{ duration: 0.3 }}
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          <HeroNavbar />
        </motion.div>
        <motion.div
          transition={{ duration: 0.3 }}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <CountryFlags />
        </motion.div>
      </motion.div>
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        className="z-20 flex-1 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        variants={itemVariants}
      >
        <HeroSlogan />
      </motion.div>
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        className="z-20 "
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
      >
        <ScrollDown />
      </motion.div>
      <BackgroundCarousel />
    </motion.section>
  );
};

export default HeroSection;
