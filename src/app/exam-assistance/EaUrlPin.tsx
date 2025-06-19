import { PinContainer } from '@/components/ui/3d-pin'
import { BookOpen, Clock, Headphones } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function EaUrlPin() {
  return (
 <div className="mx-auto max-w-screen-xl">
      <div className="lg:py-16 py-10">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
              Sub-Categories Of Exam Assistance
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full"></div>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            
  
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105 blur-md"></div>
              <div className="relative bg-white dark:bg-zinc-950 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  Mock Exam & Test Preparation
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  Get ready for your mock exams and test preparation with our comprehensive assistance and support services.
                </p>
                
                <Link href={'/exam-assistance/practice-test-preparation'}>
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                </Link>
                
       
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-green-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105 blur-md"></div>
              <div className="relative bg-white dark:bg-zinc-950 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-green-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 group-hover:text-teal-600 transition-colors duration-300">
                  Timed Test Support
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  Receive expert support and proven strategies to effectively manage and excel in your timed tests.
                </p>
                

                <Link href={'/exam-assistance/timed-test-support'}>
                <div className="flex items-center text-teal-600 font-semibold group-hover:text-teal-700 transition-colors duration-300">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                </Link>
                
       
              </div>
            </div>


            <div className="group relative md:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105 blur-md"></div>
              <div className="relative bg-white dark:bg-zinc-950 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Headphones className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                  Live Exam Support
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  Real-time exam assistance to help you navigate through your exams with expert guidance and support.
                </p>
                
                <Link href={'/exam-assistance/live-exam-help'}>
                <div className="flex items-center text-orange-600 font-semibold group-hover:text-orange-700 transition-colors duration-300">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                </Link>
                
           
              </div>
            </div>

          </div>

         
        </div>
      </div>
    </div>
  )
}

export default EaUrlPin