import Image from 'next/image'
import React from 'react'
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

type BannerSwiperProps = {
  contentLoaded: boolean;
  contentSkeleton: React.ElementType;
  reviews: Array<{
    link: string;
    image: string;
    alt: string;
    width: number;
    height: number;
  }>;
  reviewsRef?: React.RefObject<HTMLDivElement>;
};

function BannerSwiper({ contentLoaded, contentSkeleton: ContentSkeleton, reviews, reviewsRef }: BannerSwiperProps){
  return (
   <div
    ref={reviewsRef}
    className="bg-white/80 backdrop-blur-sm py-3 px-4 mt-0 lg:mt-6 
              scale-90 md:scale-100 h-28 rounded-xl w-full max-w-[500px] mx-auto lg:mx-0 
              shadow-md border border-white/20"
  >
    {contentLoaded ? (
      <Swiper
        slidesPerView={2}
        spaceBetween={8}
        breakpoints={{
          1025: { slidesPerView: 3, spaceBetween: 12 },
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="reviews-swiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center justify-center p-3 rounded-lg 
                      hover:bg-white/50 dark:hover:bg-white/20 transition-all duration-200">
              <a href={review.link} className="group">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={review.image}
                    alt={review.alt}
                    width={review.width}
                    height={review.height}
                    className="transition-transform duration-200 group-hover:scale-105"
                    priority={index === 0}
                  />
                </div>
                <div className="mt-2 text-sm">⭐⭐⭐⭐⭐</div>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    ) : (
      <div className="flex justify-center gap-4 py-4">
        <ContentSkeleton className="w-16 h-16 rounded-lg" />
        <ContentSkeleton className="w-16 h-16 rounded-lg" />
        <ContentSkeleton className="w-16 h-16 rounded-lg" />
      </div>
    )}
  </div>
  )
}

export default BannerSwiper