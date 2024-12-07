import { CheckCheckIcon, HomeIcon, Package2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ThankYouContact() {
  return (
    <div className="flex  flex-col items-center justify-center h-screen bg-gradient-to-t from-sky-200 via-purple-200 to-zinc-100 dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] px-4 pb-10 pt-32 md:pt-2 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-screen-xl text-center scale-90 md:scale-100">
      <div className="inline-flex items-center rounded-full bg-violet-600 px-4 py-2 font-semibold text-zinc-200">
        <CheckCheckIcon className="mr-2 h-5 w-5" />
        <span>Thank You for Contacting Us</span>
      </div>

      <p className="pt-3  mx-auto text-sm font-medium sm:text-base px-10 lg:px-52">
      Thank you for reaching out to us. Our team is here to ensure you have a positive and seamless experience, and one of our experts will be in touch with you within 30 minutes.We are committed to supporting our students&apos; success, which is why we prioritize prompt responses, clear communication, and quality results. You can trust that we’ll handle your inquiry with care and dedication
</p>
      <div className="mt-6 flex flex-col items-center md:flex-row justify-center gap-4">
      <Link href={'https://wa.me/19179331132?text=Hi, I urgently need academic assistance. Could you help me submit my assignment before the deadline?'} target="_blank" rel="noopener noreferrer">
      <div className='flex items-center justify-center hover:scale-105 transition ease-in duration-200 delay-200 py-3 bg-zinc-200 dark:bg-zinc-900 w-[220px] border-[2px] border-black dark:border-white rounded-lg'>
        <Image src={"/imgs/whatsapp.png"} width={25} height={25} alt='whatsapp' />
        <button className='font-medium ml-2 text-background md:text-base text-sm text-black dark:text-zinc-100 '>Chat On Whatsapp</button>
      </div>
      </Link>
      <Link href="/order-now" className="flex items-center justify-center hover:scale-105 transition ease-in duration-200 delay-200 py-3 bg-zinc-200 dark:bg-zinc-900 w-[200px] text-black dark:text-zinc-100 border-[2px] border-black dark:border-white rounded-lg" prefetch={false}>
           <Package2 className='mr-2'/> Order Now
        </Link>
      </div>
    </div>
  </div>
  )
}

export default ThankYouContact