import Image from 'next/image'
import React from 'react'

const CountryFlags = () => {
  return (
    <div className='z-20 flex items-center gap-4 my-5'>
      <Image src='/flag-eua.png' alt='brasil flag' width={36} height={36} className='h-6' />
      <Image src='/flag-brasil.png' alt='brasil flag' width={36} height={36} className='h-6 ' />
    </div>
  )
}

export default CountryFlags