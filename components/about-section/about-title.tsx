"use client";

import clsx from "clsx";
import { motion } from "framer-motion";

import { title } from "../primitives";

const AboutTitle = () => {
  return (
    <motion.div
      className={clsx(
        title(),
        "flex-1 flex flex-row max-md:flex-col md:items-center my-10 md:gap-8 gap-4 px-2",
      )}
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
    >
      <h2 className={"text-nowrap text-secondary font-light tracking-widest"}>
        OUR STORY
      </h2>
      <motion.div
        className="h-[1px] bg-[#9E8A78] bg-opacity-30"
        initial={{ width: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        whileInView={{ width: "100%" }}
      />
    </motion.div>
  );
};

export default AboutTitle;
