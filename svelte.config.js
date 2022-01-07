import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */

const config = {
	kit: {
		adapter: adapter(),

		// ... truncated ...

		target: '#svelte',
		ssr: true,
		trailingSlash: 'always',
		vite: () => ({})
	}
};

export default config;
