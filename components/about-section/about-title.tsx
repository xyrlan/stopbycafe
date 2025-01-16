"use client";

import clsx from "clsx";
import { motion } from "framer-motion";

import { title } from "../primitives";

const AboutTitle = () => {
  return (
    <motion.div
      className={clsx(
        title(),
        "flex-1 flex flex-row max-md:flex-col md:items-center my-10 md:gap-5 gap-2 px-2",
      )}
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
    >
      <h2 className={"text-nowrap text-secondary"}>About Us</h2>
      <motion.div
        className="h-0.5 bg-secondary bg-opacity-20"
        initial={{ width: 0 }}
        transition={{ duration: 2 }}
        whileInView={{ width: "100%" }}
      />
    </motion.div>
  );
};

export default AboutTitle;
