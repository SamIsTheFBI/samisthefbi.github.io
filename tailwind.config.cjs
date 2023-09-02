/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				jost: ["Jost", "sans-serif"],
			},
			backgroundImage: {
				'hero-bg': "url('/src/assets/blue-purple-1.svg')",
			},
			backdropBlur: {
        xs: '2px',
      },
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
