"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BackgroundCarousel = () => {
  const images = [
    {
      src: "/pics/1.jpg",
      alt: "Padeiro",
    },
    {
      src: "/pics/2.jpg",
      alt: "Stop by Café",
    },
    {
      src: "/pics/3.jpg",
      alt: "Stop by Café",
    },
    {
      src: "/pics/4.jpg",
      alt: "Stop by Café",
    },
    {
      src: "/pics/5.jpg",
      alt: "Stop by Café",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length, isAnimating]);

  const handleAnimationStart = () => setIsAnimating(true);
  const handleAnimationEnd = () => setIsAnimating(false);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden select-none">
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary bg-opacity-60 z-10" />

      {/* Image Carousel */}
      <AnimatePresence mode="popLayout">
        {images.map(
          (image, index) =>
            index === currentIndex && (
              <motion.div
                key={index}
                animate={{ opacity: 1 }}
                className="absolute inset-0"
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1 }}
                onAnimationComplete={handleAnimationEnd}
                onAnimationStart={handleAnimationStart}
              >
                <motion.img
                  key={`zoom-${index}`}
                  alt={image.alt}
                  animate={{ scale: 1 }}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ scale: 1.2 }}
                  src={image.src}
                  transition={{ duration: 6 }}
                />
              </motion.div>
            ),
        )}
      </AnimatePresence>
    </div>
  );
};

export default BackgroundCarousel;
