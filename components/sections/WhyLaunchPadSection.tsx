import Image from "next/image";

export default function WhyLaunchPadSection() {
	const features = [
		{
			title: "MVP Package",
			description: "Everything you need SaaS, web app, or landing page build and launch-ready in 2 weeks.",
			image: "/landing/why/1.png"
		},
		{
			title: "Integrations",
			description: "Payments, logins, emails & more. We connect everything so you're ready to onboard users from day one.",
			image: "/landing/why/2.png"
		},
		{
			title: "Modern Stack",
			description: "Built with the latest tech and AI delivering speed, stability, and scalability for real growth.",
			image: "/landing/why/3.png"
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
							<span className="text-black text-sm font-medium">Why LaunchPad Labs</span>
						</div>
					</div>
				</div>

				{/* Section Heading */}
				<h2 className="text-center text-[#202020] text-2xl sm:text-[28px] font-bold leading-[31px] mb-3 max-w-[693px] mx-auto">
					Built faster Built smarter Built by founders
				</h2>

				{/* Description */}
				<p className="text-center text-[#525252] text-base font-medium leading-[31px] mb-12 max-w-[693px] mx-auto">
					MVPs built faster, smarter, and better - by founders who've done it before. We turn your idea into a launch-ready product in just <strong>2 weeks</strong>, using modern tech and proven systems trusted by <strong>50+ funded startups</strong>.
				</p>

				{/* Features Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-[1200px] mx-auto">
					{features.map((feature, index) => (
						<div
							key={index}
							className="rounded-2xl bg-white border border-white shadow-[0_2px_21px_0_rgba(0,0,0,0.10)] hover:shadow-[0_4px_25px_0_rgba(0,0,0,0.15)] transition-shadow overflow-hidden"
						>
							<div className="w-full h-[200px] sm:h-[240px] lg:h-[280px] relative bg-linear-to-br from-white to-gray-50 p-4">
								<Image
									src={feature.image}
									alt={feature.title}
									fill
									className="object-contain"
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
							</div>
							
							{/* Content */}
							<div className="p-6 text-center">
								<h3 className="text-[#404040] text-base font-bold mb-3">
									{feature.title}
								</h3>
								<p className="text-[#525252] text-sm font-medium leading-6">
									{feature.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

