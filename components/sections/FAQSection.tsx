"use client";

import { useState } from "react";

interface FAQItemProps {
	question: string;
	answer?: string;
	isOpen: boolean;
	onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
	return (
		<div className={`rounded-[17px] bg-white shadow-[0_2px_11px_0_rgba(0,0,0,0.06)] transition-all ${isOpen ? 'h-auto' : 'h-[83px]'}`}>
			<button onClick={onToggle} className="w-full flex items-center justify-between px-[25px] py-[26px] text-left">
				<span className="text-[#404040] text-[16px] font-bold leading-[31px] pr-4">{question}</span>
				{isOpen ? (
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
						<path fillRule="evenodd" clipRule="evenodd" d="M3.54166 10C3.54166 9.83424 3.6075 9.67527 3.72471 9.55806C3.84192 9.44085 4.0009 9.375 4.16666 9.375H15.8333C15.9991 9.375 16.1581 9.44085 16.2753 9.55806C16.3925 9.67527 16.4583 9.83424 16.4583 10C16.4583 10.1658 16.3925 10.3247 16.2753 10.4419C16.1581 10.5592 15.9991 10.625 15.8333 10.625H4.16666C4.0009 10.625 3.84192 10.5592 3.72471 10.4419C3.6075 10.3247 3.54166 10.1658 3.54166 10Z" fill="black"/>
					</svg>
				) : (
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
						<path d="M10 15.625V4.375M4.375 10H15.625" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
				)}
			</button>
			{isOpen && answer && (
				<div className="px-[25px] pb-[26px]">
					<div className="rounded-[10px] border border-dashed border-[#E3E3E3] px-[18px] py-[14px]">
						<p className="text-[#474545] text-[14px] font-normal leading-[28px]">{answer}</p>
					</div>
				</div>
			)}
		</div>
	);
}

export default function FAQSection() {
	const [openIndex, setOpenIndex] = useState<number>(0);

	const faqs = [
		{ question: "How long does it take to launch my MVP with LaunchPad Labs?", answer: "We specialize in speed. Most MVPs are launched in as little as 2–4 weeks, depending on complexity." },
		{ question: "What exactly is included in the MVP package?", answer: "" },
		{ question: "Do I need to have all my ideas finalized before starting?", answer: "" },
		{ question: "How involved will I be during the development process?", answer: "" },
		{ question: "Can I scale my MVP into a full product later?", answer: "" },
	];

	return (
		<section id="faq" className="w-full bg-[#F3F7F8] py-12 sm:py-16 lg:py-20">
			<div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
					<div className="lg:col-span-7">
						<div className="inline-flex items-center justify-center px-4 py-1 rounded-[31px] border border-[#CEE3FF] bg-[#F2F2F2] mb-6">
							<div className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 gap-3">
								<div className="relative w-[18px] h-[18px]">
									<div className="absolute inset-0 rounded-full bg-primary opacity-20"></div>
									<div className="absolute inset-[3px] rounded-full bg-primary opacity-32"></div>
									<div className="absolute inset-[5px] rounded-full bg-primary opacity-66"></div>
								</div>
								<span className="text-black text-[14px] font-medium">FAQ</span>
							</div>
						</div>

						<h1 className="text-[#202020] text-[24px] sm:text-[28px] font-bold leading-[31px] mb-3">Got Questions? We've Got Answers</h1>
						<p className="text-[#525252] text-[16px] font-normal leading-[31px] mb-8">Simple explanations for your most important questions</p>

						<div className="flex flex-col gap-4">
							{faqs.map((faq, index) => (
								<FAQItem
									key={index}
									question={faq.question}
									answer={faq.answer}
									isOpen={openIndex === index}
									onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
								/>
							))}
						</div>
					</div>

					<div className="lg:col-span-5 flex items-start justify-center lg:justify-end">
						<div className="w-full max-w-[373px] rounded-[17px] bg-white shadow-[0_2px_11px_0_rgba(0,0,0,0.06)] p-8 sm:p-12">
							<p className="text-[#8C8C8C] text-[18px] font-bold mb-2">Still not sure?</p>
							<h3 className="text-black text-[20px] font-bold mb-4">Book a free call.</h3>
							<p className="text-black text-[14px] font-normal leading-[20px] mb-6">Learn more about how we work and how we can help you and your startup.</p>
							<a href="#book" className="inline-flex items-center justify-center gap-2 rounded-[31px] border-2 border-secondary/60 bg-primary shadow-[0_46px_13px_0_rgba(30,113,229,0.00),0_30px_12px_0_rgba(30,113,229,0.02),0_17px_10px_0_rgba(30,113,229,0.08),0_7px_7px_0_rgba(30,113,229,0.13),0_2px_4px_0_rgba(30,113,229,0.15)] px-8 h-[48px] text-white text-[15px] font-bold hover:bg-primary/90 transition-colors">Book A Call</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}


