"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import clsx from "clsx";
import React, { useState } from "react";
import { motion } from "framer-motion";

import { Title } from "./title";

import { siteConfig } from "@/config/site";

export const Navbar = ({ visible, isNavOnHero }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NextUINavbar
      className={clsx(
        "fixed top-0 z-50 w-full",
        "bg-background/70 backdrop-blur-lg backdrop-saturate-150",
        "border-b border-secondary/5",
        "shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]",
        "transition-all duration-300",
        isNavOnHero
          ? "opacity-0 -translate-y-20"
          : "opacity-100 -translate-y-0",
        (visible && !isOpen) || isOpen ? "-translate-y-0" : "-translate-y-40",
      )}
      isMenuOpen={isOpen}
      maxWidth="xl"
    >
      <NavbarContent className="basis-1/5" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink
            className="flex justify-start items-center gap-1 group "
            href="/"
          >
            <motion.div
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* <Image
                alt="Logo Stop by Café"
                className={clsx(
                  "select-none transition-all duration-300",
                  "md:h-20 h-16 w-auto",
                  "group-hover:brightness-110",
                )}
                height={100}
                src="/mockuplogo.png"
                width={100}
              /> */}
              <Title
                className={clsx(
                  // title(),
                  "text-secondary-600 hover:text-secondary-500 transition-colors text-3xl cursor-pointer",
                )}
              >
                Stop by Café
              </Title>
            </motion.div>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex basis-1/5" justify="center">
        <motion.ul
          animate={{ opacity: 1, y: 0 }}
          className="hidden lg:flex gap-8 justify-start ml-2 uppercase"
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {siteConfig.navItems.map((item, index) => (
            <motion.li
              key={item.href}
              animate={{ opacity: 1, y: 0 }}
              className="relative text-nowrap"
              initial={{ opacity: 0, y: -10 }}
              transition={{ delay: index * 0.1 }}
            >
              <NextLink
                className={clsx(
                  "font-medium text-sm tracking-[0.15em]",
                  "text-primary/70 hover:text-primary",
                  "transition-all duration-300",
                  "after:content-[''] after:absolute after:w-0 after:h-[1px]",
                  "after:bg-secondary/80 after:left-0 after:-bottom-1",
                  "after:transition-all after:duration-300",
                  "hover:after:w-full hover:after:bg-secondary",
                  "before:content-[''] before:absolute before:w-[4px] before:h-[4px]",
                  "before:bg-secondary/40 before:-left-4 before:top-1/2 before:-translate-y-1/2",
                  "before:rounded-full before:opacity-0",
                  "hover:before:opacity-100 before:transition-opacity before:duration-300",
                )}
                href={item.href}
              >
                {item.label}
              </NextLink>
            </motion.li>
          ))}
        </motion.ul>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle
          className="text-primary/80 hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        />
      </NavbarContent>

      <NavbarMenu className="bg-background/90 backdrop-blur-lg backdrop-saturate-150 pt-20 px-8">
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col gap-6"
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {siteConfig.navItems.map((item, index) => (
            <motion.div
              key={`${item}-${index}`}
              animate={{ opacity: 1, x: 0 }}
              className="text-nowrap"
              initial={{ opacity: 0, x: -20 }}
              transition={{ delay: index * 0.1 }}
            >
              <NavbarMenuItem>
                <Link
                  className={clsx(
                    "font-serif text-2xl text-primary/70",
                    "hover:text-primary transition-all",
                    "border-b border-secondary/5 pb-2",
                    "hover:tracking-wider",
                    "inline-block w-full",
                  )}
                  href={item.href}
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            </motion.div>
          ))}
        </motion.div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
