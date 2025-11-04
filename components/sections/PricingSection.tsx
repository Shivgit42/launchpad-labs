export default function PricingSection() {
	const tiers = [
		{ name: "Starter", price: "$4,900", features: ["Core MVP scope", "Design + Build", "2-week sprint"], cta: "Get Started" },
		{ name: "Growth", price: "$7,900", features: ["Expanded features", "Integrations", "Analytics setup"], cta: "Book a Call" },
		{ name: "Custom", price: "Let's chat", features: ["Complex workflows", "Multiple sprints", "Team training"], cta: "Talk to Us" },
	];

	return (
		<section className="w-full bg-[#F3F7F8] py-12 sm:py-16 lg:py-20">
			<div className="max-w-[1200px] mx-auto px-4 sm:px-6">
				<div className="text-center max-w-2xl mx-auto mb-10">
					<h1 className="text-4xl font-bold mb-3"><span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Pricing</span></h1>
					<p className="text-[#525252]">Transparent, sprint-based pricing. Ship fast, learn faster.</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{tiers.map((t) => (
						<div key={t.name} className="rounded-[20px] bg-white shadow-[0_2px_21px_0_rgba(0,0,0,0.10)] p-8">
							<h3 className="text-[#202020] text-xl font-bold mb-2">{t.name}</h3>
							<div className="text-primary text-3xl font-extrabold mb-4">{t.price}</div>
							<ul className="space-y-2 mb-6">
								{t.features.map((f) => (
									<li key={f} className="text-[#505050] text-sm">• {f}</li>
								))}
							</ul>
							<a href="#book" className="inline-flex items-center justify-center rounded-[31px] border-2 border-secondary/60 bg-gradient-to-b from-primary to-primary px-6 h-[42px] text-white text-[15px] font-bold hover:scale-105 transition-transform">{t.cta}</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}


