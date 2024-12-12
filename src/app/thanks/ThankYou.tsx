"use client"
import Link from 'next/link'
import React from 'react'
import { Package2 } from 'lucide-react'
import Image from 'next/image'

function ThankYou() {
    const name = localStorage.getItem("name")
    const number = localStorage.getItem("number");
    const discount = localStorage.getItem("discount")
  return (
    <div className="flex  flex-col items-center justify-center h-screen bg-gradient-to-t from-sky-200 via-purple-200 to-zinc-100 dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] px-4 pb-10 pt-32 md:pt-2 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-screen-xl text-center scale-90 md:scale-100">
      <div className="inline-flex items-center rounded-full bg-violet-500  px-4 py-2 text-zinc-100">
        <CheckIcon className="mr-2 h-5 w-5" />
        <span>Thank You for Reaching Out! </span>
      </div>

      <h1 className="mt-6 text-lg font-medium  sm:text-xl">
        Please Check your Whatsapp {number}  we have sent you {discount ? '55%': '40%'} discount offer
      </h1>
      <p className="mt-4  mx-auto px-10 lg:px-52">
      Thank you for your interest in our services. Our team of dedicated experts is committed to providing an exceptional experience for our valued students.We know that our success is linked to our students’ achievements, which is why we consistently strive to go above and beyond. Every task we take on is completed with a focus on timely delivery, transparent budgeting, and the highest standards of quality
      </p>
      <div className="mt-6 flex flex-col items-center md:flex-row justify-center gap-4">

      <Link href={'https://wa.me/3197005034911?text=Hi, I urgently need academic assistance. Could you help me submit my assignment before the deadline?'} target="_blank" rel="noopener noreferrer">
      <div className='flex items-center justify-center hover:scale-105 transition ease-in duration-200 delay-200 py-3 bg-zinc-200 dark:bg-zinc-900 w-[220px] border-[2px] border-black dark:border-white rounded-lg'>
        <Image src={"/imgs/whatsapp.png"} width={25} height={25} alt='whatsapp' />
        <button className='font-medium ml-2 text-background md:text-base text-sm text-black dark:text-zinc-100 '>Chat On Whatsapp</button>
      </div>
      </Link>

        <Link
          href="/order-now"
          className="flex items-center justify-center hover:scale-105 transition ease-in duration-200 delay-200 py-3 bg-zinc-200 dark:bg-zinc-900 w-[200px] text-black dark:text-zinc-100 border-[2px] border-black dark:border-white rounded-lg"
          prefetch={false}
        >
           <Package2 className='mr-2'/> Order Now
        </Link>
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