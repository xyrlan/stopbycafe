"use client";
import clsx from "clsx";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { siteConfig } from "@/config/site";

const NavFooter = () => {
  return (
    <motion.ul
      className="grid grid-cols-2 gap-4"
      initial={{ opacity: 0 }}
      transition={{ staggerChildren: 0.1 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
    >
      {siteConfig.footerNavItems.map((item, index) => (
        <motion.li
          key={item.href}
          initial={{ opacity: 0, x: -20 }}
          transition={{
            duration: 0.3,
            delay: index * 0.1,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <Link
            className={clsx(
              "relative text-primary/70 font-medium text-sm md:text-base",
              "hover:text-primary transition-colors duration-300",
              "after:content-[''] after:absolute after:w-0 after:h-[1px]",
              "after:bg-secondary after:left-0 after:-bottom-1",
              "after:transition-all after:duration-300",
              "hover:after:w-full",
            )}
            href={item.href}
          >
            {item.label}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default NavFooter;
