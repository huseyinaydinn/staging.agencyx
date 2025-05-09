import React from 'react'
import { LuPhoneCall } from 'react-icons/lu'
import { GoGift } from 'react-icons/go'
import { TfiAlarmClock } from 'react-icons/tfi'
import './NumbersThatSpeakCardEffect.css'

const stats = [
  {
    icon: (
      <LuPhoneCall size={48} />    
    ),
    value: '4,392',
    label: 'Chats handled'
  },
  {
    icon: (
<GoGift size={48} />    ),
    value: '1,212',
    label: 'Loyalty redemptions'
  },
  {
    icon: (
<TfiAlarmClock  size={48} />
    ),
    value: '3,180',
    label: 'Calls routed today'
  }
]

const page = () => {
  return (
          <section className="hero-bg flex flex-col items-center justify-center overflow-hidden py-2 md:py-4 lg:py-12 px-2 md:px-4 bg-black relative gap-4 md:gap-8">
              <div className="stars">
          <div className="star"></div>
          <div className="star"></div>

          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>

          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>

          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>

          <div className="star"></div>
        </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-center leading-tight bg-gradient-to-r from-white to-[#659BFF] bg-clip-text text-transparent">
        Numbers that speak
      </h2>
      <div className="flex flex-col md:flex-row gap-7 w-full max-w-5xl justify-center items-stretch px-2 ">
        {stats.map((stat, idx) => (
          <div
            key={stat.label}
            className="card bg-amber-400 border border-[#232732] rounded-xl px-2 flex items-center justify-start gap-3 shadow mx-auto hover:scale-105 transition-all duration-400"
          >
            <div className="flex items-center justify-center bg-transparent rounded-lg w-16 h-16 min-w-8">
              {stat.icon}
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-xl font-semibold text-white mb-1">{stat.value}</div>
              <div className="text-base text-white/60">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default page