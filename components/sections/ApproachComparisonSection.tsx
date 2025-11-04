export default function ApproachComparisonSection() {
	const traditionalDevelopment = [
		"Months of Planning",
		"Too Many Cooks",
		"Design-Then-Build Bottlenecks",
		"Huge Upfront Fees",
		"Complex Tech Setup"
	];

	const launchpadLabsApproach = [
		"2-Week Launch System",
		"Focused Founder-Led Pods",
		"Real-Time Prototyping",
		"Flat $4,997 Transparent Pricing",
		"Modern, Scalable Stack"
	];

	return (
		<section className="w-full bg-white py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#F3F7F8] to-[#FFFFFF]">
			<div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
				{/* Section Badge */}
				<div className="flex justify-center mb-6">
					<div className="inline-flex items-center justify-center rounded-[31px] border border-[#CEE3FF] bg-[#F2F2F2]">
						<div className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 gap-3">
							<div className="relative w-[18px] h-[18px]">
								<div className="absolute inset-0 rounded-full bg-primary opacity-20"></div>
								<div className="absolute inset-[3px] rounded-full bg-primary opacity-32"></div>
								<div className="absolute inset-[5px] rounded-full bg-primary opacity-66"></div>
							</div>
							<span className="text-black text-sm font-medium">Our Approach</span>
						</div>
					</div>
				</div>

				{/* Section Heading */}
				<h2 className="text-center text-[#202020] text-2xl sm:text-[28px] font-bold leading-[31px] mb-12 max-w-[693px] mx-auto">
					Why founders launch faster with LaunchPad labs
				</h2>

				{/* Comparison Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-[1200px] mx-auto mb-12">
					{/* Traditional Development */}
					<div className="rounded-2xl border-2 border-dashed border-gray-300 p-6 lg:p-8">
						<div className="inline-flex items-center justify-center rounded-full bg-gray-100 px-4 py-2 mb-6">
							<span className="text-[#404040] text-sm font-medium">Traditional Development</span>
						</div>
						<ul className="space-y-4">
							{traditionalDevelopment.map((item, index) => (
								<li key={index} className="flex items-start gap-3">
									<div className="flex-shrink-0 mt-1">
										<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<circle cx="10" cy="10" r="9" stroke="#EF4444" strokeWidth="2"/>
											<path d="M6 6L14 14M14 6L6 14" stroke="#EF4444" strokeWidth="2" strokeLinecap="round"/>
										</svg>
									</div>
									<span className="text-[#525252] text-sm font-medium leading-6">{item}</span>
								</li>
							))}
						</ul>
					</div>

					{/* LaunchPad Labs Approach */}
					<div className="rounded-2xl border-2 border-dashed border-gray-300 p-6 lg:p-8">
						<div className="inline-flex items-center justify-center rounded-full bg-gray-100 px-4 py-2 mb-6">
							<span className="text-[#404040] text-sm font-medium">LaunchPad Labs Approach</span>
						</div>
						<ul className="space-y-4">
							{launchpadLabsApproach.map((item, index) => (
								<li key={index} className="flex items-start gap-3">
									<div className="flex-shrink-0 mt-1">
										<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<circle cx="10" cy="10" r="9" stroke="#10B981" strokeWidth="2"/>
											<path d="M6 10L9 13L14 7" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
										</svg>
									</div>
									<span className="text-[#525252] text-sm font-medium leading-6">{item}</span>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* CTA Button */}
				<div className="flex justify-center">
					<a 
						href="#book" 
						className="inline-flex items-center justify-center rounded-[31px] border-2 border-secondary/60 bg-gradient-to-b from-primary to-primary shadow-[0_46px_13px_0_rgba(30,113,229,0.00),0_30px_12px_0_rgba(30,113,229,0.02),0_17px_10px_0_rgba(30,113,229,0.08),0_7px_7px_0_rgba(30,113,229,0.13),0_2px_4px_0_rgba(30,113,229,0.15)] px-8 h-12 text-white text-base font-bold hover:scale-105 transition-transform"
					>
						Book My Free MVP Call
					</a>
				</div>
			</div>
		</section>
	);
}

