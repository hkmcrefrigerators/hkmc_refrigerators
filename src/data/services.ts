// Service catalogue used across the homepage (booking grid, common-problems section)
// and as the source of truth for future /services/[slug] pages.

export interface ServiceCategory {
	slug: string;
	name: string;
	shortName: string;
	description: string;
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
		image: '/public/ac.png',
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
			'/public/fridge.png',
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
			'/public/washing-machine.png',
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
			'/public/oven.png',
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
			'/public/dishwasher.png',
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
			'/public/hv-ac.png',
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
];
