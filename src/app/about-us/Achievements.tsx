'use client';

import { useEffect, useState, useRef } from 'react';
import { Trophy, Users, BookOpen, Star, Award, TrendingUp, Globe, ThumbsUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const achievements = [
  {
    icon: Users,
    number: 15000,
    suffix: '+',
    label: 'Students Served',
    description: 'Helping students worldwide achieve academic excellence',
    color: 'text-blue-500'
  },
  {
    icon: BookOpen,
    number: 850,
    suffix: '+',
    label: 'Subjects Covered',
    description: 'Comprehensive coverage across all academic disciplines',
    color: 'text-green-500'
  },
  {
    icon: Star,
    number: 98,
    suffix: '%',
    label: 'Success Rate',
    description: 'Consistently delivering outstanding results',
    color: 'text-yellow-500'
  },
  {
    icon: Trophy,
    number: 75,
    suffix: '+',
    label: 'Awards Won',
    description: 'Recognition for excellence in educational services',
    color: 'text-purple-500'
  },
  {
    icon: Globe,
    number: 45,
    suffix: '+',
    label: 'Countries Reached',
    description: 'Global presence with local expertise',
    color: 'text-indigo-500'
  },
  {
    icon: ThumbsUp,
    number: 99,
    suffix: '%',
    label: 'Satisfaction Rate',
    description: 'Student satisfaction is our top priority',
    color: 'text-pink-500'
  },
  {
    icon: TrendingUp,
    number: 250,
    suffix: '%',
    label: 'Growth Rate',
    description: 'Rapid expansion driven by student success',
    color: 'text-orange-500'
  },
  {
    icon: Award,
    number: 500,
    suffix: '+',
    label: 'Expert Tutors',
    description: 'Qualified professionals ready to help',
    color: 'text-red-500'
  }
];

function AnimatedCounter({ end, duration = 2000, suffix = '', isVisible }: {
  end: number;
  duration?: number;
  suffix?: string;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const endTime = startTime + duration;

    const timer = setInterval(() => {
      const now = Date.now();
      const remaining = Math.max((endTime - now) / duration, 0);
      const progress = Math.min((duration - (endTime - now)) / duration, 1);
      
      countRef.current = Math.round(end * progress);
      setCount(countRef.current);

      if (remaining === 0) {
        clearInterval(timer);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, isVisible]);

  return (
    <span className="font-bold">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Achievements() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-achievement-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const cards = document.querySelectorAll('[data-achievement-index]');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="lg:py-10 py-6 bg-slate-50 dark:bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Trophy className="w-8 h-8 text-yellow-500 mr-3" />
            <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 px-4 py-2 rounded-full text-sm font-medium">
              Our Impact
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Notable Achievements
          </h2>
          
          <p className="lg:text-xl text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Numbers that speak to our commitment to excellence and the trust thousands 
            of students place in our services every day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 gap-2 lg:mt-0 -mt-7 max-w-7xl mx-auto">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              data-achievement-index={index}
              className={`group lg:scale-100 scale-90 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-700 transform lg:hover:scale-105 hover:scale-95 ${
                visibleCards.includes(index) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-4 w-16 h-16 mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <achievement.icon className={`w-8 h-8 ${achievement.color} mx-auto group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                </div>
                
                <div className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">
                  <AnimatedCounter 
                    end={achievement.number} 
                    suffix={achievement.suffix}
                    isVisible={visibleCards.includes(index)}
                  />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {achievement.label}
                </h3>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>


      </div>
    </section>
  );
}