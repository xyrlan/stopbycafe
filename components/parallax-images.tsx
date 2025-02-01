"use client";
import {
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  motion,
} from "framer-motion";
import { useRef, useState } from "react";
import { wrap } from "@motionone/utils";
import Image from "next/image";
import { Columns3, ColumnsIcon } from "lucide-react";

interface ParallaxProps {
  baseVelocity: number;
}

export function ParallaxImages({ baseVelocity = 100 }: ParallaxProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isAligned, setIsAligned] = useState(true);
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const totalWidth = isAligned ? 2320 : 3780; // Supondo que calculamos isto com base no layout
  const x = useTransform(baseX, (v) => `${wrap(-totalWidth, 0, v)}px`);

  // const directionFactor = useRef<number>(1);
  // useAnimationFrame((t, delta) => {
  //   if (!isHovered) {  // Só movimenta se não estiver com o mouse em cima
  //     let moveBy = baseVelocity * (delta / 1000) * directionFactor.current * (1 + velocityFactor.get());
  //     baseX.set(baseX.get() + moveBy);
  //   }
  // });

  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */

  const images = [
    "/small/1.jpg",
    "/small/2.jpg",
    "/small/3.jpg",
    "/small/4.jpg",
    "/small/5.jpg",
    "/small/6.jpg",
    "/small/7.jpg",

    "/small/1.jpg",
    "/small/2.jpg",
    "/small/3.jpg",
    "/small/4.jpg",
    "/small/5.jpg",
    "/small/6.jpg",
    "/small/7.jpg",

    "/small/1.jpg",
    "/small/2.jpg",
    "/small/3.jpg",
    "/small/4.jpg",
    "/small/5.jpg",
    "/small/6.jpg",
    "/small/7.jpg",
  ];

  return (
    <div className="flex flex-col overflow-hidden relative py-20 md:py-40 select-none">
      <div className="flex justify-center mb-24">
        <button
          className={`transition-all duration-300 py-4 ${isAligned ? "text-secondary translate-y-10" : "text-secondary"}`}
          onClick={() => setIsAligned(!isAligned)}
        >
          {isAligned ? (
            <Columns3 />
          ) : (
            <div className="overflow-visible">
              <ColumnsIcon className=" -translate-x-2" size={16} />
              <ColumnsIcon className="translate-x-1" size={16} />
            </div>
          )}
        </button>
      </div>
      <motion.div className="flex flex-nowrap " style={{ x }}>
        {images.map((src, index) => (
          <Image
            key={index}
            priority
            alt={`stop by cafe`}
            className={`block border-8 border-secondary border-opacity-20 transition-all duration-300 ${isAligned ? "mr-8" : "mr-16 md:mr-20 lg:mr-40 2xl:mr-60"} ${!isAligned && index % 2 === 1 ? "transform translate-y-20" : ""}  ${!isAligned && index % 2 != 1 ? "transform -translate-y-20" : ""}`}
            height={500}
            src={src}
            width={250}
          />
        ))}
      </motion.div>
    </div>
  );
}
