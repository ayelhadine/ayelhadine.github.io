import { motion } from 'framer-motion'
import React from 'react'

type Props = {
  directionLeft?:boolean
}

function Skill({directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
        initial={{
          x:directionLeft ? -200 : 200,
          opacity:0
        }}
        transition={{
          duration:1
        }}
        whileInView={{
          opacity:1,
          x:0
        }}
        src="https://res.cloudinary.com/dxmu9xatr/image/upload/v1679606199/1869px-Python-logo-notext.svg_yoxkgm.png" 
        alt=""
        className='rounded-full border border-gray-500 w-24 h-24 xl:w-32 xl:h-32 filter
        group-hover:grayscale transition duration-300 ease-in-out' />
    </div>
  )
}

export default Skill