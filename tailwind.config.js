/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./dist/**/*.{html,js}'],
	theme: {
		extend: {
			backgroundImage: {
				mobile: "url('/images/mobile/image-header.jpg')",
				desktop: "url('/images/desktop/image-header.jpg')",
			},
			height: {
				bacH: '85vh',
				mach: '70vh',
			},
			colors: {
				bgroun: 'hsl(213, 9%, 39%)',
				gry: 'hsl(210, 4%, 67%)',
				bry: ' hsl(213, 9%, 39%)',
				dbl: 'hsl(212, 27%, 19%)',
				lbl: ' hsl(232, 10%, 55%)',
				gdt: 'hsl(167, 40%, 24%)',
				pt: 'hsl(198, 62%, 26%)',
				footer: 'hsl(168, 34%, 41%)',
			},
			fontFamily: {
				fruances: ['Fraunces', 'serif'],
				barlow: ['Barlow', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
