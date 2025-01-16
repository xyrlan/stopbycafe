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
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import clsx from "clsx";
import React, { useState } from "react";
import Image from "next/image";

import { siteConfig } from "@/config/site";

export const Navbar = ({ visible, isNavOnHero }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NextUINavbar
      className={clsx(
        "bg-primary border-b-0 py-4",
        "fixed top-0 duration-200 transition-all z-50",
        // visible && !isOpen || isOpen ? '-translate-y-0' : '-translate-y-40',
        isNavOnHero
          ? "opacity-0 -translate-y-20"
          : "opacity-100 -translate-y-0",
      )}
      isMenuOpen={isOpen}
      maxWidth="xl"
    >
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

      <NavbarContent className="hidden sm:flex basis-1/5 " justify="center">
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
                <span className="text-default-400 select-none opacity-70">
                  \
                </span>
              )}
            </React.Fragment>
          ))}
        </ul>
        {/* <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem> */}
      </NavbarContent>

      {/* <NavbarContent className="hidden sm:flex basis-1/5" justify="end">
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
      </NavbarContent> */}

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
        <NavbarMenuToggle
          className="text-default"
          onClick={() => setIsOpen(!isOpen)}
        />
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
