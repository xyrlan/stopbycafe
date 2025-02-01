"use client";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

import { siteConfig } from "@/config/site";

const HeroNavbar = () => {
  return (
    <motion.nav
      animate={{ opacity: 1, y: 0 }}
      className="z-20 flex items-center gap-2 md:gap-8 uppercase text-sm md:text-base font-medium my-4"
      initial={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {siteConfig.navItems.map((item, index) => (
        <React.Fragment key={item.href}>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
          >
            <Link
              className={clsx(
                "relative text-white/90 font-semibold drop-shadow-md",
                "hover:text-white transition-colors duration-300",
                "after:content-[''] after:absolute after:w-0 after:h-[2px]",
                "after:bg-secondary after:left-0 after:-bottom-1",
                "after:transition-all after:duration-300",
                "hover:after:w-full",
              )}
              href={item.href}
            >
              {item.label}
            </Link>
          </motion.div>
          {index !== siteConfig.navItems.length - 1 && (
            <motion.span
              animate={{ opacity: 1 }}
              className="text-white/50 select-none font-light"
              initial={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
            >
              /
            </motion.span>
          )}
        </React.Fragment>
      ))}
    </motion.nav>
  );
};

export default HeroNavbar;
