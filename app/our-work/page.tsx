import CaseStudyCard from "../../components/cards/CaseStudyCard";

export const metadata = {
	title: "Our Work",
	description: "Case studies of MVPs shipped in weeks.",
};

export default function OurWorkPage() {
	const items = [
		{ title: "BillFlow", description: "Billing made simple for SaaS.", tags: ["Next.js", "Stripe", "Postgres"], link: "/" },
		{ title: "FitAI", description: "AI trainer in your pocket.", tags: ["Expo", "Supabase", "OpenAI"], link: "/" },
		{ title: "FinSub", description: "Subscriptions done right.", tags: ["Remix", "Prisma"], link: "/" },
	];

return (
	<main className="bg-[#F3F7F8] px-4 py-16">
		<div className="mx-auto max-w-5xl">
			<h1 className="text-4xl font-bold text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-10">Our Work</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{items.map((c, i) => (
					<CaseStudyCard key={i} title={c.title} description={c.description} tags={c.tags} link={c.link} />
				))}
			</div>
		</div>
	</main>
);
}


