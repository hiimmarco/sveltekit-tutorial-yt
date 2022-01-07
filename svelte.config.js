import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */

const config = {
	kit: {
		adapter: adapter(),

		// ... truncated ...

		target: '#svelte',
		ssr: true,
		trailingSlash: 'never',
		vite: () => ({})
	}
};

export default config;
