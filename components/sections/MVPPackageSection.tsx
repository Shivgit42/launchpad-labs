export default function MVPPackageSection() {
	const packageFeatures = [
		{
			title: "Complete MVP Build",
			description: "Full-stack SaaS, web app, or landing page built and launch-ready in 2 weeks"
		},
		{
			title: "Design & UX",
			description: "Modern, responsive design with intuitive user experience"
		},
		{
			title: "Core Features",
			description: "All essential features scoped and implemented for your MVP"
		},
		{
			title: "Payment Integration",
			description: "Stripe, PayPal, or other payment gateways ready to accept payments"
		},
		{
			title: "Authentication",
			description: "User login, registration, and secure authentication system"
		},
		{
			title: "Email System",
			description: "Email notifications, transactional emails, and marketing automation"
		},
		{
			title: "Database & Backend",
			description: "Scalable database architecture and robust backend infrastructure"
		},
		{
			title: "Hosting & Deployment",
			description: "Production-ready hosting and deployment setup"
		},
		{
			title: "Documentation",
			description: "Complete code documentation and deployment guides"
		}
	];

	return (
		<section className="w-full bg-[#F3F7F8] py-12 sm:py-16 lg:py-20">
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
							<span className="text-black text-sm font-medium">MVP Package</span>
						</div>
					</div>
				</div>

				{/* Section Heading */}
				<h2 className="text-center text-[#202020] text-2xl sm:text-[28px] font-bold leading-[31px] mb-3 max-w-[693px] mx-auto">
					Everything you need to launch in 2 weeks
				</h2>

				{/* Description */}
				<p className="text-center text-[#525252] text-base font-medium leading-[31px] mb-12 max-w-[693px] mx-auto">
					Our MVP package includes everything you need to go from idea to launch-ready product in just 2 weeks. No hidden fees, no surprises—just everything you need to start onboarding users.
				</p>

				{/* Features Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-[1200px] mx-auto">
					{packageFeatures.map((feature, index) => (
						<div
							key={index}
							className="rounded-2xl bg-white border border-white shadow-[0_2px_21px_0_rgba(0,0,0,0.10)] hover:shadow-[0_4px_25px_0_rgba(0,0,0,0.15)] transition-shadow p-6"
						>
							<div className="flex items-start gap-4">
								<div className="shrink-0 mt-1">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="12" cy="12" r="10" stroke="#0764DA" strokeWidth="2" fill="#0764DA" fillOpacity="0.1"/>
										<path d="M8 12L11 15L16 9" stroke="#0764DA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									</svg>
								</div>
								<div>
									<h3 className="text-[#404040] text-base font-bold mb-2">
										{feature.title}
									</h3>
									<p className="text-[#525252] text-sm font-medium leading-6">
										{feature.description}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* CTA Section */}
				<div className="mt-12 text-center">
					<a 
						href="#book" 
						className="inline-flex items-center justify-center rounded-[31px] border-2 border-secondary/60 bg-linear-to-b from-primary to-primary shadow-[0_46px_13px_0_rgba(30,113,229,0.00),0_30px_12px_0_rgba(30,113,229,0.02),0_17px_10px_0_rgba(30,113,229,0.08),0_7px_7px_0_rgba(30,113,229,0.13),0_2px_4px_0_rgba(30,113,229,0.15)] px-8 h-12 text-white text-base font-bold hover:scale-105 transition-transform"
					>
						Book My Free MVP Call
					</a>
				</div>
			</div>
		</section>
	);
}

