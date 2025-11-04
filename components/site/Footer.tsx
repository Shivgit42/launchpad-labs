import Link from "next/link";

export default function Footer() {
	return (
		<footer className="w-full bg-white relative overflow-hidden">
			<div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20 pt-12 sm:pt-20 pb-8">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-16 sm:mb-20">
					<div className="lg:col-span-1">
						<div className="flex items-center gap-4 mb-4">
							<div className="flex items-center justify-center w-[46px] h-[42px] rounded-[9px] bg-white shadow-[0_2px_11px_0_rgba(0,0,0,0.25),0_0_17px_0_rgba(186,192,255,0.25)_inset]">
								<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M18.6263 8.88062C18.2765 8.88081 17.9377 9.00226 17.6674 9.22427C17.3972 9.44629 17.2123 9.75513 17.1443 10.0982C17.0762 10.4412 17.1292 10.7973 17.2942 11.1056C17.4592 11.414 17.7261 11.6556 18.0492 11.7893C18.3724 11.923 18.7319 11.9405 19.0666 11.8388C19.4012 11.7371 19.6902 11.5226 19.8844 11.2317C20.0786 10.9408 20.1659 10.5916 20.1315 10.2436C20.0971 9.89553 19.943 9.57019 19.6956 9.32298C19.5553 9.1824 19.3886 9.07095 19.2051 8.99503C19.0216 8.91911 18.8249 8.88023 18.6263 8.88062Z" fill="url(#paint0_linear_footer)"/>
									<path d="M27.0425 2.83555C27.0423 2.83386 27.0423 2.83214 27.0425 2.83045C26.9946 2.62049 26.889 2.4281 26.7376 2.27497C26.5862 2.12185 26.395 2.01409 26.1856 1.96385C24.4977 1.55207 21.8424 1.99103 18.8999 3.16916C15.9342 4.35861 13.1554 6.11447 11.2772 7.99607C10.6752 8.59492 10.1159 9.23521 9.60345 9.91223C8.33866 9.85559 7.22454 10.0357 6.28601 10.4452C3.01558 11.8845 2.08157 15.5678 1.83292 17.0801C1.79694 17.295 1.81103 17.5153 1.87409 17.7238C1.93715 17.9323 2.04748 18.1235 2.1965 18.2825C2.34552 18.4414 2.5292 18.5638 2.73326 18.6402C2.93731 18.7165 3.15623 18.7448 3.37298 18.7227H3.38034L7.02347 18.3251C7.028 18.3715 7.0331 18.414 7.03706 18.4531C7.08385 18.897 7.28183 19.3113 7.5978 19.6267L9.37575 21.4057C9.69059 21.7222 10.1049 21.9204 10.5488 21.967L10.6706 21.9801L10.2741 25.6187V25.626C10.2538 25.822 10.2747 26.02 10.3353 26.2075C10.3959 26.3949 10.495 26.5677 10.6262 26.7146C10.7574 26.8616 10.9178 26.9796 11.0972 27.061C11.2766 27.1425 11.471 27.1856 11.668 27.1876C11.7467 27.1877 11.8254 27.1813 11.9031 27.1684C13.4239 26.9237 17.1055 26.001 18.5408 22.713C18.9469 21.7807 19.1264 20.6711 19.076 19.4086C19.7561 18.8972 20.3987 18.3379 20.999 17.7349C22.8925 15.851 24.654 13.0949 25.831 10.1722C27.0029 7.26314 27.4441 4.58801 27.0425 2.83555ZM20.9786 12.7409C20.5132 13.2067 19.9201 13.5241 19.2743 13.6528C18.6284 13.7816 17.959 13.7158 17.3505 13.464C16.742 13.2122 16.222 12.7855 15.856 12.238C15.4901 11.6905 15.2948 11.0468 15.2948 10.3883C15.2948 9.72977 15.4901 9.08605 15.856 8.53856C16.222 7.99108 16.742 7.56442 17.3505 7.31258C17.959 7.06073 18.6284 6.99501 19.2743 7.12374C19.9201 7.25246 20.5132 7.56984 20.9786 8.03572C21.2905 8.34298 21.5382 8.7092 21.7073 9.11308C21.8764 9.51696 21.9635 9.95044 21.9635 10.3883C21.9635 10.8261 21.8764 11.2596 21.7073 11.6635C21.5382 12.0674 21.2905 12.4336 20.9786 12.7409Z" fill="url(#paint1_linear_footer)"/>
								<path d="M9.17187 21.8881C8.9527 21.8609 8.73114 21.9147 8.54882 22.0393C8.18689 22.2868 7.82326 22.5315 7.45623 22.77C6.71367 23.2526 5.82554 22.4052 6.26677 21.6372L6.95496 20.4477C7.05334 20.3038 7.10813 20.1345 7.11274 19.9603C7.11735 19.786 7.0716 19.6141 6.98096 19.4651C6.89032 19.3162 6.75865 19.1966 6.60174 19.1206C6.44482 19.0446 6.26932 19.0155 6.09628 19.0368C5.33248 19.1334 4.62251 19.4813 4.07818 20.0257C3.87087 20.2336 3.24046 20.8646 2.90119 23.269C2.80462 23.9596 2.74375 24.6548 2.7188 25.3517C2.7157 25.4726 2.73685 25.593 2.78101 25.7056C2.82516 25.8182 2.89142 25.9209 2.97589 26.0075C3.06035 26.0942 3.1613 26.163 3.2728 26.21C3.38429 26.257 3.50406 26.2812 3.62505 26.2811H3.64771C4.34515 26.2564 5.04085 26.1959 5.73208 26.0999C8.13761 25.76 8.76859 25.1291 8.97589 24.9218C9.52283 24.3772 9.86989 23.6639 9.96087 22.8974C9.98999 22.659 9.92324 22.4187 9.7753 22.2294C9.62735 22.0402 9.4103 21.9174 9.17187 21.8881Z" fill="url(#paint2_linear_footer)"/>
								<defs>
									<linearGradient id="paint0_linear_footer" x1="18.6271" y1="8.88062" x2="18.6271" y2="11.9041" gradientUnits="userSpaceOnUse">
										<stop stopColor="#2300A3"/>
										<stop offset="1" stopColor="#00D0FF"/>
									</linearGradient>
									<linearGradient id="paint1_linear_footer" x1="14.5005" y1="1.81274" x2="14.5005" y2="27.1876" gradientUnits="userSpaceOnUse">
										<stop stopColor="#2300A3"/>
										<stop offset="1" stopColor="#00D0FF"/>
									</linearGradient>
									<linearGradient id="paint2_linear_footer" x1="6.34303" y1="19.03" x2="6.34303" y2="26.2811" gradientUnits="userSpaceOnUse">
										<stop stopColor="#2300A3"/>
										<stop offset="1" stopColor="#00D0FF"/>
									</linearGradient>
								</defs>
							</svg>
						</div>
						<div className="text-[22px] font-bold leading-normal">
							<span className="bg-gradient-to-r from-[#2209A7] to-[#03BDF7] bg-clip-text text-transparent">LaunchPad</span>
							<span className="text-black"> Labs</span>
						</div>
					</div>
					<p className="text-[#525252] text-[14px] font-medium leading-[31px] mb-6">We build high-quality MVPs to transform your ideas into reality.</p>
					<div className="flex items-center gap-3">
						<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-[38px] h-[35px] rounded-[9px] bg-white shadow-[0_2px_11px_0_rgba(0,0,0,0.09)] hover:shadow-lg transition-shadow">
							<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8125 0.702881H14.1129L9.08786 6.46074L15 14.2972H10.3714L6.74357 9.54538L2.59714 14.2972H0.294643L5.66893 8.13645L0 0.703952H4.74643L8.02071 5.04645L11.8125 0.702881ZM11.0036 12.9172H12.2786L4.05 2.0111H2.68286L11.0036 12.9172Z" fill="#145DCC"/></svg>
						</a>
						<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-[38px] h-[35px] rounded-[9px] bg-white shadow-[0_2px_11px_0_rgba(0,0,0,0.09)] hover:shadow-lg transition-shadow">
							<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.58333 1.14575C3.91477 1.14575 3.27358 1.41134 2.80084 1.88409C2.32809 2.35683 2.0625 2.99802 2.0625 3.66659C2.0625 4.33515 2.32809 4.97634 2.80084 5.44908C3.27358 5.92183 3.91477 6.18742 4.58333 6.18742C5.2519 6.18742 5.89308 5.92183 6.36583 5.44908C6.83858 4.97634 7.10417 4.33515 7.10417 3.66659C7.10417 2.99802 6.83858 2.35683 6.36583 1.88409C5.89308 1.41134 5.2519 1.14575 4.58333 1.14575ZM3.4375 3.66659C3.4375 3.36269 3.55822 3.07124 3.77311 2.85636C3.98799 2.64147 4.27944 2.52075 4.58333 2.52075C4.88723 2.52075 5.17867 2.64147 5.39356 2.85636C5.60845 3.07124 5.72917 3.36269 5.72917 3.66659C5.72917 3.97048 5.60845 4.26193 5.39356 4.47681C5.17867 4.6917 4.88723 4.81242 4.58333 4.81242C4.27944 4.81242 3.98799 4.6917 3.77311 4.47681C3.55822 4.26193 3.4375 3.97048 3.4375 3.66659ZM2.0625 7.33325C2.0625 7.15092 2.13493 6.97605 2.26386 6.84712C2.3928 6.71818 2.56766 6.64575 2.75 6.64575H6.41667C6.599 6.64575 6.77387 6.71818 6.9028 6.84712C7.03173 6.97605 7.10417 7.15092 7.10417 7.33325V19.2499C7.10417 19.4323 7.03173 19.6071 6.9028 19.7361C6.77387 19.865 6.599 19.9374 6.41667 19.9374H2.75C2.56766 19.9374 2.3928 19.865 2.26386 19.7361C2.13493 19.6071 2.0625 19.4323 2.0625 19.2499V7.33325ZM3.4375 8.02075V18.5624H5.72917V8.02075H3.4375ZM8.47917 7.33325C8.47917 7.15092 8.5516 6.97605 8.68053 6.84712C8.80946 6.71818 8.98433 6.64575 9.16667 6.64575H12.8333C13.0157 6.64575 13.1905 6.71818 13.3195 6.84712C13.4484 6.97605 13.5208 7.15092 13.5208 7.33325V7.73108L13.9196 7.55967C14.6071 7.26597 15.3365 7.08193 16.0811 7.01425C18.6248 6.78325 20.8542 8.78159 20.8542 11.3483V19.2499C20.8542 19.4323 20.7817 19.6071 20.6528 19.7361C20.5239 19.865 20.349 19.9374 20.1667 19.9374H16.5C16.3177 19.9374 16.1428 19.865 16.0139 19.7361C15.8849 19.6071 15.8125 19.4323 15.8125 19.2499V12.8333C15.8125 12.5294 15.6918 12.2379 15.4769 12.023C15.262 11.8081 14.9706 11.6874 14.6667 11.6874C14.3628 11.6874 14.0713 11.8081 13.8564 12.023C13.6416 12.2379 13.5208 12.5294 13.5208 12.8333V19.2499C13.5208 19.4323 13.4484 19.6071 13.3195 19.7361C13.1905 19.865 13.0157 19.9374 12.8333 19.9374H9.16667C8.98433 19.9374 8.80946 19.865 8.68053 19.7361C8.5516 19.6071 8.47917 19.4323 8.47917 19.2499V7.33325ZM9.85417 8.02075V18.5624H12.1458V12.8333C12.1458 12.1647 12.4114 11.5235 12.8842 11.0508C13.3569 10.578 13.9981 10.3124 14.6667 10.3124C15.3352 10.3124 15.9764 10.578 16.4492 11.0508C16.9219 11.5235 17.1875 12.1647 17.1875 12.8333V18.5624H19.4792V11.3483C19.4792 9.60292 17.9566 8.22425 16.2067 8.38375C15.6055 8.4383 15.0165 8.58677 14.4613 8.82375L13.1047 9.40583C13 9.45078 12.8859 9.46903 12.7724 9.45894C12.659 9.44885 12.5498 9.41074 12.4548 9.34803C12.3597 9.28532 12.2817 9.19998 12.2278 9.09966C12.1739 8.99935 12.1457 8.88722 12.1458 8.77333V8.02075H9.85417Z" fill="#145DCC"/>
							</svg>
						</a>
					</div>
				</div>

				<div className="flex flex-col gap-2">
					<h3 className="text-black text-[17px] font-bold leading-[31px] mb-1">Services</h3>
					<Link href="#" className="text-[#616161] text-[14px] font-medium leading-[31px] hover:text-black transition-colors">MVP Development</Link>
					<Link href="#" className="text-[#616161] text-[14px] font-medium leading-[31px] hover:text-black transition-colors">UI/UX Design</Link>
					<Link href="#" className="text-[#616161] text-[14px] font-medium leading-[31px] hover:text-black transition-colors">Web Development</Link>
					<Link href="#" className="text-[#616161] text-[14px] font-medium leading-[31px] hover:text-black transition-colors">Mobile Apps</Link>
					<Link href="#" className="text-[#616161] text-[14px] font-medium leading-[31px] hover:text-black transition-colors">Consulting</Link>
				</div>

				<div className="flex flex-col gap-2">
					<h3 className="text-black text-[17px] font-bold leading-[31px] mb-1">About</h3>
					<Link href="/our-process" className="text-[#616161] text-[14px] font-medium leading-[31px] hover:text-black transition-colors">Our Process</Link>
					<Link href="/how-it-works" className="text-[#616161] text-[14px] font-medium leading-[31px] hover:text-black transition-colors">How We Work</Link>
					<Link href="#book" className="text-[#616161] text-[14px] font-medium leading-[31px] hover:text-black transition-colors">Contact</Link>
					<Link href="#faq" className="text-[#616161] text-[14px] font-medium leading-[31px] hover:text-black transition-colors">FAQs</Link>
					<Link href="#book" className="text-[#616161] text-[14px] font-medium leading-[31px] hover:text-black transition-colors">Contact</Link>
				</div>

				<div className="flex flex-col gap-2">
					<h3 className="text-black text-[17px] font-bold leading-[31px] mb-1">Portfolio</h3>
					<Link href="/our-work" className="text-[#616161] text-[14px] font-medium leading-[31px] hover:text-black transition-colors">Case Studies</Link>
					<Link href="/our-work" className="text-[#616161] text-[14px] font-medium leading-[31px] hover:text-black transition-colors">Success Stories</Link>
					<Link href="/our-work" className="text-[#616161] text-[14px] font-medium leading-[31px] hover:text-black transition-colors">MVP Showcase</Link>
					<Link href="/our-work" className="text-[#616161] text-[14px] font-medium leading-[31px] hover:text-black transition-colors">Testimonials</Link>
				</div>

				<div className="flex flex-col gap-2">
					<h3 className="text-black text-[17px] font-bold leading-[31px] mb-1">Legal</h3>
					<Link href="/privacy" className="text-[#616161] text-[14px] font-medium leading-[31px] hover:text-black transition-colors">Privacy Policy</Link>
					<Link href="/terms" className="text-[#616161] text-[14px] font-medium leading-[31px] hover:text-black transition-colors">Terms of Services</Link>
					<Link href="#" className="text-[#616161] text-[14px] font-medium leading-[31px] hover:text-black transition-colors">Cookie Policy</Link>
				</div>
				</div>

				<div className="relative">
					<div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#93B3D8] to-transparent mb-4"></div>
					<p className="text-[#818181] text-center text-[13px] font-medium leading-[31px]">© {new Date().getFullYear()} LaunchPad Labs. All rights reserved.</p>
				</div>
			</div>

			<div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden h-[200px] sm:h-[250px]">
				<h2 className="text-[60px] sm:text-[100px] lg:text-[177px] font-bold leading-none bg-gradient-to-b from-[#C2DCFF] via-[#E5F0FF] to-white bg-clip-text text-transparent opacity-90 text-center whitespace-nowrap">LaunchPad Labs</h2>
			</div>
		</footer>
	);
}


