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
      alt="Logo Stop by Café"
      className={clsx("select-none", "md:h-56 max-md:h-40 w-auto")}
      height={height}
      src="/mockuplogo.png"
      width={width}
    />
  );
};

export default Logo;
