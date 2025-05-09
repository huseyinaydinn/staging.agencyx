"use client"

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaAnglesRight } from 'react-icons/fa6';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const stories = [
  {
    title: 'Maldives Home - CCR',
    image: '/SuccessStories/1.jpg',
    before: { label: '12 hrs/week wasted', color: 'text-[#FF7D7D]' },
    after: { label: '80% time saved', color: 'text-[#6BE2A6]' },
    desc: 'Streamlined guest check-in and follow-up processes, reducing administrative workload and improving guest satisfaction scores by 32%.',
    tools: ['Workflow Builder', 'CRM Dashboard', 'AI Agents','Workflow'],
    button: 'Read full case study',
    buttonColor: 'bg-[#3F69FF]',
    buttonText: 'text-white',
    link: '#',
  },
  {
    title: 'Genç Yapı Market - Retail Store',
    image: '/SuccessStories/2.jpg',
    before: { label: '15% inventory errors', color: 'text-[#FF7D7D]' },
    after: { label: '99.8% accuracy', color: 'text-[#6BE2A6]' },
    desc: 'Implemented predictive inventory management system that reduced stockouts by 73% and increased overall sales by 18% in the first quarter.',
    tools: ['Analytics Platform', 'Loyalty Engine', 'Workflow Builder'],
    button: 'Read full case study',
    buttonColor: 'bg-[#3F69FF]',
    buttonText: 'text-white',
    link: '#',
  }
];

export default function SuccessStories() {
  const swiperRef = useRef(null);
  return (
    <div className='bg-black'>
        <section
      className="hero-bg  w-full flex flex-col items-center justify-center py-20 md:py-32 px-2 md:px-6"
    >
                    <div className="stars">
          <div className="star"></div>
          <div className="star"></div>

          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>

          <div className="star"></div>
        </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-center leading-tight mb-12 bg-gradient-to-r from-white to-[#A6CCFF] bg-clip-text text-transparent">
        Success <span className="font-normal">Stories</span>
      </h2>
      <div className="w-full max-w-7xl relative flex items-center justify-center pb-12 px-1">
        {/* Prev Button */}
        <button
          type="button"
          aria-label="Previous"
          className="custom-prev flex absolute left-4 box-shadow-lg bg-transparent text-transparent top-1/3 -translate-y-1/2  z-10 w-10 h-10 rounded-full border items-center justify-center  transition" 
        >
          <FaChevronLeft className="text-xl text-[#5af5f0]" />
        </button>
        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={100}
          breakpoints
          slidesPerView={1}
          loop={true}
          navigation={{ prevEl: '.custom-prev', nextEl: '.custom-next' }}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          pagination={{ clickable: true, dynamicBullets: true, el: '.custom-success-pagination' }}
          onSwiper={swiper => (swiperRef.current = swiper)}
          className="w-full"
        >
          {stories.map((story, idx) => (
            <SwiperSlide
  key={idx}
  className="flex items-center justify-center rounded-2xl"
>              <div className=" flex flex-col w-full  md:max-w-[560px] rounded-2xl bg-[rgba(0,0,0,0.01)] border border-[#23252C] shadow-lg p-6 md:p-8 relative mx-auto backdrop-blur-sm" style={{boxShadow: '0 2px 12px 0 rgba(63,105,255,0.10), inset 0 8px 32px 0 rgba(255,255,255,0.08)'}}>
                <div className="text-[17px] md:text-lg text-white font-normal mb-4 tracking-tight">{story.title}</div>
                <div className="w-full h-[170px] md:h-[160px] rounded-xl overflow-hidden mb-5">
                  <img src={story.image} alt={story.title} className="object-cover w-full h-full" />
                </div>
                <div className="flex items-center gap-6 mb-2">
                  <div>
                    <div className="text-xs text-gray-400 font-light">Before</div>
                    <div className={`text-[13px] font-normal ${story.before.color}`}>{story.before.label}</div>
                  </div>
                  <span className="bg-gray-800 rounded-sm w-7 h-7 flex items-center justify-center"><FaArrowRight className="text-[#7B8EF9] text-base" /></span>
                  <div>
                    <div className="text-xs text-gray-400 font-light">After</div>
                    <div className={`text-[13px] font-normal ${story.after.color}`}>{story.after.label}</div>
                  </div>
                </div>
                <div className="text-xs text-gray-400 font-light mb-4 min-h-[40px]">{story.desc}</div>
                <div className="flex flex-wrap items-center gap-2 mb-7">
                  <span className="text-xs text-gray-400 mr-2 font-light">Tools used:</span>
                  {story.tools.map(tool => (
                    <span key={tool} className="flex items-center gap-1 px-3 py-1 rounded-full bg-[rgba(255,255,255,0.10)] text-xs text-gray-200 border border-[#2C3140] font-normal">
                      <span className="p-1 rounded-full border-1 border-blue-500"><FaAnglesRight className="text-blue-500 text-lg bg-black rounded-full" size={10}/></span> {tool}
                    </span>
                  ))}
                </div>
                <a
                  href={story.link}
                  className="mt-auto w-full sm:w-1/2 flex items-center justify-center gap-0 sm:gap-2 rounded-xl px-0 py-0 h-[46px] bg-blue-600 hover:bg-blue-500 transition shadow-none text-[#fff]"
                  style={{boxShadow:'0 2px 12px 0 rgba(63,105,255,0.10)'}}
                >
                  <span className="flex items-center justify-center text-center gap-2 w-full h-full text-xs sm:text-sm font-medium">
                    Read full case study <FaArrowRight className="ml-1 text-[16px]" />
                  </span>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Next Button */}
        <button
          type="button"
          aria-label="Next"
          className="custom-next flex absolute right-4 top-1/3 -translate-y-1/2 z-10 w-10 h-10 rounded-full border items-center justify-center hover:bg-[#23252C] transition text-transparent bg-transparent" 
        >
          <FaChevronRight className="text-xl text-[#5af5f0]" />
        </button>
        {/* Custom Swiper Pagination */}
        <div className="custom-success-pagination absolute left-0 right-0 bottom-0 flex items-center justify-center pb-2 z-20" />
      </div>
    </section>
    </div>
  );
}