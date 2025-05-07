'use client'

import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../ValuePillars/ValuePillarsSwiper.css';

const cardData = [
  {
    title: 'Seamless Automation',
    subtitle: 'Automation That Outpaces the Industry.',
    description: 'Leave the clunky tools and manual work to the past. This is AI-powered, elegant execution.',
    image: '/ValuePillar/SeamlessAutomation.png',
  },
  {
    title: 'Creative Workflows',
    subtitle: 'Build Flows. Break Limits.',
    description: 'Drag. Drop. Dominate. Launch workflows powered by custom GPTs and real-time triggers.',
    image: '/ValuePillar/CreativeWorkflows.png',
  },
  {
    title: 'Actionable Insights',
    subtitle: 'See What Others Can’t.',
    description: 'Get ahead of issues, ideas, and decisions with predictive dashboards and AI-drafted intelligence.',
    image: '/ValuePillar/ActionableInsights.png',
  }
]

const ArrowButton = ({ direction, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`absolute top-1/2 z-20 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center shadow transition-all duration-300 focus:outline-none ${direction === 'prev' ? 'left-2' : 'right-2'} block lg:hidden`}
    aria-label={direction === 'prev' ? 'Previous' : 'Next'}
    style={{ pointerEvents: 'auto' }}
  >
    {direction === 'prev' ? (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
    ) : (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
    )}
  </button>
);

const page = () => {
  const swiperRef = useRef(null);
  return (
    <section className="flex flex-col items-center justify-center overflow-hidden py-24 md:py-32 pb-10 px-4 bg-black relative gap-12">
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-light text-center leading-tight mb-4 bg-gradient-to-r from-white to-[#A6CCFF] bg-clip-text text-transparent"
      >
        Value Pillars
      </h2>
      <div className="w-full max-w-lg lg:max-w-6xl relative">
        {/* Prev Button */}
        <ArrowButton direction="prev" onClick={() => swiperRef.current?.slidePrev()} />
        {/* Next Button */}
        <ArrowButton direction="next" onClick={() => swiperRef.current?.slideNext()} />
        <Swiper
          modules={[Pagination]}
          spaceBetween={36}
          slidesPerView={1}
          pagination={{ clickable: true, dynamicBullets: true }}
          onSwiper={swiper => (swiperRef.current = swiper)}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              pagination: false,
              allowTouchMove: false,
            },
          }}
          className="group"
        >
          {cardData.map((card) => (
            <SwiperSlide key={card.title} className="flex">
              <div
                className="flex-1 bg-black border border-[#273043] rounded-xl py-6 md:py-8 flex flex-col shadow-sm shadow-gray-800 min-w-[300px] max-w-md mx-auto relative overflow-hidden hover:scale-105 transition-all duration-500"
              >
                {/* Glow Effect */}
                <div className="absolute left-0 top-0 w-2/3 h-2/3 pointer-events-none z-0"
                  style={{
                    background: 'radial-gradient(circle at -10% -10%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.06) 50%, transparent 100%)',
                    filter: 'blur(6px)',
                  }}
                />
                <div className="mb-6 flex items-center justify-center h-40 w-full px-6 z-10 relative">
                  <img src={card.image} alt={card.title} className="object-fill h-full w-full" />
                </div>
                <div className="mt-auto flex flex-col w-full items-start gap-8 pl-6 z-10 relative">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold text-white mb-1">{card.title}</h3>
                    <div className="text-sm text-white/60 mb-2">{card.subtitle}</div>
                  </div>
                  <div className="text-xs text-white/40">{card.description}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* Swiper Pagination will render here by default */}
        </Swiper>
        <div className="flex justify-center mt-6 lg:hidden">
          <div className="swiper-pagination custom-swiper-pagination block lg:hidden"></div>
        </div>
      </div>
    </section>
  )
}

export default page