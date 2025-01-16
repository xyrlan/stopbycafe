import React from 'react'
import PhotosNDescriptions from '../presentation-section/photos-n-descriptions';
import PhotosNDescriptionsMobile from './photos-mobile';

const PresentationSection = () => {

  return (
    <section id='presentation' className='xl:max-w-7xl mx-auto overflow-hidden'>
      <PhotosNDescriptions />
      <PhotosNDescriptionsMobile />
    </section>
  )
}

export default PresentationSection