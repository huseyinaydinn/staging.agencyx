"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { CiMenuFries } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';
const page = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full md:bg-[rgba(0,0,0,0.6)] bg-[rgba(0,0,0,0.8)] backdrop-blur-[5px] z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/tr" className="flex items-center gap-2">
            <Image src="../GasLogo.svg" alt="GAS Logo" width={107} height={36} priority />
          </a>
          <div className="flex flex-row items-center gap-16">
            {/* Menu */}
            <div className="hidden md:flex gap-8 items-center text-xl">
              {[
                { href: '#home', label: 'Home' },
                { href: '#about', label: 'About Us' },
                { href: '#how', label: 'How it Works' },
                { href: '#faqs', label: 'FAQs' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative text-white hover:text-blue-500 transition group"
                >
                  {item.label}
                  <span
                    className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 rounded transition-all duration-[300ms] group-hover:w-3/4"
                  ></span>
                </a>
              ))}
            </div>
            {/* Contact Us Button */}
            <div className="hidden md:block">
              <a href="#contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-500 transition duration-300 hover:scale-105">Contact Us</a>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="p-2 rounded focus:outline-none focus:ring-0  focus:text-purple-500 transition duration-300"
              aria-label="Open menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <IoMdClose size={24} /> : <CiMenuFries size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          
            <div className="md:hidden bg-[rgba(0,0,0,0.01)] border-gray-700 px-4 py-4 space-y-2 shadow-lg h-screen flex flex-col items-end justify-start pt-12 animate-navbar-slide-down max-w-[75vw] ml-auto">
            <a href="#home" className={`${menuOpen ? '' : ''} block py-2 text-gray-200 hover:text-blue-500 transition border-r-4 border-purple-900 focus:border-blue-300 focus:rounded-sm px-4 w-[100%]  focus:bg-purple-950  text-center duration-300 `}>Home</a>
            <a href="#about" className="block py-2 text-gray-200 hover:text-blue-500 transition border-r-4 border-purple-900 focus:border-blue-300 focus:rounded-sm px-4 w-[100%]  focus:bg-purple-950  text-center duration-300">About Us</a>
            <a href="#how" className="block py-2 text-gray-200 hover:text-blue-500 transition border-r-4 border-purple-900 focus:border-blue-300 focus:rounded-sm px-4 w-[100%]  focus:bg-purple-950  text-center duration-300">How it Works</a>
            <a href="#faqs" className="block py-2 text-gray-200 hover:text-blue-500 transition border-r-4 border-purple-900 focus:border-blue-300 focus:rounded-sm px-4 w-[100%]  focus:bg-purple-950  text-center duration-300">FAQs</a>
            <a href="#contact" className="block w-full mt-8 px-1 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-500 transition duration-300 text-center">Contact Us</a>
          </div>
        )}
      </nav>
    </>
  )
}

export default page