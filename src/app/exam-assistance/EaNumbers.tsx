"use client"
import Aos from 'aos';
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

function EaNumbers() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });
    useEffect(() => {
        Aos.init({
            duration: 1000,
            offset: 200,
        });
    }, []);
  return (
<div className='my-10 relative'>
  <div data-aos="zoom-in"
    style={{
      backgroundImage: "url('/exam-assistance-divider.webp')",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }}
    className='py-28 bg-fixed relative'>
    <div className='absolute inset-0 bg-indigo-950 opacity-70 z-10'></div>
    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-4 p-10 mx-auto max-w-screen-xl relative z-20'ref={ref}>
      <div className=''ref={ref} data-aos="flip-down">
        <div className='text-center text-white font-extrabold text-3xl md:text-6xl'>{inView ? <CountUp end={150} duration={2.75} /> : '0'} +</div>
        <div className='text-center text-white font-extrabold text-xl md:text-2xl'>Students Supported</div>
      </div>
      <div className=''ref={ref} data-aos="flip-up">
      <div className='text-center text-white font-extrabold text-3xl md:text-6xl'>{inView ? <CountUp end={300} duration={2.75} /> : '0'} +</div>
      <div className='text-center text-white font-extrabold text-xl md:text-2xl'>Exams Prepared</div>
      </div>
      <div className=''ref={ref} data-aos="flip-down">
      <div className='text-center text-white font-extrabold text-3xl md:text-6xl'>{inView ? <CountUp end={95} duration={2.75} /> : '0'}% </div>
      <div className='text-center text-white font-extrabold text-xl md:text-2xl'>Success Rate</div>
      </div>
      <div className=''ref={ref} data-aos="flip-up">
      <div className='text-center text-white font-extrabold text-3xl md:text-6xl'>{inView ? <CountUp end={10} duration={2.75} /> : '0'}+</div>
      <div className='text-center text-white font-extrabold text-xl md:text-2xl'>Years of Experience</div>
      </div>
    </div>
  </div>
</div>
  )
}

export default EaNumbers