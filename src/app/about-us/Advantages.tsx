'use client';

import { useEffect, useState } from 'react';
import {
    Clock,
    Users,
    Star,
    Zap,
    HeadphonesIcon,
    TrendingUp,
    CheckCircle,
    Rocket
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const advantages = [
    {
        icon: Clock,
        title: '24/7 Availability',
        description: 'Round-the-clock support ensuring help is always available when you need it most, regardless of your timezone or schedule.',
        badge: 'Always On',
        features: ['Instant response', 'Global coverage', 'No waiting time']
    },
    {
        icon: Users,
        title: 'Expert Team',
        description: 'Certified professionals with advanced degrees and years of experience in their respective academic fields.',
        badge: 'PhD Experts',
        features: ['Qualified instructors', 'Subject specialists', 'Proven track record']
    },
    {
        icon: Star,
        title: 'Premium Quality',
        description: 'Uncompromising commitment to excellence with rigorous quality checks and continuous improvement processes.',
        badge: 'Top Rated',
        features: ['Quality assurance', 'Regular reviews', 'Performance tracking']
    },
    {
        icon: Zap,
        title: 'Fast Delivery',
        description: 'Quick turnaround times without sacrificing quality, helping you meet tight deadlines and urgent requirements.',
        badge: 'Lightning Fast',
        features: ['Rush orders', 'Priority support', 'Deadline guarantee']
    },
    {
        icon: HeadphonesIcon,
        title: 'Personal Support',
        description: 'Dedicated account managers and personalized assistance tailored to your specific academic needs and goals.',
        badge: 'One-on-One',
        features: ['Personal advisor', 'Custom solutions', 'Individual attention']
    },
    {
        icon: TrendingUp,
        title: 'Proven Results',
        description: 'Consistent track record of improved grades and academic performance with measurable outcomes and success metrics.',
        badge: '95% Success',
        features: ['Grade improvement', 'Success analytics', 'Performance reports']
    }
];

export default function Advantages() {
    const [visibleCards, setVisibleCards] = useState<number[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.getAttribute('data-advantage-index') || '0');
                        setVisibleCards(prev => prev.includes(index) ? prev : [...prev, index]);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const cards = document.querySelectorAll('[data-advantage-index]');
        cards.forEach(card => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="lg:py-10 py-6 bg-gray-50 dark:bg-slate-950   backdrop-blur-lg">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center mb-6">
                        <Rocket className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
                        <Badge variant="secondary" className="text-sm font-medium">
                            Why Choose Us
                        </Badge>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                        Leading Advantages
                    </h2>

                    <p className="lg:text-xl text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Discover what sets us apart from the competition and why thousands of students
                        trust us with their academic success.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-2 lg:mt-0 -mt-7 max-w-7xl mx-auto ">
                    {advantages.map((advantage, index) => (
                        <Card
                            key={index}
                            data-advantage-index={index}
                            className={`group lg:scale-100 scale-90 bg-gradient-to-br from-gray-100 to-slate-50 dark:from-gray-800 dark:to-gray-900 border-0 shadow-lg hover:shadow-2xl transition-all duration-700 transform lg:hover:scale-105 hover:scale-95 ${visibleCards.includes(index)
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-12 opacity-0'
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <CardContent className="p-8">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                                        <advantage.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <Badge
                                        variant="outline"
                                        className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-700"
                                    >
                                        {advantage.badge}
                                    </Badge>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                    {advantage.title}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                                    {advantage.description}
                                </p>

                                <div className="space-y-2">
                                    {advantage.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <div className="bg-blue-600 dark:bg-sky-900  rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Ready to Experience the Difference?
                        </h3>
                        <p className="text-blue-100 mb-6 text-lg">
                            Join thousands of successful students who have already discovered the Online Exam Relief advantage.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href={'/order-now'}>
                                <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                    Start Your Journey
                                </button>
                            </Link>

                            <Link href={'/contact-us'}>
                            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                                Contact Us Today
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}