import React from 'react'
import ProductsCarousel from './products-carousel'

const ProductsSection = () => {
  return (
    <section id='products' className='lg:mx-auto overflow-hidden py-20 bg-primary'>
      <ProductsCarousel />
    </section>
  )
}

export default ProductsSection