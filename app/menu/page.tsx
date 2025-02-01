"use client";
import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

import WheatDivider from "@/components/wheatDivider";
import { Title } from "@/components/title";

interface MenuItem {
  name: string;
  price: string;
  description?: string;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

const MenuSection = ({ title, items }: MenuSection) => {
  return (
    <section className="py-8 scroll-mt-24" id={title.toLowerCase()}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-light text-primary mb-3">
            {title}
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
                <h3 className="text-lg font-nunito text-primary-600 group-hover:text-primary-800 transition-colors">
                  {item.name}
                </h3>
                <span className="text-lg font-roboto text-default-600 group-hover:text-default-700 transition-colors">
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
          {sections.map((section, index) => (
            <motion.li
              key={section}
              animate={{ opacity: 1, y: 0 }}
              className="relative text-nowrap font-medium text-sm md:text-base font-nunito whitespace-nowrap "
              initial={{ opacity: 0, y: -10 }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                // className="text-primary-600 hover:text-secondary-500 transition-colors text-sm md:text-base whitespace-nowrap font-nunito"
                className={clsx(
                  " tracking-[0.15em]",
                  "text-primary/70 hover:text-secondary",
                  "transition-all duration-300",
                  "after:content-[''] after:absolute after:w-0 after:h-[1px]",
                  "after:bg-secondary/80 after:left-0 after:-bottom-1",
                  "after:transition-all after:duration-300",
                  "hover:after:w-full hover:after:bg-secondary",
                  "before:content-[''] before:absolute before:w-[4px] before:h-[4px]",
                  "before:bg-secondary/40 before:-left-4 before:top-1/2 before:-translate-y-1/2",
                  "before:rounded-full before:opacity-0",
                  "hover:before:opacity-100 before:transition-opacity before:duration-300",
                )}
                // href={`#${section.toLowerCase()}`}
                onClick={() => scrollToSection(section)}
              >
                {section}
              </button>
            </motion.li>
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
      { name: "Americano", price: "3.75" },
      { name: "Coffee Large", price: "3.00" },
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
      { name: "Hibiscus", price: "3.50" },
      { name: "Green Tea", price: "3.50" },
      { name: "Chamomile", price: "3.50" },
      { name: "Peppermint", price: "3.50" },
      { name: "Chai", price: "4.50" },
    ],
  },
  pastries: {
    title: "Pastries",
    items: [
      { name: "Cheese Bread", price: "1.50" },
      { name: "Chiken Sfiha", price: "6.50" },
      { name: "Chicken Croquette", price: "3.50" },
      { name: "Chicken Pie", price: "7.00" },
      { name: "Spinach Ricotta", price: "6.00" },
      { name: "Ham and cheese", price: "6.00" },
      { name: "Brioche balls", price: "1.50" },
      { name: "Croissant", price: "4.50" },
      { name: "Chocolate Croissant", price: "4.50" },
      { name: "Ham & Cheese Croissant", price: "4.50" },
      { name: "Cinnamon Bun", price: "4.00" },
      { name: "Sausage Bun", price: "6.50" },
      { name: "Chocolate chip Scone", price: "3.00" },
    ],
  },
  desserts: {
    title: "Desserts",
    items: [
      { name: "Macarron", price: "2.50" },
      { name: "Chocolate chip cookie", price: "2.50" },
      { name: "Guava Cookies", price: "1.50" },
    ],
  },
  cakes: {
    title: "Cakes",
    items: [
      { name: "Carrot", price: "7.00" },
      { name: "Yuca", price: "4.00" },
      { name: "Banana", price: "4.00" },
      { name: "Prestigio", price: "4.00" },
      { name: "Corn Coconut", price: "4.00" },
      { name: "Chocolate Coconut", price: "7.00" },
      { name: "Milk Coconut", price: "4.50" },
      { name: "Lime", price: "5.50" },
    ],
  },
  brigadeiros: {
    title: "Brigadeiros",
    items: [
      { name: "Coconut", price: "2.50" },
      { name: "Milk chocolate", price: "2.50" },
      { name: "Dark chocolate", price: "2.50" },
      { name: "Pistachio", price: "2.50" },
      { name: "Coffee", price: "2.50" },
    ],
    description: "*Ask about flavors every month",
  },
  truffles: {
    title: "Truffles",
    items: [
      { name: "Prestigio", price: "3.00" },
      { name: "White Chocolate", price: "3.00" },
      { name: "Salted Caramel", price: "3.00" },
      { name: "Nutella with Ninho", price: "3.00" },
    ],
    description: "*Ask about flavors every month",
  },
  others: {
    title: "Others",
    items: [
      { name: "Salads", price: "7.00" },
      { name: "Fruit Salad", price: "5.50" },
      { name: "Ham & Cheese Baguette", price: "4.50" },
      { name: "Tuna Sandwich", price: "7.00" },
      { name: "Turkey Sandwich", price: "4.00" },
      {
        name: "Chicken Soup",
        price: "7.00",
        description: "*Ask about flavors of the day",
      },
    ],
  },
};

export default function MenuPage() {
  const sections = Object.values(menuData).map((section) => section.title);

  return (
    <main className="min-h-screen bg-background relative py-20">
      <div className="absolute inset-0 0 bg-gradient-to-b from-secondary-50 to-background  pointer-events-none h-[30vh]" />
      <div className="relative">
        <div className="container mx-auto px-4 pt-20 pb-12 text-center">
          <Title className="text-5xl md:text-6xl text-default mb-4">
            Our Menu
          </Title>
          <p className="text-lg text-primary-600/70 max-w-2xl mx-auto">
            Discover our selection of freshly baked goods, artisanal coffee, and
            delightful treats
          </p>
        </div>
        <MenuNav sections={sections} />
        <div className="pt-12">
          {Object.values(menuData).map((section) => (
            <MenuSection key={section.title} {...section} />
          ))}
        </div>
      </div>
    </main>
  );
}
