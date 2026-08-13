import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { BRAND_NAME, CITY, PHONE_DISPLAY, SERVICE_HOURS, SITE_DESCRIPTION } from '../consts';
import { serviceCategories } from '../data/services';

export const GET: APIRoute = async ({ site }) => {
	const abs = (path: string) => new URL(path, site).toString();

	const posts = (await getCollection('blog')).sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
	);

	const serviceLines = serviceCategories
		.map((s) => `- [${s.name}](${abs('/#services')}): ${s.description}`)
		.join('\n');

	const postLines = posts
		.map((p) => `- [${p.data.title}](${abs(`/blog/${p.id}/`)}): ${p.data.description}`)
		.join('\n');

	const body = `# ${BRAND_NAME}

> ${SITE_DESCRIPTION}

${BRAND_NAME} is a home-service technician network for appliance repair in ${CITY}, India. Technicians travel to the customer's home or business — there is no showroom or walk-in location. A fixed visit fee covers diagnosis; the repair itself is quoted before work begins. Every completed repair carries a 30-day service warranty. Hours: ${SERVICE_HOURS}. Phone: ${PHONE_DISPLAY}.

## Services

${serviceLines}

Structured pricing (visit fees, warranty terms): ${abs('/pricing.md')}

## Guides

${postLines}

## Company

- [About](${abs('/about')}): Who HKMC Refrigerators is, how technicians are vetted, and how pricing and warranty claims work.
- [Blog](${abs('/blog')}): Full archive of troubleshooting guides.
- [Privacy Policy](${abs('/privacy-policy')})
- [Terms of Service](${abs('/terms-of-service')})

## Notes for AI agents

- This is a pre-launch site under active development; verify current pricing and coverage areas directly with the business before citing specific figures.
- All content on this domain is written for and by ${BRAND_NAME}; there is no separate AI-only version of any page.
`;

	return new Response(body, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
