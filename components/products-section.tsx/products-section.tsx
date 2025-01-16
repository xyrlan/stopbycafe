import React from "react";

import ProductsCarousel from "./products-carousel";

const ProductsSection = () => {
  return (
    <section className="lg:mx-auto overflow-hidden py-20" id="products">
      <ProductsCarousel />
    </section>
  );
};

export default ProductsSection;
