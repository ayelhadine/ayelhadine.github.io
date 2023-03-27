import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter} from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

function Hero({}: Props) {
    const [text,count] = useTypewriter({
        words:["Hello, It's Ayoub El Hadine",
            "I am a Data Wizard & Machine Learning Engineer",
            "Unlock the Full Potential of Your Data!"],
        loop:true,
        delaySpeed:2000

    })
  return (
<div className='h-screen flex flex-col space-y-8 items-center justify-center
text-center overflow-hidden'>
    <BackgroundCircles />
    <img 
    className='relative rounded-full h-32 w-32 mx-auto'
    src={'https://storage.googleapis.com/kaggle-avatars/images/4652224-kg.png?r=1679222774903'} alt="" />
    <div className='z-20'>
    <h2 className='text-sm uppercase text-lavender-500 pb-2 tracking-[15px]'>Data Scientist
    </h2>
    
    <h1 className='text-5xl lg:6xl font-semibold px-10'>
    <span className='mr-3'>{text}</span>
    <Cursor cursorColor='cyan'/>
    </h1>
    <div className='pt-5'>
        <Link href='#about'>
        <button className='heroButton'>About</button>
        </Link>
        <Link href='#services'>
        <button className='heroButton'>Services</button>
        </Link>
        <Link href='#experience'>
        <button className='heroButton'>Experience</button>
        </Link>
        <Link href='#projects'>
        <button className='heroButton'>Projects</button>
        </Link>
        <Link href='#blog'>
        <button className='heroButton'>Blog</button>
        </Link>
    </div>
    </div> 
</div>
    
  )
}

export default Hero