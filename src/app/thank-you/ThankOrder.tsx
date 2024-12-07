"use client"
import { CheckCheckIcon, HomeIcon, Package2, PhoneCall } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ThankOrder() {

   const name = localStorage.getItem('name')
   const phone = localStorage.getItem('phone')
  return (
    <div className="flex  flex-col items-center justify-center h-screen bg-gradient-to-t from-sky-200 via-purple-200 to-zinc-100 dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] px-4 pb-10 pt-32 md:pt-2 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-screen-xl text-center scale-90 md:scale-100">
      <div className="inline-flex items-center rounded-full bg-violet-600 px-4 py-2 font-semibold text-zinc-200">
        <CheckCheckIcon className="mr-2 h-5 w-5" />
        <span>Thank You for Your Order!</span>
      </div>
      <h1 className="mt-6 text-xl font-medium tracking-tight  sm:text-2xl">
        Dear <span className=' font-bold'>{name || 'user'}</span>.
      </h1>
      <h1 className="pt-3 lg:w-[610px] mx-auto text-lg font-medium  sm:text-xl">
 Thank you for your order! Enjoy a special 40% discount. Check WhatsApp at <span className='font-bold'>{phone}</span> for details! 
      </h1>
      <p className="md:mt-4 mt-2  px-10  lg:px-48 ">
      Thank you for your order! We’re thrilled to have the opportunity to serve you, and our team is already preparing everything to ensure a smooth experience.

You’ll receive a confirmation email shortly with the details of your order. If you have any questions, don’t hesitate to reach out—our team is here to assist you every step of the way. Thank you for choosing us!</p>
      <div className="mt-6 flex flex-col items-center md:flex-row justify-center gap-4">


      <Link href={'https://wa.me/19179331132?text=Hi, I urgently need academic assistance. Could you help me submit my assignment before the deadline?'} target="_blank" rel="noopener noreferrer">
      <div className='flex items-center justify-center hover:scale-105 transition ease-in duration-200 delay-200 py-3 bg-zinc-200 dark:bg-zinc-900 w-[220px] border-[2px] border-black dark:border-white rounded-lg'>
        <Image src={"/imgs/whatsapp.png"} width={25} height={25} alt='whatsapp' />
        <button className='font-medium ml-2 text-background md:text-base text-sm text-black dark:text-zinc-100 '>Track Your Order</button>
      </div>
      </Link>

      <Link
          href="/"
          className="flex items-center justify-center hover:scale-105 transition ease-in duration-200 delay-200 py-3 bg-zinc-200 dark:bg-zinc-900 w-[200px] text-black dark:text-zinc-100 border-[2px] border-black dark:border-white rounded-lg"
          prefetch={false}
        >
           <HomeIcon className='mr-2'/> Return To Home
        </Link>
      </div>
    </div>
  </div>
  )
}

export default ThankOrder