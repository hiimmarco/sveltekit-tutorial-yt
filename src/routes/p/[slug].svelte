<script context="module">
	import { singleProduct, getSingleProduct } from '../../stores/productstore';
	export async function load(ctx) {
		let slug = ctx.params.slug;
		await getSingleProduct(slug);
		return { props: { slug, singleProduct } };
	}
</script>

<script>
	export let slug;
</script>

<!-- <script>
	export let singleProduct;
	let product = $singleProduct;
	let productImage = product.images.edges[0].node.url;
</script> -->

<!-- <main>
	<h1>Single Product</h1>
	<img src={productImage} alt="Main" />
</main> -->

<h1>Product: {$singleProduct.title}</h1>
<p>Desription: {$singleProduct.description}</p>
<p>Price: {$singleProduct.priceRange.minVariantPrice.amount}</p>
<img
	src={$singleProduct.images.edges[0].node.url}
	alt={$singleProduct.images.edges[0].node.altText}
/>
