import React from 'react'

function PrivacyBanner() {
  return (
    <section className="relative overflow-hidden">
    <div className="absolute inset-0 dark:bg-gradient-to-t dark:from-gray-900 dark:to-sky-900 bg-gradient-to-b from-sky-100 to-blue-200" />
    <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
    <div className="relative container mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold tracking-tight dark:text-zinc-200 text-zinc-800 sm:text-5xl md:text-6xl">
          Our Privacy Policy
        </h1>
        <p className="mt-6 text-xl dark:text-zinc-200 text-zinc-950 max-w-prose mx-auto">
        Our mission is to transform the industry through cutting-edge solutions and exceptional customer care, ensuring a seamless and trustworthy experience for all our users.
        </p>
    
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-gray-900" />
  </section>  
  )
}

export default PrivacyBanner