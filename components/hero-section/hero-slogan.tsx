"use client";
import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

import { title } from "../primitives";
import WheatDivider from "../wheatDivider";
import { Title } from "../title";

const HeroSlogan = () => {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className={clsx("z-20 flex flex-col items-center text-center", title())}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <Title className="text-white drop-shadow-lg">
          Welcome to Stop by Café
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
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6, delay: 1.1 }}
      >
        <WheatDivider />
      </motion.div>
    </motion.div>
  );
};

export default HeroSlogan;
