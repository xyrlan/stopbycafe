"use client";
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const AboutImage = () => {
  return (
    <motion.div className='relative overflow-hidden select-none'>
      <Image
        alt="Bakery counter"
        className=" duration-300 transition-all group-hover:translate-x-5 max-lg:max-h-[300px] object-cover"
        height={500}
        src="/images/aboutpic5.avif"
        width={500}
      />
      {/* <Image
        alt="Bakery baking"
        className=" max-lg:max-h-[300px] object-cover"
        height={500}
        src="/images/aboutpic6.avif"
        width={500}
      /> */}
    </motion.div>
  )
}

export default AboutImage