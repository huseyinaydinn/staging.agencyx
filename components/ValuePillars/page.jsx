'use client'

import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../ValuePillars/ValuePillarsSwiper.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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
  },
]

const ArrowButton = ({ direction, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={direction === 'prev'
  ? 'custom-prev flex absolute left-4 box-shadow-lg bg-transparent text-transparent top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border items-center justify-center transition'
  : 'custom-next flex absolute right-4 box-shadow-lg bg-transparent text-transparent top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border items-center justify-center transition'
}
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
    <section className="min-h-screen flex flex-col items-center justify-center overflow-hidden py-6 md:py-12 pb-10 px-4 relative gap-12 bg-[#0b0d11]" >
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-light text-center leading-tight mb-4 bg-gradient-to-r from-white to-[#A6CCFF] bg-clip-text text-transparent"
      >
        Value Pillars
      </h2>
      <div className="w-full max-w-lg lg:max-w-6xl relative px-4 min-h-[420px]">
        {/* Prev Button */}
        <button className="custom-prev flex absolute left-2 box-shadow-lg bg-transparent border-[#5af5f0] text-transparent top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border items-center justify-center transition">
  <FaChevronLeft className="text-[#5af5f0]" />
</button>
        <button className="custom-next flex absolute right-4 box-shadow-lg bg-transparent border-[#5af5f0] text-transparent top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border items-center justify-center transition">
  <FaChevronRight className="text-[#5af5f0]" />
</button>
        <Swiper 
          navigation={{ prevEl: '.custom-prev', nextEl: '.custom-next' }} 
          modules={[Pagination, Navigation]}
          spaceBetween={36}
          slidesPerView={1}
          onSwiper={swiper => (swiperRef.current = swiper)}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              pagination: false,
              allowTouchMove: false,
            },
          }}
          
        >
          {cardData.map((card) => (
            <SwiperSlide key={card.title} className="flex Pillarsgroup p-1 mt-12 mb-12 md:px-10 justify-center">
              <div
                className="flex-1 bg-black border border-[#273043] rounded-xl py-6 md:py-8 flex flex-col shadow-sm shadow-gray-800 max-w-xs min-w-[300px] md:max-w-md mx-auto relative overflow-hidden hover:scale-110 hover:bg-[#0b0d11] transition-all duration-500"
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
          
        </Swiper>
      </div>
    </section>
  )
}

export default page