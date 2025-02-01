import { Button } from "@nextui-org/button";
import { ArrowUpRightFromSquareIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SeeOurMenu = () => {
  return (
    <div className="overflow-hidden py-24 md:py-40 px-6 bg-gradient-to-b to-background from-secondary-50 relative">
      {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="text-secondary/70 font-light tracking-widest text-sm">
          MENU
        </div>
        <div className="w-px h-12 bg-gradient-to-b from-secondary/30 to-transparent" />
      </div> */}
      <div className="max-w-3xl p-16 mx-auto backdrop-blur-sm rounded-xl overflow-hidden shadow-sm flex flex-col items-center justify-center gap-10 ring-1 ring-primary/10 relative ">
        <Image
          fill
          alt="Reading Menu"
          className="absolute inset-0 w-full h-full object-cover object-left-bottom"
          src={"/readingmenu.jpg"}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/60 to-primary/70 z-10" />
        <h2
          className={
            "text-nowrap text-secondary-50 font-light tracking-widest z-10 text-2xl"
          }
        >
          DISCOVER OUR MENU
        </h2>
        <Link href="/menu">
          <Button
            className="group hover:text-secondary border border-primary/20 hover:bg-secondary-50 hover:border-primary/40 px-8 py-6 transition-all duration-300 shadow-md z-10"
            color="secondary"
            radius="sm"
            variant="solid"
          >
            <span>View our menu</span>
            <ArrowUpRightFromSquareIcon size={16} />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SeeOurMenu;
