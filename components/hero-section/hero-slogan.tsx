import React from "react";
import clsx from "clsx";

import { title } from "../primitives";

import { fontDancingScript } from "@/config/fonts";
import WheatDivider from "../wheatDivider";

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
          "font-dancingScript md:text-5xl text-4xl text-secondary brightness-125 my-3",
          fontDancingScript.variable,
        )}
      >
        Welcome to Stop by Café
      </h1>
      {/* <h2 className={clsx("uppercase my-2 md:text-4xl text-2xl ")}>
        We are excited to cook
        <br /> for you today!
      </h2> */}
      <WheatDivider />
    </div>
  );
};

export default HeroSlogan;
