import React from 'react';
import './DemoStartButtons.css';

const DemoStartButtons = () => {
    return (
        <div className="flex flex-col items-center justify-center py-24 gap-10 bg-black bg-radial text-white demo-start-buttons-bg">

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-center leading-tight bg-gradient-to-r from-white to-[#A6CCFF] bg-clip-text text-transparent z-2">
                Ready to revolutionize <br /> your short-term rental business?
            </h2>
            <div className="flex flex-col items-center md:flex-row gap-2 md:gap-4 z-2">
                <button className="px-3 w-fit py-2 md:px-6 md:py-3 bg-[#477BFF] text-[#fff] rounded-lg font-semibold shadow hover:bg-[#3260d6] transition-all duration-150 transform hover:scale-101 cursor-pointer text-sm md:text-base">
                    Book a Demo
                </button>
                <button className="px-3 w-fit py-2 md:px-6 md:py-3 bg-gradient-to-r from-[#fff] to-blue-50 text-[#2F2F2F] rounded-lg font-semibold shadow transition-all duration-150 transform hover:scale-101 cursor-pointer text-sm md:text-base">
                    Start Your Automation Journey
                </button>
            </div>
        </div >
    );
}

export default DemoStartButtons;
