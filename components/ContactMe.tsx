import React from 'react'
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form"

type Props = {}
type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
  };

function ContactMe({}: Props) {

    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:elhadinejobs@gmail.com?subject=${formData.subject}&body=
        Hi, my name is ${formData.name}. ${formData.message}`
    }

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto  items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-lavender-500
        text-2xl'>
            Contact
        </h3>

        <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
        Feel free to {" "}<span className='decoration-lavender/50 underline'>contact me</span>{" "} for any question. 
        </h4>
        <div className='space-y-10'>
        <div className='flex items-center space-x-5 justify-center'>
        <EnvelopeIcon className='text-lavender h-7 w-7 animate-pulse'/>
        <p className='text-2xl'>elhadinejobs@gmail.com</p>
        </div>

        <div className='flex items-center space-x-5 justify-center'>
        <MapPinIcon className='text-lavender h-7 w-7 animate-pulse'/>
        <p className='text-2xl'>Rabat, Morocco</p>
        </div>
        </div>  

        <form 
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col space-y-2 w-fit mx-auto'>
        <div className='flex space-x-2'>
            <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
            <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
        </div>
        <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />   
        <textarea {...register('message')} placeholder='Message' className='contactInput'></textarea> 
        <button 
        type='submit'
        className='bg-[#E6E6FA] py-5 px-10 rounded-md text-[#4169E1] font-bold
        text-lg'>Submit</button>
        </form>  
        </div>    
    </div>
  )
}

export default ContactMe