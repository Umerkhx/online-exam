import React from 'react'

function TermsBanner() {
  return (
    <section className="relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 dark:bg-gradient-to-br dark:from-blue-900 dark:to-purple-900" />
    <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
    <div className="relative container mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          Our Terms & Conditions
        </h1>
        <p className="mt-6 text-xl text-indigo-100 max-w-prose mx-auto">
        Our mission is to transform the industry through innovative solutions and a commitment to delivering exceptional customer service.
        </p>
    
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-gray-900" />
  </section>  
  )
}

export default TermsBanner