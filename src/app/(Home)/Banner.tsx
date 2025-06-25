"use client"
import { useEffect, useRef, useState } from "react"
import BannerForm from "./BannerForm"
import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap"
import { Package2, Sparkles, BookOpen, Award } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

const ContentSkeleton = ({ className = "" }: { className?: string }) => (
  <div className={`bg-gray-200 dark:bg-gray-700 rounded animate-pulse ${className}`} />
)

const ButtonSkeleton = () => (
  <div className="relative inline-flex h-11 overflow-hidden rounded-full p-[1px]">
    <div className="inline-flex h-full w-full items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 px-6 animate-pulse">
      <div className="w-24 h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
    </div>
  </div>
)

export const CtaButtons = () => {
  const buttonsRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsLoaded(true), 300)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Only animate on desktop and when loaded
    if (!isMobile && isLoaded && buttonsRef.current) {
      gsap.fromTo(
        buttonsRef.current.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, delay: 0.1, ease: "power2.out" },
      )
    }
  }, [isMobile, isLoaded])

  if (!isLoaded) {
    return (
      <div className="flex flex-row lg:justify-start justify-center items-center mt-4 gap-3 scale-90 md:scale-100">
        <ButtonSkeleton />
        <ButtonSkeleton />
      </div>
    )
  }

  return (
    <div
      ref={buttonsRef}
      className="flex flex-row lg:justify-start justify-center items-center mt-4 gap-3 scale-90 md:scale-100"
    >
      {/* WhatsApp Button */}
      <div className="flex justify-center items-center">
        <Link
          href={
            "https://wa.me/3197005034911?text=Hi, I urgently need academic assistance. Could you help me submit my assignment before the deadline?"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <button className="relative inline-flex h-11 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2 group-hover:bg-slate-900 transition-colors">
              <Image src={"/whatsapp.png"} width={20} height={20} alt="WhatsApp icon" loading="eager" priority />
              WhatsApp Now
            </span>
          </button>
        </Link>
      </div>

      {/* Order Now Button */}
      <div className="flex justify-center items-center">
        <Link href={"/order-now"} className="group">
          <button className="relative inline-flex h-11 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl group-hover:bg-slate-900 transition-colors">
              <Package2 className="mr-2 h-4 w-4" aria-hidden="true" />
              Order Now
            </span>
          </button>
        </Link>
      </div>
    </div>
  )
}

const ReviewsSkeleton = () => (
  <div
    className="bg-white/80 backdrop-blur-sm py-3 px-4 mt-0 lg:mt-6 
    scale-90 md:scale-100 h-28 rounded-xl w-full max-w-[500px] mx-auto lg:mx-0 
    shadow-md border border-white/20"
  >
    <div className="flex justify-center gap-4 py-4">
      <div className="flex flex-col items-center">
        <ContentSkeleton className="w-16 h-16 rounded-lg" />
        <ContentSkeleton className="w-12 h-3 mt-2" />
      </div>
      <div className="flex flex-col items-center">
        <ContentSkeleton className="w-16 h-16 rounded-lg" />
        <ContentSkeleton className="w-12 h-3 mt-2" />
      </div>
      <div className="flex flex-col items-center  lg:flex">
        <ContentSkeleton className="w-16 h-16 rounded-lg" />
        <ContentSkeleton className="w-12 h-3 mt-2" />
      </div>
    </div>
  </div>
)

