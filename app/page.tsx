import HeroSection from "../components/sections/HeroSection";
import TrustedBySection from "../components/sections/TrustedBySection";
import OurWorkSection from "../components/sections/OurWorkSection";
import WhyLaunchPadSection from "../components/sections/WhyLaunchPadSection";
import ApproachComparisonSection from "../components/sections/ApproachComparisonSection";
import MVPPackageSection from "../components/sections/MVPPackageSection";
import LaunchPadProcessSection from "../components/sections/LaunchPadProcessSection";
import OurImpactSection from "../components/sections/OurImpactSection";
import TestimonialSection from "../components/sections/TestimonialSection";
import FAQSection from "../components/sections/FAQSection";
import CTABannerSection from "../components/sections/CTABannerSection";

export default function Home() {
	return (
		<main className="flex min-h-screen w-full flex-col">
			<HeroSection />
			<TrustedBySection />
			<OurImpactSection />
			<OurWorkSection />
			<WhyLaunchPadSection />
			<ApproachComparisonSection />
			{/* Anchor for how-it-works for smooth scroll */}
			<div id="how-it-works" />
			<LaunchPadProcessSection />
			<TestimonialSection />
			{/* <FAQSection /> */}
			<CTABannerSection />
		</main>
	);
}
