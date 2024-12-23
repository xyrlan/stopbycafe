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
      className={clsx("select-none", "max-md:h-40 max-md:w-40")}
      height={height}
      src="/mockuplogo.png"
      width={width}
    />
  );
};

export default Logo;
