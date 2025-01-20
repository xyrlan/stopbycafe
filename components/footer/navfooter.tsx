import clsx from "clsx";
import React from "react";
import Link from "next/link";

import { siteConfig } from "@/config/site";

const NavFooter = () => {
  return (
    <ul className="flex flex-wrap gap-4 md:gap-20 justify-between md:ml-2">
      {siteConfig.footerNavItems.map((item, index) => (
        <React.Fragment key={item.href}>
          <div>
            <Link
              className={clsx(
                "data-[active=true]:text-primary data-[active=true]:font-medium font-semibold md:text-lg",
                "text-primary",
                "hover:text-secondary duration-200",
              )}
              color="foreground"
              href={item.href}
            >
              {item.label}
            </Link>
          </div>
          {index !== siteConfig.navItems.length - 1 && (
            <span className="text-default-500 select-none opacity-70">\</span>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default NavFooter;
