/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				purple: "#7D5BED",
				"purple-light": "#987EF1",
				black: "#181818",
				"black-light": "#1E1E1E",
				green: "#3B8B79",
			},
			fontFamily: {
				comforta: ["Comfortaa", "cursive"],
			},
		},
	},
	plugins: [],
};
