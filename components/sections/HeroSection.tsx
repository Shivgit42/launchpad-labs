export default function HeroSection() {
	return (
		<section className="relative w-full bg-[#F3F7F8] py-12 md:py-16 lg:py-20 overflow-hidden">
			<div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
				<div className="relative">
					<div className="absolute inset-0 pointer-events-none">
						<svg className="absolute left-0 top-0 w-[300px] h-full opacity-20" viewBox="0 0 458 797" fill="none" preserveAspectRatio="none">
							<path d="M0 0L458 0L458 797L0 797L0 0Z" stroke="rgba(255,255,255,0)" strokeWidth="1" fill="url(#grad1)"/>
							<defs>
								<linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
									<stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
									<stop offset="100%" stopColor="rgba(255,255,255,0)" />
								</linearGradient>
							</defs>
						</svg>
						<svg className="absolute right-0 top-0 w-[300px] h-full opacity-20" viewBox="0 0 458 797" fill="none" preserveAspectRatio="none">
							<path d="M0 0L458 0L458 797L0 797L0 0Z" stroke="rgba(255,255,255,0)" strokeWidth="1" fill="url(#grad2)"/>
							<defs>
								<linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
									<stop offset="0%" stopColor="rgba(255,255,255,0)" />
									<stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
								</linearGradient>
							</defs>
						</svg>
					</div>

					<div className="relative text-center max-w-[920px] mx-auto">
						<div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full border border-[#A7CFFF] bg-white/80 backdrop-blur-sm shadow-[0_2px_11px_rgba(0,0,0,0.06)] mb-6">
							<div className="flex items-center gap-2">
								<div className="w-[8px] h-[8px] rounded-full bg-[#21C55D]"></div>
								<span className="text-[#1F1F1F] text-[13px] font-semibold">5 Founder booked the call this week</span>
							</div>
						</div>

						<h1 className="text-[34px] sm:text-[46px] lg:text-[56px] font-extrabold leading-tight mb-4 text-[#0F172A]">
							We Build and <span className="inline-flex align-middle"> 
								<span className="mx-2 inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-b from-[#E6F3FF] to-[#BDDEFF] shadow-[0_0_14px_0_rgba(8,104,221,0.25)_inset,0_0_18px_0_rgba(0,0,0,0.05)]">
									<svg width="20" height="20" viewBox="0 0 29 29" fill="none">
										<path d="M18.6264 8.88086C18.2767 8.88105 17.9378 9.0025 17.6676 9.22452C17.3973 9.44653 17.2124 9.75538 17.1444 10.0984C17.0763 10.4415 17.1293 10.7975 17.2943 11.1059C17.4593 11.4142 17.7262 11.6558 18.0494 11.7895C18.3725 11.9232 18.7321 11.9407 19.0667 11.839C19.4013 11.7374 19.6904 11.5228 19.8845 11.2319C20.0787 10.9411 20.166 10.5919 20.1316 10.2438C20.0972 9.89577 19.9432 9.57043 19.6958 9.32323C19.5555 9.18265 19.3888 9.07119 19.2052 8.99528C19.0217 8.91936 18.825 8.88047 18.6264 8.88086Z" fill="url(#g0)"/>
										<path d="M27.0425 2.8353C27.0423 2.83361 27.0423 2.83189 27.0425 2.8302C26.9946 2.62025 26.889 2.42785 26.7376 2.27473C26.5862 2.1216 26.395 2.01384 26.1856 1.9636C24.4977 1.55182 21.8424 1.99079 18.8999 3.16891C15.9342 4.35837 13.1554 6.11423 11.2772 7.99583C10.6752 8.59468 10.1159 9.23496 9.60345 9.91198C8.33866 9.85534 7.22454 10.0355 6.28601 10.445C3.01558 11.8842 2.08157 15.5675 1.83292 17.0799C1.79694 17.2947 1.81103 17.515 1.87409 17.7236C1.93715 17.9321 2.04748 18.1233 2.1965 18.2822C2.34552 18.4412 2.5292 18.5636 2.73326 18.6399C2.93731 18.7163 3.15623 18.7445 3.37298 18.7224H3.38034L7.02347 18.3248C7.028 18.3713 7.0331 18.4137 7.03706 18.4528C7.08385 18.8968 7.28183 19.3111 7.5978 19.6264L9.37575 21.4055C9.69059 21.7219 10.1049 21.9201 10.5488 21.9668L10.6706 21.9798L10.2741 25.6184V25.6258C10.2538 25.8218 10.2747 26.0198 10.3353 26.2072C10.3959 26.3947 10.495 26.5674 10.6262 26.7144C10.7574 26.8614 10.9178 26.9793 11.0972 27.0608C11.2766 27.1422 11.471 27.1853 11.668 27.1874C11.7467 27.1875 11.8254 27.1811 11.9031 27.1681C13.4239 26.9234 17.1055 26.0008 18.5408 22.7128C18.9469 21.7805 19.1264 20.6709 19.076 19.4083C19.7561 18.897 20.3987 18.3377 20.999 17.7346C22.8925 15.8507 24.654 13.0946 25.831 10.172C27.0029 7.2629 27.4441 4.58776 27.0425 2.8353Z" fill="url(#g1)"/>
										<defs>
											<linearGradient id="g0" x1="18.6272" y1="8.88086" x2="18.6272" y2="11.9043">
												<stop stopColor="#2300A3"/>
												<stop offset="1" stopColor="#00D0FF"/>
											</linearGradient>
											<linearGradient id="g1" x1="14.5005" y1="1.8125" x2="14.5005" y2="27.1874">
												<stop stopColor="#2300A3"/>
												<stop offset="1" stopColor="#00D0FF"/>
											</linearGradient>
										</defs>
									</svg>
								</span>
							</span>
							Launch Your Startup MVP in Just <span className="bg-gradient-to-r from-[#2209A7] to-[#03BDF7] bg-clip-text text-transparent">2 Weeks</span>
						</h1>

						<p className="text-[#5B5B5B] text-base sm:text-lg lg:text-[18px] font-medium leading-[31px] mb-6">
							LaunchPad Labs builds and ships investor-ready MVPs for founders
						</p>

						<div className="flex items-center justify-center">
							<a href="#book" className="inline-flex items-center justify-center rounded-[31px] border-2 border-[#9CC6FF] bg-gradient-to-b from-[#0F93FF] to-[#003BB9] shadow-[0_46px_13px_0_rgba(30,113,229,0.00),0_30px_12px_0_rgba(30,113,229,0.02),0_17px_10px_0_rgba(30,113,229,0.08),0_7px_7px_0_rgba(30,113,229,0.13),0_2px_4px_0_rgba(30,113,229,0.15)] px-8 sm:px-10 h-12 text-white text-sm sm:text-base font-bold hover:scale-105 transition-transform">Book My Free MVP Call</a>
						</div>

						<div className="mt-6 flex items-center justify-center gap-2">
							<span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-[#D7DFEA]"></span>
							<p className="text-[#4C4C4C] text-sm sm:text-[14px] font-semibold">Trusted by 50+ VC-backed founders</p>
						</div>
					</div>

					{/* Calendar preview */}
					<div className="mt-8 max-w-[820px] mx-auto">
						<div className="rounded-[24px] border border-[rgba(107,155,255,0.35)] bg-white/70 backdrop-blur-sm p-4 sm:p-6 lg:p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
								<div className="bg-gradient-to-br from-[#F6FAFF] to-white rounded-xl p-4">
									<div className="h-[240px] rounded-lg border border-[#E6F0FF] bg-white" />
								</div>
								<div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 flex items-center justify-center">
									<div className="text-center">
										<div className="mx-auto w-[220px] h-8 rounded-full bg-gradient-to-r from-[#5AA3FF] to-[#2B74D9] shadow-[0_14px_34px_rgba(33,117,230,0.35)]" />
										<p className="mt-3 text-xs text-gray-500">02:30 slot example</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}


