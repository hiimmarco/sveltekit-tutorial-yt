import cloudflare from '@sveltejs/adapter-cloudflare';

export default {
	kit: {
		target: '#svelte',
		adapter: cloudflare({
			// any esbuild options
		})
	}
};
