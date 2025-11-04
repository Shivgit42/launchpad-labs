import ProcessSection from "../../components/sections/ProcessSection";

export const metadata = {
	title: "Our Process",
	description: "A detailed look at our sprint-based process for MVPs.",
};

export default function OurProcessPage() {
	return (
		<main className="flex w-full flex-col">
			<ProcessSection />
		</main>
	);
}


