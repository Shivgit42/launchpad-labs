import Image from "next/image";

export default function CTABannerSection() {
	return (
		<section id="book" className="w-full bg-white py-16 sm:py-20 lg:py-24 relative overflow-hidden">
			<div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] sm:w-[546px] h-[200px] sm:h-[300px] bg-white blur-[74.5px] opacity-60"></div>
			<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[200px] sm:w-[343px] h-[200px] sm:h-[326px] bg-white blur-[74.5px] opacity-60"></div>

			<div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
				<div className="text-center max-w-[717px] mx-auto">
					<h2 className="text-[#202020] text-2xl sm:text-[28px] font-bold leading-[40px] mb-4">Ready to launch your next big idea?</h2>
					<p className="text-[#525252] text-base font-medium leading-[31px] mb-8">Book a consultation call and let&apos;s turn your vision into reality</p>
					<a href="#book" className="inline-flex items-center justify-center rounded-[31px] border-2 border-secondary/60 bg-linear-to-b from-primary to-primary shadow-[0_46px_13px_0_rgba(30,113,229,0.00),0_30px_12px_0_rgba(30,113,229,0.02),0_17px_10px_0_rgba(30,113,229,0.08),0_7px_7px_0_rgba(30,113,229,0.13),0_2px_4px_0_rgba(30,113,229,0.15)] px-8 h-12 text-white text-base font-bold hover:scale-105 transition-transform">Book My Free MVP Call</a>
				</div>
				<br />
				<br />
				<div className="flex justify-center">
					<Image src="/landing/ready/image.png" alt="CTA Banner" width={1440} height={200} />
				</div>
			</div>
		</section>
	);
}


