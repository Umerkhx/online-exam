"use client"
import React, { useEffect, useRef, useState, Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { gsap } from 'gsap'
import { Package2, Sparkles, BookOpen, Award } from 'lucide-react'
import dynamic from 'next/dynamic'
import {Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

// Dynamically import heavy components with loading states
const BannerForm = dynamic(() => import('./BannerForm'), {
  loading: () => <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 h-[500px] flex items-center justify-center">Loading form...</div>,
  ssr: false
})



// Content skeleton for specific elements
const ContentSkeleton = ({ className = "" }: { className?: string }) => (
  <div className={`bg-gray-200 dark:bg-gray-700 rounded animate-pulse ${className}`} />
)

// Full section skeleton
const BannerSkeleton = () => (
  <div className="mx-auto text-center grid lg:grid-cols-2 grid-cols-1 gap-6 lg:gap-8">
    {/* Left content skeleton */}
    <div className='lg:pt-12 pt-6 space-y-6'>
      <ContentSkeleton className="h-12 w-full max-w-[600px]" />
      <ContentSkeleton className="h-8 w-full max-w-[500px]" />
      <ContentSkeleton className="h-6 w-full max-w-[400px]" />
      
      <div className="bg-white/20 py-2 px-4 mt-6 rounded-xl w-full max-w-[500px]">
        <div className="flex justify-center gap-4 py-4">
          <ContentSkeleton className="w-16 h-16 rounded-lg" />
          <ContentSkeleton className="w-16 h-16 rounded-lg" />
          <ContentSkeleton className="w-16 h-16 rounded-lg" />
        </div>
      </div>
      
      <div className="flex gap-3 justify-center lg:justify-start mt-4">
        <ContentSkeleton className="h-11 w-32 rounded-full" />
        <ContentSkeleton className="h-11 w-28 rounded-full" />
      </div>
    </div>
    
    {/* Right form skeleton */}
    <div className="lg:mt-8 mt-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg mx-auto w-[450px] p-6 h-[500px]">
        <ContentSkeleton className="h-10 w-3/4 mb-6 mx-auto" />
        <div className="space-y-4">
          <ContentSkeleton className="h-12 w-full" />
          <ContentSkeleton className="h-12 w-full" />
          <ContentSkeleton className="h-12 w-full" />
          <ContentSkeleton className="h-12 w-full" />
          <ContentSkeleton className="h-12 w-full mt-8" />
        </div>
      </div>
    </div>
  </div>
)

const CtaButtons = dynamic(() => Promise.resolve(() => {
  const buttonsRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (!isMobile && buttonsRef.current) {
      gsap.fromTo(buttonsRef.current.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, delay: 0.3, ease: "power2.out" }
      )
    }
  }, [isMobile])

  return (
    <div ref={buttonsRef} className="flex flex-row lg:justify-start justify-center items-center mt-4 gap-3 scale-90 md:scale-100">
      {/* WhatsApp Button */}
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
              <Package2 className='mr-2 h-4 w-4' aria-hidden="true"/>
              Order Now
            </span>
          </button>
        </Link>
      </div>
    </div>
  )
}), {
  loading: () => <div className="flex gap-3 justify-center lg:justify-start mt-4">
    <div className="h-11 w-32 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
    <div className="h-11 w-28 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
  </div>
})

