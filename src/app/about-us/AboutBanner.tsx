'use client';

import { useState, useEffect } from 'react';
import { GraduationCap, BookOpen, Users, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-600/10 to-sky-600/10 dark:from-gray-800/20 dark:to-sky-800/80" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 opacity-20 dark:opacity-10">
        <GraduationCap className="w-24 h-24 text-blue-600 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
      </div>
      <div className="absolute top-40 right-20 opacity-20 dark:opacity-10">
        <BookOpen className="w-20 h-20 text-purple-600 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }} />
      </div>
      <div className="absolute bottom-20 left-20 opacity-20 dark:opacity-10">
        <Trophy className="w-16 h-16 text-green-600 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-full p-4">
                <GraduationCap className="w-12 h-12 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-950 to-sky-800 dark:from-blue-100 dark:to-zinc-100 bg-clip-text text-transparent mb-6">
              Online Exam Relief
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Your trusted partner in academic excellence, providing innovative solutions 
              and expert guidance to help students achieve their educational goals with confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href={'/order-now'}>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg rounded-full transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              {[
                { icon: Users, label: '10,000+', desc: 'Students Helped' },
                { icon: BookOpen, label: '500+', desc: 'Courses Covered' },
                { icon: GraduationCap, label: '95%', desc: 'Success Rate' },
                { icon: Trophy, label: '50+', desc: 'Awards Won' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className={`text-center transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-4 mb-2 inline-block">
                    <stat.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 mx-auto" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800 dark:text-white">{stat.label}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}