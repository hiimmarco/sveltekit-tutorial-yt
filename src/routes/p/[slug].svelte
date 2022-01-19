<script context="module">
	import { singleProduct, getSingleProduct, formatPrice } from '../../stores/productstore';
	export async function load(ctx) {
		let slug = ctx.params.slug;
		await getSingleProduct(slug);
		return { props: { singleProduct } };
	}
</script>

<div class="flex flex-row mt-16 p-8 max-w-4xl mx-auto">
	<div class="max-w-sm mt-4 mr-8">
		<h2 class="text-xl font-bold mb-4">Product: {$singleProduct.title}</h2>
		<p class="mb-4">Desription: {$singleProduct.description}</p>
		<p class="font-bold mb-4">
			Price: {formatPrice($singleProduct.priceRange.minVariantPrice.amount)}
		</p>
		<button class="bg-green-700 text-white px-4 py-2 rounded-md">Zum Warenkorb</button>
	</div>
	<div class="max-w-sm">
		<img
			src={$singleProduct.images.edges[0].node.url}
			alt={$singleProduct.images.edges[0].node.altText}
		/>
	</div>
</div>
