import FounderSection from "../../components/sections/FounderSection";

export const metadata = {
	title: "Founder",
	description: "Meet the founder and the story behind LaunchPad Labs.",
};

export default function FounderPage() {
	return (
		<main className="flex w-full flex-col">
			<FounderSection />
		</main>
	);
}


