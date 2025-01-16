"use client"
import clsx from 'clsx'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import WheatDividerBlack from '../wheatDividerBlack'
import { Title } from '../title'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Mesmos dados do exemplo original
const data = [
  {
    title: 'Treat yourself',
    image: '/docinhos/1.jpg',
    image2: '/docinhos/2.jpg'
  },
  {
    title: 'Baked with passion',
    image: '/docinhos/3.jpg',
    image2: '/docinhos/4.jpg'
  },
  {
    title: 'Handmade with love',
    image: '/docinhos/5.jpg',
    image2: '/docinhos/6.jpg'
  },
  {
    title: 'Whisked with warmth',
    image: '/docinhos/7.jpg',
    image2: '/docinhos/8.jpg'
  },
]

const data2 = [
  {
    title: 'Where passion meets perfection',
    image: '/docinhos/9.jpg',
    image2: '/docinhos/10.jpg'
  },
  {
    title: 'Sweetness in every bite',
    image: '/docinhos/11.jpg',
    image2: '/docinhos/12.jpg'
  },
  {
    title: 'Flavors that tell a story',
    image: '/docinhos/13.jpg',
    image2: '/docinhos/14.jpg'
  },
  {
    title: 'A sprinkle of joy in every creation',
    image: '/docinhos/15.jpg',
    image2: '/docinhos/16.jpg'
  },
]

// Unindo todos os slides em um único array
const allData = [...data, ...data2]

// Variants para as animações de entrada/saída
const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      
    }
  },
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5
    }
  },
  exit: (direction: number) => {
    return {
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.4
      },
      position: 'absolute',
    }
  }
}

const swipeConfidenceThreshold = 80 // Ajuste conforme a sensibilidade desejada

// Renderiza o slide atual
const CarouselSlide = ({ item }: { item: typeof allData[0] }) => {
  const { title, image, image2 } = item

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-4 md:hidden">
      <div className="relative w-full h-60 overflow-hidden flex justify-center items-center group">
        <Image
          src={image}
          alt={title}
          width={352}
          height={240}
          className="object-cover absolute w-full h-full shadow-lg z-10 group-hover:opacity-0 duration-300"
        />
        <Image
          src={image2}
          alt={title}
          width={352}
          height={240}
          className="object-cover w-full h-full"
        />
      </div>
      <Title className="text-primary font-semibold text-2xl mt-4">
        {title}
      </Title>
      <WheatDividerBlack />
    </div>
  )
}

// Componente que controla o carrossel
const PhotosNDescriptionsMobile = () => {
  // Estado para o índice atual e direção do swipe
  const [[currentIndex, direction], setCurrentIndex] = useState<[number, number]>([0, 0])

  // Função para trocar slide
  const paginate = (newDirection: number) => {
    setCurrentIndex(([prevIndex]) => {
      let nextIndex = prevIndex + newDirection

      // loop infinito (volta ao inicio ou fim caso passe dos limites)
      if (nextIndex < 0) {
        nextIndex = allData.length - 1
      } else if (nextIndex >= allData.length) {
        nextIndex = 0
      }
      return [nextIndex, newDirection]
    })
  }

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number } }
  ) => {
    const offsetX = info.offset.x

    // Se arrastar mais do que X px para a esquerda => próximo slide
    if (offsetX < -swipeConfidenceThreshold) {
      paginate(1)
      // Se arrastar mais do que X px para a direita => slide anterior
    } else if (offsetX > swipeConfidenceThreshold) {
      paginate(-1)
    }
  }

  // Garante que o index seja válido caso use "wrapping"
  const itemIndex = currentIndex % allData.length
  const item = allData[itemIndex]

  return (
    <div className="relative w-full h-auto flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-sm">
        <AnimatePresence custom={direction} initial={false} mode='sync'>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants as any}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            className="w-full"
          >
            <CarouselSlide item={item} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Botão anterior */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/50 rounded-full p-2 z-20"
      >
        <ChevronLeft />
      </button>

      {/* Botão próximo */}
      <button
        onClick={() => paginate(1)}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/50 rounded-full p-2 z-20"
      >
        <ChevronRight />
      </button>
    </div>
  )
}

export default PhotosNDescriptionsMobile
