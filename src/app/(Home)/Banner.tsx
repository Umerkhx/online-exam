"use client"
import { useEffect, useRef, useState } from "react"
import BannerForm from "./BannerForm"
import Image from "next/image"
import Link from "next/link"
import { Package2, Sparkles, BookOpen, Award } from "lucide-react"
import dynamic from "next/dynamic"

const BannerSwiper = dynamic(() => import("@/components/common/BannerSwiper"), {
  ssr: false,
})

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
    // Simulate content loading - keep this short for LCP
    const timer = setTimeout(() => {
      setContentLoaded(true)
    }, 200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative overflow-hidden ">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:to-sky-900/90" />

      {/* Static Floating Elements - No animations */}
      {!isMobile && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 text-blue-200 dark:text-blue-800 opacity-60">
            <Sparkles className="w-6 h-6" />
          </div>
          <div className="absolute top-40 right-20 text-purple-200 dark:text-purple-800 opacity-60">
            <BookOpen className="w-5 h-5" />
          </div>
          <div className="absolute bottom-40 left-20 text-indigo-200 dark:text-indigo-800 opacity-60">
            <Award className="w-6 h-6" />
          </div>
        </div>
      )}

      <div
        ref={bannerRef}
        className="relative max-w-screen-xl container mx-auto px-4 pt-4 pb-4 lg:pt-8 lg:pb-0  sm:px-6 lg:px-8"
      >
        <div className="mx-auto text-center grid lg:grid-cols-2 grid-cols-1 gap-3 lg:gap-4">
          {/* Text Content */}
          <div className="lg:pt-12 pt-6 space-y-4">
            {/* Title - Always rendered, skeleton overlays */}
            <div className="relative">
              <h1
                ref={titleRef}
                className="text-xl px-6 lg:px-0 font-bold lg:text-left text-center sm:text-3xl md:text-4xl 
                bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 
                bg-clip-text text-transparent leading-tight"
              >
                Let Experts Take Your Online Exam and Ace It for You
              </h1>
            </div>

            {/* Subtitle - Always rendered, skeleton overlays */}
            <div className="relative">
              <h2
                ref={subtitleRef}
                className="text-base font-semibold lg:text-left text-center sm:text-xl md:text-2xl 
                px-12 lg:px-0 text-gray-700 dark:text-gray-300"
              >
                Secure Academic Success with Affordable Online Exam Assistance
              </h2>
              {/* Overlay skeleton */}
              {!contentLoaded && (
                <div className="absolute inset-0 flex justify-center lg:justify-start items-center">
                  <div className="bg-gray-200 dark:bg-gray-700 rounded h-8 w-4/5 animate-pulse" />
                </div>
              )}
            </div>

            <div className="scale-[0.80] md:scale-100">
              <BannerSwiper
                reviewsRef={reviewsRef}
                reviews={reviews}
                contentLoaded={contentLoaded}
                contentSkeleton={() => null} 
              />
            </div>

            {/* CTA Buttons - Always rendered, skeleton overlays */}
            <div className="relative">
              <CtaButtons />
              {/* Overlay skeleton */}
              {!contentLoaded && (
                <div className="absolute inset-0 flex gap-3 justify-center lg:justify-start items-center">
                  <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-11 w-32 animate-pulse" />
                  <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-11 w-28 animate-pulse" />
                </div>
              )}
            </div>
          </div>

          {/* Form - Always rendered */}
          <div ref={formRef} className="lg:-mt-8 -mt-6 lg:scale-90 scale-95">
            <BannerForm locationDetails={locationDetails} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner

export const CtaButtons = () => {
  const buttonsRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

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
            <span className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2 group-hover:bg-slate-900 transition-colors">
              <Image src={"/whatsapp.png"} width={20} height={20} alt="" aria-hidden="true" loading="lazy" />
              WhatsApp Now
            </span>
          </button>
        </Link>
      </div>

      {/* Order Now Button */}
      <div className="flex justify-center items-center">
        <Link href={"/order-now"} className="group">
          <button className="relative inline-flex h-11 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
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
