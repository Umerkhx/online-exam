"use client"
import React, { useEffect, useRef, useState } from 'react';
import { CtaButtons } from '../../(Home)/Banner'


function ExamHelpDivider() {
  const [isVisible, setIsVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const words = "Exams can be stressful, but with the right support, you can gain clarity, confidence, and the calm needed to face any challenge head-on. Our live exam help service is here to guide you every step of the way.";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Delay text animation slightly for better effect
          setTimeout(() => setTextVisible(true), 300);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '-50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="relative my-14 overflow-hidden">
      <div className="absolute inset-0  dark:bg-gradient-to-t dark:from-gray-900 dark:to-sky-900 bg-gradient-to-b from-sky-100 to-blue-200 ">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full opacity-20 -translate-x-32 -translate-y-32 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full opacity-20 translate-x-32 translate-y-32 blur-3xl"></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60 animate-pulse ${
              isVisible ? 'animate-bounce' : ''
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div 
        ref={sectionRef}
        className={`relative z-10 max-w-6xl mx-auto px-6 py-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className={`flex justify-center mb-8 transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}>
          <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-white/20">
            <span className="text-sm font-medium text-gray-700 tracking-wide">EMPOWER YOUR EXAM JOURNEY</span>
          </div>
        </div>

        <div className="text-center">
          <div className="mb-4">
            <p className={`text-lg md:text-xl lg:text-2xl font-light  leading-relaxed max-w-4xl mx-auto transition-all duration-1000 delay-500 ${
              textVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              {words.split(' ').map((word, index) => (
                <span
                  key={index}
                  className={`inline-block mr-2 transition-all duration-500 ${
                    textVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}
                  style={{
                    transitionDelay: `${index * 50 + 800}ms`
                  }}
                >
                  {word}
                </span>
              ))}
            </p>
          </div>

          <div className={`flex flex-col sm:flex-row justify-center items-center gap-4 transition-all duration-1000 delay-1500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
                <CtaButtons/>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ExamHelpDivider;










