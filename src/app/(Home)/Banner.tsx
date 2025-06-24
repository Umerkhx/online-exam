"use client"
import React, { useEffect, useRef, useState } from 'react'
import BannerForm from './BannerForm'
import Image from 'next/image'
import Link from 'next/link'
import { gsap } from 'gsap'
import { Package2, Sparkles, BookOpen, Award } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'

// Skeleton Components
const TextSkeleton = ({ className = "" }: { className?: string }) => (
  <div className={`animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-md ${className}`}>
    <div className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
  </div>
)

export const CtaButtons = () => {
  const buttonsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (buttonsRef.current) {
      gsap.fromTo(buttonsRef.current.children,
        { 
          y: 30, 
          opacity: 0, 
          scale: 0.9 
        },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.8,
          ease: "back.out(1.7)"
        }
      )
    }
  }, [])

  return (
 <div ref={buttonsRef} className="flex flex-row lg:justify-start justify-center items-center mt-3 gap-3 scale-90 md:scale-100">
  {/* WhatsApp Button - Improved */}
  <div className='flex justify-center items-center my-3'>
    <Link 
      href={"https://wa.me/3197005034911?text=Hi, I urgently need academic assistance. Could you help me submit my assignment before the deadline?"} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group" 
    >
      <button 
        className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2 group-hover:bg-slate-900 transition-colors">
          <Image 
            src={'/whatsapp.png'} 
            width={22} 
            height={22} 
            alt="" 
            aria-hidden="true" 
          />
          WhatsApp Now 
        </span>
      </button>
      <span className="sr-only">(Opens in new window)</span> {/* For accessibility */}
    </Link>
  </div>

  {/* Order Now Button - Improved */}
  <div className='flex justify-center items-center'>
    <Link 
      href={'/order-now'}
      className="group" 
    >
      <button 
        className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl group-hover:bg-slate-900 transition-colors">
          <Package2 className='mr-2 h-5 w-5' aria-hidden="true"/>
          Order Now {/* Clear visible text */}
        </span>
      </button>
    </Link>
  </div>
</div>
  )
}

function Banner({locationDetails}: any) {
  const [isLoaded, setIsLoaded] = useState(false)
  const bannerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const reviewsRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)

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
  ]

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isLoaded && bannerRef.current) {
      const tl = gsap.timeline()

      // Background animation
      gsap.to(backgroundRef.current, {
        backgroundPosition: "200% 200%",
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "none"
      })

      // Content animations
      tl.fromTo(titleRef.current,
        { y: 50, opacity: 0, rotationX: 45 },
        { y: 0, opacity: 1, rotationX: 0, duration: 0.8, ease: "power3.out" }
      )
      .fromTo(subtitleRef.current,
        { y: 30, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.4"
      )
      .fromTo(descriptionRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=0.3"
      )
      .fromTo(reviewsRef.current,
        { y: 40, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: "elastic.out(1, 0.5)" },
        "-=0.2"
      )
      .fromTo(formRef.current,
        { x: 50, opacity: 0, rotationY: 15 },
        { x: 0, opacity: 1, rotationY: 0, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      )

      // Floating animation for icons
      gsap.to(".floating-icon", {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        stagger: 0.2
      })
    }
  }, [isLoaded])

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Animated Background */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 
        dark:from-gray-900  dark:to-sky-900/90"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(120, 119, 198, 0.05) 0%, transparent 50%)
          `,
          backgroundSize: '100% 100%'
        }}
      />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-icon absolute top-20 left-10 text-blue-200 dark:text-blue-800">
          <Sparkles className="w-8 h-8" />
        </div>
        <div className="floating-icon absolute top-40 right-20 text-purple-200 dark:text-purple-800">
          <BookOpen className="w-6 h-6" />
        </div>
        <div className="floating-icon absolute bottom-40 left-20 text-indigo-200 dark:text-indigo-800">
          <Award className="w-7 h-7" />
        </div>
      </div>

      <div ref={bannerRef} className="relative max-w-screen-xl container mx-auto px-2 py-10 sm:px-6 sm:py-6 lg:px-8">
        <div className="mx-auto text-center grid lg:grid-cols-2 grid-cols-1 gap-8">
          {/* Text Content */}
          <div className='lg:pt-12 pt-4 space-y-6'>
            {!isLoaded ? (
              // Skeleton Loading
              <div className="space-y-4">
                <TextSkeleton className="h-12 w-full" />
                <TextSkeleton className="h-8 w-4/5 mx-auto lg:mx-0" />
                <TextSkeleton className="h-6 w-3/4 mx-auto lg:mx-0" />
                <div className="flex gap-4 justify-center lg:justify-start">
                  <TextSkeleton className="h-12 w-32 rounded-full" />
                  <TextSkeleton className="h-12 w-32 rounded-full" />
                </div>
              </div>
            ) : (
              <>
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
                  className="text-base font-semibold lg:text-left text-center sm:text-2xl md:text-[27px] 
                  px-16 lg:px-0 text-gray-700 dark:text-gray-300"
                >
                  Secure Academic Success with Affordable Online Exam Assistance
                </h2>
                
                <p 
                  ref={descriptionRef}
                  className="md:text-base text-sm lg:text-left text-center px-10 lg:px-0 
                  text-gray-600 dark:text-gray-400 leading-relaxed"
                >
                  Our mission is to transform the industry with groundbreaking solutions that ensure your academic excellence
                </p>

                {/* Reviews Slider */}
                <div 
                  ref={reviewsRef}
                  className="bg-white/80  backdrop-blur-sm py-2 px-4 mt-8 
                  scale-90 md:scale-100 rounded-2xl w-full max-w-[550px] mx-auto lg:mx-0 
                  shadow-lg border border-white/20"
                >
                  <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    breakpoints={{
                      1025: { slidesPerView: 3, spaceBetween: 15 },
                    }}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    modules={[Autoplay]}
                    lazyPreloadPrevNext={1}
                    className="reviews-swiper"
                  >
                    {reviews.map((review, index) => (
                      <SwiperSlide key={index}>
                        <div className="flex flex-col items-center justify-center p-4 rounded-xl 
                        hover:bg-white/50 dark:hover:bg-white/20 transition-all duration-300 
                        transform hover:scale-105">
                          <a href={review.link} className="group">
                            <div className="relative overflow-hidden rounded-lg">
                              <Image
                                src={review.image}
                                alt={review.alt}
                                width={review.width}
                                height={review.height}
                                className="transition-transform duration-300 group-hover:scale-110"
                                priority={index === 0}
                              />
                            </div>
                            <div className="mt-3 text-sm">⭐⭐⭐⭐⭐</div>
                          </a>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                <CtaButtons />
              </>
            )}
          </div>

          {/* Form Section */}
          <div 
            ref={formRef}
            className="lg:-mt-14 -mt-5 lg:scale-[0.85] scale-90"
          >
            {!isLoaded ? (
              <div className="bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl lg:mt-14">
                <div className="space-y-4">
                  <TextSkeleton className="h-8 w-3/4 mx-auto" />
                  <TextSkeleton className="h-12 w-full" />
                  <TextSkeleton className="h-12 w-full" />
                  <TextSkeleton className="h-12 w-full" />
                  <TextSkeleton className="h-12 w-full rounded-full" />
                </div>
              </div>
            ) : (
              <BannerForm locationDetails={locationDetails} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner



