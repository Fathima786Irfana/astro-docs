// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://fathima786irfana.github.io',
  	base: '/astro-docs',
	markdown: {
		shikiConfig: {
		  theme: "github-dark",
		  wrap: true,
		},
	  },
	integrations: [
		starlight({
			title: 'LENS Docs',
			logo: {
				light: "./src/assets/lmnaslogo.png",
				dark: "./src/assets/lmnaswhite.png",
				replacesTitle: true,
			  },
			social: {
				youtube: "https://www.youtube.com/channel/UCq5S8zxFv7e0bd23nq_hpWg",
        		github: "https://github.com/lmnaslimited",
        		"x.com": "https://x.com/lmnaslimited",
			},
			sidebar: [
				{
					label: "Getting Started",
					link: "introduction",
				  },
				{
					label: "Installation",
					items: [
					  {
						label: "Codespaces",
						link: "installation/codespaces",
					  },
					],
				  },
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
