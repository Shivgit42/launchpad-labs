interface GradientBlurProps {
	position?: "left" | "right";
	idPrefix?: string;
	className?: string;
}

export default function GradientBlur({ position = "left", idPrefix = "gradient", className = "" }: GradientBlurProps) {
	const filterId = `filter0_f_${idPrefix}`;
	const gradientId = `paint0_linear_${idPrefix}`;
	
	// Flip gradient direction for right side
	const gradientX1 = position === "left" ? "181.049" : "282.489";
	const gradientX2 = position === "left" ? "282.489" : "181.049";

	return (
		<svg 
			width="301" 
			height="233" 
			viewBox="0 0 301 233" 
			fill="none" 
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			aria-hidden="true"
		>
			<g filter={`url(#${filterId})`}>
				<ellipse cx="150.5" cy="116.5" rx="124.5" ry="90.5" fill={`url(#${gradientId})`} />
			</g>
			<defs>
				<filter id={filterId} x="0" y="0" width="301" height="233" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur stdDeviation="13" result="effect1_foregroundBlur" />
				</filter>
				<linearGradient id={gradientId} x1={gradientX1} y1="130" x2={gradientX2} y2="131.329" gradientUnits="userSpaceOnUse">
					<stop stopColor="#F3F7F8" />
					<stop offset="1" stopColor="#F3F7F8" stopOpacity="0" />
				</linearGradient>
			</defs>
		</svg>
	);
}

