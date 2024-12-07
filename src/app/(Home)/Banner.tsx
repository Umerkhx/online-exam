import React from 'react'
import BannerForm from './BannerForm'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

function Banner() {
  return (
    <section className="relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-violet-400 to-purple-400 dark:bg-gradient-to-br dark:from-blue-950 dark:via-violet-900 dark:to-purple-900" />
    <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
    <div className="relative max-w-screen-xl container mx-auto px-4 py-10 sm:px-6 sm:py-20 lg:px-8">
      <div className=" mx-auto text-center grid lg:grid-cols-2 grid-cols-1 ">
        <div className='pt-24'>
        <h1 className="text-3xl font-extrabold tracking-tight lg:text-left text-center text-white sm:text-4xl md:text-5xl">
        Let Experts Take Your Online Exam and Ace It for You
        </h1>
        <h2 className="text-2xl font-bold tracking-tight text-white lg:text-left text-center sm:text-3xl md:text-4xl pt-3">
        Secure Academic Success with Affordable Online Exam Assistance
        </h2>
        <p className="mt-6 text-lg text-white max-w-prose text-left">Our mission is to transform the industry with groundbreaking solutions and exceptional customer service.</p>
        <CtaButtons/>
        </div>

       
        <div className="pb-5 px-5 pt-12  ">
        <BannerForm />
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-gray-900" />
  </section>  

  )
}

export default Banner



export function CtaButtons() {
  return (
    <div className="flex flex-col md:flex-row lg:justify-start justify-center items-center mt-5 scale-90 md:scale-100">
      <Link href={"/order-now"}>
        <div className="flex justify-center items-center border-[2px] border-zinc-400 bg-zinc-100
    transition ease-in duration-200 delay-200 hover:scale-105 hover:shadow-lg py-2 px-4 rounded-lg  m-2">
          <Image src={"/fulfillment.png"} width={30} height={30} alt="order" />
          <button className="font-medium ml-2 text-zinc-800 md:text-base text-sm ">
            Order Now
          </button>
        </div>
      </Link>

      <Link href={"https://wa.me/3197005034911?text=Hi, I urgently need academic assistance. Could you help me submit my assignment before the deadline?"} target="_blank" rel="noopener noreferrer">
        <div className="flex justify-center items-center border-[2px] bg-zinc-100 
transition ease-in duration-200 delay-200 hover:scale-105 hover:shadow-lg py-2 px-4 rounded-lg m-2">
          <Image
            src={"/whatsapp.png"}
            width={25}
            height={25}
            alt="whatsapp"
          />
          <button className="font-medium ml-2 text-zinc-800  md:text-base text-sm">
            Chat On Whatsapp
          </button>
        </div>
      </Link>
    </div>
  );
}

