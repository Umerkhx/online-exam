"use client"
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import React from 'react'
import { CtaButtons } from '../(Home)/Banner';
import { Package } from 'lucide-react';
import Link from 'next/link';


const words = `Stress during exams can feel overwhelming, but with the right assistance, you gain clarity, confidence, and calm to face any challenge. `;

function EADivider() {
  return (
    <div className='my-10 bg-gradient-to-t from-[#03045e] via-[#1d1e4e] to-[#2a6f97]'>
      <div className='p-5 mx-auto max-w-screen-xl mt-10'>
    <TextGenerateEffect words={words} />
    <div className='flex justify-center items-center my-3'>
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
  )
}

export default EADivider