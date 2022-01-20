<script>
	import { formatPrice } from '../stores/productstore';
	export let product;
</script>

<div class="list-none  text-gray-800 text-left rounded-md flex flex-col items-start">
	<a href="/p/{product.node.handle}" alt="${product.title}">
		<figure class="w-70">
			<img
				src={product.node.images.edges[0].node.url}
				alt={product.node.images.edges[0].node.altText}
				class="mb-4 rounded-xl"
			/>
		</figure>
		<h2 class="text-xl font-semibold">{product.node.title}</h2>
	</a>
	<div class="flex flex-row align-center">
		<p class="text-sm text-gray-500 text-center">
			{product.node.variants.edges[0].node.weight}
			{product.node.variants.edges[0].node.weightUnit}
			<span class="text-xl">•</span>
			{product.node.vendor}
		</p>
	</div>
	<div class="flex flex-row w-full mt-2 justify-between">
		<p class="font-regular text-xl vertical-middle my-auto">
			{formatPrice(product.node.priceRange.minVariantPrice.amount)}
		</p>
		<button
			class="bg-green-500 border-2 border-green-700 text-white text-lg px-3 py-0.5  rounded-lg flex flex-row"
			>+<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5 my-auto ml-2"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
				/>
			</svg></button
		>
	</div>
</div>