function Banner({ locationDetails }: any) {
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
      alt: "Bark review - 5 stars",
      width: 80,
      height: 80,
    },
    {
      link: "#",
      image: "/brownbook.png",
      alt: "Brownbook review - 5 stars",
      width: 110,
      height: 110,
    },
    {
      link: "https://online-exam-relief.vercel.app/",
      image: "/navbar-logo.png",
      alt: "Online Exam Relief company logo",
      width: 100,
      height: 90,
    },
  ]

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    // Faster content loading for better LCP
    const timer = setTimeout(() => {
      setContentLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Only run animations on desktop after content loads
    if (contentLoaded && !isMobile && bannerRef.current) {
      const tl = gsap.timeline()

      // Stagger text animations
      tl.fromTo(
        [titleRef.current, subtitleRef.current],
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: "power2.out" },
      )
        .fromTo(
          reviewsRef.current,
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" },
          "-=0.2",
        )
        .fromTo(
          formRef.current,
          { x: 20, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
          "-=0.2",
        )

      // Subtle floating animation for desktop only - reduced intensity
      gsap.to(".floating-icon", {
        y: -6,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.5,
      })
    }
  }, [contentLoaded, isMobile])

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Optimized background - single gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:to-sky-900/90" />

      {/* Floating Elements - Desktop only, reduced complexity */}
      {!isMobile && contentLoaded && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="floating-icon absolute top-20 left-10 text-blue-200 dark:text-blue-800 opacity-40">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="floating-icon absolute top-40 right-20 text-purple-200 dark:text-purple-800 opacity-40">
            <BookOpen className="w-4 h-4" />
          </div>
          <div className="floating-icon absolute bottom-40 left-20 text-indigo-200 dark:text-indigo-800 opacity-40">
            <Award className="w-5 h-5" />
          </div>
        </div>
      )}

      <div ref={bannerRef} className="relative max-w-screen-xl container mx-auto px-4 py-4 lg:py-8 sm:px-6 lg:px-8">
        <div className="mx-auto text-center grid lg:grid-cols-2 grid-cols-1 gap-6 lg:gap-8">
          {/* Text Content */}
          <div className="lg:pt-12 pt-6 space-y-4">
            {/* Title - Always visible, no skeleton needed for LCP */}
            <h1
              ref={titleRef}
              className="text-xl px-12 lg:px-0 font-bold lg:text-left text-center sm:text-3xl md:text-4xl 
              bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 
              bg-clip-text text-transparent leading-tight"
              style={{ opacity: isMobile ? 1 : contentLoaded ? 1 : 0 }}
            >
              Let Experts Take Your Online Exam and Ace It for You
            </h1>

            {/* Subtitle with skeleton */}
            {contentLoaded ? (
              <h2
                ref={subtitleRef}
                className="text-base font-semibold lg:text-left text-center sm:text-xl md:text-2xl 
                px-12 lg:px-0 text-gray-700 dark:text-gray-300"
                style={{ opacity: isMobile ? 1 : 0 }}
              >
                Secure Academic Success with Affordable Online Exam Assistance
              </h2>
            ) : (
              <ContentSkeleton className="h-8 w-4/5 mx-auto lg:mx-0" />
            )}

            {/* Reviews Section */}
            <div className="scale-[0.80] md:scale-100">
              {contentLoaded ? (
                <div
                  ref={reviewsRef}
                  className="bg-white/80 backdrop-blur-sm py-3 px-4 mt-0 lg:mt-6 
                  scale-90 md:scale-100 h-28 rounded-xl w-full max-w-[500px] mx-auto lg:mx-0 
                  shadow-md border border-white/20"
                  style={{ opacity: isMobile ? 1 : 0 }}
                >
                  <Swiper
                    slidesPerView={2}
                    spaceBetween={8}
                    breakpoints={{
                      1025: { slidesPerView: 3, spaceBetween: 12 },
                    }}
                    autoplay={{
                      delay: 4000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }}
                    modules={[Autoplay]}
                    className="reviews-swiper"
                  >
                    {reviews.map((review, index) => (
                      <SwiperSlide key={index}>
                        <div
                          className="flex flex-col items-center justify-center p-3 rounded-lg 
                        hover:bg-white/50 dark:hover:bg-white/20 transition-all duration-200"
                        >
                          <a href={review.link} className="group">
                            <div className="relative overflow-hidden rounded-lg">
                              <Image
                                src={review.image || "/placeholder.svg"}
                                alt={review.alt}
                                width={review.width}
                                height={review.height}
                                className="transition-transform duration-200 group-hover:scale-105"
                                priority={index === 0}
                                loading={index === 0 ? "eager" : "lazy"}
                              />
                            </div>
                            <div className="mt-2 text-sm" aria-label="5 star rating">
                              ⭐⭐⭐⭐⭐
                            </div>
                          </a>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              ) : (
                <ReviewsSkeleton />
              )}
            </div>

            <CtaButtons />
          </div>

          {/* Form Section */}
          <div
            ref={formRef}
            className="lg:-mt-8 -mt-6 lg:scale-90 scale-95"
            style={{ opacity: isMobile ? 1 : contentLoaded ? 1 : 0 }}
          >
            {contentLoaded ? (
              <BannerForm locationDetails={locationDetails} />
            ) : (
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                <ContentSkeleton className="h-8 w-3/4 mx-auto mb-4" />
                <div className="space-y-4">
                  <ContentSkeleton className="h-12 w-full" />
                  <ContentSkeleton className="h-12 w-full" />
                  <ContentSkeleton className="h-12 w-full" />
                  <ContentSkeleton className="h-12 w-full" />
                  <ContentSkeleton className="h-12 w-full rounded-full" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
