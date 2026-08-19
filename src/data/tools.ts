// Free calculator tools catalogue — used on the /tools hub and for cross-links
// from service pages and blog posts.

export interface Tool {
	slug: string;
	name: string;
	description: string;
}

export const tools: Tool[] = [
	{
		slug: 'ac-tonnage-calculator',
		name: 'AC Tonnage Calculator',
		description: 'Find the right AC size (1 / 1.5 / 2 ton) for your room in seconds.',
	},
	{
		slug: 'ac-running-cost-calculator',
		name: 'AC Running Cost Calculator',
		description: 'Estimate your monthly electricity bill from AC usage.',
	},
	{
		slug: 'repair-or-replace-calculator',
		name: 'Repair or Replace Calculator',
		description: "Not sure if it's worth fixing? Get a straight answer based on age and cost.",
	},
];

export function getTool(slug: string): Tool | undefined {
	return tools.find((tool) => tool.slug === slug);
}
