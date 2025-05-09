'use client'

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../SpecificSolutions/SpecificSolutions.css';
import '../ValuePillars/ValuePillarsSwiper.css';  
import { FaAngleRight } from 'react-icons/fa';
import { BsCurrencyDollar } from 'react-icons/bs';
import { FiShoppingBag } from 'react-icons/fi';
import { FiHome } from 'react-icons/fi';
import { BsCursor } from 'react-icons/bs';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';

const CARD_HEIGHT = '480px'; // Yüksekliği sabitlemek için

const SpecificSolutions = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="w-full flex flex-col items-center justify-center overflow-hidden py-20 md:py-32 px-4 bg-black relative gap-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-center leading-tight mb-2 bg-gradient-to-r from-white to-[#A6CCFF] bg-clip-text text-transparent">
        Industry-<span className="font-semibold">Specific <span className="text-blue-300">Solutions</span></span>
      </h2>
      <div className="text-center text-xs md:text-base text-gray-400 mb-8 max-w-2xl mx-auto">
        This platform powers high-output teams across industries. See how real teams unlock next-level efficiency.
      </div>
      <div className="w-full relative overflow-hidden" style={{height:'500px'}}>

        <Swiper
          navigation={true}
          breakpoints={
            {
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1100: {
                slidesPerView: 3,
              },
              1600: {
                slidesPerView: 4,
              },
            }
          }
          spaceBetween={20}
          initialSlide={3}
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {/* Hospitality Card */}
          <SwiperSlide className="flex" style={{height:CARD_HEIGHT, minHeight:CARD_HEIGHT, alignItems:'center'}}>
            <div className="w-[352px]  bg-black border border-[#273043] rounded-xl py-6 md:py-8 flex flex-col gap-6 shadow-sm shadow-gray-800  mx-auto relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_32px_0_rgba(80,120,255,0.18)] focus:shadow-[0_0_32px_0_rgba(80,120,255,0.18)]" style={{height:CARD_HEIGHT, minHeight:CARD_HEIGHT}}>
              <div className="absolute left-0 top-0 w-2/3 h-2/3 pointer-events-none z-0"
                style={{
                  background: 'radial-gradient(circle at -10% -10%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 50%, transparent 100%)',
                  filter: 'blur(6px)',
                }}
              />
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2 px-6 ">
                  <FiHome  className="text-lg text-white/80" />
                  <span className="text-base font-semibold text-white">Hospitality</span>
                </div>
                <div className="text-xs text-gray-400 px-6">Turn coupons into loyalty pipelines.</div>
                <div className="flex items-center justify-center h-36 w-full px-6 z-10 relative">
                  <img src="/SpecificSolutions/1.jpg" alt="Hospitality" className={`object-cover h-full w-full rounded-md transition-all duration-300`} />
                </div>
                <a href="#" className="w-[150px] ml-6 px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2 hover:gap-4 transition-all duration-300"><p>Find out more</p> <FaAngleRight /></a>
                <div className="px-6  text-[13px] text-gray-500 italic">“Since switching, our front desk runs smoother, calls are answered instantly, and staff can focus on real guests — not chasing info.”</div>
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
            <div className="w-[352px]  bg-black border border-[#273043] rounded-xl py-6 md:py-8 flex flex-col gap-6 shadow-sm shadow-gray-800   mx-auto relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_32px_0_rgba(80,120,255,0.18)] focus:shadow-[0_0_32px_0_rgba(80,120,255,0.18)]" style={{height:CARD_HEIGHT, minHeight:CARD_HEIGHT}}>
              <div className="absolute left-0 top-0 w-2/3 h-2/3 pointer-events-none z-0"
                style={{
                  background: 'radial-gradient(circle at -10% -10%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 50%, transparent 100%)',
                  filter: 'blur(6px)',
                }}
              />
              <div className="flex flex-col  gap-6">
                <div className="flex items-center gap-2 px-6 ">
                  <FiShoppingBag className="text-lg text-white/80" />
                  <span className="text-base font-semibold text-white">Retail</span>
                </div>
                <div className="text-xs text-gray-400 px-6">Turn coupons into loyalty pipelines.</div>
                <div className="flex items-center justify-center h-36 w-full px-6 z-10 relative">
                  <img src="/SpecificSolutions/2.jpg" alt="Retail" className={`object-cover h-full w-full rounded-md transition-all duration-300`} />
                </div>
                <a href="#" className="w-[150px] ml-6 px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2 hover:gap-4 transition-all duration-300"><p>Find out more</p> <FaAngleRight /></a>
                <div className="px-6  text-[13px] text-gray-500 italic">“Since switching, our front desk runs smoother, calls are answered instantly, and staff can focus on real guests — not chasing info.”</div>
                <div className="flex items-center gap-2 px-6 -mt-2">
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
            <div className="w-[352px]  bg-black border border-[#273043] rounded-xl py-6 md:py-8 flex flex-col gap-6 shadow-sm shadow-gray-800  mx-auto relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_32px_0_rgba(80,120,255,0.18)] focus:shadow-[0_0_32px_0_rgba(80,120,255,0.18)]" style={{height:CARD_HEIGHT, minHeight:CARD_HEIGHT}}>
              <div className="absolute left-0 top-0 w-2/3 h-2/3 pointer-events-none z-0"
                style={{
                  background: 'radial-gradient(circle at -10% -10%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 50%, transparent 100%)',
                  filter: 'blur(6px)',
                }}
              />
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2 px-6 ">
                  <BsCurrencyDollar className="text-lg text-white/80" />
                  <span className="text-base font-semibold text-white">Finance</span>
                </div>
                <div className="text-xs text-gray-400 px-6">Inbound leads. Outbound automated.</div>
                <div className="flex items-center justify-center h-36 w-full px-6 z-10 relative">
                  <img src="/SpecificSolutions/3.jpg" alt="Finance" className={`object-cover h-full w-full rounded-md transition-all duration-300 ${activeIndex === 2 ? '' : ''}`} />
                </div>
                <a href="#" className="w-[150px] ml-6 px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2 hover:gap-4 transition-all duration-300"><p>Find out more</p> <FaAngleRight /></a>
                <div className="px-6  text-[13px] text-gray-500 italic">“We route and qualify leads instantly. The system is smarter than half the tools we replaced.”</div>
                <div className="flex items-center gap-2 px-6 mt-2">
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
            <div className="w-[352px]  bg-black border border-[#273043] rounded-xl py-6 md:py-8 flex flex-col gap-6 shadow-sm shadow-gray-800  mx-auto relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_32px_0_rgba(80,120,255,0.18)] focus:shadow-[0_0_32px_0_rgba(80,120,255,0.18)]" style={{height:CARD_HEIGHT, minHeight:CARD_HEIGHT}}>
              <div className="absolute left-0 top-0 w-2/3 h-2/3  pointer-events-none z-0"
                style={{
                  background: 'radial-gradient(circle at -10% -10%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 50%, transparent 100%)',
                  filter: 'blur(6px)',
                }}
              />
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2 px-6 ">
                  <BsCursor className="text-lg text-white/80" />
                  <span className="text-base font-semibold text-white">Marketing Agencies</span>
                </div>
                <div className="text-xs text-gray-400 px-6">Campaigns that build themselves.</div>
                <div className="flex items-center justify-center h-36 w-full px-6 z-10 relative">
                  <img src="/SpecificSolutions/4.jpg" alt="Marketing Agencies" className={"object-cover h-full w-full rounded-md transition-all duration-300"} />
                </div>
                <a href="#" className="w-[150px] ml-6 px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2 hover:gap-4 transition-all duration-300"><p>Find out more</p> <FaAngleRight /></a>
                <div className="px-6  text-[13px] text-gray-500 italic">“Our client delivery sped up 3x. AI builds the initial logic, and we just review. It’s like having an invisible ops team.”</div>
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