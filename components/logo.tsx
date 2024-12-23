import Image from 'next/image'
import React from 'react'

const Logo = ({ width = 300, height = 300}: { width?: number, height?: number }) => {
  return (
    <Image src='/mockuplogo.png' alt='Logo Stop by Café' width={width} height={height} className='select-none' />
  )
}

export default Logo