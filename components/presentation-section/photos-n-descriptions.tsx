"use client";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import WheatDividerBlack from "../wheatDividerBlack";
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

const Item = ({ title, description, image, image2, isReverse, index }: any) => (
  <div
    className={clsx(
      "flex flex-col lg:flex-row max-lg:gap-5 max-lg:items-center overflow-hidden",
      isReverse && "lg:flex-row-reverse",
    )}
  >
    <div
      className={clsx(
        "flex-1 relative group overflow-hidden flex justify-center select-none h-[250px]",
      )}
    >
      <Image
        alt={title}
        className="object-cover shadow-lg absolute group-hover:opacity-0 duration-300 transition-all h-full z-10"
        height={600}
        src={image}
        width={600}
      />
      <Image
        alt={title}
        className={clsx(
          "object-cover h-full group-hover:scale-110 transition-all duration-[4000ms]",
        )}
        height={600}
        src={image2}
        width={600}
      />
    </div>
    <motion.div
      className="flex-1 flex flex-col justify-center text-center gap-2"
      initial={{ opacity: 0 }}
      transition={{ duration: 1, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
    >
      <Title className={"text-primary font-semibold text-3xl px-3"}>
        {title}
      </Title>
      <WheatDividerBlack />
    </motion.div>
  </div>
);

const PhotosNDescriptions = () => (
  <div className="max-md:hidden">
    <div className="grid lg:grid-cols-2 max-lg:gap-5">
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-col items-center">
            <Item
              description={item.description}
              image={item.image}
              image2={item.image2}
              index={index}
              isReverse={index > 1} // reverse layout for items after the second
              title={item.title}
            />
          </div>
        </React.Fragment>
      ))}
    </div>
    <div className="grid lg:grid-cols-2 max-lg:gap-5">
      {data2.map((item, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-col items-center">
            <Item
              description={item.description}
              image={item.image}
              image2={item.image2}
              index={index + 2}
              isReverse={index > 1} // reverse layout for items after the second
              title={item.title}
            />
          </div>
        </React.Fragment>
      ))}
    </div>
  </div>
);

export default PhotosNDescriptions;
