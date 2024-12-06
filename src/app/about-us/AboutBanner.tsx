import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function AboutBanner() {
  return (
    <section className="relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 dark:bg-gradient-to-br dark:from-blue-900 dark:to-purple-900" />
    <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
    <div className="relative container mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          About Online Exam Help
        </h1>
        <p className="mt-6 text-xl text-indigo-100 max-w-prose mx-auto">
          We're on a mission to revolutionize the industry with innovative solutions and unparalleled customer service.
        </p>
        <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link className='text-zinc-100' href="#our-story">
              Our Story
            </Link>
          </Button>
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-gray-900" />
  </section>  
  )
}

export default AboutBanner