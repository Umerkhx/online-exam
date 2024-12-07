import React from 'react'
import { Metadata } from 'next';
import { Loader2 } from 'lucide-react';
import dynamic from 'next/dynamic';
import { NextResponse } from 'next/server';
const AfterPaymentThank = dynamic(() => import('./AfterPaymentThank'), {
  ssr: false,
  loading: () => <Loading />,
})


export const metadata: Metadata = {
  title: 'Thank You for Order Payment Received | Takingmyclassesonline.com',
  description: `Thanks, your payment is securely received in our account. Now one of our dedicated representative will whatsapp/call you and guide you all the process.`,
  alternates: {
    canonical: "https://takingmyclassesonline.com/thank-you-order",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

function page() {


  return (
    <div>

      <AfterPaymentThank />
    </div>
  )
}

export default page

function Loading() {
  return (
    <div className='flex justify-center items-center text-4xl bg-background h-screen '><Loader2 className='animate-spin mr-2 w-10 h-10' /> Loading...  </div>)
}