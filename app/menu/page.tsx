"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Title } from "@/components/title";
import WheatDivider from "@/components/wheatDivider";
import BrazilFlag from "@/components/brazil-flag";

interface MenuItem {
  name: string;
  price: string;
  description?: string;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

const isBrazilianItem = (name: string): boolean => {
  const brazilianItems = [
    "Cheese Bread",
    "Brigadeiros",
    "Prestigio",
    "Yuca",
    "Guava Cookies",
  ];

  return brazilianItems.includes(name);
};

const MenuSection = ({ title, items }: MenuSection) => {
  return (
    <section className="py-8 scroll-mt-24" id={title.toLowerCase()}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-light text-primary mb-3 flex items-center  gap-2">
            {title}
            {title === "Brigadeiros" && <BrazilFlag className="text-sm" />}
          </h2>
          <WheatDivider className="w-20 h-auto text-secondary/70" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="group p-4 rounded-lg transition-all duration-300 hover:bg-white/50 hover:shadow-md border border-primary/5"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-nunito text-primary-600 group-hover:text-primary-800 transition-colors flex items-center gap-2">
                  {item.name}
                  {isBrazilianItem(item.name) && (
                    <BrazilFlag className="text-sm" />
                  )}
                </h3>
                <span className="text-lg font-roboto text-secondary-500 group-hover:text-secondary-600 transition-colors">
                  ${item.price}
                </span>
              </div>
              {item.description && (
                <p className="mt-1 text-sm text-primary-400 font-light">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MenuNav = ({ sections }: { sections: string[] }) => {
  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase());

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-16 z-40 bg-background/90 backdrop-blur-sm border-b border-primary/10 shadow-sm">
      <div className="lg:container lg:mx-auto px-4">
        <ul className="flex items-center justify-start lg:justify-center gap-8 py-4 overflow-x-auto w-full">
          {sections.map((section) => (
            <li
              key={section}
              className="relative text-nowrap font-medium text-sm md:text-base font-nunito whitespace-nowrap"
            >
              <button
                className="text-primary/70 hover:text-secondary tracking-[0.15em] transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-secondary/80 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full hover:after:bg-secondary flex items-center gap-2"
                onClick={() => scrollToSection(section)}
              >
                {section}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

const menuData = {
  coffee: {
    title: "Coffee",
    items: [
      { name: "Americano", price: "4.50" },
      { name: "Coffee Large", price: "4.00" },
      { name: "Espresso", price: "3.50" },
      { name: "Cappuccino", price: "5.00" },
      { name: "Latte", price: "5.00" },
      { name: "Cortado", price: "3.75" },
      { name: "Macchiato", price: "4.00" },
      { name: "Flat White", price: "3.75" },
      { name: "Mocha", price: "5.00" },
      { name: "Cold Brew", price: "5.00" },
    ],
  },
  additional: {
    title: "Additional",
    items: [
      { name: "Extra Shot", price: "1.75" },
      { name: "Decaf", price: "1.00" },
      { name: "Non-dairy milk", price: "0.50" },
      { name: "Half & Half", price: "1.00" },
      { name: "Iced", price: "0.50" },
    ],
  },
  tea: {
    title: "Tea",
    items: [
      { name: "Hibiscus", price: "4.00" },
      { name: "Green Tea", price: "4.00" },
      { name: "Chamomile", price: "4.00" },
      { name: "Peppermint", price: "4.00" },
      { name: "Chai", price: "4.50" },
      { name: "Matcha", price: "5.00" },
    ],
  },
  pastries: {
    title: "Pastries",
    items: [
      { name: "Cheese Bread", price: "1.50" },
      { name: "Chicken Croquette", price: "4.50" },
      { name: "Chicken Pie", price: "9.00" },
      { name: "Spinach Ricotta", price: "7.00" },
      { name: "Ham and cheese", price: "7.50" },
      { name: "Croissant", price: "4.50" },
      { name: "Chocolate Croissant", price: "5.00" },
      { name: "Ham & Cheese Croissant", price: "7.50" },
      { name: "Cinnamon Bun", price: "4.00" },
    ],
  },
  cakes: {
    title: "Cakes",
    items: [
      { name: "Carrot", price: "7.00" },
      { name: "Banana", price: "7.00" },
      { name: "Pineapple", price: "7.00" },
      { name: "Coconut", price: "7.00" },
      { name: "Plum Coconut", price: "7.00" },
      { name: "Prestigio", price: "9.00" },
      { name: "Corn Coconut", price: "4.50" },
      { name: "Chocolate Coconut", price: "7.00" },
      { name: "Milk Coconut", price: "9.00" },
      { name: "Brigadeiro", price: "9.00" },
      { name: "Lime", price: "5.50" },
    ],
  },
  brigadeiros: {
    title: "Brigadeiros",
    items: [
      { name: "Coconut", price: "2.50" },
      { name: "Milk chocolate", price: "2.50" },
      { name: "Dark chocolate", price: "2.50" },
      { name: "Coffee", price: "2.50" },
      { name: "Honey cake", price: "2.50" },
      { name: "Half and Half", price: "2.50" },
    ],
    description: "*Ask about flavors every month",
  },
  others: {
    title: "Others",
    items: [
      { name: "Salads", price: "7.00" },
      { name: "Fruit Salad", price: "5.00" },
      { name: "Tuna Sandwich", price: "7.00" },
      { name: "Turkey Sandwich", price: "7.00" },
      { name: "Ham and Cheese Sandwich", price: "7.00" },
      {
        name: "Chicken Soup",
        price: "9.00",
        description: "*Ask about flavors of the day",
      },
    ],
  },
};

export default function MenuPage() {
  const sections = Object.values(menuData).map((section) => section.title);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          fill
          priority
          alt="Stop By Cafe Location"
          className="object-cover brightness-75"
          quality={100}
          src="/stoplocal.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-6 px-4">
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
            >
              <Title className="text-5xl md:text-7xl text-primary brightness-110 mb-4">
                Our Menu
              </Title>
            </motion.div>
            <motion.p
              animate={{ opacity: 1, y: 0 }}
              className="text-lg md:text-xl text-primary/90 max-w-2xl mx-auto font-light"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover our selection of freshly baked goods, artisanal coffee,
              and delightful treats
            </motion.p>
          </div>
        </div>
      </section>

      <div className="relative">
        <MenuNav sections={sections} />
        <div className="pt-12 max-w-5xl mx-auto px-4">
          {Object.values(menuData).map((section) => (
            <MenuSection key={section.title} {...section} />
          ))}
        </div>
      </div>
    </main>
  );
}
