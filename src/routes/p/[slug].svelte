<!-- Reading slug/id and fetching respective product from store -->
<script context="module">
	import { singleProduct, getSingleProduct, formatPrice } from '../../stores/productstore';
	export async function load(ctx) {
		let slug = ctx.params.slug;
		await getSingleProduct(slug);
		return { props: { singleProduct } };
	}
</script>

<!-- create functions for increasing or decreasing quantity -->
<script>
	let quantity = 1;
	function increaseQuantity() {
		quantity += 1;
	}
	function decreaseQuantity() {
		if (quantity === 1) {
			return;
		}
		quantity -= 1;
	}
</script>

<!-- Create html elements -->
<div class="flex flex-row mt-16 p-8 max-w-4xl mx-auto">
	<div class="max-w-sm mr-10">
		<img
			src={$singleProduct.images.edges[0].node.url}
			alt={$singleProduct.images.edges[0].node.altText}
		/>
	</div>
	<div class="max-w-sm mt-4">
		<h2 class="text-xl font-bold mb-4">{$singleProduct.title}</h2>
		<p class="mb-4">{$singleProduct.description}</p>
		<p class="font-bold mb-4">
			{formatPrice($singleProduct.priceRange.minVariantPrice.amount)}
		</p>
		<div class="flex flex-row mb-4">
			<button class="px-4 py-2 bg-green-400 rounded-md mr-4" on:click={decreaseQuantity}>-</button>
			<p class="px-4 py-2 rounded-md mr-4">{quantity}</p>
			<button class="px-4 py-2 bg-green-400 rounded-md" on:click={increaseQuantity}>+</button>
		</div>

		<button class="bg-green-700 text-white px-4 py-2 rounded-md">Zum Warenkorb</button>
	</div>
</div>
