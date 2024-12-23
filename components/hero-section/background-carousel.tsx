"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BackgroundCarousel = () => {
  const images = [
    {
      src: "/images/heroimage1.jpg",
      alt: "Padeiro",
    },
    {
      src: "/images/heroimage2.jpg",
      alt: "Stop by Café",
    },
    {
      src: "/images/heroimage3.jpg",
      alt: "Stop by Café",
    },
    {
      src: "/images/heroimage4.jpg",
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

  const handleAnimationStart = () => {
    setIsAnimating(true);
  };

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden select-none">
      <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-black z-10 bg-opacity-60"></div>
      <AnimatePresence mode="popLayout">
        {images.map((image, index) => (
          index === currentIndex && (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-full"
              onAnimationStart={handleAnimationStart}
              onAnimationComplete={handleAnimationEnd}
            >
              <motion.div
                key={`zoom-${index}`}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 6 }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          )
        ))}
      </AnimatePresence>
    </div>
  )
}

export default BackgroundCarousel