import { ArrowRightIcon, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className=' dark:bg-gradient-to-t dark:from-gray-900 dark:to-sky-900 bg-gradient-to-b from-sky-100 to-blue-200 '>
      <div className='grid lg:grid-cols-5 grid-cols-2 lg:px-8 px-4 lg:pt-32 md:pt-24 pt-[200px] max-w-screen-xl mx-auto '>
        <div className='col-span-2'>
          <Image src={'/logo (1).png'} width={200} height={200} alt='logo'></Image>
          <p className='text-sm font-medium p-2'>Online Class Relief offers top-tier solutions with a team of PhD tutors and dependable resources, using a goal-driven approach to achieve desired outcomes.</p>
          <div className='group'>
            <Link href={'https://wa.me/3197005034911?text=Hi, I urgently need academic assistance. Could you help me submit my assignment before the deadline?'} target='_blank'>
              <div className=' flex items-center gap-1 mt-5 px-5 py-3 rounded-full text-center bg-gradient-to-r from-sky-800 to-zinc-700 text-zinc-100 w-36 group-hover:shadow-xl transition ease-in duration-300 delay-300 cursor-pointer '>Contact Us <ArrowRightIcon className='w-5 h-5 group-hover:translate-x-3 transition ease-in duration-300 delay-300 ' /></div>
            </Link>
          </div>
        </div>

        <div className='p-4 mt-4 lg:mt-0'>
          <h2 className='font-bold md:text-2xl text-lg '>Useful Links</h2>
          <div className='flex flex-col  space-y-2 font-medium transition ease-in duration-200 delay-200'>

            <Link href={'/'} className='pt-3 hover:text-foreground hover:scale-105 transition ease-in duration-200 delay-200 text-sm md:text-base'>Home</Link>
            <Link href={'/about-us'} className='hover:text-foreground hover:scale-105 transition ease-in duration-200 delay-200 text-sm md:text-base'>About Us</Link>
            <Link href={'/contact-us'} className='hover:text-foreground hover:scale-105 transition ease-in duration-200 delay-200 text-sm md:text-base'>Contact Us</Link>
            <Link href={'/order-now'} className='hover:text-foreground hover:scale-105 transition ease-in duration-200 delay-200 text-sm md:text-base'>Order Now</Link>
          </div>
        </div>

        <div className='p-4 mt-4 lg:mt-0'>
          <h2 className='font-bold md:text-2xl text-lg '>Our Services</h2>
          <div className='flex flex-col  space-y-2 font-medium transition ease-in duration-200 delay-200'>

            <Link href={'/exam-assistance'} className='pt-3 hover:text-foreground hover:scale-105 transition ease-in duration-200 delay-200 text-sm md:text-base'>Exam Assistance Services</Link>
            <Link href={'#'} className='hover:text-foreground hover:scale-105 transition ease-in duration-200 delay-200 text-sm md:text-base'>Subject-Specific Services</Link>
            <Link href={'#'} className='hover:text-foreground hover:scale-105 transition ease-in duration-200 delay-200 text-sm md:text-base'>Assignment Help Services</Link>
            <Link href={'#'} className='hover:text-foreground hover:scale-105 transition ease-in duration-200 delay-200 text-sm md:text-base'>Test Preparation Packages</Link>
            <Link href={'#'} className='hover:text-foreground hover:scale-105 transition ease-in duration-200 delay-200 text-sm md:text-base'>Emergency Exam Support</Link>

          </div>
        </div>



        <div className='p-4'>
          <h2 className='font-bold md:text-2xl text-lg '>Get In Touch</h2>
          <div className='flex flex-col  space-y-2 font-medium transition ease-in duration-200 delay-200 text-sm md:text-base'>
            <Link href={'#'} className='pt-3 hover:text-foreground hover:scale-105 transition ease-in duration-200 delay-200 text-sm md:text-base'>Phone: +1-929-322-8709</Link>
            <Link href={'#'} className='hover:text-foreground hover:scale-105 transition ease-in duration-200 delay-200 text-sm md:text-base'>E-mail: info@onlineclassrelief.com</Link>
          </div>
        </div>


      </div>

      <div className='lg:flex flex-col lg:flex-row justify-between items-center mt-3  px-8 py-4 max-w-screen-xl mx-auto'>
        <div className='font-medium text-sm '>Copyright © 2024 Online Exam Relief All Rights Reserved</div>
        <div className='space-x-3 font-medium text-sm'>
          <Link href={'/terms-and-condtions'} >Terms of service</Link>
          <Link href={'/privacy-policy'}>Privacy policy</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer