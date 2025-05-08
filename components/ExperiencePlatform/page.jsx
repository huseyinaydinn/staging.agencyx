import Image from "next/image"; 
import "./ExperiencePlatform.css";


const Page = () => {
  return (
    <section className="hero-bg ExperiencePlatform flex flex-col items-center justify-start  w-full p-2 md:p-4 gap-4 md:gap-12">
                 <div className="stars">
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          
        </div>
      {/* Başlık */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-center leading-tight bg-gradient-to-r from-white to-[#A6CCFF] bg-clip-text text-transparent">
        Experience Our Platform
      </h2>

      {/* Kart ve Tablar */}
      <div className="w-full max-w-4xl flex flex-col items-center justify-center hover:scale-105 transition-all duration-300">
  <div
  className="cardEffect w-[340px] h-[200px] sm:w-[600px] sm:h-[360px] md:w-[800px] md:h-[480px] mx-auto flex items-center justify-center relative"
>
  <Image
    src="/ExperiencePlatform/ExperiencePlatform.svg"
    alt="Experience Platform"
    width={800}
    height={480}
    className="object-contain"
    priority
  />
</div>
</div>


      {/* Alt Buton */}
    <div className="max-w-[300px] flex flex-col items-center gap-6">
      <p className="font-light text-lg text-gray-400">Want more?</p>
    <button className="text-sm sm:text-base md:text-lg  px-6 py-2 bg-blue-600 text-[#fff] rounded-lg font-medium shadow hover:bg-blue-500 transition-all">
        Let's build your stack together
      </button>
    </div>
    </section>
  );
};

export default Page;