import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */

const config = {
	kit: {
		adapter: adapter(),

		// ... truncated ...

		target: '#svelte'
	}
};

export default config;
