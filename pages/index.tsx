import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import Link from 'next/link'
import Services from '@/components/Services'
import Blog from '@/components/Blog'



export default function Home() {
  return (
    <div className='bg-[rgb(65,105,225)] text-white h-screen snap-y snap-mandatory
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-[#00BFFF]/50
    scrollbar-thumb-[#E6E6FA]/80'>
      <Head>
        <title>Ayoub El-Hadine</title>
      </Head>
      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="Hero" className='snap-start'>
      <Hero />
      </section>
      {/* About */}
      <section id='about' className='snap-center'>
        <About/>
      </section>

      {/* Experience */}
      <section id='experience'
      className='snap-center'>
        <WorkExperience/>
      </section>

      {/* Services */}
      <section id="services" className='snap-start'>
        <Services/>
      </section>

      {/* Projects */}
      <section id="projects" className='snap-start'>
        <Projects />
      </section>

      {/* Blog */}
            <section id="blog" className='snap-start'>
        <Blog />
      </section>

      {/* Contact Me */}
    <section id="contact" className='snap-start'>
      <ContactMe/>
    </section>
    <Link href="#Hero">
    <footer className='sticky bottom-5 w-full cursor-pointer'>
      <div className='flex items-center justify-center'>
        <img 
        className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0
        cursor-pointer'
        src="https://storage.googleapis.com/kaggle-avatars/images/4652224-kg.png?r=1679222774903" alt="" />
      </div>
    </footer>
    </Link>
    </div>
  )
}
