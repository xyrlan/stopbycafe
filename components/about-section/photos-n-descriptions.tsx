import clsx from 'clsx'
import Image from 'next/image'
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
    <div className='grid lg:grid-cols-2'>
      {data.map((item, index) => (
        <div key={index} className={clsx('grid grid-cols-2 items-center justify-center')}>

          {index > 1 ? (
 <>

<div className='flex flex-col items-center text-center  max-w-sm'>
   <h2 className='text-primary-600 text-xl font-bold uppercase'>{item.title}</h2>
   <p className='mt-5 leading-tight font-dancingScript italic'>{item.description}</p>
 </div>

 <Image src={item.image} alt={item.title} width={300} height={300} className={clsx(
   'object-cover shadow-lg select-none',
   index > 1 ? 'rounded-b-full' : 'rounded-t-full',
 )} />

 </>
          ) : (
            <>

            <Image src={item.image} alt={item.title} width={300} height={300} className={clsx(
              'object-cover shadow-lg select-none',
              index > 1 ? 'rounded-b-full' : 'rounded-t-full',
            )} />
           
            <div className='flex flex-col items-center text-center  max-w-sm'>
              <h2 className='text-primary-600 text-xl font-bold uppercase'>{item.title}</h2>
              <p className='mt-5 leading-tight font-dancingScript italic'>{item.description}</p>
            </div>
           
            </>
          )}



        </div>
      ))}
    </div>
  )
}

export default PhotosNDescriptions