export default function TrustedBySection() {
	return (
		<section className="relative w-full bg-[#F3F7F8] py-12 sm:py-16 overflow-hidden">
			<div className="max-w-[1114px] mx-auto px-4 sm:px-6">
				<div className="absolute left-0 top-0 w-[249px] h-[181px] bg-gradient-to-r from-[#F3F7F8] to-transparent blur-[13px] opacity-60"></div>
				<div className="absolute right-0 top-0 w-[216px] h-[181px] bg-gradient-to-l from-[#F3F7F8] to-transparent blur-[13px] opacity-60"></div>

				<p className="text-center text-[#555] text-sm sm:text-[15px] font-bold mb-8">Trusted by Founders from</p>

				<div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
					<div className="flex items-center h-[30px]"><span className="text-[#B8BBBE] text-xl font-bold">Amazon</span></div>
					<div className="flex items-center h-[27px]"><span className="text-[#B8BBBE] text-xl font-bold">Adobe</span></div>
					<div className="flex items-center h-[28px]"><span className="text-[#B8BBBE] text-xl font-bold">Walmart</span></div>
					<div className="flex items-center h-[23px]"><span className="text-[#B8BBBE] text-lg font-bold">QUALCOMM</span></div>
					<div className="flex items-center h-[25px]"><span className="text-[#B8BBBE] text-xl font-bold">Deloitte.</span></div>
				</div>
			</div>
		</section>
	);
}


