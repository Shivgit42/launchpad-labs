import Image from "next/image";

export default function PricingSection() {
  return (
    <section className="w-full bg-[#F3F7F8] py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-20">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center justify-center px-4 py-1 rounded-[31px] border border-[#CEE3FF] bg-[#F2F2F2]">
            <div className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 gap-3">
              <div className="relative w-[18px] h-[18px]">
                <div className="absolute inset-0 rounded-full bg-primary opacity-20"></div>
                <div className="absolute inset-[3px] rounded-full bg-primary opacity-32"></div>
                <div className="absolute inset-[5px] rounded-full bg-primary opacity-66"></div>
              </div>
              <span className="text-black text-sm font-medium">Pricing</span>
            </div>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-center text-[#202020] text-[22px] sm:text-[26px] font-bold leading-[31px] mb-2">
          Two ways to launch fast – and keep growing even faster
        </h2>
        <p className="text-center text-[#525252] text-[14px] font-medium mb-8">
          Choose the perfect package to launch and grow your startup
        </p>

        {/* Cards from images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="relative rounded-[22px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] bg-white">
            <Image
              src="/pricing/pricing-2.png"
              alt="MVP Development pricing"
              width={800}
              height={700}
              className="w-full h-auto"
              priority
            />
          </div>
          <div className="relative rounded-[22px] overflow-hidden shadow-[0_8px_30px_rgba(30,113,229,0.18)] ring-1 ring-[#D1E6FF]">
            <Image
              src="/pricing/pricing-1.png"
              alt="Growth Retainer pricing"
              width={800}
              height={700}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
