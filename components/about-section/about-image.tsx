"use client";
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const AboutImage = () => {
  return (
    <motion.div className='flex-1 relative group overflow-hidden flex justify-center select-none'>
      <Image
        alt="Bakery counter"
        className="rounded-r-full absolute group-hover:opacity-0 duration-300 transition-all group-hover:translate-x-5 max-lg:max-h-[300px] object-cover"
        height={450}
        src="/images/aboutpic5.avif"
        width={450}
      />
      <Image
        alt="Bakery baking"
        className="rounded-r-full max-lg:max-h-[300px] object-cover"
        height={450}
        src="/images/aboutpic6.avif"
        width={450}
      />
    </motion.div>
  )
}

export default AboutImage