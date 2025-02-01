import clsx from "clsx";
import Image from "next/image";
import React from "react";

const Logo = ({
  width = 300,
  height = 300,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <Image
      priority
      alt="Logo Stop by Café"
      className={clsx("select-none", "md:h-56 max-md:h-40")}
      height={height}
      sizes="(max-width: 768px) 160px, 224px"
      src="/mockuplogo.png"
      style={{ width: "auto", height: "auto" }}
      width={width}
    />
  );
};

export default Logo;
