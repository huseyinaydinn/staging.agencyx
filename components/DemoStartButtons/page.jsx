import React from 'react';

const DemoStartButtons = () => {
    return (
        <div className="flex flex-col items-center justify-center py-24 gap-10 bg-black text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-center leading-tight bg-gradient-to-r from-white to-[#A6CCFF] bg-clip-text text-transparent">
                Ready to revolutionize <br /> your short-term rental business?
            </h2>
            <div className="flex flex-col items-center md:flex-row gap-2 md:gap-4">
                <button className="px-3 w-fit py-2 md:px-6 md:py-3 bg-blue-500 text-white rounded-lg font-semibold shadow hover:bg-blue-500 transition-all duration-150 transform hover:scale-105 cursor-pointer text-sm md:text-base">
                    Book a Demo
                </button>
                <button className="px-3 w-fit py-2 md:px-6 md:py-3 bg-gradient-to-r from-white to-blue-300 text-gray-800 rounded-lg font-semibold shadow transition-all duration-150 transform hover:scale-101 cursor-pointer text-sm md:text-base">
                    Start Your Automation Journey
                </button>
            </div>
        </div >
    );
}

export default DemoStartButtons;
