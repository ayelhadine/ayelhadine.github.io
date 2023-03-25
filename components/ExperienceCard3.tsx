import { motion } from 'framer-motion'
import React from 'react'


type Props = {}

function ExperienceCard3({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#6A5ACD] p-10 hover:opacity-100
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
    <motion.img 
    initial={{
        y:-100,
        opacity:0
    }}
    whileInView={{
        y:0,
        opacity:1
    }}
    transition={{
        duration:1,
    }}
    viewport={{
        once:true
    }}
    className='w-32 h-32 rounded-full md-rounded-full xl:w-[100px] xl:h-[100px]
    object-cover object-center'
    src="https://upload.wikimedia.org/wikipedia/commons/c/c6/Mef-maroc.png" 
    alt="" />
    <div className='px-0 md:px-10'>
        <h4 className='text-3xl font-light'>Data Science Intern</h4>
        <p className='font-bold text-2xl mt-1'>Ministry of Economics and Finances</p>
        <div className='flex space-x-2 my-2'>

        </div>
        <p className='uppercase py-5 text-silver-300'>July 2021 - September 2021</p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
            <li>Econometric estimates of the parameters of the demand functions of the products that households consume in Morocco.</li>
        </ul>
    </div>
    </article>
  )
}

export default ExperienceCard3