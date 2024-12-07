import React from 'react'
import ThankYouContact from './ThankYouContact'
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Thank You for Contact Us Our Representative will Reach You',
  description: ` Thank you for contacting us! One of our dedicated representatives will reach you on whatsapp or by Email.`,
  alternates: {
    canonical: "https://www.takingmyclassesonline.com/thank-you-for-contact",
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
        <ThankYouContact/>
    </div>
  )
}

export default page