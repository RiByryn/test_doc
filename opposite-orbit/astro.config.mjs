// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://ribyryn.github.io/test_doc',
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'test_doc/guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'test_doc/reference' },
				},
			],
		}),
	],
});
