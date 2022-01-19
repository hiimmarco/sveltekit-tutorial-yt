<script>
	import { formatPrice } from '../stores/productstore';
	export let product;
</script>

<div
	class="list-none border-solid border-2 border-red-800 text-gray-800 text-left rounded-md flex flex-col items-start"
>
	<a href="/p/{product.node.handle}" alt="${product.title}">
		<img
			src={product.node.images.edges[0].node.url}
			alt={product.node.images.edges[0].node.altText}
			class="mb-4 rounded-xl"
		/>
		<h2 class="text-lg font-bold">{product.node.title}</h2>
	</a>
	<div class="flex flex-row mt-2">
		<p class="font-medium text-lg">
			{formatPrice(product.node.priceRange.minVariantPrice.amount)}
		</p>
		<button class="bg-green-700 text-white px-4 py-2 rounded-full mt-4">+</button>
	</div>
</div>
