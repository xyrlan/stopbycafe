"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

import PhotosNDescriptions from "../presentation-section/photos-n-descriptions";

import PhotosNDescriptionsMobile from "./photos-mobile";

const PresentationSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      animate={isInView ? "visible" : "hidden"}
      className="xl:max-w-7xl mx-auto overflow-hidden"
      id="presentation"
      initial="hidden"
      variants={containerVariants}
    >
      <motion.div
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <PhotosNDescriptions />
      </motion.div>
      <motion.div
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <PhotosNDescriptionsMobile />
      </motion.div>
    </motion.section>
  );
};

export default PresentationSection;
