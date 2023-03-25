import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'


type Props = {}

function Projects({}: Props) {
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row
    max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-lavender-500
        text-2xl'>
            Projects
        </h3>
    
    <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
    snap-mandatory z-20 scrollbar scrollbar-track-[#00BFFF]/50
    scrollbar-thumb-[#E6E6FA]/80'>
                
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
                className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5
                items-center justify-center p-20 md:p-44 h-screen' suppressHydrationWarning>
                <Link href={"https://github.com/ayelhadine/Resume-Parser-Shortlisting-Project"}>
                    <motion.img 
                    initial={{
                        y:-300,
                        opacity:0
                    }}
                    transition={{
                        duration:1.2
                    }}
                    whileInView={{
                        opacity:1,
                        y:0
                    }}
                    viewport={{
                        once:true
                    }}
                    src="https://res.cloudinary.com/dxmu9xatr/image/upload/c_scale,w_417/v1679339884/home_uadg6a.png"
                    alt="" />
                 </Link>   
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font semibold text-center'>
                            Resume Parsing and Shortlisting Web App
                        </h4>
                        <p className='text-lg text-center md:text-left'>
                        This is an end to end machine learning project served on Flask for parsing and ranking candidates based on similarity scores between resumes and job description.
                        </p>
                    </div>
                
                </motion.div>
        
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
                className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5
                items-center justify-center p-20 md:p-44 h-screen' suppressHydrationWarning>
                <Link href={"https://github.com/ayelhadine/AlexNet-Pytorch-Implementation-to-detect-Potholes-in-roads"}>
                    <motion.img 
                    initial={{
                        y:-300,
                        opacity:0
                    }}
                    transition={{
                        duration:1.2
                    }}
                    whileInView={{
                        opacity:1,
                        y:0
                    }}
                    viewport={{
                        once:true
                    }}
                    src="https://res.cloudinary.com/dxmu9xatr/image/upload/c_scale,w_496/v1679605548/remotesensing-09-00848-g001_sabjsc.png"
                    alt="" />
                 </Link>   
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font semibold text-center'>
                            Pytorch Potholes Classifier
                        </h4>
                        <p className='text-lg text-center md:text-left'>
                        This is an AlexNet Pytorch implementation to detect Potholes in roads.

                        </p>
                    </div>
                
                </motion.div>             

  

    </div>
        <div className='w-full absolute top-[30%] bg-[#6A5ACD]/50 left-0 h-[500px] -skew-y-12'/>
    </div>
  )
}

export default Projects