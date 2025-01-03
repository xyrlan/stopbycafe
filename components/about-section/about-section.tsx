import React from 'react'
import AboutText from './about-text';
import AboutImage from './about-image';
import { Title } from '../title';
import { title } from '../primitives';
import clsx from 'clsx';
import AboutTitle from './about-title';
import Image from 'next/image';

const AboutSection = () => {

  return (
    <section id='about' className='overflow-hidden py-20 bg-tertiary-300'>
      <div className='sm:max-w-7xl mx-auto'>
        <div className='flex items-center'>
          <AboutTitle />
          <div className='px-2 max-w-xl font-medium text-primary  '>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo sed nam quos ducimus. Maxime dignissimos adipisci nulla voluptatum.</p>
          </div>
        </div>
        <div className={'my-10'}>
          <h2 className={'text-6xl font-extrabold text-primary'}>
            Good things come to those
            <br />
            <span className='text-secondary'> who bake </span> for others.
          </h2>
        </div>
        <div className=' flex md:flex-row flex-col justify-between gap-10 md:gap-20'>
          <Image
            alt="Bakery baking"
            className=" w-full max-md:max-h[300px] max-h-[600px] object-cover shadow"
            height={600}
            src="/images/aboutpic6.avif"
            width={600}
          />
          <div className='flex flex-col gap-10 w-full'>
            <AboutText />
            <AboutImage />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection