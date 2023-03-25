import { motion } from 'framer-motion'
import React from 'react'


type Props = {}

function About({}: Props) {
  return (
    <motion.div
    initial={{
        opacity:0
    }} 
    whileInView={{
        opacity:1
    }}
    transition={{
        duration:1.2
    }}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-lavender-500
        text-2xl'>
            About
        </h3>
        <motion.img
        initial={{
            x:-200,
            opacity:0
        }}
        whileInView={{
            x:0,
            opacity:1
        }}
        transition={{
            duration:1.2
        }}
        viewport={{
            once:true
        }}
        src="https://res.cloudinary.com/dxmu9xatr/image/upload/v1679243769/aiimg_g49b4k.png" 
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-95 xl:w-[200px] xl:h-[300px]'/>
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                Who is{" "} <span className='underline decoration-[##00FFFF]/40'>Ayoub</span>{" "}?
            </h4>
            <p className='text-base'>
            As a data scientist, I specialize in extracting insights from complex data sets and using them to drive business decisions. With a strong background in statistics, machine learning, and data visualization, I can help you identify patterns, trends, and correlations that might otherwise go unnoticed. Whether you're looking to improve your product offerings, streamline your operations, or better understand your customers, I can help you unlock the full potential of your data. Contact me today to learn more about how I can help you achieve your business goals.

            </p>
        </div>
    </motion.div>
  )
}

export default About