"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion"

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
} from "@/components/icons";
import React, { useState } from "react";
import Logo from "./logo";
import Image from "next/image";

export const Navbar = ({ visible, isNavOnHero }: any) => {
  const [isOpen, setIsOpen] = useState(false)

  const searchInput = (
    <Input
      aria-label="Search"
      size="sm"
      classNames={{
        inputWrapper: "bg-secondary-100",
        input: "text-sm",
      }}
      // endContent={
      //   <Kbd className="hidden lg:inline-block" keys={["command"]}>
      //     K
      //   </Kbd>
      // }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar isMenuOpen={isOpen} maxWidth="xl" className={clsx(
      "bg-primary border-b-0",
      "fixed top-0 duration-200 transition-all z-50",
      // visible && !isOpen || isOpen ? '-translate-y-0' : '-translate-y-40',
      isNavOnHero ? "opacity-0 -translate-y-20" : "opacity-100 -translate-y-0"
    )}>

      <NavbarContent className="basis-1/5 " justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image
              alt="Logo Stop by Café"
              className={clsx("select-none", "md:h-24 h-20 w-auto")}
              height={100}
              src="/mockuplogo.png"
              width={100}
            />
            <p className="font-bold text-inherit sr-only">Stop By Café</p>
          </NextLink>
        </NavbarBrand>

      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 "
        justify="center"
      >
        <ul className="hidden lg:flex gap-4 justify-start ml-2 uppercase">
          {siteConfig.navItems.map((item, index) => (
            <React.Fragment key={item.href}>
              <NavbarItem>
                <NextLink
                  className={clsx(
                    "data-[active=true]:text-primary data-[active=true]:font-medium font-bold text-xs",
                    "text-default",
                    "hover:text-secondary duration-200",
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </NextLink>

              </NavbarItem>
              {index !== siteConfig.navItems.length - 1 && (
                <span className="text-default-400 select-none opacity-70">\</span>
              )}
            </React.Fragment>
          ))}
        </ul>
        {/* <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem> */}

      </NavbarContent>

      <NavbarContent className="hidden sm:flex basis-1/5" justify="end">
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        {/* <Link isExternal aria-label="Instagram" href={siteConfig.links.github}>
          <Image
              alt="Instagram Icon"
              className={clsx("select-none", "h-6 w-auto")}
              height={100}
              width={100}
              src="/insta.png"
            />
        </Link> */}
        {/* <ThemeSwitch />  */}
        <NavbarMenuToggle onClick={() => setIsOpen(!isOpen)} className="text-default" />
      </NavbarContent>

      <NavbarMenu className="bg-primary">
        {/* <div className="mt-4 ">
          {searchInput}
        </div> */}
        <div className="mx-4 mt-20 flex flex-col gap-3">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="text-default font-semibold text-3xl"
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
