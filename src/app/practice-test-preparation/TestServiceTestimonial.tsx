import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'
import React from 'react'

function TestServiceTestimonial() {
    const testimonials = [
        {
          quote: "The mock exams were spot-on. They gave me the confidence to ace my finals!",
          name: "Emily Carter",
          designation: "Final-Year Law Student",
          src: "/banner-1.webp",
        },
        {
          quote: "These test preps are the real deal. They prepared me for every possible question!",
          name: "David Liu",
          designation: "Engineering Graduate",
          src: "/testimonial-2.webp",
        },
        {
          quote: "The practice tests made a huge difference. I felt so prepared on exam day!",
          name: "Sarah Ahmed",
          designation: "Third-Year Psychology Student",
          src: "/testimonial-3.webp",
        },
        {
          quote: "The structured approach to test prep was exactly what I needed to succeed.",
          name: "Jack Thompson",
          designation: "MBA Candidate",
          src: "/banner-3.webp",
        },
        {
          quote: "Mock exams here are top-notch. They mirrored the real thing perfectly!",
          name: "Priya Kapoor",
          designation: "Medical Student",
          src: "/testimonial-1.webp",
        },
      ];
  return (
     <div className='mx-auto max-w-screen-xl mt-10 -z-[999]'>
           <h2 className='text-center mt-5 font-extrabold text-3xl md:text-5xl'>Our Testimonials</h2>
           <div className='p-5'>
           <AnimatedTestimonials testimonials={testimonials} />
           </div>
       </div>
  )
}

export default TestServiceTestimonial