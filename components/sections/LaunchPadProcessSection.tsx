import Image from "next/image";

export default function LaunchPadProcessSection() {
	const steps = [
		{
			number: "01",
			title: "Launch Call",
			description: "Kick off with a direct call with our founder. We clarify your idea, goals, and success metrics so we build exactly what investors and users will love.",
			image: "/landing/our_process/1.png"
		},
		{
			number: "02",
			title: "Launch Plan",
			description: "We map your MVP blueprint and deliver a clear PRD defining features, flows, and timelines with zero fluff, zero surprises.",
			image: "/landing/our_process/2.png"
		},
		{
			number: "03",
			title: "Launch Sprint",
			description: "Our dev team moves fast daily updates, transparent progress, and agile feedback loops. You'll see your product take shape in real time.",
			image: "/landing/our_process/3.png"
		},
		{
			number: "04",
			title: "Launch Delivery",
			description: "Your MVP goes live — fully functional, tested, and ready for demos, users, or fundraising. We handle deployment and hosting so you focus on traction.",
			image: "/landing/our_process/4.png"
		},
		{
			number: "05",
			title: "Launch Support",
			description: "You get 4 weeks of free maintenance and optimization. We fix, tune, and upgrade ensuring your MVP runs smooth post-launch.",
			image: "/landing/our_process/5.png"
		}
	];

	return (
		<section className="w-full bg-white py-12 sm:py-16 lg:py-20">
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
							<span className="text-black text-sm font-medium">Our Process</span>
						</div>
					</div>
				</div>

				{/* Section Heading */}
				<h2 className="text-center text-[#202020] text-2xl sm:text-[28px] font-bold leading-[31px] mb-3 max-w-[693px] mx-auto">
					The LaunchPad Process
				</h2>

				{/* Subtitle */}
				<p className="text-center text-[#525252] text-base font-medium leading-[31px] mb-12 max-w-[693px] mx-auto">
					A transparent, founder-friendly journey from idea to live MVP in just <strong>2 weeks</strong>.
				</p>

				{/* Steps Grid - 3 on top row, 2 on bottom row */}
				<div className="max-w-[1200px] mx-auto">
					{/* Top Row - 3 steps */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
						{steps.slice(0, 3).map((step, index) => (
							<div
								key={index}
								className="rounded-2xl bg-white border border-white shadow-[0_2px_21px_0_rgba(0,0,0,0.10)] hover:shadow-[0_4px_25px_0_rgba(0,0,0,0.15)] transition-shadow overflow-hidden"
							>
								{/* Image with grid pattern background */}
								<div
									className="w-full h-[200px] sm:h-[240px] lg:h-[280px] relative p-4 bg-[#F3F7F8]"
									style={{
										backgroundImage: `linear-gradient(to right, rgba(206, 227, 255, 0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(206, 227, 255, 0.25) 1px, transparent 1px)`,
										backgroundSize: '24px 24px'
									}}
								>
									<Image
										src={step.image}
										alt={step.title}
										fill
										className="object-contain"
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
									/>
								</div>

								{/* Content */}
								<div className="p-6">
									<div className="flex items-center gap-3 mb-2">
										<span className="text-[#202020] text-lg font-bold">{step.number}</span>
										<h3 className="text-[#202020] text-lg font-bold">{step.title}</h3>
									</div>
									<p className="text-[#525252] text-sm sm:text-base font-medium leading-6">
										{step.description}
									</p>
								</div>
							</div>
						))}
					</div>

					{/* Bottom Row - 2 steps centered */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-[800px] mx-auto">
						{steps.slice(3, 5).map((step, index) => (
							<div
								key={index + 3}
								className="rounded-2xl bg-white border border-white shadow-[0_2px_21px_0_rgba(0,0,0,0.10)] hover:shadow-[0_4px_25px_0_rgba(0,0,0,0.15)] transition-shadow overflow-hidden"
							>
								{/* Image with grid pattern background */}
								<div
									className="w-full h-[200px] sm:h-[240px] lg:h-[280px] relative p-4 bg-[#F3F7F8]"
									style={{
										backgroundImage: `linear-gradient(to right, rgba(206, 227, 255, 0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(206, 227, 255, 0.25) 1px, transparent 1px)`,
										backgroundSize: '24px 24px'
									}}
								>
									<Image
										src={step.image}
										alt={step.title}
										fill
										className="object-contain"
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
									/>
								</div>

								{/* Content */}
								<div className="p-6">
									<div className="flex items-center gap-3 mb-2">
										<span className="text-[#202020] text-lg font-bold">{step.number}</span>
										<h3 className="text-[#202020] text-lg font-bold">{step.title}</h3>
									</div>
									<p className="text-[#525252] text-sm sm:text-base font-medium leading-6">
										{step.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

