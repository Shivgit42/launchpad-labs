export default function HowItWorksSection() {
	const phases = [
		{
			title: "Kickoff & Scope",
			desc: "We align on goals, users, and constraints. Candidate features are prioritized for the MVP.",
		},
		{
			title: "Design & Prototypes",
			desc: "Rapid UX flows and high‑signal UI. You see clickable prototypes and give feedback quickly.",
		},
		{
			title: "Build & Ship",
			desc: "We implement the scoped MVP with clean, production‑ready code and launch.",
		},
	];

	return (
		<section className="w-full bg-[#F3F7F8] py-12 sm:py-16 lg:py-20">
			<div className="max-w-[1200px] mx-auto px-4 sm:px-6">
				<div className="flex justify-center mb-6">
					<div className="inline-flex items-center justify-center px-4 py-1 rounded-[31px] border border-[#CEE3FF] bg-[#F2F2F2]">
						<div className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 gap-3">
							<div className="relative w-[18px] h-[18px]">
								<div className="absolute inset-0 rounded-full bg-primary opacity-20"></div>
								<div className="absolute inset-[3px] rounded-full bg-primary opacity-32"></div>
								<div className="absolute inset-[5px] rounded-full bg-primary opacity-66"></div>
							</div>
							<span className="text-black text-sm font-medium">How It Works</span>
						</div>
					</div>
				</div>

				<h1 className="text-center text-[#202020] text-2xl sm:text-[28px] font-bold leading-[31px] mb-3">Simple, fast, collaborative</h1>
				<p className="text-center text-[#525252] max-w-2xl mx-auto mb-10">A focused, sprint‑based approach that keeps momentum high and decisions clear.</p>

				<div className="relative mx-auto max-w-4xl">
					<div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#CEE3FF] to-transparent hidden md:block" />
					<div className="space-y-6">
						{phases.map((p, i) => (
							<div key={p.title} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
								{(i % 2 === 0) ? (
									<>
										<div className="order-1 md:order-none" />
										<div className="rounded-[20px] border border-[rgba(107,155,255,0.5)] bg-white p-6 shadow-[0_2px_21px_0_rgba(0,0,0,0.06)]">
											<div className="flex items-center gap-3 mb-2">
												<div className="w-8 h-8 rounded-full bg-secondary/30 flex items-center justify-center font-bold text-primary">{i + 1}</div>
												<h3 className="text-[#1F1F1F] text-lg font-bold">{p.title}</h3>
											</div>
											<p className="text-[#505050] text-sm leading-6">{p.desc}</p>
										</div>
									</>
								) : (
									<>
										<div className="rounded-[20px] border border-[rgba(107,155,255,0.5)] bg-white p-6 shadow-[0_2px_21px_0_rgba(0,0,0,0.06)]">
											<div className="flex items-center gap-3 mb-2">
												<div className="w-8 h-8 rounded-full bg-secondary/30 flex items-center justify-center font-bold text-primary">{i + 1}</div>
												<h3 className="text-[#1F1F1F] text-lg font-bold">{p.title}</h3>
											</div>
											<p className="text-[#505050] text-sm leading-6">{p.desc}</p>
										</div>
										<div />
									</>
								)}
							</div>
						))}
					</div>
				</div>

				<div className="mt-10 flex justify-center">
					<a href="#book" className="inline-flex items-center justify-center rounded-[31px] border-2 border-secondary/60 bg-gradient-to-b from-primary to-primary px-8 h-12 text-white text-base font-bold hover:scale-105 transition-transform">Book My Free MVP Call</a>
				</div>
			</div>
		</section>
	);
}


