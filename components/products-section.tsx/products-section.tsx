import React from 'react'
import ProductsCarousel from './products-carousel'

const ProductsSection = () => {
  return (
    <section id='products' className='mx-auto overflow-hidden md:py-40 py-20 bg-primary-700'>
      <ProductsCarousel />
    </section>
  )
}

export default ProductsSection