"use client";

import { useState } from "react";

export default function TestimonialSection() {
	const [activeVideoIndex, setActiveVideoIndex] = useState(0);

	const videoTestimonials = [
		{
			name: "John Doe",
			role: "Software Developer",
		},
		{
			name: "Jane Smith",
			role: "Product Manager",
		},
		{
			name: "Mike Johnson",
			role: "Startup Founder",
		},
	];

	const textTestimonials = [
		{
			name: "Sarah Johnson",
			role: "Software Developer",
			quote: "Launchpad Labs turned our idea into a working MVP in record time. Couldn't have asked for a smoother process.",
			rating: 5,
		},
		{
			name: "David Chen",
			role: "Tech Entrepreneur",
			quote: "The team at Launchpad Labs understands startup needs. They delivered exactly what we needed in 2 weeks.",
			rating: 5,
		},
		{
			name: "Emily Rodriguez",
			role: "Founder & CEO",
			quote: "Professional, efficient, and results-driven. Our MVP is now live and we're already getting user feedback.",
			rating: 5,
		},
		{
			name: "Michael Brown",
			role: "Product Manager",
			quote: "The transparent pricing and quick turnaround made all the difference. Highly recommend Launchpad Labs.",
			rating: 5,
		},
		{
			name: "Lisa Wang",
			role: "Startup Founder",
			quote: "From concept to launch in 2 weeks - it's incredible. The team's expertise is unmatched.",
			rating: 5,
		},
		{
			name: "James Wilson",
			role: "CTO",
			quote: "Launchpad Labs exceeded our expectations. The MVP quality is production-ready and scalable.",
			rating: 5,
		},
		{
			name: "Anna Martinez",
			role: "Co-Founder",
			quote: "Best investment we made for our startup. The MVP is exactly what we envisioned and more.",
			rating: 5,
		},
	];

	const activeVideo = videoTestimonials[activeVideoIndex];

	return (
		<section className="w-full bg-white py-12 sm:py-16 lg:py-20">
			<div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
					{/* Left Column - Video Testimonial */}
					<div className="flex flex-col">
						<h2 className="text-[#202020] text-2xl sm:text-[28px] lg:text-[32px] font-bold leading-tight mb-6">
							What Founders Are Saying About LaunchPad Labs
						</h2>

						{/* Video Card */}
						<div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#E6F3FF] to-[#BDDEFF] aspect-video mb-4 flex items-center justify-center shadow-lg">
							{/* Play Button */}
							<button
								type="button"
								className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-primary/90 hover:bg-primary transition-colors flex items-center justify-center shadow-lg group"
								aria-label="Play video testimonial"
							>
								<svg
									width="32"
									height="32"
									viewBox="0 0 32 32"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="text-white ml-1"
								>
									<path
										d="M12 8L24 16L12 24V8Z"
										fill="currentColor"
									/>
								</svg>
							</button>

							{/* Founder Info Overlay */}
							<div className="absolute bottom-4 left-4 text-white">
								<div className="flex items-center gap-2 mb-1">
									<span className="font-bold text-base sm:text-lg">
										{activeVideo.name}
									</span>
									<svg
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle cx="8" cy="8" r="7" fill="#0764DA" />
										<path
											d="M5 8L7 10L11 6"
											stroke="white"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
								<p className="text-sm text-white/90">{activeVideo.role}</p>
							</div>
						</div>

						{/* Pagination Dots */}
						<div className="flex items-center gap-2 justify-center lg:justify-start">
							{videoTestimonials.map((_, index) => (
								<button
									key={index}
									type="button"
									onClick={() => setActiveVideoIndex(index)}
									className={`w-2 h-2 rounded-full transition-all ${
										index === activeVideoIndex
											? "bg-primary w-8"
											: "bg-primary/30"
									}`}
									aria-label={`Go to testimonial ${index + 1}`}
								/>
							))}
						</div>
					</div>

					{/* Right Column - Text Testimonials */}
					<div className="flex flex-col">
						{/* Filter Tag */}
						<div className="mb-6">
							<div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-[#E6F3FF] px-4 py-2">
								<div className="w-2 h-2 rounded-full bg-primary"></div>
								<span className="text-primary text-sm font-medium">Testimonials</span>
							</div>
						</div>

						{/* Testimonial Cards Stack */}
						<div className="relative max-h-[600px] overflow-y-auto pr-2">
							<div className="space-y-4">
								{textTestimonials.map((testimonial, index) => (
									<div
										key={index}
										className="relative rounded-2xl bg-white border border-dashed border-gray-300 p-5 shadow-[0_2px_10px_0_rgba(0,0,0,0.05)] hover:shadow-[0_4px_15px_0_rgba(0,0,0,0.1)] transition-shadow"
									>
										{/* Profile Picture Placeholder */}
										<div className="flex items-start gap-4">
											<div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0"></div>

											<div className="flex-1">
												{/* Name and Role */}
												<div className="flex items-center gap-2 mb-2">
													<span className="text-[#404040] font-bold text-sm sm:text-base">
														{testimonial.name}
													</span>
													<svg
														width="14"
														height="14"
														viewBox="0 0 14 14"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<circle cx="7" cy="7" r="6.5" fill="#0764DA" />
														<path
															d="M4 7L6 9L10 5"
															stroke="white"
															strokeWidth="1.2"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</div>
												<p className="text-[#666666] text-xs sm:text-sm mb-3">
													{testimonial.role}
												</p>

												{/* Quote */}
												<p className="text-[#525252] text-sm sm:text-base italic mb-4 leading-relaxed">
													"{testimonial.quote}"
												</p>

												{/* Star Rating */}
												<div className="flex items-center gap-1">
													{[...Array(testimonial.rating)].map((_, i) => (
														<svg
															key={i}
															width="16"
															height="16"
															viewBox="0 0 16 16"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M8 0L10.163 5.52786L16 6.11593L11.8541 9.97214L13.0536 16L8 12.5279L2.94641 16L4.1459 9.97214L0 6.11593L5.83697 5.52786L8 0Z"
																fill="#FFD700"
															/>
														</svg>
													))}
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

