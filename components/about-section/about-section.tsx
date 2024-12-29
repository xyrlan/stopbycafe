import React from 'react'
import AboutText from './about-text';
import AboutImage from './about-image';

const AboutSection = () => {

  return (
    <section id='about' className='sm:container mx-auto overflow-hidden py-20 md:py-40'>
      <div className='flex md:flex-row flex-col justify-center items-center gap-10 md:gap-20'>
        <AboutText />
        <AboutImage />
      </div>
    </section>
  )
}

export default AboutSection