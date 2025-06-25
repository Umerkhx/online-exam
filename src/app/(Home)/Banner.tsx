"use client"
import React, { useEffect, useRef, useState } from 'react'
import BannerForm from './BannerForm'
import Image from 'next/image'
import Link from 'next/link'
import { gsap } from 'gsap'
import { Package2, Sparkles, BookOpen, Award } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

// Content skeleton for specific elements (only used on desktop)
const ContentSkeleton = ({ className = "" }: { className?: string }) => (
  <div className={`bg-gray-200 dark:bg-gray-700 rounded animate-pulse ${className}`} />
)

export const CtaButtons = () => {
  const buttonsRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    // Only animate on desktop
    if (!isMobile && buttonsRef.current) {
      gsap.fromTo(buttonsRef.current.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, delay: 0.3, ease: "power2.out" }
      )
    } else if (isMobile && buttonsRef.current) {
      // Immediately show on mobile
      gsap.set(buttonsRef.current.children, { opacity: 1 })
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
              <Package2 className='mr-2 h-4 w-4' aria-hidden="true" />
              Order Now
            </span>
          </button>
        </Link>
      </div>
    </div>
  )
}

function Banner({ locationDetails }: any) {
  const [isMobile, setIsMobile] = useState(false)
  const [contentLoaded, setContentLoaded] = useState(false)
  const bannerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
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
    const checkMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      // If mobile, set content as loaded immediately
      if (mobile) {
        setContentLoaded(true)
      }
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    // Only simulate loading for desktop
    if (!isMobile) {
      const timer = setTimeout(() => {
        setContentLoaded(true)
      }, 200)
      return () => clearTimeout(timer)
    }
  }, [isMobile])

  useEffect(() => {
    // Only run animations on desktop after content loads
    if (contentLoaded && !isMobile && bannerRef.current) {
      const tl = gsap.timeline()

      tl.fromTo([titleRef.current, subtitleRef.current, descriptionRef.current],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" }
      )
        .fromTo(formRef.current,
          { x: 30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
          "-=0.3"
        )

      // Subtle floating animation for desktop only
      gsap.to(".floating-icon", {
        y: -8,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.3
      })
    }
    
    // For mobile, ensure elements are visible immediately
    if (isMobile) {
      gsap.set([titleRef.current, subtitleRef.current, descriptionRef.current, formRef.current], {
        y: 0,
        x: 0,
        opacity: 1
      })
    }
  }, [contentLoaded, isMobile])

  // On mobile, we consider content always loaded
  const showContent = isMobile || contentLoaded

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Simple background - no complex animations */}
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

      <div ref={bannerRef} className="relative max-w-screen-xl container mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-center grid lg:grid-cols-2 grid-cols-1 gap-6 lg:gap-8">
          {/* Text Content */}
          <div className='lg:pt-12 pt-8 lg:space-y-4 space-y-2'>
            {showContent ? (
              <h1 ref={titleRef} className="text-xl px-12 lg:px-0 font-extrabold lg:text-left text-center sm:text-3xl md:text-4xl 
              bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 
              bg-clip-text text-transparent leading-tight">
                Let Experts Take Your Online Exam and Ace It for You
              </h1>
            ) : (
              <ContentSkeleton className="h-8 w-4/5 mx-auto lg:mx-0" />
            )}

            {showContent ? (
              <h2 ref={subtitleRef} className="text-base font-semibold lg:text-left text-center sm:text-xl md:text-2xl 
                px-12 lg:px-0 text-gray-700 dark:text-gray-300">
                Secure Academic Success with Affordable Online Exam Assistance
              </h2>
            ) : (
              <ContentSkeleton className="h-8 w-4/5 mx-auto lg:mx-0" />
            )}

            <div className='scale-[0.80] md:scale-100 mb-4'>
              <div
                className="bg-white/80 backdrop-blur-sm py-3 px-4 mt-6 
               rounded-xl w-full max-w-[500px] mx-auto lg:mx-0 
              shadow-md border border-white/20"
              >
                {showContent ? (
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
                                priority={index === 0}
                              />
                            </div>
                            <div className="mt-2 text-sm">⭐⭐⭐⭐⭐</div>
                          </a>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <div className="flex justify-center gap-4 py-2">
                    <ContentSkeleton className="w-16 h-16 rounded-lg" />
                    <ContentSkeleton className="w-16 h-16 rounded-lg" />
                    <ContentSkeleton className="w-16 h-16 rounded-lg" />
                  </div>
                )}
              </div>
            </div>

            {showContent ? (
              <CtaButtons />
            ) : (
              <div className="flex gap-3 justify-center lg:justify-start mt-4">
                <ContentSkeleton className="h-11 w-32 rounded-full" />
                <ContentSkeleton className="h-11 w-28 rounded-full" />
              </div>
            )}
          </div>

          {showContent ? (
            <div ref={formRef} className="lg:-mt-8 -mt-6 lg:scale-[0.9] scale-95">
              <BannerForm locationDetails={locationDetails} />
            </div>
          ) : (
            <div className="flex gap-3 justify-center lg:justify-start mt-4">
              <ContentSkeleton className="h-[550px] lg:w-[500px] w-[300px] rounded-xl" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Banner