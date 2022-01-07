<script>
	export let product;
</script>

<a
	class="list-none p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
	href="/p/{product.node.handle}"
	alt="${product.title}"
>
	<img
		src={product.node.images.edges[0].node.url}
		alt="Bud Spencer eating"
		width="995"
		height="562"
	/>
	<h2 class="uppercase text-lg">{product.node.title}</h2>
	<p>{product.node.description}</p>
	<p>{product.node.priceRange.minVariantPrice.amount}</p>
</a>
