import adapter from '@sveltejs/adapter-cloudflare';

export default {
	kit: {
		target: '#svelte',
		adapter: adapter()
	}
};
