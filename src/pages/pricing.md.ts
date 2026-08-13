import type { APIRoute } from 'astro';
import { BRAND_NAME, CITY, CONTACT_EMAIL, PHONE_DISPLAY, SERVICE_HOURS } from '../consts';
import { serviceCategories } from '../data/services';

export const GET: APIRoute = ({ site }) => {
	const abs = (path: string) => new URL(path, site).toString();

	const serviceBlocks = serviceCategories
		.map(
			(s) => `## ${s.name}
- Visit fee: ${s.visitFee}
- Covers: ${s.description}
- Book: ${abs('/#book')}`,
		)
		.join('\n\n');

	const body = `# Pricing — ${BRAND_NAME}

Home appliance and commercial refrigeration/HVAC repair in ${CITY}, India. All prices in INR (₹).

## How pricing works

1. A fixed visit fee covers a technician visiting and diagnosing the appliance.
2. After diagnosis, you receive a written repair quote before any further work begins.
3. The visit fee is adjusted against the final repair cost — it is not an additional charge on top of the quote.
4. There is no fixed price list for repairs themselves, since parts and labor vary by fault and appliance model. The visit fee below is the only fixed, quotable number until diagnosis.

${serviceBlocks}

## Warranty

Every completed repair carries a 30-day service warranty covering a recurrence of the same issue. Parts supplied may carry an additional manufacturer warranty on top of this.

## Commercial / business accounts

Restaurants, cloud kitchens, cafes, hospitals, hotels and offices are served under the same visit-fee model, plus optional AMC (annual maintenance contract) plans — contact us for AMC pricing, which depends on equipment count and type.

## Contact

- Phone: ${PHONE_DISPLAY}
- Email: ${CONTACT_EMAIL}
- Hours: ${SERVICE_HOURS}

Last verified: this file is generated from the same data source as the live site — see ${abs('/')} for current copy.
`;

	return new Response(body, {
		headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
	});
};
