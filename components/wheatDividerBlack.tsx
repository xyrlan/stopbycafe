import React from 'react'
import { Divider } from "@nextui-org/divider";
import Image from 'next/image';

const WheatDividerBlack = () => {
  return (
    <div className="flex gap-3 items-center justify-center my-3 ">
      <Divider className="bg-default w-7 mr-2 h-px" orientation="horizontal" />
      <Image
        alt="Wheat icon"
        className="-rotate-45"
        height={30}
        src="/wheat-black.svg"
        width={30}
      />
      <Image
        alt="Wheat icon"
        className="rotate-45 scale-x-[-1] "
        height={30}
        src="/wheat-black.svg"
        width={30}
      />
      <Divider className="bg-default w-7 ml-2 h-px" orientation="horizontal" />
    </div>
  )
}

export default WheatDividerBlack