function Banner({locationDetails}: any) {
  const [contentLoaded, setContentLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const bannerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const reviewsRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)

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
      image: "/logo (1).png",
      alt: "company logo",
      width: 90,
      height: 90,
    },
  ]

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    // Very short delay for skeleton (just enough to avoid flash on fast connections)
    const timer = setTimeout(() => {
      setContentLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (contentLoaded && !isMobile && bannerRef.current) {
      const tl = gsap.timeline()

      tl.fromTo([titleRef.current, subtitleRef.current, descriptionRef.current],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" }
      )
      .fromTo(reviewsRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
        "-=0.2"
      )
      .fromTo(formRef.current,
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=0.3"
      )

      gsap.to(".floating-icon", {
        y: -8,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.3
      })
    }
  }, [contentLoaded, isMobile])

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Background - always visible */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:to-sky-900/90" />

      {/* Floating Elements - Desktop only */}
      {!isMobile && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="floating-icon absolute top-20 left-10 text-blue-200 dark:text-blue-800 opacity-60">
            <Sparkles className="w-6 h-6" />
          </div>
          <div className="floating-icon absolute top-40 right-20 text-purple-200 dark:text-purple-800 opacity-60">
            <BookOpen className="w-5 h-5" />
          </div>
          <div className="floating-icon absolute bottom-40 left-20 text-indigo-200 dark:text-indigo-800 opacity-60">
            <Award className="w-6 h-6" />
          </div>
        </div>
      )}

      <div ref={bannerRef} className="relative max-w-screen-xl container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {!contentLoaded ? (
          <BannerSkeleton />
        ) : (
          <div className="mx-auto text-center grid lg:grid-cols-2 grid-cols-1 gap-6 lg:gap-8">
            {/* Text Content */}
            <div className='lg:pt-12 pt-6 space-y-4'>
              <h1 
                ref={titleRef}
                className="text-xl px-12 lg:px-0 font-bold lg:text-left text-center sm:text-3xl md:text-4xl 
                bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 
                bg-clip-text text-transparent leading-tight"
              >
                Let Experts Take Your Online Exam and Ace It for You
              </h1>

              <h2 
                ref={subtitleRef}
                className="text-base font-semibold lg:text-left text-center sm:text-xl md:text-2xl 
                px-12 lg:px-0 text-gray-700 dark:text-gray-300"
              >
                Secure Academic Success with Affordable Online Exam Assistance
              </h2>
              
              {/* <p 
                ref={descriptionRef}
                className="md:text-base text-sm font-semibold lg:text-left text-center px-8 lg:px-0 
                text-gray-600 dark:text-gray-400 leading-relaxed"
              >
                Our mission is to transform the industry with groundbreaking solutions that ensure your academic excellence
              </p> */}

              <div 
                ref={reviewsRef}
                className="bg-white/80 backdrop-blur-sm py-3 px-4 mt-6 
                scale-90 md:scale-100 rounded-xl w-full max-w-[500px] mx-auto lg:mx-0 
                shadow-md border border-white/20"
              >
                <Suspense fallback={<div className="flex justify-center gap-4 py-4">
                  <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
                  <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
                  <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
                </div>}>
                  <Swiper
                    slidesPerView={2}
                    spaceBetween={8}
                    breakpoints={{
                      1025: { slidesPerView: 3, spaceBetween: 12 },
                    }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    modules={[Autoplay]}
                    className="reviews-swiper"
                  >
                    {reviews.map((review, index) => (
                      <SwiperSlide key={index}>
                        <div className="flex flex-col items-center justify-center p-3 rounded-lg 
                        hover:bg-white/50 dark:hover:bg-white/20 transition-all duration-200">
                          <a href={review.link} className="group">
                            <div className="relative overflow-hidden rounded-lg">
                              <Image
                                src={review.image}
                                alt={review.alt}
                                width={review.width}
                                height={review.height}
                                className="transition-transform duration-200 group-hover:scale-105"
                                loading={index === 0 ? "eager" : "lazy"}
                                priority={index === 0}
                              />
                            </div>
                            <div className="mt-2 text-sm">⭐⭐⭐⭐⭐</div>
                          </a>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </Suspense>
              </div>

              <Suspense fallback={<div className="flex gap-3 justify-center lg:justify-start mt-4">
                <div className="h-11 w-32 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
                <div className="h-11 w-28 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
              </div>}>
                <CtaButtons />
              </Suspense>
            </div>

            {/* Form Section */}
            <div 
              ref={formRef}
              className="lg:-mt-8 -mt-6 lg:scale-[0.9] scale-95"
            >
              <Suspense fallback={<div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 h-[500px] flex items-center justify-center">
                Loading form...
              </div>}>
                <BannerForm locationDetails={locationDetails} />
              </Suspense>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Banner