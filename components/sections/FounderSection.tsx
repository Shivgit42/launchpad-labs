export default function FounderSection() {
  return (
    <section className="relative w-full bg-[#F3F7F8] py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e6eef9_1px,transparent_1px)] bg-size-[28px_28px] opacity-60"></div>

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center justify-center px-4 py-1 rounded-[31px] border border-[#CEE3FF] bg-[#F2F2F2]">
            <div className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 gap-3">
              <div className="relative w-[18px] h-[18px]">
                <div className="absolute inset-0 rounded-full bg-primary opacity-20"></div>
                <div className="absolute inset-[3px] rounded-full bg-primary opacity-32"></div>
                <div className="absolute inset-[5px] rounded-full bg-primary opacity-66"></div>
              </div>
              <span className="text-black text-sm font-medium">
                Our Founder
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-[22px] sm:text-[26px] font-bold text-[#1f1f1f]">
              Meet{" "}
              <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent font-extrabold">
                Harsh
              </span>{" "}
              founder of LaunchPad Labs
            </h2>
            <p className="text-[#6B7280] text-[14px] font-medium mt-2 mb-6">
              Your Strategic Tech Partner for Building MVPs That Scale
            </p>

            <div className="grid grid-cols-1 gap-6">
              <div className="h-[220px] rounded-[20px] bg-white shadow-[0_2px_21px_rgba(0,0,0,0.10)]" />

              <div className="max-w-[360px] rounded-[14px] bg-white shadow-[0_15px_35px_rgba(20,124,253,0.12)] ring-1 ring-[#E3F0FF] px-5 py-4">
                <div className="inline-flex items-center gap-2 text-[#147CFD] text-[12px] font-semibold mb-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#147CFD]"></span>
                  A Note from our Founder
                </div>
                <p className="text-[#4B5563] text-[13px] leading-6 italic">
                  Most startups don’t fail from bad ideas — they fail because
                  they launch too slow. With LaunchPad Labs, you can go live in
                  just 2 weeks.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="relative rounded-[20px] bg-white shadow-[0_2px_21px_rgba(0,0,0,0.10)] ring-1 ring-[#E5E7EB] p-6">
              <div className="absolute -top-3 right-10 rotate-12 w-16 h-4 bg-[#CFE3FF] rounded"></div>
              <div className="absolute left-3 top-14 w-4 h-4 rounded-full border border-[#D1D5DB] shadow-inner bg-white" />
              <div className="absolute left-3 top-40 w-4 h-4 rounded-full border border-[#D1D5DB] shadow-inner bg-white" />

              <div className="pl-6">
                <p className="text-[#3B3B3B] text-[14px] leading-7 mb-4">
                  I’m Harshdeep, founder of LaunchPad Labs — a builder at heart
                  and a partner to founders who move fast.
                </p>
                <p className="text-[#3B3B3B] text-[14px] leading-7 mb-4">
                  After delivering scalable digital products for Fortune 500
                  companies and Shark Tank–backed startups, I realized one
                  thing: speed and clarity win markets.
                </p>
                <p className="text-[#3B3B3B] text-[14px] leading-7 mb-4">
                  That’s why LaunchPad Labs exists — to help non‑technical
                  founders turn ideas into investor‑ready MVPs without the tech
                  chaos or agency bloat.
                </p>
                <p className="text-[#3B3B3B] text-[14px] leading-7 mb-4">
                  We only take a limited number of clients each month to
                  maintain focus and quality. If you’re ready to move fast and
                  build smart, let’s connect.
                </p>

                <div className="mt-4">
                  <div className="text-[#1F2937] font-semibold">Harshdeep</div>
                  <div className="text-[#9CA3AF] text-[12px]">
                    Founder, LaunchPad Labs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
