export default function ProcessSection() {
	const steps = [
		{ title: "Discover", description: "Define goals, scope, key workflows, and success metrics." },
		{ title: "Design", description: "Rapid UX flows and high‑signal UI for your MVP." },
		{ title: "Build", description: "Ship core features with clean, production‑ready code." },
		{ title: "Launch", description: "Deploy, track, and iterate based on real user feedback." },
	];

	return (
		<section className="w-full bg-white py-12 sm:py-16 lg:py-20">
			<div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
				<div className="flex justify-center mb-6">
					<div className="inline-flex items-center justify-center px-4 py-1 rounded-[31px] border border-[#CEE3FF] bg-[#F2F2F2]">
						<div className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 gap-3">
							<div className="relative w-[18px] h-[18px]">
								<div className="absolute inset-0 rounded-full bg-primary opacity-20"></div>
								<div className="absolute inset-[3px] rounded-full bg-primary opacity-32"></div>
								<div className="absolute inset-[5px] rounded-full bg-primary opacity-66"></div>
							</div>
							<span className="text-black text-sm font-medium">Our Process</span>
						</div>
					</div>
				</div>

				<h2 className="text-center text-[#202020] text-2xl sm:text-[28px] font-bold leading-[31px] mb-10">From idea to live in 2 weeks</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{steps.map((s, i) => (
						<div key={s.title} className="rounded-[20px] border border-[rgba(107,155,255,0.5)] bg-white/60 backdrop-blur-sm p-6">
							<div className="flex items-center gap-3 mb-3">
								<div className="w-8 h-8 rounded-full bg-secondary/30 flex items-center justify-center font-bold text-primary">{i + 1}</div>
								<h3 className="text-[#3D3D3D] text-lg font-bold">{s.title}</h3>
							</div>
							<p className="text-[#505050] text-sm leading-6">{s.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}


