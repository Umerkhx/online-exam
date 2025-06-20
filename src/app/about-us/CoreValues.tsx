'use client';

import { useEffect, useState } from 'react';
import { Heart, Shield, Lightbulb, Target, Users, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const values = [
  {
    icon: Heart,
    title: 'Student-Centric Approach',
    description: 'Every decision we make puts student success and well-being at the forefront, ensuring personalized support for each individual.',
    color: 'text-red-500'
  },
  {
    icon: Shield,
    title: 'Academic Integrity',
    description: 'We maintain the highest standards of academic honesty while providing ethical guidance and support for legitimate learning.',
    color: 'text-green-500'
  },
  {
    icon: Lightbulb,
    title: 'Innovation & Excellence',
    description: 'Continuously evolving our methods and technologies to provide cutting-edge educational solutions that deliver exceptional results.',
    color: 'text-yellow-500'
  },
  {
    icon: Target,
    title: 'Results-Driven Focus',
    description: 'Committed to measurable outcomes and tangible improvements in academic performance through proven methodologies.',
    color: 'text-blue-500'
  },
  {
    icon: Users,
    title: 'Collaborative Learning',
    description: 'Fostering a supportive community where students, educators, and experts work together to achieve academic excellence.',
    color: 'text-purple-500'
  },
  {
    icon: Award,
    title: 'Quality Assurance',
    description: 'Rigorous quality control processes ensure every service meets our high standards and exceeds student expectations.',
    color: 'text-orange-500'
  }
];

export default function CoreValues() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('[data-index]');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-gray-100 dark:bg-gray-950 lg:py-16 py-10 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Our Core Values
          </h2>
          <p className="lg:text-xl text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            These fundamental principles guide everything we do, ensuring we deliver 
            exceptional educational support while maintaining the highest ethical standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-2 lg:mt-0 -mt-7 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <Card 
              key={index}
              data-index={index}
              className={`group lg:scale-100 scale-90 bg-zinc-50 dark:bg-gray-800/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform lg:hover:scale-105 hover:scale-95 ${
                visibleCards.includes(index) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-full p-4 w-20 h-20 mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <value.icon className={`w-12 h-12 ${value.color} mx-auto group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {value.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}