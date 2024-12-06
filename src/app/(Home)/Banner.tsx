import React from 'react'
import BannerForm from './BannerForm'
import Image from 'next/image'

function Banner() {
  return (
    <div className='pt-10 bg-gradient-to-br from-blue-400 to-purple-400 dark:bg-gradient-to-br dark:from-blue-900 dark:to-purple-900 '>
        <div className='mx-auto max-w-screen-xl'>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 p-4'>
            <div className=''>
              <div className='grid grid-cols-2 gap-3 p-2'>
                <div>
                  <Image className='rounded-xl' src={'/banner-1.webp'} width={400} height={400} alt='exam-online'></Image>
                </div>
                <div className='flex flex-col justify-center space-y-3'>
                  <Image className='rounded-xl' src={'/banner-2.webp'} width={300} height={300} alt='exam-online'></Image>
                  <Image className='rounded-xl' src={'/banner-3.webp'} width={300} height={300} alt='exam-online'></Image>
                </div>
              </div>
            </div>
            <div className=''>
                <h1 className='lg:text-5xl text-4xl font-bold pt-5 lg:text-left text-center text-zinc-100 '>Best Online Exam <br /> Class, and <br /> Assignment Help
                </h1>
                <div className='py-4 lg:scale-100 scale-90'>
                <BannerForm/>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Banner