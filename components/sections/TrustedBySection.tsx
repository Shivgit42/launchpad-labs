import Image from "next/image";
import GradientBlur from "../icons/GradientBlur";

export default function TrustedBySection() {
	return (
		<section className="relative w-full py-12 sm:py-16 overflow-hidden">
			{/* Decorative Gradients - Positioned relative to section */}
			<div className="absolute left-0 top-0 pointer-events-none z-10">
				<GradientBlur position="left" idPrefix="trusted-left" />
			</div>
			<div className="absolute right-0 top-0 pointer-events-none z-10">
				<GradientBlur position="right" idPrefix="trusted-right" />
			</div>

			<div className="max-w-[1114px] mx-auto px-4 sm:px-6 relative z-20">
				{/* Image Container */}
				<div className="relative w-full flex items-center justify-center">
					<Image 
						src="/landing/trustedbysection.png" 
						alt="Trusted by Founders from Qualcomm, Walmart, Amazon, Adobe, Deloitte" 
						width={1114}
						height={200}
						className="w-full max-w-full h-auto object-contain"
						priority
					/>
				</div>
			</div>
		</section>
	);
}


