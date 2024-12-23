import React from "react";
import Image from "next/image";
import { Divider } from "@nextui-org/divider";
import clsx from "clsx";

import { title } from "../primitives";

import { fontDancingScript } from "@/config/fonts";

const HeroSlogan = () => {
  return (
    <div
      className={clsx(
        "z-20 flex flex-col items-center text-center text-default",
        title(),
      )}
    >
      <h1
        className={clsx(
          "font-dancingScript md:text-5xl text-4xl text-secondary-100 my-3",
          fontDancingScript.variable,
        )}
      >
        Welcome to Stop by Café
      </h1>
      <h2 className={clsx("uppercase my-2 md:text-4xl text-2xl")}>
        We are excited to cook
        <br /> for you today!
      </h2>
      <div className="flex gap-1 items-center justify-center my-3">
        <Divider className="bg-white w-7 mr-2" orientation="horizontal" />
        <Image
          alt="Wheat icon"
          className="-rotate-45"
          height={30}
          src="/wheat.svg"
          width={30}
        />
        <Image
          alt="Wheat icon"
          className="rotate-45 scale-x-[-1] "
          height={30}
          src="/wheat.svg"
          width={30}
        />
        <Divider className="bg-white w-7 ml-2" orientation="horizontal" />
      </div>
    </div>
  );
};

export default HeroSlogan;
