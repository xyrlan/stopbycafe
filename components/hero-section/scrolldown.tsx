import React from "react";
import { Divider } from "@nextui-org/divider";

const ScrollDown = () => {
  return (
    <div className="z-20 flex flex-col items-center gap-2 text-default ">
      <span className="text-xs font-semibold tracking-wider">Scroll Down</span>
      <Divider className="bg-default h-12 w-px " orientation="vertical" />
    </div>
  );
};

export default ScrollDown;
