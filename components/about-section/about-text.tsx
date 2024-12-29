import clsx from 'clsx'
import React from 'react'
import WheatDividerBlack from '../wheatDividerBlack'

const AboutText = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='max-w-md text-center'>
        <h2 className={clsx(
          'text-primary-600 uppercase my-2 md:text-4xl text-2xl font-bold',
        )}>
          ABOUT US
        </h2>
        <WheatDividerBlack />
        <p className='mt-10 leading-tight italic'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae soluta repellat quasi ab a! Nihil perspiciatis quibusdam quae illum! Doloribus natus sed aliquid eaque consectetur ab optio, atque laudantium ut?.
        </p>
      </div>
    </div>
  )
}

export default AboutText