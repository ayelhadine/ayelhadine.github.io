import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { SocialIcon } from 'react-social-icons'


type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20
    xl:items-center'>
        <motion.div
        initial={{
          x:-500,
          opacity:0,
          scale:0.5
        }}
        animate={{
          x:0,
          opacity:1,
          scale:1
        }}

        transition={{
          duration:1,
        }}
        className='flex flex-row items-center'>
            {/*social icons*/}
            <SocialIcon url="https://linkedin.com/in/ayoubelhadine/" 
            fgColor='lavender'
            bgColor='transparent'/>

            <SocialIcon url="https://medium.com/@ayoubelhadine/" 
            fgColor='lavender'
            bgColor='transparent'/>

            <SocialIcon url="https://github.com/ayelhadine/" 
            fgColor='lavender'
            bgColor='transparent'/>
        </motion.div>

        
        
         <motion.div
         initial={{
          x:500,
          opacity:0,
          scale:0.5
         }}
          animate={{
            x:0,
            opacity:1,
            scale:1
          }}
          transition={{
            duration:1
          }}>  
       
        <SocialIcon 
            network='email'
            fgColor='lavender'
            bgColor='transparent'
            />
            <Link href={'#contact'}>
            <p className='uppercase hidden md:inline-flex text-sm text-lavender-400'> 
            Contact Me
            </p>
            </Link>
        </motion.div>
    
    </header>

  )
}

export default Header