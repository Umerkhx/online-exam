import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function KnowUs() {
  return (
    <div className='lg:mt-20 mt-10 max-w-screen-xl mx-auto'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4   ">
  <div>
    <h2 className="text-3xl font-extrabold  mb-4">Make Wise Decision For Academic Success</h2>
    <p className="text-lg  mb-4">
      Online ClassclassName Relief is the leading platform for providing help in online classNamees, exams, and assignments. We have been working for years in the industry and providing our services so students can improve their grades.
    </p>
    <div className="space-y-4 lg:-translate-x-6">
        <div className='group scale-95 hover:scale-100 transition ease-in duration-200 delay-200 hover:shadow-lg  cursor-pointer px-2 py-2'>
    <div className='flex items-center  gap-3'>
        <Image src={'/help-subjects.png'} width={40} height={40} alt='help'></Image>
      <h3 className="text-xl font-semibold ">Help For All Subjects</h3>
      </div>
      <p className="">Our tutors for diverse fields and best practices enable us to offer the best online className, exams, and homework help for all students.</p>
      </div>

        <div className='group scale-95 hover:scale-100 transition ease-in duration-200 delay-200 hover:shadow-lg  cursor-pointer px-2 py-2'>
    <div className='flex items-center gap-3'>
        <Image src={'/affordable-package.png'} width={40} height={40} alt='help'></Image>
        <h3 className="text-xl font-semibold ">Affordable Packages</h3>
      </div>
      <p className="">We offer highly-affordable solutions so every student can achieve their academic goals with ease.</p>
      </div>

       <Link href={'/order-now'}>
      <div className='scale-95 px-6 py-3 rounded-lg bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-800 text-zinc-100  text-center font-semibold w-36 hover:scale-100 transition ease-in duration-200 delay-200 cursor-pointer'>Join Us Now</div>
      </Link>

    </div>
  </div>

  <div className="relative">
    <div className="absolute top-0 left-0 lg:w-80 w-56 lg:h-80 h-56 overflow-hidden rounded-lg shadow-lg border-2 border-white">
      <Image src={'/know-us-1.webp'} alt="Image 1" width={500} height={500} className="object-cover w-full h-full"/>
    </div>
    
    <div className="absolute lg:top-20 top-32 lg:left-[18rem] left-[11rem] lg:w-[18rem] w-[10rem] lg:h-[18rem] h-[10rem] overflow-hidden rounded-lg shadow-lg border-2 border-white">
      <Image src={'/Image-parallax-2.webp'} alt="Image 2" width={500} height={500} className="object-cover w-full h-full"/>
    </div>

    <div className="absolute lg:top-[22rem] top-[17rem] lg:left-[5rem] lg:w-[18rem] w-[12rem] lg:h-[18rem] h-[12rem] overflow-hidden rounded-lg shadow-lg border-2 border-white">
      <Image src={'/banner-3.webp'} alt="Image 3" width={500} height={500} className="object-cover w-full h-full"/>
    </div>
  </div>
</div>
    </div>
  )
}

export default KnowUs