import LaunchPadProcessSection from "../../components/sections/LaunchPadProcessSection";

export const metadata = {
	title: "Our Process",
	description: "A detailed look at our sprint-based process for MVPs.",
};

export default function OurProcessPage() {
	return (
		<main className="flex w-full flex-col">
			<LaunchPadProcessSection />
		</main>
	);
}


