import { motion } from 'framer-motion'
import React from 'react'


type Props = {}

function ExperienceCard2({}: Props) {
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
    src="data:image/jpeg;base64,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" 
    alt="" />
    <div className='px-0 md:px-10'>
        <h4 className='text-3xl font-light'>Pricing Analyst</h4>
        <p className='font-bold text-2xl mt-1'>LabelVie Group</p>
        <div className='flex space-x-2 my-2'>

        </div>
        <p className='uppercase py-5 text-silver-300'>October 2022 - Present</p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
            <li>Implement data science and process automation solutions.</li>
            <li>Optimize pricing methods.</li>
            <li>Manage the performance of the activity and follow the indicators for the BUs: Carrefour Maroc, Atacadao.</li>
        </ul>
    </div>
    </article>
  )
}

export default ExperienceCard2