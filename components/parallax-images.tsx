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
  const totalWidth = isAligned ? 2320 : 3780;

  // Create a smooth wrapping mechanism
  // Enhanced wrapping logic with smooth transition
  const wrapX = (x: number) => {
    const range = totalWidth;
    const rangeStart = -range;
    const rangeEnd = 0;

    // Calculate the wrapped position
    let wrappedX = x;

    if (x < rangeStart) {
      // When wrapping backwards, smoothly transition
      const diff = rangeStart - x;

      wrappedX = rangeEnd - (diff % range);

      // Apply enhanced easing to the transition
      const progress = (diff % range) / range;
      // Custom easing function combining exponential and sine for smoother transitions
      const ease =
        1 - Math.pow(1 - progress, 2) * Math.cos((progress * Math.PI) / 2);

      wrappedX = rangeEnd - (diff % range) * ease;
    } else if (x > rangeEnd) {
      // When wrapping forwards, smoothly transition
      wrappedX = rangeStart + (x % range);

      // Apply enhanced easing to the transition
      const progress = (x % range) / range;
      // Custom easing function combining exponential and sine for smoother transitions
      const ease =
        1 - Math.pow(1 - progress, 2) * Math.cos((progress * Math.PI) / 2);

      wrappedX = rangeStart + (x % range) * ease;
    }

    return wrappedX;
  };

  const x = useTransform(baseX, (v) => `${wrapX(v)}px`);

  const directionFactor = useRef<number>(1);
  const lastScrollPosition = useRef<number>(0);
  const lastTime = useRef<number>(0);
  const velocityTracker = useRef<number[]>([]);

  useAnimationFrame((time) => {
    if (lastTime.current === 0) {
      lastTime.current = time;

      return;
    }

    const delta = Math.min(time - lastTime.current, 50); // Cap delta to prevent large jumps

    lastTime.current = time;

    // Enhanced scroll velocity tracking
    const currentScroll = scrollY.get();
    const scrollDiff = currentScroll - lastScrollPosition.current;

    lastScrollPosition.current = currentScroll;

    // Track velocity over time for smoother transitions
    velocityTracker.current.push(scrollDiff);
    if (velocityTracker.current.length > 5) {
      velocityTracker.current.shift();
    }

    // Calculate average velocity for smoother direction changes
    const avgVelocity =
      velocityTracker.current.reduce((a, b) => a + b, 0) /
      velocityTracker.current.length;

    // Smooth direction changes
    if (avgVelocity < -0.5) {
      directionFactor.current = Math.max(-1, directionFactor.current - 0.2);
    } else if (avgVelocity > 0.5) {
      directionFactor.current = Math.min(1, directionFactor.current + 0.2);
    }

    // Enhanced movement calculation with dynamic acceleration and smoothing
    const scrollVelocityFactor = Math.min(Math.abs(velocityFactor.get()), 1.5);
    const baseSpeed = baseVelocity * (delta / 1000);
    const acceleration = isHovered
      ? 0.6 // Slower when hovered
      : 1 + scrollVelocityFactor * 0.1 * Math.min(Math.abs(avgVelocity), 1);
    const speedWithScroll = baseSpeed * acceleration;

    // Apply movement with smooth transition
    const moveBy = directionFactor.current * speedWithScroll;
    const currentX = baseX.get();
    const newX = wrapX(currentX + moveBy);

    baseX.set(newX);
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
    <div
      className="flex flex-col overflow-hidden relative py-20  select-none"
      id="gallery"
    >
      <div className="absolute top-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="text-secondary/70 font-light tracking-widest text-sm">
          GALLERY
        </div>
        <div className="w-px h-12 bg-gradient-to-b from-secondary/30 to-transparent" />
      </div>
      <div className="flex justify-center mb-24 mt-16">
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
      <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-secondary-50 to-transparent z-10" />
      <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-secondary-50 to-transparent z-10" />
      <motion.div
        className="flex flex-nowrap relative"
        style={{ x }}
        onHoverEnd={() => setIsHovered(false)}
        onHoverStart={() => setIsHovered(true)}
      >
        {/* Add fade edges for smooth transition */}

        {images.map((src, index) => (
          <Image
            key={index}
            priority
            alt={`stop by cafe`}
            className={`block border-8 border-secondary border-opacity-20 transition-all duration-500 ${
              isAligned ? "mr-8" : "mr-16 md:mr-20 lg:mr-40 2xl:mr-60"
            } ${
              !isAligned && index % 2 === 1
                ? "transform translate-y-20 hover:translate-y-16"
                : !isAligned && index % 2 !== 1
                  ? "transform -translate-y-20 hover:-translate-y-16"
                  : "hover:-translate-y-2"
            } hover:border-opacity-30 hover:shadow-lg`}
            height={500}
            src={src}
            width={250}
          />
        ))}
      </motion.div>
    </div>
  );
}
