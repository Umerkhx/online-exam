"use client"
import React from 'react'
import BannerForm from './BannerForm'
import Image from 'next/image'
import Link from 'next/link'
import { AuroraBackground } from '@/components/ui/aurora-background'
import { motion } from "framer-motion";
import { Package2 } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';


function Banner({locationDetails}:any) {
  const reviews = [
    {
      link: "#",
      image: "/bark.webp",
      alt: "bark",
      width: 90,
      height: 90,
    },
    {
      link: "#",
      image: "/brownbook.png",
      alt: "brownbook",
      width: 130,
      height: 130,
    },
    {
      link: "https://online-exam-relief.vercel.app/",
      image: "/logo (1).png",
      alt: "logo",
      width: 100,
      height: 100,
    },
  ];
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

    <div className="relative max-w-screen-xl container mx-auto px-2 py-10 sm:px-6 sm:py-6 lg:px-8">
      <div className=" mx-auto text-center grid lg:grid-cols-2 grid-cols-1 ">
        <div className='lg:pt-12 pt-4'>
        <h1 className="text-xl px-12 lg:px-0 font-bold lg:text-left text-center  sm:text-3xl md:text-4xl ">
        Let Experts Take Your Online Exam and Ace It for You
        </h1>
        <h2 className="text-base font-semibold lg:text-left text-center sm:text-2xl md:text-[27px] pt-2 lg:pt-3 px-16 lg:px-0">
        Secure Academic Success with Affordable Online Exam Assistance
        </h2>
        <p className="mt-2 md:text-base text-sm lg:text-left text-center px-10 lg:px-0">Our mission is to transform the industry with groundbreaking solutions</p>

            <div className="bg-white py-4 px-2 mt-5 scale-90 md:scale-100 rounded-xl w-full max-w-[550px]">
              <Swiper
                slidesPerView={2}
                spaceBetween={10}
                breakpoints={{
                  1025: { slidesPerView: 3, spaceBetween: 15 },
                }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                modules={[Autoplay]}
              >
                {reviews.map((review, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col items-center justify-center">
                      <a href={review.link}>
                        <Image
                          src={review.image}
                          alt={review.alt}
                          width={review.width}
                          height={review.height}
                          className="translate-y-2"
                        />
                        <div className="mt-2">⭐⭐⭐⭐⭐</div>
                      </a>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

        <CtaButtons/>
        </div>

       
        <div className="lg:-mt-14 -mt-5  lg:scale-[0.85] scale-90">
        <BannerForm locationDetails={locationDetails}/>
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
    <Link href={"https://wa.me/3197005034911?text=Hi, I urgently need academic assistance. Could you help me submit my assignment before the deadline?"} target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp">
  <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" aria-label="Chat on WhatsApp">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2">
        <Image src={'/whatsapp.png'} width={22} height={22} alt='whatsapp'/>  Whatsapp Now
      </span>
    </button>
    </Link>
  </div>


  <div className='flex justify-center items-center'>
    <Link href={'/order-now'}   aria-label="Go to order page">
  <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" aria-label="Place an order">
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

