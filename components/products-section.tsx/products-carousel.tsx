"use client";
import Image from "next/image";
import React, { useState } from "react";
import WheatDivider from "../wheatDivider";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@nextui-org/button";

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
      src: "/images/product2.png",
      alt: "Espresso stop by cafe",
    },
    {
      title: "Iced Coffee",
      description:
        "Iced coffee is a type of coffee that is made by adding ice to the ground coffee. It is a popular drink in many countries, including the United States, where it is often served with milk and sugar.",
      src: "/images/product3.png",
      alt: "Iced coffee stop by cafe",
    },
  ];

  return (
    <div className="md:container mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center">
          {/* Image Section */}
          <motion.div
            key={selectedIndex}
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            exit={{ x: -50 }}
            transition={{ duration: 0.5 }}
            className="flex-1 flex items-center justify-center">
            <Image
            className="h-[400px]"
              src={data[selectedIndex].src}
              alt={data[selectedIndex].alt}
              width={400}
              height={400}
            />
          </motion.div>
          {/* Text Section */}
          <div className="flex-1 flex items-center justify-center">
            <div className="flex flex-col items-center justify-center max-w-lg text-center">
              <h3 className="text-secondary uppercase my-2 md:text-4xl text-2xl font-bold">{data[selectedIndex].title}</h3>
              <WheatDivider />
              <p className="text-default italic my-5">{data[selectedIndex].description}</p>
              <Button size="lg" color="secondary" className=" py-2 px-4 ">
                View Full Menu
              </Button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-4">
        {data.map((_, index) => (
          <Button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`w-4 h-4 rounded-full ${selectedIndex === index
              ? "bg-secondary-500"
              : "bg-default hover:bg-default-400"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsCarousel;
