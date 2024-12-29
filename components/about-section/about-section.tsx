import React from 'react'
import PhotosNDescriptions from './photos-n-descriptions';
import AboutText from './about-text';
import AboutImage from './about-image';

const AboutSection = () => {

  return (
    <section id='about' className='sm:container mx-auto overflow-hidden py-20'>

      
      <PhotosNDescriptions />


      <div className='flex md:flex-row flex-col justify-center items-center mt-20 sm:mt-40 gap-10 md:gap-20'>
        <AboutText />
        <AboutImage />
      </div>
    </section>
  )
}

export default AboutSection