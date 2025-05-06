"use client";
import React from "react";
import clsx from "clsx";
import { Divider } from "@nextui-org/divider";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

import NavFooter from "./navfooter";
import SocialLinks from "./social-links";

const Footer = () => {
  return (
    <footer className="bg-default-100 py-20 md:py-28 px-4 md:px-12 text-primary relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-12 mb-20"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="space-y-8">
            <motion.div
              className="gap-2"
              initial={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              <Image
                priority
                alt="Logo Stop by Café"
                className={clsx("select-none", "max-w-32 h-auto")}
                height={150}
                src="/stop.png"
                style={{ width: "auto", height: "auto" }}
                width={150}
              />
              {/* <Title
                className={clsx(
                  "text-secondary-600 mb-8 hover:text-secondary-500 transition-colors cursor-default text-3xl",
                )}
              >
                Stop by Café
              </Title> */}
            </motion.div>
            <div className="space-y-6 text-primary/80">
              {/* <motion.p
                className="flex items-center gap-3 group cursor-default"
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                whileHover={{ x: 5 }}
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                  📞
                </span>
                <span className="group-hover:text-primary transition-colors">
                  +xx (xx) 99999-9999
                </span>
              </motion.p> */}
              <motion.p
                className="flex items-center gap-3 group cursor-default"
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                whileHover={{ x: 5 }}
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                  📧
                </span>
                <span className="group-hover:text-primary transition-colors">
                  stopbycaffe@gmail.com
                </span>
              </motion.p>
              <motion.div
                className="flex items-start gap-3 group cursor-default"
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                whileHover={{ x: 5 }}
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors mt-1">
                  🕒
                </span>
                <div className="group-hover:text-primary transition-colors">
                  <p>Monday to Friday, 7:30 AM to 6:00 PM</p>
                  <p>Saturday, 9:00 AM to 6:00 PM</p>
                  <p>Sunday, 9:00 AM to 5:00 PM</p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="space-y-8">
            <motion.h3
              className="text-xl font-semibold text-secondary-700 mb-8 hover:text-secondary-600 transition-colors cursor-default"
              initial={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Quick Links
            </motion.h3>
            <NavFooter />
            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>

          <div className="lg:col-span-1 md:col-span-2 lg:col-start-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              <iframe
                allowFullScreen={true}
                className="w-full rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 max-md:max-h-[200px] border-4 border-secondary/5"
                height="300"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.760672315191!2d-73.9847302!3d40.7672883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259e8fccf47af%3A0x21ec938d803ed9aa!2sStop%20By%20Caf%C3%A9!5e0!3m2!1spt-BR!2sbr!4v1737405700168!5m2!1spt-BR!2sbr"
                style={{ border: 0 }}
                title="Stop by Café Google Maps location"
                width="600"
              />
            </motion.div>
          </div>
        </motion.div>

        <Divider className="my-12 opacity-20" />

        <motion.div
          className="flex flex-col md:flex-row justify-between items-center text-sm text-primary/60"
          initial={{ opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
        >
          <p className="mb-4 md:mb-0 hover:text-primary/80 transition-colors cursor-default">
            © {new Date().getFullYear()} Stop by Café. All rights reserved.
          </p>
          <motion.p
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            Designed & Developed with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              className="text-secondary"
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              ❤️
            </motion.span>{" "}
            by{" "}
            <Link
              className="text-secondary hover:text-secondary-600 transition-colors underline-offset-4 hover:underline"
              href="https://xyrlan-marketing.vercel.app/"
              target="_blank"
            >
              xyrlan
            </Link>
          </motion.p>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary/10 via-primary/20 to-secondary/10" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secondary/10 via-primary/20 to-secondary/10" />
    </footer>
  );
};

export default Footer;
