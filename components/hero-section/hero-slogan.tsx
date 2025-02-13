"use client";
import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

import WheatDivider from "../wheatDivider";
import { Title } from "../title";

const HeroSlogan = () => {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className={clsx("z-20 flex flex-col items-center text-center")}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <Title className="text-default brightness-125 drop-shadow-lg text-5xl mb-2 leading-normal">
          Welcome to
          <br /> Stop by Café
        </Title>
      </motion.div>
      {/* <motion.h2
        animate={{ opacity: 1, y: 0 }}
        className={clsx(
          "uppercase my-4 md:text-4xl text-2xl font-bold text-white/90 drop-shadow-lg",
        )}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        We are excited to cook
        <br /> for you today!
      </motion.h2> */}
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        className="text-default my-2"
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6, delay: 1.1 }}
      >
        <WheatDivider />
      </motion.div>
    </motion.div>
  );
};

export default HeroSlogan;
