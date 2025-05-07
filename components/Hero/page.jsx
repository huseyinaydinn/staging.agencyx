"use client";

import { useState } from "react";
import Image from "next/image";
import HeroImage from "../../public/HeroImage.png";
import { CiMicrophoneOn } from "react-icons/ci";

export default function LandingTR() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className=" flex flex-col items-center justify-center min-h-screen overflow-hidden pt-24 md:pt-32 pb-10 px-4 bg-black relative gap-12">
        {/* Badge */}
        <div className="flex flex-col items-center gap-9">
          <div className="flex flex-row flex-nowrap items-center border-t border-b px-4 py-2 border-[#313233] bg-gray-950 rounded-full cursor-pointer hover:scale-105 transition-all duration-400">
          <CiMicrophoneOn className="bg-blue-500 rounded-full w-8 h-8"/><span className="inline-block px-4 py-1 rounded-full  text-white font-extralight text-lg shadow">
          Audiex is here! Ask questions. Ask a pro
          </span>
          </div>
          <div className="flex flex-col items-center gap-4">
            {/* Heading */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-center text-white leading-tight mb-4">
              The All-In-One AI Platform
              <br />
              for Partners That Scale.
            </h1>
            {/* Description */}
            <p className="max-w-2xl text-center text-gray-200 text-xl font-extralight">
              Welcome to the platform built by AgencyX — where AI meets
              automation, voice meets action, and your brand enters the next
              era.
            </p>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative w-full flex-1 flex flex-col items-center justify-center">
          {/* Background Image with Inset Shadow */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: "url('/HeroPath.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                boxShadow: `
            inset 200px 0 100px -70px rgba(0, 0, 0, 0.7),
            inset -100px 0 100px 100px rgba(0, 0, 0, 1),
            inset 0 100px 100px -150px rgba(0, 0, 0, 1),
            inset 0 -100px 0px -70px rgba(0, 0, 0, 0.7)
          `,
              }}
            ></div>
          </div>

          {/* Content Container */}
          <div className="relative z-10 flex flex-col items-center gap-12 w-full h px-4">
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 text-center">
              <a
                href="#demo"
                className="px-7 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-lg hover:bg-blue-500 transition-all duration-300 text-base hover:scale-105"
              >
                Try Demo
              </a>
              <a
                href="#schedule"
                className="px-7 py-3 bg-gray-800/90 text-white rounded-lg font-semibold shadow-lg hover:bg-gray-700 transition-all duration-300 text-base hover:scale-105"
              >
                Schedule a Demo
              </a>
            </div>

            {/* Image Container */}
            <div className="relative w-full max-w-4xl mx-auto [box-shadow:_0px_-80px_75px_-75px_rgba(255,255,255,1),30px_-20_30px_-5px_rgba(251,146,60,0.2)]">
              <Image
                src={HeroImage}
                alt="Dashboard Mockup"
                width={1200}
                height={500}
                className="relative z-10 w-full h-auto rounded-2xl border-t border-l border-r border-[#ffffff] hover:scale-102 transition-all duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
