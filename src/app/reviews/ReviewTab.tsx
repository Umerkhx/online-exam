"use client"
import React, { useState } from 'react';
import { Star, StarHalf } from 'lucide-react';
import Link from 'next/link';

interface Review {
  name: string;
  text: string;
  rating: number;
  image: string;
  mainService: string;
  subService: string;
}

interface Service {
  id: string;
  name: string;
  subServices: SubService[];
}

interface SubService {
  id: string;
  name: string;
}

const ReviewTabs: React.FC = () => {
  const [selectedMainService, setSelectedMainService] = useState('exam-assistance');
  const [selectedSubService, setSelectedSubService] = useState('all');

  const services: Service[] = [
    {
      id: 'exam-assistance',
      name: 'Exam Assistance',
      subServices: [
        { id: 'all', name: 'All Services' },
        { id: 'live-exam-help', name: 'Live Exam Help' },
        { id: 'timed-test-support', name: 'Timed Test Support' },
        { id: 'practice-test-preparation', name: 'Practice Test Preparation' }
      ]
    },
    {
      id: 'assignment-help',
      name: 'Assignment Help',
      subServices: [
        { id: 'all', name: 'All Services' },
        { id: 'essay-writing', name: 'Essay Writing' },
        { id: 'research-papers', name: 'Research Papers' },
        { id: 'case-studies', name: 'Case Studies' }
      ]
    },
    {
      id: 'tutoring-services',
      name: 'Tutoring Services',
      subServices: [
        { id: 'all', name: 'All Services' },
        { id: 'one-on-one', name: 'One-on-One Tutoring' },
        { id: 'group-sessions', name: 'Group Sessions' },
        { id: 'subject-specific', name: 'Subject Specific' }
      ]
    }
  ];

  const allReviews: Review[] = [
    // Exam Assistance Reviews
    {
      name: 'Rebecca Steve',
      text: 'Exams are one of the toughest and can change the course of one\'s education journey. I was struggling to grasp the concepts but then I came across these tutors. They made the whole learning journey fun and exciting.',
      rating: 4.5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      mainService: 'exam-assistance',
      subService: 'all'
    },
    {
      name: 'Robert Harry',
      text: 'I usually study late at night as I have a day job. The problem for me is that I couldn\'t clear my queries late at night so I needed someone who would be there 24/7. This website solved my problems.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      mainService: 'exam-assistance',
      subService: 'all'
    },
    {
      name: 'Noah Solomon',
      text: 'Not only are they efficient, they are affordable too. I prepared for my exams within a tight budget and there was no compromise on quality at all. Highly recommended.',
      rating: 4.5,
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
      mainService: 'exam-assistance',
      subService: 'all'
    },
    {
      name: 'Sarah Mitchell',
      text: 'The live exam help was incredible! Having real-time assistance during my practice sessions gave me the confidence I needed for the actual exam. The tutors were patient and knowledgeable.',
      rating: 5,
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
      mainService: 'exam-assistance',
      subService: 'live-exam-help'
    },
    {
      name: 'Mike Johnson',
      text: 'The timed test support feature helped me manage my time effectively during exams. I went from constantly running out of time to finishing with minutes to spare. Game changer!',
      rating: 4.5,
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
      mainService: 'exam-assistance',
      subService: 'timed-test-support'
    },
    {
      name: 'Emily Chen',
      text: 'The practice test preparation was exactly what I needed. The variety of questions and detailed explanations helped me understand my weak areas and improve significantly.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      mainService: 'exam-assistance',
      subService: 'practice-test-preparation'
    },

    // Assignment Help Reviews
    {
      name: 'Jessica Williams',
      text: 'The assignment help service exceeded my expectations. The quality of work was outstanding and delivered well before the deadline. Highly professional team!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150',
      mainService: 'assignment-help',
      subService: 'all'
    },
    {
      name: 'David Brown',
      text: 'I needed help with my essay and they provided excellent writing assistance. The essay was well-structured, properly cited, and met all my requirements perfectly.',
      rating: 4.5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      mainService: 'assignment-help',
      subService: 'essay-writing'
    },
    {
      name: 'Amanda Davis',
      text: 'The research paper assistance was phenomenal. They helped me with proper methodology, data analysis, and formatting. My professor was impressed with the quality.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150',
      mainService: 'assignment-help',
      subService: 'research-papers'
    },
    {
      name: 'Chris Wilson',
      text: 'The case study analysis was thorough and insightful. They provided multiple perspectives and backed everything with solid evidence. Excellent work!',
      rating: 4.5,
      image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=150',
      mainService: 'assignment-help',
      subService: 'case-studies'
    },

    // Tutoring Services Reviews
    {
      name: 'Lisa Anderson',
      text: 'The tutoring service has been a game-changer for my studies. The personalized approach and flexible scheduling made all the difference in my academic performance.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=150',
      mainService: 'tutoring-services',
      subService: 'all'
    },
    {
      name: 'Mark Thompson',
      text: 'One-on-one tutoring sessions were incredibly effective. My tutor understood my learning style and adapted the teaching methods accordingly. Saw immediate improvement!',
      rating: 4.5,
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150',
      mainService: 'tutoring-services',
      subService: 'one-on-one'
    },
    {
      name: 'Rachel Green',
      text: 'The group tutoring sessions were fantastic! Learning with peers while having expert guidance created a perfect learning environment. Highly recommend!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=150',
      mainService: 'tutoring-services',
      subService: 'group-sessions'
    },
    {
      name: 'Tom Martinez',
      text: 'Subject-specific tutoring in mathematics was exactly what I needed. The tutor broke down complex concepts into manageable parts. My grades improved significantly!',
      rating: 4.5,
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150',
      mainService: 'tutoring-services',
      subService: 'subject-specific'
    }
  ];

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }
    for (let i = stars.length; i < 5; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300 dark:text-gray-600" />);
    }

    return stars;
  };

  const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
    <div className="group h-full">
      <div className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 scale-95 group-hover:scale-100 group-hover:shadow-2xl transition-all duration-300 ease-out">
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-r from-blue-400 to-purple-400 p-0.5">
              <img
                className="w-full h-full object-cover rounded-full bg-white"
                src={review.image}
                alt={review.name}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${review.name}&background=random`;
                }}
              />
            </div>
            <div className="ml-4 flex-1">
              <h4 className="font-bold text-gray-900 dark:text-white">{review.name}</h4>
              <div className="flex items-center mt-1">
                {renderStars(review.rating)}
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                  {review.rating}/5
                </span>
              </div>
            </div>
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
            {review.text}
          </p>
          
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">S</span>
              </div>
              <div className="ml-3">
                <div className="font-bold text-gray-900 dark:text-white text-sm">Online Exam Relief</div>
                <Link href={'/'} className="text-blue-500 hover:text-blue-600 dark:text-blue-400 text-xs cursor-pointer hover:underline">
                  onlineexamrelief.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const currentService = services.find(service => service.id === selectedMainService);
  
  const filteredReviews = allReviews.filter(review => {
    if (review.mainService !== selectedMainService) return false;
    if (selectedSubService === 'all') return true;
    return review.subService === selectedSubService || review.subService === 'all';
  });

  const handleMainServiceChange = (serviceId: string) => {
    setSelectedMainService(serviceId);
    setSelectedSubService('all'); // Reset sub-service when main service changes
  };

  return (
    <div className="lg:mt-16 lg:mb-32 mt-5 mb-20 max-w-screen-xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-500 to-zinc-800 dark:from-sky-700 dark:to-zinc-50 bg-clip-text text-transparent mb-4">
          Our Client's Reviews
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Discover what our satisfied clients say about our comprehensive range of academic services
        </p>
      </div>

      {/* Main Service Selection */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          Select Service Category
        </h3>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => handleMainServiceChange(service.id)}
              className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform ${
                selectedMainService === service.id
                  ? 'bg-gradient-to-r from-gray-800 to-sky-900 text-zinc-50 shadow-2xl scale-105'
                  : 'bg-white/60 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-gray-700/80 hover:scale-105 shadow-lg'
              }`}
            >
              {service.name}
            </button>
          ))}
        </div>
      </div>

      {/* Sub Service Selection */}
      {currentService && (
        <div className="mb-8">
          <h3 className="text-xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            {currentService.name} - Specific Services
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {currentService.subServices.map((subService) => {
              const reviewCount = subService.id === 'all' 
                ? allReviews.filter(r => r.mainService === selectedMainService).length
                : allReviews.filter(r => r.mainService === selectedMainService && (r.subService === subService.id || r.subService === 'all')).length;
              
              return (
                <button
                  key={subService.id}
                  onClick={() => setSelectedSubService(subService.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedSubService === subService.id
                      ? 'bg-gradient-to-r from-gray-800 to-sky-900 text-zinc-50 shadow-lg transform scale-105'
                      : 'bg-white/60 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-gray-700/80 hover:scale-105'
                  }`}
                >
                  {subService.name}
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    selectedSubService === subService.id
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                  }`}>
                    {reviewCount}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Reviews Grid */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {filteredReviews.map((review, index) => (
          <ReviewCard key={`${review.mainService}-${review.subService}-${index}`} review={review} />
        ))}
      </div>

      {filteredReviews.length === 0 && (
        <div className="text-center py-12">
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">
              No reviews available for this service yet.
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              Be the first to leave a review for {currentService?.name}!
            </p>
          </div>
        </div>
      )}

      {/* Service Summary */}
      {filteredReviews.length > 0 && (
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-gray-900/20 dark:to-sky-500/20 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {currentService?.name} Reviews Summary
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Showing {filteredReviews.length} reviews for {
                selectedSubService === 'all' 
                  ? 'all services' 
                  : currentService?.subServices.find(s => s.id === selectedSubService)?.name.toLowerCase()
              }
            </p>
            <div className="flex items-center justify-center gap-2 mt-3">
              <div className="flex items-center gap-1">
                {renderStars(4.7)}
              </div>
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                4.7 average rating
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewTabs;