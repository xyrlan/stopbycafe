import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

const data = [
  {
    title: 'Treat yourself',
    description: 'We are here to treat you to the best of our coffees and espressos. We believe that the best coffee is the one that makes you feel good.',
    image: '/images/aboutpic1.jpg',
  },
  {
    title: 'Our desserts',
    description: 'We are a coffee shop that loves to make you feel good. Our desserts are made with the finest ingredients and are sure to impress your taste buds.',
    image: '/images/aboutpic1.jpg',
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

const Item = ({ title, description, image, isReverse }: any) => (
  <div className={clsx('flex flex-col lg:flex-row', isReverse && 'lg:flex-row-reverse')}>
    <div className="flex-1">
      <Image src={image} alt={title} width={600} height={600} className="object-cover shadow-lg select-none" />
    </div>
    <div className="flex-1 flex flex-col justify-center text-center gap-5">
        <h2 className="text-primary-600 text-xl font-bold uppercase">{title}</h2>
        <p className="leading-tight font-dancingScript italic px-10">{description}</p>
    </div>
  </div>
)

const PhotosNDescriptions = () => (
  <div className="grid lg:grid-cols-2 ">
    {data.map((item, index) => (
      <React.Fragment key={index}>
        <div className="flex flex-col items-center">
          <Item
            title={item.title}
            description={item.description}
            image={item.image}
            isReverse={index > 1} // reverse layout for items after the second
          />
        </div>
      </React.Fragment>
    ))}
  </div>
)

export default PhotosNDescriptions
