"use client"
import React from 'react'
import BannerForm from './BannerForm'
import Image from 'next/image'
import Link from 'next/link'
import { AuroraBackground } from '@/components/ui/aurora-background'
import { motion } from "framer-motion";
import { Package2 } from 'lucide-react'


function Banner() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
     className="relative overflow-hidden dark:text-zinc-100 text-zinc-800">

    <div className="relative max-w-screen-xl container mx-auto px-5 py-10 sm:px-6 sm:py-8 lg:px-8">
      <div className=" mx-auto text-center grid lg:grid-cols-2 grid-cols-1 ">
        <div className='lg:pt-[5rem] pt-12'>
        <h1 className="text-xl font-bold lg:text-left text-center  sm:text-3xl md:text-4xl leading-3">
        Let Experts Take Your Online Exam and Ace It for You
        </h1>
        <h2 className="text-lg font-medium lg:text-left text-center sm:text-2xl md:text-[27px] pt-1 lg:pt-3">
        Secure Academic Success with Affordable Online Exam Assistance
        </h2>
        <p className="mt-2 md:text-base text-sm lg:text-left text-center">Our mission is to transform the industry with groundbreaking solutions and exceptional customer service.</p>

        <div className="grid lg:grid-cols-3 grid-cols-1 mt-6 items-center px-2  gap-5 py-5 bg-[#f4f4f5f3] lg:scale-100 scale-75 lg:w-[550px] justify-center rounded-xl border border-zinc-800 dark:border-zinc-100 shadow-xl">
              <div className="flex items-center justify-center scale-95 hover:scale-100 transition ease-in duration-200 delay-200">
                <a href="#">
                  <Image className="lg:translate-y-[12px]" src="/bark.webp" alt="bark"  width={100} height={100} />
                  <div className="mt-4 lg:translate-y-1">⭐⭐⭐⭐⭐</div>
                </a>
              </div>

              <div className="flex items-center justify-center scale-95 hover:scale-100 transition ease-in duration-200 delay-200">
                <a href="#">
                  <Image
                   className="lg:translate-y-[5px]"
                    src="/brownbook.png"
                    alt="brownbook"
                    width={140}
                    height={140}
                  />
                <div className="lg:translate-y-[8px]">⭐⭐⭐⭐⭐</div>
                </a>
              </div>

              <div className="flex items-center justify-center scale-95 hover:scale-100 transition ease-in duration-200 delay-200">
                <div>
                  <a href="#">
                    <Image
                    className="lg:-translate-x-4"
                      src="/logo (1).png"
                      alt="logo"
                      width={140}
                      height={140}
                    />
                    <span>⭐⭐⭐⭐⭐</span>
                  </a>
                </div>
              </div>
        </div>

        <CtaButtons/>
        </div>

       
        <div className="pb-5 px-5 pt-12  ">
        <BannerForm />
        </div>
      </div>
    </div>
    
  </motion.div>
  </AuroraBackground>

  )
}

export default Banner



export function CtaButtons() {
  return (
    <div className="flex flex-row lg:justify-start justify-center items-center mt-3 gap-3 scale-90 md:scale-100">
<div className='flex justify-center items-center my-3'>
    <Link href={"https://wa.me/3197005034911?text=Hi, I urgently need academic assistance. Could you help me submit my assignment before the deadline?"} target="_blank" rel="noopener noreferrer">
  <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2">
        <Image src={'/whatsapp.png'} width={22} height={22} alt='whatsapp'/>  Whatsapp Now
      </span>
    </button>
    </Link>
  </div>


  <div className='flex justify-center items-center'>
    <Link href={'/order-now'}>
  <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        <Package2 className='mr-2'/>  Order Now
      </span>
    </button>
    </Link>

  </div>
    </div>
  );
}

