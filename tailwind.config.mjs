/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {

		extend: {
			fontFamily: { 
				"readex": ['Readex Pro Variable', 'sans-serif'],
				"roboto": ['Roboto', 'sans-serif']
			} 
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#FF69B4",
        },
      },
			{
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#FF8AC5",
        },
      },
    ],
  },
}