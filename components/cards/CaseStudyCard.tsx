import Link from "next/link";

interface CaseStudyCardProps {
	title: string;
	description: string;
	tags: string[];
	link: string;
}

export default function CaseStudyCard({ title, description, tags, link }: CaseStudyCardProps) {
	return (
		<div className="w-full rounded-2xl bg-white shadow-[0_2px_21px_0_rgba(0,0,0,0.10)] p-10">
			<h3 className="text-[#404040] text-[26px] font-semibold leading-[31px] mb-6">{title}</h3>
			<p className="text-[#686868] text-[15px] font-medium leading-[31px] mb-8">{description}</p>
			<div className="flex flex-wrap gap-3 mb-8">
				{tags.map((tag, index) => (
					<div key={index} className="px-[18px] py-[1px] rounded-[32px] bg-[#E1EFF9]">
						<span className="text-black text-[14px] font-medium leading-[31px]">{tag}</span>
					</div>
				))}
			</div>
			<Link href={link} className="inline-flex items-center gap-2 px-5 py-[9px] rounded-[31px] border-2 border-secondary/60 bg-white hover:bg-gray-50 transition-colors group">
				<span className="text-black text-[16px] font-semibold">View Case Study</span>
				<svg width="22" height="22" viewBox="0 0 32 32" fill="none" className="group-hover:translate-x-1 transition-transform">
					<path d="M20.5995 19.1769L21.2271 10.8156L12.8693 10.1446C12.7831 10.1261 12.6939 10.1262 12.6078 10.1451C12.5217 10.164 12.4407 10.2012 12.3702 10.2541C12.2997 10.3071 12.2414 10.3745 12.1993 10.452C12.1571 10.5294 12.1321 10.615 12.1259 10.7029C12.1197 10.7908 12.1325 10.8791 12.1634 10.9616C12.1942 11.0442 12.2425 11.1192 12.3048 11.1815C12.3672 11.2438 12.4422 11.292 12.5248 11.3228C12.6074 11.3536 12.6957 11.3662 12.7836 11.36L19.0458 11.8726L10.1024 19.5268C9.9784 19.6329 9.90164 19.7839 9.889 19.9466C9.87636 20.1093 9.92888 20.2704 10.035 20.3944C10.1411 20.5184 10.2921 20.5951 10.4548 20.6078C10.6176 20.6204 10.7786 20.5679 10.9026 20.4618L19.8461 12.8076L19.3855 19.0738C19.3734 19.2367 19.4265 19.3977 19.5332 19.5214C19.6398 19.645 19.7912 19.7213 19.954 19.7334C20.1168 19.7454 20.2778 19.6923 20.4015 19.5857C20.5252 19.4791 20.6015 19.3277 20.6135 19.1649L20.5995 19.1769Z" fill="black"/>
				</svg>
			</Link>
		</div>
	);
}


