<script context="module">
	import { singleProduct, getSingleProduct, formatPrice } from '../../stores/productstore';
	export async function load(ctx) {
		let slug = ctx.params.slug;
		await getSingleProduct(slug);
		return { props: { singleProduct } };
	}
</script>

<h1>Product: {$singleProduct.title}</h1>
<p>Desription: {$singleProduct.description}</p>
<p>Price: {formatPrice($singleProduct.priceRange.minVariantPrice.amount)}</p>
<img
	src={$singleProduct.images.edges[0].node.url}
	alt={$singleProduct.images.edges[0].node.altText}
/>
