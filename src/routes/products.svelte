<script context="module">
	import Productcard from '../components/productcard.svelte';

	import { products, getProducts } from '../stores/productstore';
	export async function load(ctx) {
		await getProducts();
		return { props: { products } };
	}
</script>

<svelte:head><title>Gutes aus deiner Nähe</title></svelte:head>
<h1 class="text-4xl text-center mt-8 mb-4 font-semibold">Gutes aus deiner Nähe</h1>
<p class="max-w-2xl text-center mx-auto mb-6">
	Über 1.000 regionale Produkte von Kleinbetrieben direkt zu dir nach Hause
</p>
<div class="py-8 grid gap-8 md:grid-cols-4 grid-cols-2">
	{#each $products as product}
		<Productcard {product} />
	{/each}
</div>
