import Image from "next/image";


const Page = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] w-full p-8 md:p-12 gap-4 md:gap-12">
      {/* Başlık */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-center leading-tight bg-gradient-to-r from-white to-[#A6CCFF] bg-clip-text text-transparent">
        Experience Our Platform
      </h2>

      {/* Kart ve Tablar */}
      <div className="w-full max-w-4xl flex flex-col">
        <div className="relative w-full h-[340px]">
          <Image
            src="/ExperiencePlatform/ExperiencePlatform.svg"
            alt="Experience Platform"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Alt Buton */}
    <div className="flex flex-col items-center gap-6">
      <p className="font-light text-lg text-gray-400">Want more?</p>
    <button className="px-6 py-2 bg-blue-500 text-white rounded-lg font-medium shadow hover:bg-blue-600 transition-all">
        Let's build your stack together
      </button>
    </div>
    </section>
  );
};

export default Page;