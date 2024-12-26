import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { Package } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


const words = `Stress during mock exams and test preparation can feel overwhelming, but with the right support, you can achieve clarity, confidence, and a sense of calm to tackle any challenge. `;


function TestDivider() {
  return (
    
    <div className='my-10 dark:bg-gradient-to-t dark:from-[#000000] dark:to-[#52A39F] bg-gradient-to-t from-zinc-300 to-[#77BBB8]'>
    <div className='p-5 mx-auto max-w-screen-xl mt-10'>
  <TextGenerateEffect words={words} />



<div className='flex flex-col lg:flex-row justify-center items-center gap-3 p-3 '>
<div className='flex justify-center items-center my-3'>
    <Link href={"https://wa.me/3197005034911?text=Hi, I urgently need academic assistance. Could you help me submit my assignment before the deadline?"} target="_blank" rel="noopener noreferrer">
  <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2">
        <Image src={'/whatsapp.png'} width={22} height={22} alt='whatsapp'/>  Whatsapp Now
      </span>
    </button>
    </Link>
  </div>


  <div className='flex justify-center items-center'>
    <Link href={'/order-now'}>
  <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        <Package className='mr-2'/>  Order Now
      </span>
    </button>
    </Link>

  </div>
  </div>

  </div>
  </div>
  )
}

export default TestDivider