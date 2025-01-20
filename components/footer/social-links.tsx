import Link from "next/link";
import React from "react";

import { siteConfig } from "@/config/site";

const SocialLinks = () => {
  return (
    <div className="flex gap-4 md:gap-12 justify-between">
      {siteConfig.links.map((item, index) => (
        <React.Fragment key={item.href}>
          <Link href={item.href} rel="noopener noreferrer" target="_blank">
            <span className="text-primary-500 hover:text-secondary duration-200">
              {item.icon}
            </span>
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
};

export default SocialLinks;
