"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const sweetsData = [
  {
    title: "Brigadeiro",
    portugueseTitle: "Brigadeiro",
    description:
      "A beloved Brazilian chocolate truffle made with condensed milk and cocoa powder, rolled in chocolate sprinkles. A party favorite that melts in your mouth.",
    image: "/docinhos/3.jpg",
    image2: "/docinhos/4.jpg",
  },
  {
    title: "Beijinho",
    portugueseTitle: "Beijinho de Coco",
    description:
      "A sweet coconut truffle, rolled in shredded coconut and topped with a clove. The perfect companion to brigadeiro at any Brazilian celebration.",
    image: "/docinhos/9.jpg",
    image2: "/docinhos/10.jpg",
  },
  {
    title: "Dark chocolate",
    portugueseTitle: "Brigadeiro de Chocolate Amargo",
    description:
      "A sophisticated twist on the classic brigadeiro, made with premium dark chocolate for an intense and rich flavor that delights chocolate connoisseurs.",
    image: "/docinhos/5.jpg",
    image2: "/docinhos/6.jpg",
  },
  {
    title: "Casadinho",
    portugueseTitle: "Casadinho",
    description:
      "A delightful mix of chocolate and vanilla truffles combined into one, representing the perfect marriage of flavors in Brazilian confectionery.",
    image: "/docinhos/7.jpg",
    image2: "/docinhos/8.jpg",
  },
  {
    title: "Milk chocolate",
    portugueseTitle: "Brigadeiro de Chocolate ao Leite",
    description:
      "The classic Brazilian brigadeiro made with milk chocolate, offering a perfectly balanced sweetness and creamy texture that melts in your mouth.",
    image: "/docinhos/1.jpg",
    image2: "/docinhos/2.jpg",
  },
  {
    title: "Pistachio",
    portugueseTitle: "Brigadeiro de Pistache",
    description:
      "A gourmet brigadeiro variation featuring premium pistachios, creating a sophisticated blend of nutty flavors with the classic brigadeiro's creamy texture.",
    image: "/docinhos/11.jpg",
    image2: "/docinhos/12.jpg",
  },
  {
    title: "Coffe",
    portugueseTitle: "Brigadeiro de Café",
    description:
      "A delightful combination of Brazilian coffee and chocolate in brigadeiro form, perfect for coffee lovers seeking a rich and aromatic sweet treat.",
    image: "/docinhos/13.jpg",
    image2: "/docinhos/14.jpg",
  },
  {
    title: "Chocolate meio amargo",
    portugueseTitle: "Brigadeiro meio amargo",
    description:
      "A sophisticated brigadeiro made with semi-dark chocolate, offering a perfect balance between sweetness and the intense flavor of cocoa.",
    image: "/docinhos/15.jpg",
    image2: "/docinhos/16.jpg",
  },
];

const SweetCard = ({
  sweet,
  index,
}: {
  sweet: (typeof sweetsData)[0];
  index: number;
}) => {
  return (
    <motion.div
      className="relative group overflow-hidden rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="relative aspect-square overflow-hidden max-w-[280px] mx-auto">
        <div className="relative w-full h-full">
          <Image
            fill
            alt={sweet.title}
            className="object-cover transition-all duration-700 z-10 opacity-100 group-hover:opacity-0"
            priority={index < 4}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            src={sweet.image}
          />
          <Image
            fill
            alt={`${sweet.title} alternate view`}
            className="object-cover absolute inset-0 transition-all duration-700"
            priority={index < 4}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            src={sweet.image2}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-20" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-end p-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 z-30">
          <h3 className="text-xl font-light mb-1">{sweet.title}</h3>
          <p className="text-xs text-white/80 italic mb-1">
            {sweet.portugueseTitle}
          </p>
          <p className="text-xs text-white/90 leading-relaxed">
            {sweet.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const BrazilianSweetsSection = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[url('/wheat.svg')] opacity-[0.03] bg-repeat rotate-45" />

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {/* <Title className="text-primary text-4xl md:text-5xl mb-4">
            Brazilian Sweets
          </Title> */}
          <div className="flex flex-col items-center gap-4 mb-4">
            <div className="text-secondary/70 font-light tracking-widest text-sm">
              BRAZILIAN SWEETS
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-secondary/30 to-transparent" />
          </div>
          <p className="text-primary/80 text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Discover the rich tradition of Brazilian brigadeiros - delightful
            sweets that are an essential part of any celebration in Brazil. Each
            treat is crafted with care, bringing a taste of Brazilian joy to
            every bite.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {sweetsData.map((sweet, index) => (
            <SweetCard key={sweet.title} index={index} sweet={sweet} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrazilianSweetsSection;
