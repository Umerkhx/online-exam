"use client"
import React from 'react'
import { AuroraBackground } from '@/components/ui/aurora-background'
import Image from 'next/image'
import { motion } from "framer-motion";
import { CtaButtons } from '../../(Home)/Banner';
import BannerForm from '../../(Home)/BannerForm';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

function TimedTestBanner() {
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

  <div className="relative max-w-screen-xl container mx-auto px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
    <div className=" mx-auto text-center grid lg:grid-cols-2 grid-cols-1 ">
      <div className='lg:pt-[5rem] pt-12'>
      <h1 className="text-xl font-bold lg:text-left text-center sm:text-4xl md:text-[45px] lg:px-0 px-12">
      Master Timed Tests and Ace Your Exams!
      </h1>
      <h2 className="text-lg font-medium lg:text-left text-center sm:text-3xl pt-2 lg:px-0 px-10 lg:pt-3">
      Master Timed Tests with Affordable Exam Preparation Support      </h2>
      <p className="mt-2  md:text-base text-sm lg:text-left text-center lg:px-0 px-16">
      Our mission is to transform timed test preparation with cutting-edge solutions and exceptional support for students.</p>

 
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

     
      <div className="pb-5  pt-12  ">
      <BannerForm />
      </div>
    </div>
  </div>
  
</motion.div>
</AuroraBackground>
  )
}

export default TimedTestBanner