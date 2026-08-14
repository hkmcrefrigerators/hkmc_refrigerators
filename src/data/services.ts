// Service catalogue used across the homepage (booking grid, common-problems section)
// and as the source of truth for future /services/[slug] pages.

export interface ServiceCategory {
	slug: string;
	name: string;
	shortName: string;
	description: string;
	/** Root-relative URL, e.g. "/ac.png" for a file at public/ac.png — no "/public" prefix; Astro serves public/ contents from the site root. */
	image: string;
	visitFee: string;
	problems: string[];
}

export const serviceCategories: ServiceCategory[] = [
	{
		slug: 'ac-repair',
		name: 'AC Repair & Service',
		shortName: 'AC',
		description: 'Split, window & inverter AC — installation, gas refill, general service and repair.',
		image: '/ac.png',
		visitFee: 'Visit from ₹299',
		problems: [
			'AC not cooling',
			'Water leaking from AC',
			'Gas leak',
			'AC making noise',
			'Ice formation on unit',
			'Remote not working',
		],
	},
	{
		slug: 'refrigerator-repair',
		name: 'Refrigerator Repair',
		shortName: 'Fridge',
		description: 'Single, double & side-by-side door fridges — cooling issues, gas charging, compressor repair.',
		image:
			'/fridge.png',
		visitFee: 'Visit from ₹299',
		problems: [
			'Fridge not cooling',
			'Freezer fine, fridge warm',
			'Compressor noise',
			'Water leaking inside',
			'Ice build-up in freezer',
			'Door not sealing',
		],
	},
	{
		slug: 'washing-machine-repair',
		name: 'Washing Machine Repair',
		shortName: 'Washing Machine',
		description: 'Front load, top load & semi-automatic — spin, drainage, motor and PCB issues.',
		image:
			'/washing-machine.png',
		visitFee: 'Visit from ₹299',
		problems: [
			'Not spinning',
			'Not draining water',
			'Water leakage',
			'Excess noise or vibration',
			'Door won’t lock',
			'Error code on display',
		],
	},
	{
		slug: 'microwave-repair',
		name: 'Microwave Repair',
		shortName: 'Microwave',
		description: 'Solo, grill & convection microwaves — heating faults, sparking, display and door issues.',
		image:
			'/oven.png',
		visitFee: 'Visit from ₹299',
		problems: [
			'Not heating',
			'Turntable not rotating',
			'Sparking inside',
			'Touchpad not responding',
			'Door not closing',
			'Display not working',
		],
	},
	{
		slug: 'dishwasher-repair',
		name: 'Dishwasher Repair',
		shortName: 'Dishwasher',
		description: 'Free-standing, built-in & countertop dishwashers — installation, descaling, repair.',
		image:
			'/dishwasher.png',
		visitFee: 'Visit from ₹299',
		problems: [
			'Not draining',
			'Dishes not cleaning',
			'Not filling with water',
			'Door leaking',
			'Bad smell',
			'Error code (E15/E24)',
		],
	},
	{
		slug: 'commercial-refrigeration-hvac',
		name: 'Commercial Refrigeration & HVAC',
		shortName: 'Commercial & HVAC',
		description:
			'Deep freezers, visi coolers, cold rooms, ductable & VRF AC — for restaurants, cafes, hospitals & offices.',
		image:
			'/hv-ac.png',
		visitFee: 'Visit from ₹499',
		problems: [
			'Deep freezer not cooling',
			'Visi cooler / display chiller fault',
			'Ductable AC not cooling',
			'Cold room temperature drift',
			'Ice machine not making ice',
			'AMC & preventive maintenance',
		],
	},
	{
		slug: 'water-purifier-repair',
		name: 'Water Purifier Repair',
		shortName: 'Water Purifier',
		description: 'RO, UV & UF purifiers — filter change, motor repair, leakage fix and installation.',
		// TODO: placeholder image reused from an existing category — replace with a real water purifier photo.
		image: '/water_purifier.png',
		visitFee: 'Visit from ₹299',
		problems: [
			'Low water output',
			'Water leakage',
			'Bad taste or odor',
			'Motor not working',
			'Filter change due',
			'RO not purifying',
		],
	},
	{
		slug: 'water-geyser-repair',
		name: 'Water Geyser Repair',
		shortName: 'Water Geyser',
		description: 'Instant & storage geysers — heating element, thermostat, tank and installation issues.',
		// TODO: placeholder image reused from an existing category — replace with a real geyser photo.
		image: '/water_heater.png',
		visitFee: 'Visit from ₹299',
		problems: [
			'Not heating water',
			'Water too hot',
			'Leaking tank',
			'Tripping MCB',
			'Strange noise',
			'Installation & uninstallation',
		],
	},
];

export function getService(slug: string): ServiceCategory | undefined {
	return serviceCategories.find((service) => service.slug === slug);
}

// A handful of problem-keywords already have a dedicated blog post — link straight to it
// instead of the generic booking anchor, so both users and crawlers land on real answer content.
export const problemLinks: Record<string, string> = {
	'AC not cooling': '/blog/ac-not-cooling-common-causes',
	'Gas leak': '/blog/ac-gas-refill-how-often',
	'Fridge not cooling': '/blog/fridge-not-cooling-freezer-fine',
	'Freezer fine, fridge warm': '/blog/fridge-not-cooling-freezer-fine',
	'Not draining water': '/blog/washing-machine-not-draining-fixes',
};
