import React from 'react'
import CountryFlags from '../country-flags'
import Logo from '../logo'
import BackgroundCarousel from './background-carousel'
import HeroNavbar from './hero-navbar'
import HeroSlogan from './hero-slogan'
import ScrollDown from './scrolldown'
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col justify-between items-center px-2">
      <div className="z-20 flex flex-col items-center">
        <Logo />
        <HeroNavbar />
        <CountryFlags />
      </div>
      <HeroSlogan />
      <ScrollDown />
      <BackgroundCarousel />
    </section>
  )
}

export default HeroSection