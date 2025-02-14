"use client";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import { Title } from "../title";

const data = [
  {
    title: "Treat yourself",
    description:
      "We are here to treat you to the best of our coffees and espressos. We believe that the best coffee is the one that makes you feel good.",
    image: "/docinhos/1.jpg",
    image2: "/docinhos/2.jpg",
  },
  {
    title: "Baked with passion",
    description:
      "We are a coffee shop that loves to make you feel good. Our desserts are made with the finest ingredients and are sure to impress your taste buds.",
    image: "/docinhos/3.jpg",
    image2: "/docinhos/4.jpg",
  },
  {
    title: "Handmade with love",
    description:
      "We are committed to providing you with the best coffee and espresso experience. We believe that the best coffee is the one that makes you feel good.",
    image: "/docinhos/5.jpg",
    image2: "/docinhos/6.jpg",
  },
  {
    title: "Whisked with warmth",
    description:
      "We are a coffee shop that loves to make you feel good. Our desserts are made with the finest ingredients and are sure to impress your taste buds.",
    image: "/docinhos/7.jpg",
    image2: "/docinhos/8.jpg",
  },
];

const Item = ({ title, description, image, image2, isReverse, index }: any) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={clsx(
        "flex flex-col lg:flex-row max-lg:gap-6 items-center overflow-hidden py-6 lg:py-8",
        isReverse && "lg:flex-row-reverse",
      )}
      initial="hidden"
      variants={containerVariants}
      viewport={{ once: true, margin: "-100px" }}
      whileInView="visible"
    >
      <motion.div
        className={clsx(
          "flex-1 relative group overflow-hidden flex justify-center select-none h-[200px] md:h-[250px] lg:h-[300px] w-full",
        )}
        transition={{ duration: 0.5 }}
        variants={imageVariants}
        whileHover={{ scale: 1.02 }}
      >
        <motion.div
          className="w-full h-full relative rounded-lg shadow-lg"
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            fill
            alt={title}
            className="object-cover absolute group-hover:opacity-0 md:group-hover:opacity-0 duration-700 transition-all z-10 rounded-lg"
            priority={index < 2}
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 40vw"
            src={image}
          />
          <Image
            fill
            alt={title}
            className="object-cover transition-all duration-[3000ms] rounded-lg"
            priority={index < 2}
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 40vw"
            src={image2}
          />
        </motion.div>
      </motion.div>
      <motion.div
        className="flex-1 flex flex-col justify-center items-center text-center gap-4 lg:gap-5 px-4 lg:px-6"
        variants={textVariants}
      >
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          whileInView={{ opacity: 1 }}
        >
          <Title className="text-primary text-3xl md:text-4xl lg:text-5xl font-light">
            {title}
          </Title>
        </motion.div>
        <p className="text-primary/80 text-base md:text-lg font-light leading-relaxed max-w-md">
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
};

const PhotosNDescriptions = () => {
  return (
    <motion.div
      className="py-8 md:py-12 lg:py-16"
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
    >
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 overflow-hidden px-4 lg:px-0"
        initial={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        whileInView={{ opacity: 1 }}
      >
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileInView={{ opacity: 1 }}
            >
              <Item
                description={item.description}
                image={item.image}
                image2={item.image2}
                index={index}
                isReverse={index > 1}
                title={item.title}
              />
            </motion.div>
          </React.Fragment>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default PhotosNDescriptions;
