import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'
import React from 'react'

function TimedTestimonials() {
    const testimonials = [
        {
          quote: "The mock exams gave me the clarity I needed. I felt more confident going into the real test!",
          name: "Alice Johnson",
          designation: "Final-Year Computer Science Student",
          src: "/banner-1.webp",
        },
        {
          quote: "I was able to tackle even the toughest questions after practicing with these prep tests.",
          name: "Michael Nguyen",
          designation: "Business Management Graduate",
          src: "/testimonial-2.webp",
        },
        {
          quote: "The practice exams closely resembled the real thing, which helped me breeze through the final exam!",
          name: "Rachel Lee",
          designation: "Second-Year Medicine Student",
          src: "/testimonial-3.webp",
        },
        {
          quote: "Thanks to the mock exams, I felt fully prepared and achieved the results I was aiming for!",
          name: "James Wilson",
          designation: "Master's in Economics Student",
          src: "/banner-3.webp",
        },
        {
          quote: "The practice tests were challenging yet rewarding, and they definitely sharpened my skills!",
          name: "Olivia Brown",
          designation: "Third-Year Law Student",
          src: "/testimonial-1.webp",
        },
      ];
  return (
     <div className='mx-auto max-w-screen-xl lg:mt-10 mt-5 -z-[999]'>
           <h2 className='text-center  font-extrabold text-3xl md:text-5xl'>Our Testimonials</h2>
           <div className='p-5'>
           <AnimatedTestimonials testimonials={testimonials} />
           </div>
       </div>
)
}

export default TimedTestimonials