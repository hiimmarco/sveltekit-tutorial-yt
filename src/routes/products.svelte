<script>
	import { products } from '../stores/productstore';
</script>

<svelte:head><title>Liste mit Produkten</title></svelte:head>
<h1>Markta Products</h1>
<p>
	Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
	labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
	dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
	amet. Lorem ipsum dolor sit amet
</p>
<ul>
	{#each $products as product}
		<ul>{product.name}</ul>
	{/each}
</ul>
