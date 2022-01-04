<script>
	import { products } from '../stores/productstore';
</script>

<svelte:head><title>Liste mit Produkten</title></svelte:head>
<h1 class="text-4xl text-center my-8 uppercase">Markta Products</h1>
<p class="max-w-2xl text-center mx-auto">
	Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
	labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
	dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
	amet. Lorem ipsum dolor sit amet
</p>
<ul>
	{#each $products as product}
		<ul class="ml-8 mt-8">{product.name}</ul>
	{/each}
</ul>
