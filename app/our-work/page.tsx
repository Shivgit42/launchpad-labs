export const metadata = {
  title: "Our Work",
  description: "Case studies of MVPs shipped in weeks.",
};

export default function OurWorkPage() {
  const studies = [
    {
      title: "BillFlow",
      description:
        "FitAI brings personalized, AI‑powered home workouts to your fingertips — tailored plans, real‑time guidance, and progress tracking to help you stay fit anytime, anywhere.",
      tags: ["UI/UX", "Web Development", "Mobile App"],
      slug: "billflow",
      link: "/our-work/billflow",
    },
    {
      title: "FitAI",
      description:
        "FitAI brings personalized, AI‑powered home workouts to your fingertips — tailored plans, real‑time guidance, and progress tracking to help you stay fit anytime, anywhere.",
      tags: ["UI/UX", "Web Development", "Mobile App"],
      slug: "fitai",
      link: "/our-work/fitai",
    },
    {
      title: "FinSub",
      description:
        "FitAI brings personalized, AI‑powered home workouts to your fingertips — tailored plans, real‑time guidance, and progress tracking to help you stay fit anytime, anywhere.",
      tags: ["UI/UX", "Web Development", "Mobile App"],
      slug: "finsub",
      link: "/our-work/finsub",
    },
  ];

  return (
    <main className="w-full bg-[#F3F7F8]">
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-20 pt-12 sm:pt-16">
        <h1 className="text-[28px] sm:text-[36px] font-bold text-[#202020] leading-tight mb-2">
          From vision to{" "}
          <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
            Launchpad
          </span>
        </h1>
        <p className="text-[#6B7280] text-[14px] sm:text-[15px] font-medium mb-8">
          Explore some of the MVPs and products we&apos;ve brought to life
        </p>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-20 pb-6 sm:pb-10">
        <div className="flex flex-col gap-10">
          {studies.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white shadow-[0_2px_21px_0_rgba(0,0,0,0.10)] p-5 sm:p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-[#404040] text-[22px] sm:text-[26px] font-semibold leading-[31px] mb-3">
                      {s.title}
                    </h3>
                    <p className="text-[#686868] text-[14px] sm:text-[15px] font-medium leading-[28px] mb-5">
                      {s.description}
                    </p>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {s.tags.map((tag, idx) => (
                        <div
                          key={idx}
                          className="px-[14px] py-[2px] rounded-[32px] bg-[#E1EFF9]"
                        >
                          <span className="text-black text-[13px] font-medium leading-[28px]">
                            {tag}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <a
                      href={s.link}
                      className="inline-flex items-center gap-2 px-5 py-[9px] rounded-[31px] border-2 border-secondary/60 bg-white hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-black text-[15px] font-semibold">
                        View Case Study
                      </span>
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M20.5995 19.1769L21.2271 10.8156L12.8693 10.1446C12.7831 10.1261 12.6939 10.1262 12.6078 10.1451C12.5217 10.164 12.4407 10.2012 12.3702 10.2541C12.2997 10.3071 12.2414 10.3745 12.1993 10.452C12.1571 10.5294 12.1321 10.615 12.1259 10.7029C12.1197 10.7908 12.1325 10.8791 12.1634 10.9616C12.1942 11.0442 12.2425 11.1192 12.3048 11.1815C12.3672 11.2438 12.4422 11.292 12.5248 11.3228C12.6074 11.3536 12.6957 11.3662 12.7836 11.36L19.0458 11.8726L10.1024 19.5268C9.9784 19.6329 9.90164 19.7839 9.889 19.9466C9.87636 20.1093 9.92888 20.2704 10.035 20.3944C10.1411 20.5184 10.2921 20.5951 10.4548 20.6078C10.6176 20.6204 10.7786 20.5679 10.9026 20.4618L19.8461 12.8076L19.3855 19.0738C19.3734 19.2367 19.4265 19.3977 19.5332 19.5214C19.6398 19.645 19.7912 19.7213 19.954 19.7334C20.1168 19.7454 20.2778 19.6923 20.4015 19.5857C20.5252 19.4791 20.6015 19.3277 20.6135 19.1649L20.5995 19.1769Z"
                          fill="black"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="rounded-[18px] bg-white w-full h-[220px] sm:h-[260px] lg:h-[300px] ring-1 ring-[#E7EEF5] shadow-[0_4px_20px_rgba(0,0,0,0.04)]"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="book"
        className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-20 pb-20"
      >
        <div className="text-center mb-8">
          <h2 className="text-[#202020] text-[22px] sm:text-[26px] font-bold mb-2">
            Ready to launch your next big idea?
          </h2>
          <p className="text-[#6B7280] text-[14px] sm:text-[15px] font-medium">
            Book a consultation call and let’s turn your vision into reality
          </p>
          <div className="mt-5">
            <a
              href="#book"
              className="inline-flex items-center justify-center rounded-[31px] border-2 border-secondary bg-linear-to-b from-primary to-secondary shadow-[0_46px_13px_0_rgba(30,113,229,0.00),0_30px_12px_0_rgba(30,113,229,0.02),0_17px_10px_0_rgba(30,113,229,0.08),0_7px_7px_0_rgba(30,113,229,0.13),0_2px_4px_0_rgba(30,113,229,0.15)] px-6 sm:px-8 h-[42px] sm:h-[44px] text-white text-[13px] sm:text-[14px] font-semibold"
            >
              Book My Free MVP Call
            </a>
          </div>
        </div>

        <div className="relative rounded-2xl bg-white shadow-[0_2px_21px_0_rgba(0,0,0,0.10)] p-5 sm:p-8 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            <div className="col-span-2">
              <div className="rounded-xl border border-[#E5E7EB] p-4">
                <div className="text-[#111827] text-sm font-semibold mb-3">
                  October 2025
                </div>
                <div className="grid grid-cols-7 gap-2 text-center">
                  {Array.from({ length: 35 }).map((_, idx) => (
                    <div key={idx} className="h-9 rounded bg-[#F3F7F8]"></div>
                  ))}
                </div>
                <div className="mt-6 text-center text-[#9CA3AF] text-sm">
                  Cal.com
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="rounded-xl border border-[#E5E7EB] p-4 relative">
                <div className="text-[#111827] text-sm font-semibold mb-3">
                  Thu 11
                </div>
                <div className="space-y-2">
                  {["01:30", "02:00", "02:30", "03:00", "03:30"].map((t) => (
                    <div
                      key={t}
                      className="h-9 rounded bg-[#F3F7F8] flex items-center justify-center text-[12px] text-[#6B7280]"
                    >
                      {t}
                    </div>
                  ))}
                </div>
                <div className="hidden md:block absolute -right-6 top-10 w-[220px] rounded-2xl shadow-[0_15px_40px_rgba(20,124,253,0.18)] ring-1 ring-[#D9E9FF] bg-white p-3">
                  <div className="h-7 rounded bg-[#EFEFEF] mb-2"></div>
                  <div className="h-7 rounded bg-[#EFEFEF] mb-2"></div>
                  <div className="h-7 rounded bg-[#147CFD] text-white flex items-center justify-center text-[12px] font-semibold">
                    02:30
                  </div>
                  <div className="h-7 rounded bg-[#EFEFEF] mt-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
