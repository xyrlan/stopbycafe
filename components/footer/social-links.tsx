"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

import { siteConfig } from "@/config/site";

const SocialLinks = () => {
  return (
    <motion.div
      className="flex gap-6 md:gap-8"
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {siteConfig.links.map((item, index) => (
        <motion.div
          key={item.href}
          animate={{ scale: 1 }}
          initial={{ scale: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: index * 0.1,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link
            className="block p-2 rounded-full bg-secondary/10 hover:bg-secondary/20 transition-colors duration-300"
            href={item.href}
            rel="noopener noreferrer"
            target="_blank"
          >
            <motion.span
              className="text-primary/70 hover:text-primary block"
              transition={{ duration: 0.5 }}
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
            >
              {item.icon}
            </motion.span>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SocialLinks;
