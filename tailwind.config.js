// tailwind.config.js
module.exports = {
	content: [
		"node_modules/preline/dist/*.js",
		"./index.html",
		"./app/**/*.html",
	],

	plugins: [require("@tailwindcss/forms"), require("preline/plugin")],
};