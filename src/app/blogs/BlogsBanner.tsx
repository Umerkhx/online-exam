"use client";
import { ArrowRight, Sparkles } from "lucide-react";
import React from "react";

function BlogsBanner() {


  return (
  <div className='relative  overflow-hidden bg-gradient-to-b from-sky-100 to-blue-200 dark:bg-gradient-to-b dark:from-gray-900 dark:to-sky-900 border-b-2 border-sky-300 dark:border-sky-700'>
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20 dark:opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-300 to-sky-400 dark:from-sky-600 dark:to-blue-700 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-pulse"></div>
        <div className="absolute top-32 right-10 w-72 h-72 bg-gradient-to-r from-sky-300 to-blue-400 dark:from-blue-600 dark:to-sky-700 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-gradient-to-r from-blue-400 to-sky-500 dark:from-sky-700 dark:to-blue-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl animate-pulse delay-2000"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <div className="h-full w-full bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22%3E%3Cg fill=%22%23000000%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2210%22 cy=%2210%22 r=%221%22/%3E%3C/g%3E%3C/svg%3E')] dark:bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2210%22 cy=%2210%22 r=%221%22/%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex lg:h-[600px] h-[450px] items-center justify-center text-center'>
          <div className='max-w-4xl'>
            {/* Decorative icon */}
            {/* <div className='mb-8 flex justify-center'>
              <div className='rounded-full bg-white/20 dark:bg-gray-800/40 p-4 backdrop-blur-sm border border-sky-200/50 dark:border-sky-700/50'>
                <Sparkles className='h-12 w-12 text-blue-600 dark:text-sky-300' />
              </div>
            </div> */}
            
            {/* Main heading */}
            <h1 className='mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-7xl'>
              Discover Amazing
              <span className='block bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700 dark:from-sky-300 dark:via-blue-400 dark:to-sky-500 bg-clip-text text-transparent'>
                Stories & Insights
              </span>
            </h1>
            
            {/* Description */}
            <p className='mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-gray-700 dark:text-gray-300 sm:text-xl md:text-2xl'>
              Our blog platform offers expert insights, helpful tips, and comprehensive guidance across various topics. 
              We deliver high-quality, engaging content to support your learning journey.
            </p>
            
            {/* CTA Button */}
            {/* <div className='flex justify-center'>
              <button className='group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-sky-600 dark:from-sky-600 dark:to-blue-700 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 dark:hover:shadow-sky-500/25'>
                <span className='relative z-10 flex items-center gap-2'>
                  Start Reading
                  <ArrowRight className='h-5 w-5 transition-transform group-hover:translate-x-1' />
                </span>
                <div className='absolute inset-0 bg-gradient-to-r from-sky-600 to-blue-600 dark:from-blue-700 dark:to-sky-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogsBanner;




