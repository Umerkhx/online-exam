"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function OurServices() {
  return (
    <div className='lg:mt-10 mt-14 mx-auto max-w-screen-xl'>
      <div className='flex justify-center items-center'>
        <div className='rounded-full px-3 py-1 bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-800 text-zinc-100 text-center w-72'>Your Journey to Success Starts Here</div>
      </div>
      <h2 className='text-center pt-5 font-bold lg:text-5xl text-3xl px-4'>Get Expert Assistance to Boost Your Grades</h2>

      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 p-3 lg:mt-0 -mt-6  scale-90 lg:scale-100'>
        <div className='group'>
          <div className='p-4 scale-95 dark:bg-gradient-to-t dark:from-gray-900 dark:to-sky-900 bg-gradient-to-b from-sky-100 to-blue-200 shadow-lg rounded-lg group-hover:-translate-y-3 transition ease-in duration-300 delay-300 h-[320px] '>
            <div className='flex justify-center items-center pt-4'><Image src={'/maths.png'} width={80} height={80} alt='tasklist'></Image></div>
            <h2 className='text-center pt-2 font-bold text-xl'>Mathematics Tutoring</h2>
            <p className='text-center font-medium px-5 pt-3'>Get expert assistance with solving complex math problems for your online exams.</p>
          </div>
        </div>

        <div className='group'>
          <div className='p-4 scale-95 dark:bg-gradient-to-t dark:from-gray-900 dark:to-sky-900 bg-gradient-to-b from-sky-100 to-blue-200 shadow-lg rounded-lg group-hover:-translate-y-3 transition ease-in duration-300 delay-300 h-[320px] '>
            <div className='flex justify-center items-center pt-4'><Image src={'/science.png'} width={80} height={80} alt='tasklist'></Image></div>
            <h2 className='text-center pt-2 font-bold text-xl'>Science Exam Support</h2>
            <p className='text-center font-medium px-5 pt-3'>Our online exam help service provides expert guidance in subjects like Physics, Chemistry, and Biology. </p>
          </div>
        </div>

        <div className='group'>
          <div className='p-4 scale-95 dark:bg-gradient-to-t dark:from-gray-900 dark:to-sky-900 bg-gradient-to-b from-sky-100 to-blue-200 shadow-lg rounded-lg group-hover:-translate-y-3 transition ease-in duration-300 delay-300 h-[320px] '>
            <div className='flex justify-center items-center pt-4'><Image src={'/copy-writing.png'} width={80} height={80} alt='tasklist'></Image></div>
            <h2 className='text-center pt-2 font-bold text-xl'>Literature & Writing Assistance</h2>
            <p className='text-center font-medium px-5 pt-3'>Our Literature & Writing Assistance service helps you succeed in online exams with expert support reading comprehension. </p>
          </div>
        </div>

        <div className='group'>
          <div className='p-4 scale-95 dark:bg-gradient-to-t dark:from-gray-900 dark:to-sky-900 bg-gradient-to-b from-sky-100 to-blue-200 shadow-lg rounded-lg group-hover:-translate-y-3 transition ease-in duration-300 delay-300 h-[320px] '>
            <div className='flex justify-center items-center pt-4'><Image src={'/data-science.png'} width={80} height={80} alt='tasklist'></Image></div>
            <h2 className='text-center pt-2 font-bold text-xl'>Computer Science</h2>
            <p className='text-center font-medium px-5 pt-3'>Get expert support with coding, algorithms, and languages like Python and Java to confidently tackle your online exams.</p>
          </div>
        </div>
      </div>


<div className="flex justify-center items-center lg:mt-5 -mt-10">
  <Link href="/order-now">
    <button className="relative w-56 h-12 bg-zinc-700 dark:bg-zinc-200 text-zinc-100 dark:text-zinc-800 rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-lg hover:rounded-3xl">
      <span
        className="absolute inset-0 flex items-center justify-center transform transition-transform duration-500 ease-in-out group-hover:-translate-y-10 "
      >
        Avail Upto 50% Discount
      </span>
      <span
        className="absolute inset-0 flex items-center justify-center transform translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0 text-lg"
      >
        Order Now
      </span>
    </button>
  </Link>
</div>



    </div>
  )
}

export default OurServices