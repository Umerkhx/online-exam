import React from 'react'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';

function ExamHelpTestimonial() {
    const testimonials = [
        {
          quote: "Thanks to the live exam help, I aced my final exam with confidence!",
          name: "Emily Johnson",
          designation: "Student, Business Administration",
          src: "/banner-1.webp",
        },
        {
          quote: "The support was amazing, helping me solve tricky problems in real-time!",
          name: "Vince Lee",
          designation: "Student, Computer Science",
          src: "/testimonial-2.webp",
        },
        {
          quote: "Live exam assistance made all the difference in my last-minute preparation.",
          name: "Kim Davidson",
          designation: "Student, Engineering",
          src: "/testimonial-3.webp",
        },
        {
          quote: "The live help was fast and efficient—exactly what I needed before my exam!",
          name: "Brad Wilson",
          designation: "Student, Law",
          src: "/banner-3.webp",
        },
        {
          quote: "I couldn't have asked for better guidance during my exam preparation.",
          name: "Layla Brown",
          designation: "Student, Medical Sciences",
          src: "/testimonial-1.webp",
        },
      ];
  return (
       <div className='mx-auto max-w-screen-xl lg:mt-10 mt-4 -z-[999]'>
             <h2 className='text-center  font-extrabold text-3xl md:text-5xl'>Our Testimonials</h2>
             <div className='p-5'>
             <AnimatedTestimonials testimonials={testimonials} />
             </div>
         </div>
  )
}

export default ExamHelpTestimonial