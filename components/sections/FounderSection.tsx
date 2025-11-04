export default function FounderSection() {
	return (
		<section className="w-full bg-[#F3F7F8] py-12 sm:py-16 lg:py-20">
			<div className="max-w-[1100px] mx-auto px-4 sm:px-6">
				<div className="text-center max-w-2xl mx-auto mb-10">
					<h1 className="text-4xl font-bold mb-3"><span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Founder</span></h1>
					<p className="text-[#525252]">The story, philosophy, and craft behind LaunchPad Labs.</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
					<div className="md:col-span-1 flex flex-col items-center">
						<div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#E6F3FF] to-[#B9DDFB] shadow-[0_2px_21px_0_rgba(0,0,0,0.10)]" />
						<div className="mt-4 text-center">
							<h3 className="text-lg font-semibold text-[#1F1F1F]">Your Name</h3>
							<p className="text-sm text-[#686868]">Founder & CTO</p>
						</div>
					</div>
					<div className="md:col-span-2">
						<div className="space-y-4 text-[#474545] leading-7">
							<p>We exist to ship fast without sacrificing quality. In two weeks, founders get a working product that’s built to learn, attract users, and raise.</p>
							<p>Our operating system blends product strategy, strong defaults, and code standards that scale as you grow. Less ceremony, more impact.</p>
							<p>Before LaunchPad Labs, I led teams shipping B2B and consumer software across fintech, AI, and developer tooling.</p>
						</div>
						<div className="mt-6 flex gap-3">
							<a href="#book" className="inline-flex items-center justify-center rounded-[31px] border-2 border-secondary/60 bg-primary px-6 h-[42px] text-white text-[15px] font-bold hover:bg-primary/90 transition-colors">Book A Call</a>
							<a href="/our-work" className="inline-flex items-center justify-center rounded-[31px] border-2 border-secondary/60 bg-white px-6 h-[42px] text-[#1F1F1F] text-[15px] font-semibold hover:bg-gray-50 transition-colors">View Work</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}


