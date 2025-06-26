"use client"
import React, { useEffect, useRef, useState } from 'react'
import BannerForm from './BannerForm'
import Image from 'next/image'
import Link from 'next/link'
import { Package2 } from 'lucide-react'
import dynamic from 'next/dynamic'
import { AuroraBackground } from '@/components/ui/aurora-background'
import BannerSwiper from '@/components/common/BannerSwiper'





function Banner({ locationDetails }: any) {
  

  const reviews = [
    {
      link: "#",
      image: "/bark.webp",
      alt: "bark review",
      width: 80,
      height: 80,
    },
    {
      link: "#",
      image: "/brownbook.png",
      alt: "brownbook review",
      width: 110,
      height: 110,
    },
    {
      link: "https://online-exam-relief.vercel.app/",
      image: "/navbar-logo.png",
      alt: "company logo",
      width: 200,
      height: 90,
    },
  ]



  return (
    <>
   
 <AuroraBackground>
      <div
        className="relative overflow-hidden dark:text-zinc-100 text-zinc-800">
        <div className="relative max-w-screen-xl container mx-auto px-4 py-8 sm:px-6 sm:py-8 lg:px-8">
          <div className=" mx-auto text-center grid lg:grid-cols-2 grid-cols-1 ">
            <div className='lg:pt-12 pt-4 lg:space-y-4 space-y-2'>
              <h1 className="text-lg font-bold lg:text-left text-center sm:text-4xl leading-tight px-14 lg:px-0">
                Let Experts Take Your Online Exam and Ace It for You
              </h1>
              <h2 className="text-base font-medium lg:text-left text-center sm:text-2xl leading-5 md:text-[27px] px-14 lg:px-0">
                Secure Academic Success with Affordable Online Exam Assistance
              </h2>
              {/* <p className="md:text-base text-sm font-semibold lg:text-left text-center px-8 lg:px-0 
                text-gray-600 dark:text-gray-400 leading-relaxed ">Our mission is to transform the industry with groundbreaking solutions that ensure your academic excellence</p> */}
             
              <div className='scale-[0.85] md:scale-100'>
                 <BannerSwiper  reviews={reviews} />
              </div>

              <CtaButtons />
            </div>


            <div className="mt-2  lg:scale-90 scale-95">
             <BannerForm locationDetails={locationDetails} />
            </div>

          </div>
        </div>
      </div>
    </AuroraBackground>
    </>
  )
}

export default Banner


export const CtaButtons = () => {


  return (
    <div className="flex flex-row lg:justify-start justify-center items-center mt-4 gap-3 scale-90 md:scale-100">
      <div className='flex justify-center items-center'>
        <Link
          href={"https://wa.me/3197005034911?text=Hi, I urgently need academic assistance. Could you help me submit my assignment before the deadline?"}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <button
            className="relative inline-flex h-11 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2 group-hover:bg-slate-900 transition-colors">
              <Image
                src={'/whatsapp.png'}
                width={20}
                height={20}
                alt=""
                aria-hidden="true"
                loading="lazy"
              />
              WhatsApp Now
            </span>
          </button>
        </Link>
      </div>

      {/* Order Now Button */}
      <div className='flex justify-center items-center'>
        <Link href={'/order-now'} className="group">
          <button
            className="relative inline-flex h-11 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl group-hover:bg-slate-900 transition-colors">
              <Package2 className='mr-2 h-4 w-4' aria-hidden="true" />
              Order Now
            </span>
          </button>
        </Link>
      </div>
    </div>
  )
}