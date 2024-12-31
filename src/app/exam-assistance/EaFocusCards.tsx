import { FocusCards } from '@/components/ui/focus-cards'
import React from 'react'

function EaFocusCards() {
    const cards = [
        {
          title: "Expert Guidance",
          src: "/exam-card-1.webp",
        },
        {
          title: "Personalized Plans",
          src: "/exam-card-2.webp",
        },
        {
          title: "24/7 Support",
          src: "/exam-card-3.webp",
        },
        {
          title: "All Subjects Covered",
          src: "/exam-card-4.webp",
        },
        {
          title: "Stress-Free Prep",
          src: "/exam-card-5.webp",
        },
        {
          title: "Proven Results",
          src: "/exam-card-6.webp",
        },
      ];
  return (
    <div className='mt-10 mx-auto max-w-screen-xl'>
    <h1 className='font-bold lg:text-5xl text-2xl text-center'>Key Advantages of Our Exam Assistance Service</h1>
    <div className='mt-8 p-5'>
    <FocusCards cards={cards} />
    </div>
    <h1/>
    </div>
  )
}

export default EaFocusCards