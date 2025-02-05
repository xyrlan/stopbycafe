import { Facebook, Instagram } from "lucide-react";

import { TwitterIcon } from "@/components/icons";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Stop by Café",
  description: "Brazilian Coffe shop",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About us",
      href: "/about",
    },
    {
      label: "Menu",
      href: "/menu",
    },
    {
      label: "Gallery",
      href: "/#gallery",
    },
  ],
  footerNavItems: [
    {
      label: "Home Page",
      href: "/",
    },
    {
      label: "Know More About Us",
      href: "/about",
    },
    {
      label: "View Our Menu",
      href: "/menu",
    },
    // {
    //   label: "Contact Us",
    //   href: "/contact",
    // },
    {
      label: "View Gallery",
      href: "#gallery",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/stopbycafe/",
      icon: <Instagram />,
      newTab: true,
    },
    {
      label: "Twitter",
      href: "https://twitter.com/stopbycafe",
      icon: <TwitterIcon />,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/stopbycafe/",
      icon: <Facebook />,
      newTab: true,
    },
  ],
};
