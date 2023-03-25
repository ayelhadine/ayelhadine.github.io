import { motion } from 'framer-motion'
import React from 'react'
import {CpuChipIcon, ChartBarSquareIcon, CogIcon} from '@heroicons/react/24/solid'

type Props = {}

function Services({}: Props) {
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
        Services
    </h3>

    <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-madatory
    scrollbar scrollbar-track-[#00BFFF]/50
    scrollbar-thumb-[#E6E6FA]/80'>
   <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500] md:w-[600px] xl:w-[900px] snap-center bg-[#6A5ACD] p-10 hover:opacity-100
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
    
    <ChartBarSquareIcon className='w-32 h-32 md-rounded-full xl:w-[100px] xl:h-[100px]
    object-cover object-top animate-pulse'/>

    <div className='px-0 md:px-10'>
        <h4 className='text-3xl font-light text-center'>Data Analysis</h4>
        <div className='flex space-x-2 my-2'>

        </div>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
            <li>Data cleaning and preprocessing: I can help you clean and transform your data so that it's ready for analysis.</li>
            <li>Exploratory data analysis: I can perform exploratory data analysis on your dataset to uncover trends, patterns, and relationships.</li>
            <li>Statistical analysis: I can provide you with statistical analysis to support your decision-making process.</li>
        </ul>
    </div>
    </article>

    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#6A5ACD] p-10 hover:opacity-100
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
    
    <CpuChipIcon className='w-32 h-32 rounded-full md-rounded-full xl:w-[100px] xl:h-[100px]
    object-cover object-center animate-pulse'/>

    <div className='px-0 md:px-10'>
        <h4 className='text-3xl font-light text-center'>Machine Learning</h4>
        <div className='flex space-x-2 my-2'>

        </div>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
            <li>Model selection and training: I can help you choose the best machine learning model for your problem and train it on your data using state-of-the-art techniques.</li>
            <li>Model evaluation and optimization: I can help you evaluate the performance of your machine learning model and optimize it to achieve the best possible results.</li>
            <li>Model deployment: I can help you deploy your machine learning model into production, including building APIs, integrating with your existing systems, and monitoring performance.</li>
        </ul>
    </div>
    </article>

    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#6A5ACD] p-10 hover:opacity-100
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
    
    <CogIcon className='w-32 h-32 rounded-full md-rounded-full xl:w-[100px] xl:h-[100px]
    object-cover object-center animate-pulse'/>

    <div className='px-0 md:px-10'>
        <h4 className='text-3xl font-light text-center'>Process Automation</h4>
        <div className='flex space-x-2 my-2'>

        </div>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
            <li>Develop custom automation workflows using industry-standard tools and technologies.</li>
            <li>Integrate different systems and software to automate end-to-end processes.</li>
            <li>Test and deploy automated workflows and monitor their performance.</li>
        </ul>
    </div>
    </article>

    </div>
    </motion.div>
  )
}

export default Services