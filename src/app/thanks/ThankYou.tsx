"use client"
import React from 'react'
import { CtaButtons } from '../(Home)/Banner'

function ThankYou() {
    const name = localStorage.getItem("name")
    const number = localStorage.getItem("number");
    const discount = localStorage.getItem("discount")
  return (
    <div className="flex  flex-col items-center justify-center h-screen bg-gradient-to-b from-[#a9d6e5] via-[#89c2d9] to-[#eef4ed] dark:bg-gradient-to-b dark:from-[#03045e] dark:via-[#1d1e4e] dark:to-[#2a6f97] px-4 pb-10 pt-32 md:pt-2 sm:px-6 lg:px-8 text-zinc-800 dark:text-zinc-100">
    <div className="mx-auto max-w-screen-xl text-center scale-90 md:scale-100">
      <div className="inline-flex items-center rounded-full bg-blue-500  px-4 py-2 text-zinc-100">
        <CheckIcon className="mr-2 h-5 w-5" />
        <span>Thank You for Reaching Out! </span>
      </div>

      <h1 className="mt-6 text-lg font-medium  sm:text-xl">
        Please Check your Whatsapp {number}  we have sent you {discount ? '55%': '50%'} discount offer
      </h1>
      <p className="mt-4  mx-auto px-10 lg:px-52">     
Thank you for considering our online exam relief services. Our team of dedicated experts is committed to ensuring a seamless and stress-free experience for students. We understand that your success is closely tied to your performance, which is why we go the extra mile to support you. Each exam we handle is approached with a focus on timely assistance, clear pricing, and delivering top-notch quality to help you succeed.
      </p>
      <div className="mt-2 flex flex-col items-center md:flex-row justify-center gap-4">
        <CtaButtons/>
      </div>
    </div>
  </div>
  )
}

export default ThankYou

function CheckIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    )
  }