import HeroSection from "../components/sections/HeroSection";
import TrustedBySection from "../components/sections/TrustedBySection";
import OurWorkSection from "../components/sections/OurWorkSection";
import OurImpactSection from "../components/sections/OurImpactSection";
import FAQSection from "../components/sections/FAQSection";
import CTABannerSection from "../components/sections/CTABannerSection";

export default function Home() {
	return (
		<main className="flex min-h-screen w-full flex-col">
			<HeroSection />
			<TrustedBySection />
			<OurWorkSection />
			<OurImpactSection />
			<FAQSection />
			<CTABannerSection />
		</main>
	);
}
