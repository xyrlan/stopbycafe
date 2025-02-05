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
      className={clsx("select-none", "max-w-32 md:max-w-40 h-auto")}
      height={height}
      src="/stop.png"
      style={{ width: "auto", height: "auto" }}
      width={width}
    />
  );
};

export default Logo;
