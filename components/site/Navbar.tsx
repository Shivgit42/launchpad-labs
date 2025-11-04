"use client";

import Link from "next/link";
import Logo from "../icons/Logo";

export default function Navbar() {
	return (
		<nav className="sticky top-0 z-50 w-full">
			<div>
				<div className="flex items-center justify-between   px-4 sm:px-6 lg:px-8 h-[64px]  py-4">
					<Link href="/" className="flex items-center gap-3 sm:gap-4">
						<div className="flex items-center justify-center w-[46px] h-[42px] rounded-[9px] bg-white shadow-[0_2px_11px_0_rgba(0,0,0,0.25),0_0_17px_0_rgba(186,192,255,0.25)_inset]">
							<Logo idPrefix="navbar" />
						</div>
						<div className="text-[18px] sm:text-[22px] font-bold leading-normal">
							<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">LaunchPad</span>
							<span className="text-black"> Labs</span>
						</div>
					</Link>

					<div className="flex items-center justify-between gap-4">
						<div className="hidden lg:flex items-center gap-6 xl:gap-10">
							<Link href="/how-it-works" className="text-[#1F1F1F] text-[14px] font-medium hover:opacity-70 transition-opacity">How It Works</Link>
							<Link href="/our-work" className="text-[#1F1F1F] text-[14px] font-medium hover:opacity-70 transition-opacity">Our Work</Link>
							<Link href="/our-process" className="text-[#1F1F1F] text-[14px] font-medium hover:opacity-70 transition-opacity">Our Process</Link>
							<Link href="/founder" className="text-[#1F1F1F] text-[14px] font-medium hover:opacity-70 transition-opacity">Founder</Link>
							<Link href="/pricing" className="text-[#1F1F1F] text-[14px] font-medium hover:opacity-70 transition-opacity">Pricing</Link>
						</div>

						<Link href="#book" className="flex items-center justify-center rounded-[31px] border-2 border-secondary bg-gradient-to-b from-primary to-secondary shadow-[0_46px_13px_0_rgba(30,113,229,0.00),0_30px_12px_0_rgba(30,113,229,0.02),0_17px_10px_0_rgba(30,113,229,0.08),0_7px_7px_0_rgba(30,113,229,0.13),0_2px_4px_0_rgba(30,113,229,0.15)] px-6 sm:px-8 h-[42px] sm:h-[44px] text-white text-[13px] sm:text-[14px] font-semibold hover:scale-105 transition-transform">Book A Call</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}


