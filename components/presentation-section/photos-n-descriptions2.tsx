"use client";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import { Title } from "../title";
import WheatDivider from "../wheatDivider";

const data2 = [
  {
    title: "Where passion meets perfection",
    description:
      "We are here to treat you to the best of our coffees and espressos. We believe that the best coffee is the one that makes you feel good.",
    image: "/docinhos/9.jpg",
    image2: "/docinhos/10.jpg",
  },
  {
    title: "Sweetness in every bite",
    description:
      "We are a coffee shop that loves to make you feel good. Our desserts are made with the finest ingredients and are sure to impress your taste buds.",
    image: "/docinhos/11.jpg",
    image2: "/docinhos/12.jpg",
  },
  {
    title: "Flavors that tell a story",
    description:
      "We are committed to providing you with the best coffee and espresso experience. We believe that the best coffee is the one that makes you feel good.",
    image: "/docinhos/13.jpg",
    image2: "/docinhos/14.jpg",
  },
  {
    title: "A sprinkle of joy in every creation",
    description:
      "We are a coffee shop that loves to make you feel good. Our desserts are made with the finest ingredients and are sure to impress your taste buds.",
    image: "/docinhos/15.jpg",
    image2: "/docinhos/16.jpg",
  },
];

const Item = ({ title, description, image, image2, isReverse, index }: any) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: isReverse ? -30 : 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2 + 0.3,
      },
    },
  };

  return (
    <motion.div
      className={clsx(
        "flex flex-col lg:flex-row max-lg:gap-5 max-lg:items-center overflow-hidden",
        isReverse && "lg:flex-row-reverse",
      )}
      initial="hidden"
      variants={containerVariants}
      viewport={{ once: true, margin: "-50px" }}
      whileInView="visible"
    >
      <motion.div
        className={clsx(
          "flex-1 relative group overflow-hidden flex justify-center select-none h-[250px]",
        )}
        transition={{ duration: 0.3 }}
        variants={imageVariants}
        whileHover={{ scale: 1.02 }}
      >
        <motion.div
          className="w-full h-full relative"
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.1 }}
        >
          <Image
            alt={title}
            className="object-cover shadow-lg absolute group-hover:opacity-0 duration-500 transition-all z-10"
            height={600}
            sizes="(max-width: 1024px) 100vw, 50vw"
            src={image}
            style={{ width: "100%", height: "100%" }}
            width={600}
          />
          <Image
            alt={title}
            className="object-cover transition-all duration-[3000ms]"
            height={600}
            sizes="(max-width: 1024px) 100vw, 50vw"
            src={image2}
            style={{ width: "100%", height: "100%" }}
            width={600}
          />
        </motion.div>
      </motion.div>
      <motion.div
        className="flex-1 flex flex-col justify-center items-center text-center gap-3"
        variants={textVariants}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Title className="text-primary text-4xl px-3">{title}</Title>
        </motion.div>
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="text-primary"
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <WheatDivider />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const PhotosNDescriptions2 = () => {
  return (
    <motion.div
      className="max-md:hidden"
      initial={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
    >
      <motion.div
        className="grid lg:grid-cols-2 max-lg:gap-5"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        {data2.map((item, index) => (
          <React.Fragment key={index}>
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileInView={{ opacity: 1 }}
            >
              <Item
                description={item.description}
                image={item.image}
                image2={item.image2}
                index={index + 2}
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

export default PhotosNDescriptions2;
