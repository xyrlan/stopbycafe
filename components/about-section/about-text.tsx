import { Button } from "@nextui-org/button";
import { ArrowUpRightFromSquareIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const AboutText = () => {
  return (
    <div className="flex">
      <div className="max-w-md space-y-8 bg-white/50 backdrop-blur-sm p-8 rounded-sm shadow-sm">
        <p className="tracking-wider text-primary/90 font-light leading-relaxed lg:text-lg">
          Nestled in the vibrant heart of Manhattan, just steps away from
          Central Park&apos;s timeless beauty, our bakery brings a fresh take on
          artisanal delicacies. We blend classic Brazillian techniques with
          contemporary New York flair to create something truly special.
        </p>
        <br />
        <p className="tracking-wider text-primary/90 font-light leading-relaxed lg:text-lg">
          Each creation that leaves our kitchen tells a story of passion,
          precision, and the finest ingredients sourced from around the world.
          From our signature croissants to our artisanal breads, every bite is a
          celebration of our commitment to culinary excellence.
        </p>
        <Link href="/about">
          <Button
            className="mt-16 group hover:text-primary border border-primary/20 hover:bg-primary/5 hover:border-primary/40 px-8 py-6 transition-all duration-300"
            radius="sm"
            variant="light"
          >
            <span>Learn More</span>
            <ArrowUpRightFromSquareIcon size={16} />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AboutText;
