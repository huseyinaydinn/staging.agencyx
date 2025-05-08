import React from 'react'

const page = () => {
  return (
<>
<section className="py-8 md:py-16 px-4 sm:px-6 lg:px-8 w-full flex items-center justify-center ">
  <div className='max-w-7xl grid grid-cols-1 lg:grid-cols-2 place-content-between w-full   gap-8 md:gap-12'>
        {/* Left Column - Description */}
        <div className='md:col-span-2 lg:col-span-1 md:max-w-1/2 w-full text-center mx-auto'>
          <div className='flex flex-col items-start text-center md:text-left p-4 md:p-0'>
            <h2 className='text-4xl lg:text-2xl text-center lg:text-left text-white mb-4 font-bold w-full'>AgencyX Automates the Modern Enterprise.</h2>
            <p className='text-gray-500 text-center lg:text-left text-extralight text-sm sm:text-base'>
              We build AI-native platforms that replace busywork with intelligent systems — powering growth for companies ready to lead, not follow.
            </p>
          </div>
        </div>

        {/* Right Columns - Links */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 items-start justify-center w-full lg:w-1/2 '>
          <div className='flex flex-col items-center md:items-start gap-4'>
            <h2 className='text-white font-bold text-lg lg:text-xl w-full text-center md:text-left'>Company</h2>
            <div className='flex flex-col items-center md:items-start gap-3 w-full'>
              <a className='text-gray-400 hover:text-white transition-colors cursor-pointer text-sm sm:text-base lg:text-lg w-full text-center md:text-left'>About Us</a>
              <a className='text-gray-400 hover:text-white transition-colors cursor-pointer text-sm sm:text-base lg:text-lg w-full text-center md:text-left'>Careers</a>
              <a className='text-gray-400 hover:text-white transition-colors cursor-pointer text-sm sm:text-base lg:text-lg w-full text-center md:text-left'>Blog</a>
              <a className='text-gray-400 hover:text-white transition-colors cursor-pointer text-sm sm:text-base lg:text-lg w-full text-center md:text-left'>Partners</a>
            </div>
          </div>

          <div className='w-full min-w-[200px] flex flex-col items-center md:items-start gap-4'>
            <h2 className='text-white font-bold text-lg lg:text-xl w-full text-center md:text-left'>Contact</h2>
            <div className='flex flex-col items-center md:items-start gap-3 w-full'>
              <a className='text-gray-400 hover:text-white transition-colors cursor-pointer text-sm sm:text-base lg:text-lg w-full text-center md:text-left'>
                Dubai Freezone, United Arab Emirates
              </a>
              <a className='text-gray-400 hover:text-white transition-colors cursor-pointer text-sm sm:text-base lg:text-lg w-full text-center md:text-left'>
                hello@guiderr.ai
              </a>
            </div>
          </div>
        </div>
      </div>

    
    </section>
      <div className='w-full flex items-center justify-center py-2 text-center text-gray-500 text-xs'>
      <h5 className='text-white text-sm text-extralight'>© 2025 AgencyX. All rights reserved.</h5>
    </div></>
  )
}

export default page