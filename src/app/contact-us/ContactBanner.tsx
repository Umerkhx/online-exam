"use client"
import { useEffect, useState } from 'react';
import { Mail, MapPin, Clock, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

function ContactBanner() {
   const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      setIsVisible(true);
    }, []);
  return (
    <section className="relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 dark:bg-gradient-to-t dark:from-gray-900 dark:to-sky-900 bg-gradient-to-b from-sky-100 to-blue-200" />
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-sky-500/10 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute bottom-20 left-1/3 w-16 h-16 bg-blue-400/10 rounded-full blur-xl animate-pulse delay-500" />
      
      <div className="relative container mx-auto px-4 py-12 sm:px-6 md:py-24 lg:px-8 ">
           <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main heading */}
          <div className="space-y-2">
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-800 dark:text-zinc-200 sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block">Contact Us</span>
            </h1>
            <div className="h-1 lg:w-72 w-40 bg-gradient-to-r from-blue-600 to-sky-600 mx-auto rounded-full" />
          </div>

          {/* Description */}
          <p className="mt-3 text-sm lg:text-xl text-zinc-700 dark:text-zinc-300 max-w-3xl  mx-auto leading-relaxed">
            We're here to help! Whether you have questions about our exam relief services, need academic assistance, or want to share your thoughts, our dedicated team is ready to support you. Let's make your academic journey simple and straightforward, together.
          </p>

          {/* Quick contact info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
              <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Email Support</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
              <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">24/7 Available</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
              <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Global Reach</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Conversation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-gray-900" />
    </section>
  )
}

export default ContactBanner