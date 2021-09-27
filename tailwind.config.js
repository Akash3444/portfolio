const colors = require("tailwindcss/colors");

module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	mode: "jit",
	darkMode: "class",
	theme: {
		colors: {
			...colors,
		},
		extend: {
			colors: {
				primary: "#068950",
				secondary: "#002D00",
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				inter: ["Inter", "sans-serif"],
				mono: ["Roboto Mono", "monospace"],
				space: ["Space Grotesk", "sans-serif"],
			},
		},
	},
	variants: {},
	plugins: [
		require("@tailwindcss/aspect-ratio"),
		require("@tailwindcss/line-clamp"),
	],
};
