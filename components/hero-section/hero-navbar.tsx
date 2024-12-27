import clsx from "clsx";
import Link from "next/link";
import React from "react";

import { siteConfig } from "@/config/site";

const HeroNavbar = () => {
  return (
    <nav className="z-20 flex items-center gap-2 md:gap-5 uppercase font-bold my-3">
      {siteConfig.navItems.map((item, index) => (
        <React.Fragment key={item.href}>
          <Link
            className={clsx(
              "text-default",
              "hover:text-secondary duration-200",
            )}
            href={item.href}
          >
            {item.label}
          </Link>
          {index !== siteConfig.navItems.length - 1 && (
            <span className="text-default-400 select-none">\</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default HeroNavbar;
