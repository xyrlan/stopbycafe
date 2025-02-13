"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { ArrowUpRightFromSquareIcon } from "lucide-react";

import { Title } from "../title";

const ProductsCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const data = [
    {
      title: "Chamomile Tea",
      description:
        "Chamomile tea is a type of tea that is made from the dried flowers of the chamomile plant. It is known for its calming and relaxing properties, and is often used to promote better sleep and overall well-being.",
      src: "/images/product1.png",
      alt: "Tea stop by cafe",
    },
    {
      title: "Espresso",
      description:
        "Espresso is a type of coffee that is made by forcing hot water through finely ground coffee beans. It is a popular drink in many countries, including the United States, where it is often served with milk and sugar.",
      src: "/images/product3.png",
      alt: "Espresso stop by cafe",
    },
    {
      title: "Iced Coffee",
      description:
        "Iced coffee is a type of coffee that is made by adding ice to the ground coffee. It is a popular drink in many countries, including the United States, where it is often served with milk and sugar.",
      src: "/images/product2.png",
      alt: "Iced coffee stop by cafe",
    },
  ];

  const handleDragEnd = (event: any, info: { offset: { x: number } }) => {
    const threshold = 100;

    if (info.offset.x > threshold) {
      setSelectedIndex((prevIndex) =>
        prevIndex === 0 ? data.length - 1 : prevIndex - 1,
      );
    } else if (info.offset.x < -threshold) {
      setSelectedIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1,
      );
    }
  };

  return (
    <div className="container mx-auto overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedIndex}
          animate={{ opacity: 1, y: 0 }}
          className="flex md:flex-row flex-col justify-center items-center gap-20 max-md:gap-10"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          exit={{ opacity: 0, y: 20 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onDragEnd={handleDragEnd}
        >
          {/* Image Section */}
          <motion.div
            key={selectedIndex}
            animate={{ opacity: 1, scale: 1 }}
            className="relative flex items-center justify-center w-full md:w-1/2"
            exit={{ opacity: 0, scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-full aspect-square max-w-[400px]">
              <div className="absolute inset-0 bg-secondary/10 rounded-full blur-3xl transform -translate-y-4" />
              <Image
                fill
                alt={data[selectedIndex].alt}
                className="object-contain select-none relative z-10 p-8"
                draggable={false}
                src={data[selectedIndex].src}
              />
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="flex items-center justify-center w-full md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="flex flex-col items-center gap-6 justify-center max-w-lg text-center px-4">
              <Title className="text-primary text-5xl font-light">
                {data[selectedIndex].title}
              </Title>
              <p className="text-primary/80 text-lg font-light leading-relaxed">
                {data[selectedIndex].description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-3 mt-16">
        {data.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              selectedIndex === index
                ? "bg-primary w-8"
                : "bg-primary/20 hover:bg-primary/40"
            }`}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>

      {/* View Menu Button */}
      <div className="flex justify-center mt-16">
        <Link href="/menu">
          <Button
            className="group bg-transparent hover:bg-primary border border-primary/20 hover:border-primary text-primary px-8 py-6 transition-all duration-300"
            radius="sm"
            variant="bordered"
          >
            <span className="font-light">View Full Menu</span>
            <ArrowUpRightFromSquareIcon
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              size={16}
            />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductsCarousel;
