"use client"
import React, { useState } from 'react';
import { Star, Users, Award, TrendingUp, CheckCircle } from 'lucide-react';

interface Review {
  rating: number;
  count: number;
}

const ReviewBanner: React.FC = () => {
  const [reviews] = useState<Review[]>([
    { rating: 5, count: 900 },
    { rating: 4, count: 100 },
    { rating: 3, count: 50 },
    { rating: 2, count: 0 },
    { rating: 1, count: 0 },
  ]);

  const totalReviews = reviews.reduce((acc, review) => acc + review.count, 0);
  const averageRating = reviews.reduce((acc, review) => acc + review.count * review.rating, 0) / totalReviews;

  const stats = [
    { icon: Users, value: '10,000+', label: 'Happy Students' },
    { icon: Award, value: '4.8/5', label: 'Average Rating' },
    { icon: TrendingUp, value: '98%', label: 'Success Rate' },
    { icon: CheckCircle, value: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="w-full">
      <div className="bg-gradient-to-b from-sky-100 to-blue-200 dark:bg-gradient-to-t dark:from-gray-900 dark:to-sky-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/10 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-sky-400/10 rounded-full blur-lg"></div>
        </div>

        <div className="relative max-w-screen-xl mx-auto lg:py-20 py-14 px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/20 dark:bg-gray-800/30 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">Trusted by thousands of students</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Client Reviews About
              <br />
              <span className="text-blue-600 dark:text-zinc-200">Our Services</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Check out what our clients are saying about our services. See how our services provide satisfaction 
              to them and discover why we are the most trusted website across the USA.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <stat.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Rating Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className={`w-8 h-8 ${
                          index < Math.floor(averageRating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : index < averageRating
                            ? 'fill-yellow-400/50 text-yellow-400'
                            : 'text-gray-300 dark:text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {averageRating.toFixed(1)} out of 5
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Based on {totalReviews.toLocaleString()} verified reviews
                </div>
              </div>

              <div className="grid gap-4">
                {reviews.map((review, index) => (
                  <div key={index} className="flex items-center gap-6">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 w-6">
                        {review.rating}
                      </span>
                      {[...Array(review.rating)].map((_, starIndex) => (
                        <Star key={starIndex} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      {[...Array(5 - review.rating)].map((_, starIndex) => (
                        <Star key={starIndex} className="w-4 h-4 text-gray-300 dark:text-gray-600" />
                      ))}
                    </div>
                    
                    <div className="flex-1 h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-full transition-all duration-1000 ease-out"
                        style={{ width: `${(review.count / totalReviews) * 100}%` }}
                      />
                    </div>
                    
                    <div className="text-right min-w-0">
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">
                        {review.count.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {((review.count / totalReviews) * 100).toFixed(0)}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Verified Reviews</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                    <Award className="w-5 h-5" />
                    <span className="text-sm font-medium">Top Rated Service</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                    <TrendingUp className="w-5 h-5" />
                    <span className="text-sm font-medium">Growing Community</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewBanner;