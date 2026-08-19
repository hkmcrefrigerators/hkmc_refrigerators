// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const BRAND_NAME = 'HKMC Refrigerators';
export const CITY = 'Namma Bangalore';
// "Namma Bangalore" is a colloquial nickname, not a valid postal locality — use this
// instead of CITY in structured data (schema.org addressLocality / areaServed) so
// search engines get a real place name. Keep CITY for all visible marketing copy.
export const CITY_FORMAL = 'Bangalore';

export const SITE_TITLE = 'HKMC Refrigerators | AC, Fridge & Appliance Repair in Bangalore';
export const SITE_DESCRIPTION =
	'Same-day AC, refrigerator, washing machine, microwave, dishwasher and commercial refrigeration repair in Bangalore. Verified technicians, genuine parts, 30-day service warranty. Book online or call now.';

export const PHONE_DISPLAY = '+91 70199 73918';
export const PHONE_HREF = 'tel:+917019973918';
export const CONTACT_EMAIL = 'hkmcrefrigerators@gmail.com';

// Single source of truth for business hours — used in visible copy (SERVICE_HOURS)
// and in the LocalBusiness schema (OPENING_HOURS). Keep these in sync.
export const SERVICE_HOURS = 'Mon – Sun, 8:00 AM – 9:00 PM';
export const OPENING_HOURS = { opens: '08:00', closes: '21:00' };
