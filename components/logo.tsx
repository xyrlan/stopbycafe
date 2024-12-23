import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

const Logo = ({ width = 300, height = 300}: { width?: number, height?: number }) => {
  return (
    <Image src='/mockuplogo.png' alt='Logo Stop by Café' width={width} height={height} className={clsx(
      'select-none',
      'max-md:h-40 max-md:w-40'
    )} />
  )
}

export default Logo