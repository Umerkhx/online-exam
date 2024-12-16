import { CheckCheckIcon, HomeIcon, Package2 } from 'lucide-react'
import React from 'react'
import { CtaButtons } from '../(Home)/Banner'

function ThankYouContact() {
  return (
    <div className="flex  flex-col items-center justify-center h-screen bg-gradient-to-b from-[#a9d6e5] via-[#89c2d9] to-[#eef4ed] dark:bg-gradient-to-b dark:from-[#03045e] dark:via-[#1d1e4e] dark:to-[#2a6f97] px-4 pb-10 pt-32 md:pt-2 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-screen-xl text-center scale-90 md:scale-100">
      <div className="inline-flex items-center rounded-full bg-blue-600 px-4 py-2 font-semibold text-zinc-200">
        <CheckCheckIcon className="mr-2 h-5 w-5" />
        <span>Thank You for Contacting Us</span>
      </div>

      <p className="pt-3  mx-auto text-sm font-medium sm:text-base px-10 lg:px-52">
      Thank you for contacting us! Our team is dedicated to providing you with a stress-free and seamless experience. One of our experts will reach out to you within 30 minutes. We’re committed to helping students succeed by offering prompt responses, clear communication, and reliable support. Rest assured, your inquiry will be handled with the utmost care and professionalism.
</p>
      <div className="mt-2 flex flex-col items-center md:flex-row justify-center gap-4">
      <CtaButtons/>
      </div>
    </div>
  </div>
  )
}

export default ThankYouContact