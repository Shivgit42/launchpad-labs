export default function OurImpactSection() {
	const stats = [
		{ value: "$25M+", label: "Raised", description: " by founders who launched with us" },
		{ value: "50+", label: "MVPs Build", description: " - live in market within 2 weeks" },
		{ value: "5", label: "Startups Acquired", description: " after launching through LaunchPad Labs" },
	];

	return (
		<section className="w-full bg-white py-12 sm:py-16 lg:py-20">
			<div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
				{/* Section Badge */}
				<div className="flex justify-center mb-6">
					<div className="inline-flex items-center justify-center  rounded-[31px] border border-[#CEE3FF] bg-[#F2F2F2]">
						<div className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 gap-3">
							<div className="relative w-[18px] h-[18px]">
								<div className="absolute inset-0 rounded-full bg-primary opacity-20"></div>
								<div className="absolute inset-[3px] rounded-full bg-primary opacity-32"></div>
								<div className="absolute inset-[5px] rounded-full bg-primary opacity-66"></div>
							</div>
							<span className="text-black text-sm font-medium">Our Impact</span>
						</div>
					</div>
				</div>

				{/* Section Heading */}
				<h2 className="text-center text-[#202020] text-2xl sm:text-[24px] font-bold leading-[31px] mb-12">
					Fast launches Real results
				</h2>

				{/* Stats Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-9 max-w-[966px] mx-auto">
					{stats.map((stat, index) => (
						<div
							key={index}
							className="flex flex-col items-center justify-center p-8 sm:p-12 rounded-[23px] border-[5px] border-secondary/30 bg-linear-to-b from-white via-secondary/10 to-white shadow-[0_2px_21px_0_rgba(0,0,0,0.10)] hover:shadow-[0_4px_25px_0_rgba(0,0,0,0.15)] transition-shadow"
						>
							<div className="text-primary text-[48px] sm:text-[58px] font-bold leading-none mb-3">
								{stat.value}
							</div>
							<p className="text-center text-[#505050] text-base font-medium leading-7">
								<span className="text-[#1B1B1B] font-bold">{stat.label}</span>
								{stat.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}


