import PricingSection from "../../components/sections/PricingSection";

export const metadata = {
	title: "Pricing",
	description: "Transparent pricing for building and launching your MVP fast.",
};

export default function PricingPage() {
	return (
		<main className="flex w-full flex-col">
			<PricingSection />
		</main>
	);
}


