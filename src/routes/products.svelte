<script>
	import { products } from '../stores/productstore';
	import Productcard from '../components/productcard.svelte';
</script>

<svelte:head><title>Liste mit Produkten</title></svelte:head>
<h1 class="text-4xl text-center my-8 uppercase">Markta Products</h1>
<p class="max-w-2xl text-center mx-auto">
	Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
	labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
	dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
	amet. Lorem ipsum dolor sit amet
</p>
<div class="py-4 grid gap-4 md:grid-cols-4 grid-cols-2">
	{#each $products as product}
		<Productcard {product} />
	{/each}
</div>
