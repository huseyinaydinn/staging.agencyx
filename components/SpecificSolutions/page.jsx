'use client'

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { FaAngleRight } from 'react-icons/fa';
import { BsCurrencyDollar } from 'react-icons/bs';
import { FiShoppingBag } from 'react-icons/fi';
import { FiHome } from 'react-icons/fi';
import { BsCursor } from 'react-icons/bs';

const CARD_HEIGHT = '500px'; // Yüksekliği sabitlemek için

const SpecificSolutions = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  return (
    <section className="flex flex-col items-center justify-center overflow-hidden py-4 md:py-5 px-4 bg-black relative gap-2">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-center leading-tight mb-2 bg-gradient-to-r from-white to-[#A6CCFF] bg-clip-text text-transparent">
        Industry-<span className="font-semibold">Specific <span className="text-blue-300">Solutions</span></span>
      </h2>
      <div className="text-center text-xs md:text-base text-gray-400 mb-4 max-w-2xl mx-auto">
        This platform powers high-output teams across industries. See how real teams unlock next-level efficiency.
      </div>
      <div className="w-full max-w-lg lg:max-w-6xl relative overflow-hidden" style={{height:'500px'}}>
        {/* Prev Button */}
        <button
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
          className="custom-prev flex absolute left-4 box-shadow-lg bg-transparent text-transparent top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border items-center justify-center transition" aria-label="Previous"
        >
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
        </button>
        {/* Next Button */}
        <button
          type="button"
          onClick={() => swiperRef.current?.slideNext()}
          className="custom-next flex absolute right-4 box-shadow-lg bg-transparent text-transparent top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border items-center justify-center transition" aria-label="Next"
        >
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
        </button>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={36}
          slidesPerView={1.3}
          centeredSlides={true}
          loop={true}
          speed={500}
          autoplay={{ delay: 3000, disableOnInteraction: true }}
          observer={true}
          observeParents={true}
          pagination={{ clickable: true, dynamicBullets: true }}
          onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
          onSwiper={swiper => { swiperRef.current = swiper; setActiveIndex(swiper.realIndex); }}
          breakpoints={{
            1024: {
              slidesPerView: 2.3,
              centeredSlides: true,
              loop: true,
              pagination: false,
              allowTouchMove: true,
            },
          }}
          className="group"
          style={{overflow:'visible'}}
        >
          {/* Hospitality Card */}
          <SwiperSlide className="flex" style={{height:CARD_HEIGHT, minHeight:CARD_HEIGHT, alignItems:'center'}}>
            <div className="flex-1  bg-black border border-[#273043] rounded-xl py-6 md:py-8 flex flex-col gap-6 shadow-sm shadow-gray-800 min-w-[260px] max-w-md mx-auto relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_32px_0_rgba(80,120,255,0.18)] focus:shadow-[0_0_32px_0_rgba(80,120,255,0.18)]" style={{height:CARD_HEIGHT, minHeight:CARD_HEIGHT}}>
              <div className="absolute left-0 top-0 w-2/3 h-2/3 pointer-events-none z-0"
                style={{
                  background: 'radial-gradient(circle at -10% -10%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 50%, transparent 100%)',
                  filter: 'blur(6px)',
                }}
              />
              <div className="flex flex-col gap-7">
                <div className="flex items-center gap-2 px-6 ">
                  <FiHome  className={`text-lg ${activeIndex === 0 ? 'text-blue-500' : 'text-white/80'}`} />
                  <span className={`text-base font-semibold ${activeIndex === 0 ? 'text-blue-500' : 'text-white'}`}>Hospitality</span>
                </div>
                <div className="text-xs text-gray-400 px-6">Turn coupons into loyalty pipelines.</div>
                <div className="flex items-center justify-center h-36 w-full px-6 z-10 relative">
                  <img src="/SpecificSolutions/1.jpg" alt="Hospitality" className={`object-cover h-full w-full rounded-md transition-all duration-300 ${activeIndex === 0 ? '' : 'grayscale'}`} />
                </div>
                <a href="#" className="w-[150px] ml-6 px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2 hover:gap-4 transition-all duration-300"><p>Find out more</p> <FaAngleRight /></a>
                <p className={`px-6 text-[13px] italic ${activeIndex === 0 ? 'text-white' : 'text-gray-500'}`}>“Since switching, our front desk runs smoother, calls are answered instantly, and staff can focus on real guests — not chasing info.”</p>
                <div className="flex items-center gap-2 px-6 mt-auto">
                  <img src="/avatar.png" alt="Omar Derghan" className="w-7 h-7 rounded-full border-2 border-gray-700" />
                  <div>
                    <div className="text-xs text-white font-semibold">Omar Derghan</div>
                    <div className="text-[11px] text-gray-400">AI Specialist Hotels and Resorts</div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Retail Card */}
          <SwiperSlide className="flex" style={{height:CARD_HEIGHT, minHeight:CARD_HEIGHT, alignItems:'center'}}>
            <div className="flex-1  bg-black border border-[#273043] rounded-xl py-6 md:py-8 flex flex-col gap-6 shadow-sm shadow-gray-800 min-w-[260px] max-w-md mx-auto relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_32px_0_rgba(80,120,255,0.18)] focus:shadow-[0_0_32px_0_rgba(80,120,255,0.18)]" style={{height:CARD_HEIGHT, minHeight:CARD_HEIGHT}}>
              <div className="absolute left-0 top-0 w-2/3 h-2/3 pointer-events-none z-0"
                style={{
                  background: 'radial-gradient(circle at -10% -10%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 50%, transparent 100%)',
                  filter: 'blur(6px)',
                }}
              />
              <div className="flex flex-col gap-7">
                <div className="flex items-center gap-2 px-6 ">
                  <FiShoppingBag className={`text-lg ${activeIndex === 1 ? 'text-blue-500' : 'text-white/80'}`} />
                  <span className={`text-base font-semibold ${activeIndex === 1 ? 'text-blue-500' : 'text-white'}`}>Retail</span>
                </div>
                <div className="text-xs text-gray-400 px-6">Turn coupons into loyalty pipelines.</div>
                <div className="flex items-center justify-center h-36 w-full px-6 z-10 relative">
                  <img src="/SpecificSolutions/2.jpg" alt="Retail" className={`object-cover h-full w-full rounded-md transition-all duration-300 ${activeIndex === 1 ? '' : 'grayscale'}`} />
                </div>
                <a href="#" className="w-[150px] ml-6 px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2 hover:gap-4 transition-all duration-300"><p>Find out more</p> <FaAngleRight /></a>
                <p className={`px-6 text-[13px] italic ${activeIndex === 1 ? 'text-white' : 'text-gray-500'}`}>“Since switching, our front desk runs smoother, calls are answered instantly, and staff can focus on real guests — not chasing info.”</p>
                <div className="flex items-center gap-2 px-6 mt-auto">
                  <img src="/avatar.png" alt="Omar Derghan" className="w-7 h-7 rounded-full border-2 border-gray-700" />
                  <div>
                    <div className="text-xs text-white font-semibold">Omar Derghan</div>
                    <div className="text-[11px] text-gray-400">AI Specialist Hotels and Resorts</div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Finance Card */}
          <SwiperSlide className="flex" style={{height:CARD_HEIGHT, minHeight:CARD_HEIGHT, alignItems:'center'}}>
            <div className="flex-1  bg-black border border-[#273043] rounded-xl py-6 md:py-8 flex flex-col gap-6 shadow-sm shadow-gray-800 min-w-[260px] max-w-md mx-auto relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_32px_0_rgba(80,120,255,0.18)] focus:shadow-[0_0_32px_0_rgba(80,120,255,0.18)]" style={{height:CARD_HEIGHT, minHeight:CARD_HEIGHT}}>
              <div className="absolute left-0 top-0 w-2/3 h-2/3 pointer-events-none z-0"
                style={{
                  background: 'radial-gradient(circle at -10% -10%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 50%, transparent 100%)',
                  filter: 'blur(6px)',
                }}
              />
              <div className="flex flex-col gap-7">
                <div className="flex items-center gap-2 px-6 ">
                  <BsCurrencyDollar className={`text-lg ${activeIndex === 2 ? 'text-blue-500' : 'text-white/80'}`} />
                  <span className={`text-base font-semibold ${activeIndex === 2 ? 'text-blue-500' : 'text-white'}`}>Finance</span>
                </div>
                <div className="text-xs text-gray-400 px-6">Inbound leads. Outbound automated.</div>
                <div className="flex items-center justify-center h-36 w-full px-6 z-10 relative">
                  <img src="/SpecificSolutions/3.jpg" alt="Finance" className={`object-cover h-full w-full rounded-md transition-all duration-300 ${activeIndex === 2 ? '' : 'grayscale'}`} />
                </div>
                <a href="#" className="w-[150px] ml-6 px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2 hover:gap-4 transition-all duration-300"><p>Find out more</p> <FaAngleRight /></a>
                <p className={`px-6 text-[13px] italic ${activeIndex === 2 ? 'text-white' : 'text-gray-500'}`}>“We route and qualify leads instantly. The system is smarter than half the tools we replaced.”</p>
                <div className="flex items-center gap-2 px-6 mt-auto">
                  <img src="/avatar.png" alt="Ayman Hasan" className="w-7 h-7 rounded-full border-2 border-gray-700" />
                  <div>
                    <div className="text-xs text-white font-semibold">Ayman Hasan</div>
                    <div className="text-[11px] text-gray-400">AI Specialist Financial Sector</div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Marketing Agencies Card */}
          <SwiperSlide className="flex" style={{height:CARD_HEIGHT, minHeight:CARD_HEIGHT, alignItems:'center'}}>
            <div className="flex-1  bg-black border border-[#273043] rounded-xl py-6 md:py-8 flex flex-col gap-6 shadow-sm shadow-gray-800 min-w-[260px] max-w-md mx-auto relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_32px_0_rgba(80,120,255,0.18)] focus:shadow-[0_0_32px_0_rgba(80,120,255,0.18)]" style={{height:CARD_HEIGHT, minHeight:CARD_HEIGHT}}>
              <div className="absolute left-0 top-0 w-2/3 h-2/3 pointer-events-none z-0"
                style={{
                  background: 'radial-gradient(circle at -10% -10%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 50%, transparent 100%)',
                  filter: 'blur(6px)',
                }}
              />
              <div className="flex flex-col gap-7">
                <div className="flex items-center gap-2 px-6 ">
                  <BsCursor className={`text-lg ${activeIndex === 3 ? 'text-blue-500' : 'text-white/80'}`} />
                  <span className={`text-base font-semibold ${activeIndex === 3 ? 'text-blue-500' : 'text-white'}`}>Marketing Agencies</span>
                </div>
                <p className={`px-6 text-[13px] italic ${activeIndex === 3 ? 'text-white' : 'text-gray-500'}`}>Campaigns that build themselves.</p>
                <div className="flex items-center justify-center h-36 w-full px-6 z-10 relative">
                  <img src="/SpecificSolutions/4.jpg" alt="Marketing Agencies" className={`object-cover h-full w-full rounded-md transition-all duration-300 ${activeIndex === 3 ? '' : 'grayscale'}`} />
                </div>
                <a href="#" className="w-[150px] ml-6 px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2 hover:gap-4 transition-all duration-300"><p>Find out more</p> <FaAngleRight /></a>
                <p className={`px-6 text-[13px] italic ${activeIndex === 3 ? 'text-white' : 'text-gray-500'}`}>“Our client delivery sped up 3x. AI builds the initial logic, and we just review. It’s like having an invisible ops team.”</p>
                <div className="flex items-center gap-2 px-6 mt-auto">
                  <img src="/avatar.png" alt="Ayman Hasan" className="w-7 h-7 rounded-full border-2 border-gray-700" />
                  <div>
                    <div className="text-xs text-white font-semibold">Ayman Hasan</div>
                    <div className="text-[11px] text-gray-400">AI Specialist Marketing Wing</div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="flex justify-center mt-6 lg:hidden">
          <div className="swiper-pagination custom-swiper-pagination block lg:hidden"></div>
        </div>
      </div>
    </section>
  );
};

export default SpecificSolutions;