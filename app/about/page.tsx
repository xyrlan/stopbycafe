"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Title } from "@/components/title";

const storyContent = [
  {
    title: "Our Beginning",
    text: "Founded in 2020, Stop By Cafe emerged from a simple yet powerful vision: to create a space where Brazilian coffee culture meets New York's vibrant energy. Our journey began with a small storefront near Central Park, carefully chosen to become a sanctuary for coffee lovers and food enthusiasts alike.",
  },
  {
    title: "The Brazilian Touch",
    text: "We take pride in bringing authentic Brazilian flavors to Manhattan. Our recipes combine traditional Brazilian baking techniques with contemporary New York influences, creating a unique fusion that sets us apart. Every pastry and coffee beverage tells a story of cultural harmony.",
  },
  {
    title: "Our Philosophy",
    text: "At Stop By Cafe, we believe in creating more than just great coffee and pastries – we're crafting experiences. Our commitment to quality ingredients, artisanal processes, and warm hospitality reflects in every aspect of our service. We're not just a cafe; we're a community hub where memories are made.",
  },
];

const mockupImages = [
  { src: "/images/aboutpic1.jpg", alt: "Café Interior" },
  { src: "/images/aboutpic2.jpg", alt: "Coffee Making Process" },
  { src: "/images/aboutpic3.jpg", alt: "Our Pastries" },
  { src: "/images/aboutpic4.jpg", alt: "Customer Experience" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          fill
          priority
          alt="Central Park View"
          className="object-cover brightness-75"
          quality={100}
          src="/central-park.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-6 px-4">
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
            >
              <Title className="text-5xl md:text-7xl text-secondary brightness-110 mb-4">
                Our Story
              </Title>
            </motion.div>
            <motion.p
              animate={{ opacity: 1, y: 0 }}
              className="text-lg md:text-xl text-secondary/90 max-w-2xl mx-auto font-light"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Where Brazilian warmth meets Manhattan&apos;s sophistication
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Sections */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            {storyContent.map((content, index) => (
              <motion.div
                key={index}
                className="space-y-4"
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-3xl md:text-4xl text-primary/90 font-light tracking-wide">
                  {content.title}
                </h2>
                <p className="text-lg text-primary/80 leading-relaxed font-light">
                  {content.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="py-20 bg-secondary-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl text-primary/90 font-light text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Experience the Atmosphere
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockupImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative aspect-square overflow-hidden rounded-sm shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, scale: 1 }}
              >
                <Image
                  fill
                  alt={image.alt}
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  src={image.src}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl md:text-5xl text-primary/90 font-light">
              Our Location
            </h2>
            <p className="text-lg text-primary/80 max-w-2xl mx-auto leading-relaxed font-light">
              Nestled in the heart of Manhattan, just steps away from Central
              Park&apos;s timeless beauty, Stop By Cafe offers a perfect retreat
              from the city&apos;s bustling energy. Our location combines the
              serenity of the park with the vibrant pulse of New York City,
              creating an ideal spot for both quiet moments and lively
              gatherings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl md:text-4xl text-primary/90 font-light">
              Come Experience Our Story
            </h2>
            <p className="text-lg text-primary/80 max-w-2xl mx-auto font-light">
              We invite you to be part of our journey. Visit us and discover why
              Stop By Cafe has become a beloved destination for coffee
              enthusiasts and food lovers alike.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
