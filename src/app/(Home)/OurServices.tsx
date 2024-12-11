import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function OurServices() {
  return (
    <div className='mt-10 mx-auto max-w-screen-xl'>
      <div className='flex justify-center items-center'>
        <div className='rounded-full px-3 py-1 bg-gradient-to-br from-[#00b4d8] via-[#4361ee] to-[#023047] text-zinc-100 text-center w-72'>Your Journey to Success Starts Here</div>
      </div>
      <h2 className='text-center pt-5 font-bold text-5xl'>Get Expert Assistance to Boost Your Grades</h2>

      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 p-3 mt-5'>
        <div className='group'>
          <div className='p-4 scale-95 bg-gradient-to-br from-[#a9d6e5] via-[#89c2d9] to-[#5390d9]  dark:bg-gradient-to-br dark:from-[#03045e] dark:via-[#1d1e4e] dark:to-[#2a6f97] shadow-lg rounded-lg group-hover:-translate-y-3 transition ease-in duration-300 delay-300 h-[320px] text-gray-100'>
            <div className='flex justify-center items-center pt-4'><Image src={'/maths.png'} width={80} height={80} alt='tasklist'></Image></div>
            <h2 className='text-center pt-2 font-bold text-xl'>Mathematics Tutoring</h2>
            <p className='text-center font-medium px-5 pt-3'>Get expert assistance with solving complex math problems for your online exams.</p>
          </div>
        </div>

        <div className='group'>
          <div className='p-4 scale-95 bg-gradient-to-br from-[#a9d6e5] via-[#89c2d9] to-[#5390d9]   dark:bg-gradient-to-br dark:from-[#03045e] dark:via-[#1d1e4e] dark:to-[#2a6f97] shadow-lg rounded-lg group-hover:-translate-y-3 transition ease-in duration-300 delay-300 h-[320px] text-gray-100'>
            <div className='flex justify-center items-center pt-4'><Image src={'/science.png'} width={80} height={80} alt='tasklist'></Image></div>
            <h2 className='text-center pt-2 font-bold text-xl'>Science Exam Support</h2>
            <p className='text-center font-medium px-5 pt-3'>Our online exam help service provides expert guidance in subjects like Physics, Chemistry, and Biology. </p>
          </div>
        </div>

        <div className='group'>
          <div className='p-4 scale-95 bg-gradient-to-br from-[#a9d6e5] via-[#89c2d9] to-[#5390d9]   dark:bg-gradient-to-br dark:from-[#03045e] dark:via-[#1d1e4e] dark:to-[#2a6f97] shadow-lg rounded-lg group-hover:-translate-y-3 transition ease-in duration-300 delay-300 h-[320px] text-gray-100'>
            <div className='flex justify-center items-center pt-4'><Image src={'/copy-writing.png'} width={80} height={80} alt='tasklist'></Image></div>
            <h2 className='text-center pt-2 font-bold text-xl'>Literature & Writing Assistance</h2>
            <p className='text-center font-medium px-5 pt-3'>Our Literature & Writing Assistance service helps you succeed in online exams with expert support reading comprehension. </p>
          </div>
        </div>

        <div className='group'>
          <div className='p-4 scale-95 bg-gradient-to-br from-[#a9d6e5] via-[#89c2d9] to-[#5390d9]   dark:bg-gradient-to-br dark:from-[#03045e] dark:via-[#1d1e4e] dark:to-[#2a6f97] shadow-lg rounded-lg group-hover:-translate-y-3 transition ease-in duration-300 delay-300 h-[320px] text-gray-100'>
            <div className='flex justify-center items-center pt-4'><Image src={'/data-science.png'} width={80} height={80} alt='tasklist'></Image></div>
            <h2 className='text-center pt-2 font-bold text-xl'>Computer Science</h2>
            <p className='text-center font-medium px-5 pt-3'>Get expert support with coding, algorithms, and languages like Python and Java to confidently tackle your online exams.</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5">
        <Link href={'/order-now'}>

          <div className="px-5 py-3 text-center bg-gradient-to-br from-[#00b4d8] via-[#4361ee] to-[#023047] border-[2px] text-zinc-200 border-white rounded-lg overflow-hidden relative group">
            <div className="whitespace-nowrap group-hover:animate-marquee">Avail Upto 50% Discount</div>
          </div>
        </Link>

      </div>
    </div>
  )
}

export default OurServices