import Link from "next/link";

interface Params {
  params: { slug: string };
}

const CASE_STUDIES: Record<string, {
  title: string;
  year: string;
  platform: string;
  expertise: string[];
  overview: string;
}> = {
  billflow: {
    title: "BillFlow",
    year: "2025",
    platform: "Web App",
    expertise: ["UI/UX", "Web Development", "Mobile App"],
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  fitai: {
    title: "FitAI",
    year: "2025",
    platform: "Mobile App",
    expertise: ["UI/UX", "Web Development", "Mobile App"],
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  finsub: {
    title: "FinSub",
    year: "2024",
    platform: "Web App",
    expertise: ["UI/UX", "Web Development"],
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
};

export default function CaseStudyPage({ params }: Params) {
  const slug = decodeURIComponent((params?.slug || "")).toLowerCase().trim();
  const data = CASE_STUDIES[slug];
  const resolved = data ?? CASE_STUDIES.billflow;

  return (
    <main className="w-full bg-[#F3F7F8]">
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-20 pt-6 pb-6">
        <Link href="/our-work" className="inline-flex items-center gap-2 px-4 py-2 rounded-[31px] border border-[#DDE7F5] bg-white text-[#1F1F1F] text-sm font-medium shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
          <span>←</span> Back To Our Work
        </Link>

        <div className="mt-6 rounded-[18px] bg-gradient-to-br from-[#E6F3FF] to-white h-[360px] w-full shadow-[0_2px_21px_rgba(0,0,0,0.10)] ring-1 ring-[#E7EEF5]" />

        <h1 className="mt-8 text-[32px] font-bold text-[#202020] text-center">{resolved.title}</h1>

        <div className="mt-4 rounded-2xl bg-white shadow-[0_2px_21px_rgba(0,0,0,0.10)] p-5 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <div>
            <div className="text-[#8B8B8B] text-xs font-semibold">YEAR</div>
            <div className="text-[#1F1F1F] text-sm font-semibold">{resolved.year}</div>
          </div>
          <div>
            <div className="text-[#8B8B8B] text-xs font-semibold">EXPERTISE</div>
            <div className="flex flex-wrap gap-2 mt-1">
              {resolved.expertise.map((e) => (
                <span key={e} className="px-3 py-[2px] rounded-full bg-[#ECF4FF] text-[#1F1F1F] text-xs font-medium">{e}</span>
              ))}
            </div>
          </div>
          <div className="md:text-right">
            <div className="text-[#8B8B8B] text-xs font-semibold">PLATFORM</div>
            <div className="text-[#1F1F1F] text-sm font-semibold">{resolved.platform}</div>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-[24px] font-bold text-[#202020] mb-3 text-center">Overview</h2>
          <p className="text-[#2F2F2F] leading-7 max-w-[900px] underline">{resolved.overview} Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <h3 className="mt-12 text-[28px] font-bold text-[#202020] text-center">The Product</h3>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="rounded-[20px] bg-gradient-to-br from-[#E6F3FF] to-white h-[260px] shadow-[0_2px_21px_rgba(0,0,0,0.10)]" />
          <div>
            <h4 className="text-[18px] font-semibold mb-2">Hero Section</h4>
            <p className="text-[#2F2F2F] leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h4 className="text-[18px] font-semibold mb-2">Hero Section</h4>
            <p className="text-[#2F2F2F] leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
          </div>
          <div className="rounded-[20px] bg-gradient-to-br from-[#E6F3FF] to-white h-[260px] shadow-[0_2px_21px_rgba(0,0,0,0.10)]" />
        </div>
      </section>
    </main>
  );
}


