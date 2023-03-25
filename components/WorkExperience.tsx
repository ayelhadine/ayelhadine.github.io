import { motion } from 'framer-motion'
import React from 'react'
import ExperienceCard from './ExperienceCard'
import ExperienceCard2 from './ExperienceCard2'
import ExperienceCard3 from './ExperienceCard3'

type Props = {}

function WorkExperience({}: Props) {
  return (
    <motion.div  
    initial={{
        opacity:0
    }}
    whileInView={{
        opacity:1

    }}
    transition={{
        duration:1.5
    }}
    className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row
    max-w-full px-10 justify-evenly mx-auto items-center'>
    <h3 className='absolute top-24 uppercase tracking-[20px] text-lavender-500
        text-2xl'>
        Experience
    </h3>

    <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-madatory
    scrollbar scrollbar-track-[#00BFFF]/50
    scrollbar-thumb-[#E6E6FA]/80'>
    <ExperienceCard2/>
    <ExperienceCard/>
    <ExperienceCard3/>
    </div>
    </motion.div>
  )
}

export default WorkExperience