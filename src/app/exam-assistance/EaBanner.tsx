"use client"
import React from 'react'
import { CtaButtons } from '../(Home)/Banner'
import BannerForm from '../(Home)/BannerForm'
import { AuroraBackground } from '@/components/ui/aurora-background'
import dynamic from 'next/dynamic'

const BannerSwiper = dynamic(() => import ('@/components/common/BannerSwiper'),{
  ssr:false
})


function EaBanner() {
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
      link: "https://online-exam-zeta-eight.vercel.app/",
      image: "/logo (1).png",
      alt: "logo",
      width: 100,
      height: 100,
    },
  ];
  return (
    <AuroraBackground>
      <div
        className="relative overflow-hidden dark:text-zinc-100 text-zinc-800">
        <div className="relative max-w-screen-xl container mx-auto px-4 py-10 sm:px-6 sm:py-8 lg:px-8">
          <div className=" mx-auto text-center grid lg:grid-cols-2 grid-cols-1 ">
            <div className='lg:pt-[5rem] pt-6'>
              <h1 className="text-xl font-bold lg:text-left text-center  sm:text-4xl  leading-none px-20 lg:px-0">
                Ace Your Online Exams with Expert Assistance
              </h1>
              <h2 className="text-lg font-medium lg:text-left text-center sm:text-2xl md:text-[27px] px-12 lg:px-0 pt-2 lg:pt-3">
                Achieve Academic Success with Budget-Friendly Online Exam Help
              </h2>
              <p className="mt-2  md:text-base text-sm lg:text-left text-center px-14 lg:px-0 ">Our mission is to revolutionize exam assistance with innovative solutions and outstanding support for students.</p>
             
              <div className='scale-[0.80] md:scale-100'>
                 <BannerSwiper  reviews={reviews} />
              </div>

              <CtaButtons />
            </div>


            <div className="pb-5  pt-12  ">
              <BannerForm />
            </div>
          </div>
        </div>
      </div>
    </AuroraBackground>
  )
}

export default EaBanner