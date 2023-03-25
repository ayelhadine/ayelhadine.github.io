import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

type Props = {}

function Blog({}: Props) {
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row
    max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-lavender-500
        text-2xl'>
            Blog
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
                items-center justify-center p-20 md:p-44 h-screen'>
                <Link href={"https://medium.com/mlearning-ai/building-a-robust-model-with-partial-least-squares-regression-pls-39fc5c47c843"}>
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
                    src="https://miro.medium.com/v2/resize:fit:500/format:webp/1*CkD-zd6c_dEgQT-6nUDJlg.png"
                    alt="" />
                 </Link>   
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font semibold text-center'>
                        Building a Robust Model with Partial Least Squares Regression (PLS)
                        </h4>
                        <p className='text-lg text-center md:text-left'>
                        Robustness is what every data-scientist thinks of while building their machine learning models either for classification or regression tasks.. 
                        </p>
                        <Link href='https://medium.com/mlearning-ai/building-a-robust-model-with-partial-least-squares-regression-pls-39fc5c47c843'>
                    <button className='readButton'>Read More..</button>
                    </Link> 
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
                <Link href={"https://ayoubelhadine.medium.com/hyperparameter-optimization-this-is-almost-all-you-need-b76ef41cc36f"}>
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
                    src="https://miro.medium.com/v2/resize:fit:500/0*GTmq_xJ1lSwjVypO"
                    alt="" />
                 </Link>   
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font semibold text-center'>
                        Hyperparameter Optimization: This is Almost All You Need
                        </h4>
                        <p className='text-lg text-center md:text-left'>
                        Hyperparameter optimization is one of the crucial techniques that every Data Scientist / ML Engineer should master in order to get the best performing model..
                        </p>
                        <Link href='https://ayoubelhadine.medium.com/hyperparameter-optimization-this-is-almost-all-you-need-b76ef41cc36f'>
                    <button className='readButton'>Read More..</button>
                    </Link>
                    </div>
                
                </motion.div>             

  

    </div>
        <div className='w-full absolute top-[30%] bg-[#6A5ACD]/50 left-0 h-[500px] -skew-y-12'/>
    </div>
  )
}

export default Blog