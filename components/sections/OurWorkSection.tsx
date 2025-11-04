export default function OurWorkSection() {
	const projects = [
		{ name: "BillFlow" },
		{ name: "FitAI" },
		{ name: "FinSub" },
		{ name: "BillFlow" },
		{ name: "FinSub" }
	];

	return (
		<section className="w-full bg-[#F3F7F8] py-12 sm:py-16 lg:py-20 overflow-hidden">
			<div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
				<div className="flex justify-center mb-6">
					<div className="inline-flex items-center justify-center px-4 py-1 rounded-[31px] border border-[#CEE3FF] bg-[#F2F2F2]">
						<div className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 gap-3">
							<div className="relative w-[18px] h-[18px]">
								<div className="absolute inset-0 rounded-full bg-primary opacity-20"></div>
								<div className="absolute inset-[3px] rounded-full bg-primary opacity-32"></div>
								<div className="absolute inset-[5px] rounded-full bg-primary opacity-66"></div>
							</div>
							<span className="text-black text-sm font-medium">Our Work</span>
						</div>
					</div>
				</div>

				<h2 className="text-center text-[#202020] text-2xl sm:text-[28px] font-bold leading-[31px] mb-3 max-w-[693px] mx-auto">
					Every product here went from idea to live in 2 weeks
				</h2>

				<p className="text-center text-[#525252] text-base font-medium leading-[31px] mb-12">
					Built, launched, and loved by real users
				</p>

				<div className="relative">
					<div className="flex gap-6 lg:gap-11 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
						{projects.map((project, index) => (
							<div
								key={index}
								className="flex-shrink-0 w-[320px] sm:w-[381px] rounded-2xl bg-white shadow-[0_2px_21px_0_rgba(0,0,0,0.10)] snap-center"
							>
								<div className="w-full h-[258px] rounded-t-lg bg-[#B9DDFB] p-2">
									<div className="w-full h-full rounded bg-gradient-to-br from-[#E6F3FF] to-[#B9DDFB]"></div>
								</div>
								<div className="p-4 flex items-center justify-between">
									<h3 className="text-[#404040] text-base font-bold">
										{project.name}
									</h3>
									<button className="text-black hover:text-primary transition-colors">
										<svg width="22" height="22" viewBox="0 0 32 32" fill="none">
											<path d="M20.5998 19.1771L21.2274 10.8158L12.8695 10.1448C12.7834 10.1263 12.6942 10.1264 12.6081 10.1453C12.522 10.1642 12.441 10.2014 12.3705 10.2543C12.3 10.3073 12.2417 10.3747 12.1995 10.4522C12.1574 10.5296 12.1324 10.6152 12.1262 10.7031C12.12 10.791 12.1327 10.8793 12.1636 10.9618C12.1945 11.0444 12.2427 11.1194 12.3051 11.1817C12.3675 11.244 12.4425 11.2922 12.5251 11.323C12.6077 11.3538 12.6959 11.3664 12.7839 11.3602L19.0461 11.8728L10.1026 19.527C9.97865 19.6331 9.9019 19.7841 9.88926 19.9468C9.87662 20.1095 9.92913 20.2706 10.0353 20.3946C10.1414 20.5186 10.2924 20.5953 10.4551 20.608C10.6178 20.6206 10.7789 20.5681 10.9029 20.462L19.8463 12.8078L19.3858 19.074C19.3737 19.2369 19.4268 19.3979 19.5334 19.5215C19.64 19.6452 19.7914 19.7215 19.9543 19.7336C20.1171 19.7456 20.2781 19.6925 20.4018 19.5859C20.5254 19.4793 20.6017 19.3279 20.6138 19.1651L20.5998 19.1771Z" fill="currentColor"/>
										</svg>
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}


