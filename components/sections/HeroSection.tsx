"use client";

import Logo from "../icons/Logo";

export default function HeroSection() {
	return (
		<section className="relative w-full bg-[#F3F7F8] py-12 md:py-16 lg:py-20 overflow-hidden min-h-[90vh] flex flex-col">
			{/* Background Image */}
			<div className="absolute inset-0 bg-[url('/landing/herosection-bg.png')] bg-cover bg-center bg-no-repeat pointer-events-none"></div>
			
			{/* Content Container */}
			<div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 relative z-10 flex-1">
				<div className="relative">
					{/* Decorative SVG Gradients */}
					<div className="absolute inset-0 pointer-events-none">
						<svg className="absolute left-0 top-0 w-[300px] h-full opacity-20" viewBox="0 0 458 797" fill="none" preserveAspectRatio="none">
							<path d="M0 0L458 0L458 797L0 797L0 0Z" stroke="rgba(255,255,255,0)" strokeWidth="1" fill="url(#grad1_hero)" />
							<defs>
								<linearGradient id="grad1_hero" x1="0%" y1="0%" x2="100%" y2="0%">
									<stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
									<stop offset="100%" stopColor="rgba(255,255,255,0)" />
								</linearGradient>
							</defs>
						</svg>
						<svg className="absolute right-0 top-0 w-[300px] h-full opacity-20" viewBox="0 0 458 797" fill="none" preserveAspectRatio="none">
							<path d="M0 0L458 0L458 797L0 797L0 0Z" stroke="rgba(255,255,255,0)" strokeWidth="1" fill="url(#grad2_hero)" />
							<defs>
								<linearGradient id="grad2_hero" x1="0%" y1="0%" x2="100%" y2="0%">
									<stop offset="0%" stopColor="rgba(255,255,255,0)" />
									<stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
								</linearGradient>
							</defs>
						</svg>
					</div>

					{/* Main Content */}
					<div className="relative text-center max-w-[70vw] mx-auto">
						{/* Notification Badge */}
						<div className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-[#A7CFFF] bg-white/80 backdrop-blur-sm shadow-[0_2px_11px_rgba(0,0,0,0.06)] mb-6">
							<div className="flex items-center gap-2">
								<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="10.5" cy="10.5" r="10.5" fill="#99FFCC" />
									<circle cx="10.5005" cy="10.5005" r="8.25" fill="#2DE88A" />
									<circle cx="10.5" cy="10.5" r="5.25" fill="#00BD5E" />
								</svg>
								<span className="text-[#1F1F1F] text-[13px] font-semibold">5 Founder booked the call this week</span>
							</div>
						</div>

						{/* Main Heading */}
						<h1 className="text-[42px] sm:text-[58px] lg:text-[72px] font-extrabold leading-tight mb-4 text-[#0F172A]">
							We Build and{" "}
							<span className="inline-flex align-middle">
								<span className="mx-2 inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-b from-[#E6F3FF] to-[#BDDEFF] shadow-[0_0_14px_0_rgba(8,104,221,0.25)_inset,0_0_18px_0_rgba(0,0,0,0.05)]">
									<Logo idPrefix="hero" />
								</span>
							</span>
							Launch Your Startup MVP in Just{" "}
							<span className="bg-gradient-to-r from-primary/80 to-secondary/80 bg-clip-text text-transparent">2 Weeks</span>
						</h1>

						{/* Description */}
						<p className="text-[#5B5B5B] text-base sm:text-lg lg:text-[18px] font-medium leading-[31px] mb-6">
							LaunchPad Labs builds and ships investor-ready MVPs for founders
						</p>

						{/* Trust Badge */}
						<div className="mt-6 flex items-center justify-center gap-2">
							<svg width="57" height="23" viewBox="0 0 57 23" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
								<circle cx="45.5" cy="11.5" r="11.5" fill="#D9D9D9" />
								<path d="M40.9998 11.5C40.9998 17.8513 35.8511 23 29.4998 23C23.1485 23 17.9998 17.8513 17.9998 11.5C17.9998 5.14873 23.1485 0 29.4998 0C35.8511 0 40.9998 5.14873 40.9998 11.5Z" fill="#D9D9D9" />
								<circle cx="11.5" cy="11.5" r="11.5" fill="#D9D9D9" />
							</svg>
							<p className="text-[#4C4C4C] text-sm sm:text-[14px] font-semibold">Trusted by 50+ VC-backed founders</p>
						</div>

						{/* CTA Button */}
						<div className="flex items-center justify-center mt-12">
							<button
								type="button"
								onClick={() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })}
								className="inline-flex items-center justify-center rounded-[31px] border-2 border-secondary bg-gradient-to-b from-primary to-secondary shadow-[0_46px_13px_0_rgba(30,113,229,0.00),0_30px_12px_0_rgba(30,113,229,0.02),0_17px_10px_0_rgba(30,113,229,0.08),0_7px_7px_0_rgba(30,113,229,0.13),0_2px_4px_0_rgba(30,113,229,0.15)] px-6 sm:px-8 h-[42px] sm:h-[44px] text-white text-[13px] sm:text-[14px] font-semibold hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
							>
								Book My Free MVP Call
							</button>
						</div>

						{/* Trusted By Section */}
						<div className="flex items-center justify-center mt-16 sm:mt-24 lg:mt-[350px]">
							<p className="text-[#555] text-sm sm:text-[15px] font-bold absolute bottom-0 left-0 right-0">Trusted by Founders from</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}


