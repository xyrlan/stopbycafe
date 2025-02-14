"use client";
import React from "react";

import ProductsCarousel from "./products-carousel";

const ProductsSection = () => {
  return (
    <section
      className="relative overflow-hidden py-24 bg-gradient-to-b from-secondary-50/40 to-secondary-50"
      id="products"
    >
      <div className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="text-secondary/70 font-light tracking-widest text-sm">
          SOME OF OUR DRINKS
        </div>
        <div className="w-px h-12 bg-gradient-to-b from-secondary/30 to-transparent" />
      </div>
      <div className="absolute inset-0 bg-[url('/wheat.svg')] opacity-5 bg-repeat rotate-45" />
      <div className="relative z-10">
        <ProductsCarousel />
      </div>
    </section>
  );
};

export default ProductsSection;
