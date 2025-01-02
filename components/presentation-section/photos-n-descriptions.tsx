import { fontDancingScript } from '@/config/fonts'
import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'
import { subtitle } from '../primitives'
import { image } from '@nextui-org/theme'
import WheatDividerBlack from '../wheatDividerBlack'
import WheatDivider from '../wheatDivider'
import { Title } from '../title'

const data = [
  {
    title: 'Treat yourself',
    description: 'We are here to treat you to the best of our coffees and espressos. We believe that the best coffee is the one that makes you feel good.',
    image: '/images/aboutpic1.jpg',
    image2: '/images/aboutpic3.jpg'
  },
  {
    title: 'Crafted with care',
    description: 'We are a coffee shop that loves to make you feel good. Our desserts are made with the finest ingredients and are sure to impress your taste buds.',
    image: '/images/aboutpic3.jpg',
    image2: '/images/aboutpic1.jpg'

  },
  {
    title: 'Handmade with love',
    description: 'We are committed to providing you with the best coffee and espresso experience. We believe that the best coffee is the one that makes you feel good.',
    image: '/images/aboutpic3.jpg',
    image2: '/images/aboutpic4.jpg'
  },
  {
    title: 'Made with heart',
    description: 'We are a coffee shop that loves to make you feel good. Our desserts are made with the finest ingredients and are sure to impress your taste buds.',
    image: '/images/aboutpic4.jpg',
    image2: '/images/aboutpic3.jpg'
  },
]

const Item = ({ title, description, image, image2, isReverse }: any) => (
  <div className={clsx('flex flex-col lg:flex-row max-lg:gap-5 max-lg:items-center overflow-hidden', isReverse && 'lg:flex-row-reverse')}>
    <div className={clsx("flex-1 relative group overflow-hidden flex justify-center select-none h-[250px]", isReverse ? "rounded-b-full" : " rounded-t-full")}>
      <Image src={image} alt={title} width={600} height={600} className="object-cover shadow-lg absolute group-hover:opacity-0 duration-300 transition-all h-full" />
      <Image src={image2} alt={title} width={600} height={600} className={clsx("object-cover h-full")} />
    </div>
    <div className="flex-1 flex flex-col justify-center text-center gap-2">
      <Title className={"text-primary font-semibold text-3xl"}>{title}</Title>
      {/* <p className="leading-tight italic px-10">{description}</p> */}
      <WheatDividerBlack />
    </div>
  </div>
)

const PhotosNDescriptions = () => (
  <div className="grid lg:grid-cols-2 max-lg:gap-5">
    {data.map((item, index) => (
      <React.Fragment key={index}>
        <div className="flex flex-col items-center">
          <Item
            title={item.title}
            description={item.description}
            image={item.image}
            image2={item.image2}
            isReverse={index > 1} // reverse layout for items after the second
          />
        </div>
      </React.Fragment>
    ))}
  </div>
)

export default PhotosNDescriptions
