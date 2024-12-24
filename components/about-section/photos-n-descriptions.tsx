import clsx from 'clsx'
import React from 'react'

const PhotosNDescriptions = () => {
  const data = [
    {
      title: 'Treat yourself',
      description: 'We are here to treat you to the best of our coffees and espressos. We believe that the best coffee is the one that makes you feel good.',
      image: '/images/aboutpic1.jpg',
    },
    {
      title: 'Our desserts',
      description: 'We are a coffee shop that loves to make you feel good. Our desserts are made with the finest ingredients and are sure to impress your taste buds.',
      image: '/images/aboutpic2.jpg',
    },
    {
      title: 'Handmade with love',
      description: 'We are committed to providing you with the best coffee and espresso experience. We believe that the best coffee is the one that makes you feel good.',
      image: '/images/aboutpic3.jpg',
    },
    {
      title: 'Our coffees',
      description: 'We are a coffee shop that loves to make you feel good. Our desserts are made with the finest ingredients and are sure to impress your taste buds.',
      image: '/images/aboutpic4.jpg',
    },
  ]

  return (
    <div className='grid md:grid-cols-2'>
      {data.map((item, index) => (
        <div key={index} className={clsx('flex max-md:flex-col items-center justify-center', index > 1 && 'flex-row-reverse')}>
          <img src={item.image} alt={item.title} className={clsx(
            'flex-1 w-full h-full object-cover shadow-lg select-none',
            index > 1 ? ' rounded-b-full' : 'rounded-t-full',
          )} />
          <div className='flex-1 w-full'>
            <div className='flex flex-col items-center text-center gap-5 md:p-20 p-10'>
              <h2 className='text-primary-600 text-xl font-bold mt-5 uppercase'>{item.title}</h2>
              <p className='mt-5 leading-tight font-dancingScript italic '>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PhotosNDescriptions