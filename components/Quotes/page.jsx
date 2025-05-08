"use client";

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './QuotesCarousel.module.css';

// Quotes data
const quotes = [
  {
    text: "We were doing manual follow-ups until GAS... Now ops run themselves. Our staff can focus on creating exceptional guest experiences instead of being buried in administrative tasks.",
    author: "Emily Rodriguez",
    company: "CozyStay Rentals",
  },
  {
    text: "Since implementing this solution, our booking confirmations are instantaneous and error-free. We've freed up countless hours that we now invest in marketing and guest outreach.",
    author: "Michael Chen",
    company: "UrbanEscape Lodgings",
  },
  {
    text: "Automating our guest communications was a game-changer. Our cancellation rate dropped by 20%, and our 5-star reviews are through the roof!",
    author: "Sofia Martinez",
    company: "Beachside Bungalows",
  },
];

export default function QuotesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };
  return (
    <section className="bg-w-full py-24">
      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          speed={3000}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="quotes-swiper"
        >
          {quotes.map((q, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col items-center text-center px-4">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-100 leading-relaxed">
                  “{q.text}”
                </p>
                <div className="mt-8 pb-12">
                  <p className="text-base md:text-lg font-semibold text-white">{q.author}</p>
                  <p className="text-xs md:text-base text-blue-300">{q.company}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
