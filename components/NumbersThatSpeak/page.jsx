import React from 'react'
import { LuPhoneCall } from 'react-icons/lu'
import { GoGift } from 'react-icons/go'
import { TfiAlarmClock } from 'react-icons/tfi'

const stats = [
  {
    icon: (
      <LuPhoneCall size={24} />    
    ),
    value: '4,392',
    label: 'Chats handled'
  },
  {
    icon: (
<GoGift size={24} />    ),
    value: '1,212',
    label: 'Loyalty redemptions'
  },
  {
    icon: (
<TfiAlarmClock  size={24} />
    ),
    value: '3,180',
    label: 'Calls routed today'
  }
]

const page = () => {
  return (
    <section className="flex flex-col items-center justify-center py-12 md:py-20 px-4 bg-black">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-center leading-tight mb-10 bg-gradient-to-r from-white to-[#A6CCFF] bg-clip-text text-transparent">
        Numbers that speak
      </h2>
      <div className="flex flex-col md:flex-row gap-7 w-full max-w-5xl justify-center items-stretch">
        {stats.map((stat, idx) => (
          <div
            key={stat.label}
            className="w-full bg-gradient-to-br from-[#191C22] to-[#101217] border border-[#232732] rounded-xl py-6 px-7 flex items-center justify-start gap-4 shadow min-w-[220px] max-w-sm mx-auto hover:scale-105 transition-all duration-400"
          >
            <div className="flex items-center justify-center bg-[#212530] rounded-lg w-10 h-10 min-w-12 ">
              {stat.icon}
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-2xl font-semibold text-white mb-1">{stat.value}</div>
              <div className="text-lg text-white/60">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default page