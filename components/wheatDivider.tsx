import React from "react";
import { Divider } from "@nextui-org/divider";
import Image from "next/image";

const WheatDivider = () => {
  return (
    <div className="flex gap-3 items-center justify-center my-3 select-none">
      <Divider
        className="bg-default/50 w-7 mr-2 h-px opacity-50"
        orientation="horizontal"
      />
      <Image
        alt="Wheat icon"
        className="-rotate-45 opacity-50"
        height={30}
        src="/wheat.svg"
        width={30}
      />
      <Image
        alt="Wheat icon"
        className="rotate-45 scale-x-[-1] opacity-50"
        height={30}
        src="/wheat.svg"
        width={30}
      />
      <Divider
        className="bg-default/50 w-7 ml-2 h-px opacity-50"
        orientation="horizontal"
      />
    </div>
  );
};

export default WheatDivider;
