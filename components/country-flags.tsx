import Image from "next/image";
import React from "react";

const CountryFlags = () => {
  return (
    <div className="z-20 flex items-center gap-4 my-5">
      <Image
        alt="brasil flag"
        className="h-6"
        height={36}
        src="/flag-eua.png"
        width={36}
      />
      <Image
        alt="brasil flag"
        className="h-6 "
        height={36}
        src="/flag-brasil.png"
        width={36}
      />
    </div>
  );
};

export default CountryFlags;
