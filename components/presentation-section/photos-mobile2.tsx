"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Title } from "../title";
import WheatDivider from "../wheatDivider";

// Mesmos dados do exemplo original

const data2 = [
  {
    title: "Where passion meets perfection",
    image: "/docinhos/9.jpg",
    image2: "/docinhos/10.jpg",
  },
  {
    title: "Sweetness in every bite",
    image: "/docinhos/11.jpg",
    image2: "/docinhos/12.jpg",
  },
  {
    title: "Flavors that tell a story",
    image: "/docinhos/13.jpg",
    image2: "/docinhos/14.jpg",
  },
  {
    title: "A sprinkle of joy in every creation",
    image: "/docinhos/15.jpg",
    image2: "/docinhos/16.jpg",
  },
];

// Unindo todos os slides em um único array

// Variants para as animações de entrada/saída
const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
    rotateY: direction > 0 ? 45 : -45,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
    rotateY: direction < 0 ? 45 : -45,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
    position: "absolute",
  }),
};

const buttonVariants = {
  rest: { scale: 1, opacity: 0.7 },
  hover: {
    scale: 1.1,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
    },
  },
};

const swipeConfidenceThreshold = 80; // Ajuste conforme a sensibilidade desejada

// Renderiza o slide atual
const CarouselSlide = ({ item }: { item: (typeof data2)[0] }) => {
  const { title, image, image2 } = item;

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-4 md:hidden">
      <motion.div
        className="relative w-full h-60 overflow-hidden flex justify-center items-center group"
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.02 }}
      >
        <motion.div
          className="w-full h-full relative"
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.1 }}
        >
          <Image
            alt={title}
            className="object-cover absolute shadow-lg z-10 group-hover:opacity-0 duration-500"
            height={240}
            sizes="(max-width: 768px) 100vw, 352px"
            src={image}
            style={{ width: "100%", height: "100%" }}
            width={352}
          />
          <Image
            alt={title}
            className="object-cover transition-all duration-[3000ms]"
            height={240}
            sizes="(max-width: 768px) 100vw, 352px"
            src={image2}
            style={{ width: "100%", height: "100%" }}
            width={352}
          />
        </motion.div>
      </motion.div>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Title className="text-primary text-4xl my-4">{title}</Title>
      </motion.div>
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        className="text-primary"
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <WheatDivider />
      </motion.div>
    </div>
  );
};

// Componente que controla o carrossel
const PhotosNDescriptionsMobile2 = () => {
  // Estado para o índice atual e direção do swipe
  const [[currentIndex, direction], setCurrentIndex] = useState<
    [number, number]
  >([0, 0]);

  // Função para trocar slide
  const paginate = (newDirection: number) => {
    setCurrentIndex(([prevIndex]) => {
      let nextIndex = prevIndex + newDirection;

      // loop infinito (volta ao inicio ou fim caso passe dos limites)
      if (nextIndex < 0) {
        nextIndex = data2.length - 1;
      } else if (nextIndex >= data2.length) {
        nextIndex = 0;
      }

      return [nextIndex, newDirection];
    });
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number } },
  ) => {
    const offsetX = info.offset.x;

    // Se arrastar mais do que X px para a esquerda => próximo slide
    if (offsetX < -swipeConfidenceThreshold) {
      paginate(1);
      // Se arrastar mais do que X px para a direita => slide anterior
    } else if (offsetX > swipeConfidenceThreshold) {
      paginate(-1);
    }
  };

  // Garante que o index seja válido caso use "wrapping"
  const itemIndex = currentIndex % data2.length;
  const item = data2[itemIndex];

  return (
    <div className="relative w-full h-auto flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-sm">
        <AnimatePresence custom={direction} initial={false} mode="sync">
          <motion.div
            key={currentIndex}
            animate="center"
            className="w-full"
            custom={direction}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            exit="exit"
            initial="enter"
            variants={variants as any}
            onDragEnd={handleDragEnd}
          >
            <CarouselSlide item={item} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Botão anterior */}
      <motion.button
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/50 backdrop-blur-sm rounded-full p-2 z-20 shadow-lg"
        initial="rest"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        onClick={() => paginate(-1)}
      >
        <motion.div
          animate={{ x: [-2, 0, -2] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronLeft className="w-6 h-6 text-primary" />
        </motion.div>
      </motion.button>

      {/* Botão próximo */}
      <motion.button
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/50 backdrop-blur-sm rounded-full p-2 z-20 shadow-lg"
        initial="rest"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        onClick={() => paginate(1)}
      >
        <motion.div
          animate={{ x: [2, 0, 2] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronRight className="w-6 h-6 text-primary" />
        </motion.div>
      </motion.button>
    </div>
  );
};

export default PhotosNDescriptionsMobile2;
