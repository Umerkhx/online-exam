import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { div } from 'framer-motion/client';
import React from 'react'

function Testimonials() {
  return (
    <> 
    <div className='mx-auto max-w-screen-xl mt-20'>
      <h2 className='text-center font-bold text-5xl '>Our Testimonials</h2>
   <div className="mt-10 rounded-md flex flex-col antialiased  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
    <InfiniteMovingCards
      items={testimonials}
      direction="right"
      speed="slow"
    />
    </div>
  </div>
  </>

  )
}

export default Testimonials

const testimonials = [
    {
      quote:
        "I was overwhelmed with my upcoming exams, but this service made a world of difference. The personalized study tips and 24/7 support helped me stay focused and calm. I couldn't have asked for a better experience!",
      name: "Sarah M.",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "The online exam relief service was a game-changer for me. The stress of studying for multiple exams was becoming unbearable, but with their guidance, I was able to manage my time effectively and perform better than I expected!",
      name: "David P.",
      title: "Hamlet",
    },
    {
      quote: "I have always struggled with exam anxiety, but after using this service, I felt more confident and prepared. The mock exams and stress-relief techniques really helped me stay calm and focused during the real tests!",
      name: "Jessica L.",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "I never knew I needed this kind of service until I used it. The exam preparation strategies, combined with the stress management tools, made studying much more manageable. I passed with flying colors thanks to this team!",
      name: "Michael R.",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "As a busy student, I was juggling multiple responsibilities, but the support I received from this online exam relief service helped me organize my schedule and reduce anxiety. I'm so grateful for how they made exam preparation feel less daunting!",
      name: "Emily K.",
      title: "Moby-Dick",
    },
  ];