import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'
import React from 'react'

function EaTestimonials() {
    const testimonials = [
        {
          quote:
            "The support was incredible! Helped me ace my exams stress-free.",
          name: "Sarah Johnson",
          designation: "Final Year Student, Business Administration",
          src: "/banner-1.webp",
        },
        {
          quote:
            "Exceptional guidance—made complex topics so simple",
          name: "Michael Lee",
          designation: "Graduate Student, Computer Science",
          src: "/testimonial-2.webp",
        },
        {
          quote:
            "Their tips and resources were a game-changer for my studies.",
          name: "Maddison Beer",
          designation: "Sophomore, Psychology",
          src: "/testimonial-3.webp",
        },
        {
          quote:
            "On-point assistance that boosted my confidence for the finals.",
          name: "James Carter",
          designation: "Senior, Mechanical Engineering",
          src: "/banner-3.webp",
        },
        {
          quote:
            "I felt fully prepared and supported throughout exam season.",
          name: "Elena Garcia",
          designation: "Master's Student, Literature",
          src: "/testimonial-1.webp",
        },
      ];
  return (
    <div className='mx-auto max-w-screen-xl mt-20 -z-[999]'>
        <h2 className='text-center mt-5 font-bold text-3xl md:text-5xl'>Our Testimonials</h2>
        <AnimatedTestimonials testimonials={testimonials} />
    </div>
  )
}

export default EaTestimonials