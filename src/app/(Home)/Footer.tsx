import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowRightIcon, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className=' bg-gradient-to-br from-blue-300 to-purple-200 dark:bg-gradient-to-br dark:from-blue-900 dark:to-purple-900  '>
      <div className='grid lg:grid-cols-4 grid-cols-1 px-8 py-7 max-w-screen-xl mx-auto'>
        <div className=''>
          <Image src={'/logo (1).png'} width={200} height={200} alt='logo'></Image>
          <p className='text-sm font-medium p-2'>Online Class Relief offers top-tier solutions with a team of PhD tutors and dependable resources, using a goal-driven approach to achieve desired outcomes.</p>
          <div className='group'>
            <div className=' flex items-center gap-1 mt-5 px-5 py-3 rounded-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-zinc-100 w-36 group-hover:shadow-xl transition ease-in duration-300 delay-300 cursor-pointer '>Contact Us <ArrowRightIcon className='w-5 h-5 group-hover:translate-x-3 transition ease-in duration-300 delay-300 ' /></div>
          </div>
        </div>
        <div className='p-4'>
          <h2 className='font-bold text-2xl '>Useful Links</h2>
          <ul className='flex flex-col  space-y-2 font-medium transition ease-in duration-200 delay-200'>

            <Link href={'/'} className='pt-3 hover:text-foreground hover:scale-105 transition ease-in duration-200 delay-200'>Home</Link>
            <Link href={'/about-us'} className='hover:text-foreground hover:scale-105 transition ease-in duration-200 delay-200'>About Us</Link>
            <Link href={'#'} className='hover:text-foreground hover:scale-105 transition ease-in duration-200 delay-200'>Services</Link>
            <Link href={'/contact-us'} className='hover:text-foreground hover:scale-105 transition ease-in duration-200 delay-200'>Contact Us</Link>
            <Link href={'/order-now'} className='hover:text-foreground hover:scale-105 transition ease-in duration-200 delay-200'>Order Now</Link>
          </ul>
        </div>

        <div className='p-4'>
          <h2 className='font-bold text-2xl '>Our Services</h2>
          <ul className=' space-y-2 font-medium   transition ease-in duration-200 delay-200'>

            <li className='pt-3 hover:text-foreground hover:scale-105 transition ease-in duration-200 delay-200'>Online Class</li>
            <li className='hover:text-foreground hover:scale-105 transition ease-in duration-200 delay-200'>Online Exam</li>
            <li className='hover:text-foreground hover:scale-105 transition ease-in duration-200 delay-200'>Online Course</li>
            <li className='hover:text-foreground hover:scale-105 transition ease-in duration-200 delay-200'>Online Assignment</li>
          </ul>
        </div>



        <div className='p-4'>
          <h2 className='font-bold text-2xl '>Get In Touch</h2>
          <ul className=' space-y-2 font-medium   transition ease-in duration-200 delay-200'>
            <li className='pt-3 hover:text-foreground hover:scale-105 transition ease-in duration-200 delay-200'>Phone: +1-929-322-8709</li>
            <li className='hover:text-foreground hover:scale-105 transition ease-in duration-200 delay-200'>E-mail: info@onlineclassrelief.com</li>
          </ul>
    
  
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