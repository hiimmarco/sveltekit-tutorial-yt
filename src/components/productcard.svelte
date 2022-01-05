<script>
	export let product;
</script>

<a
	class="list-none p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
	href={product.node.handle}
	alt="${product.title}"
>
	<h2 class="uppercase text-lg">{product.node.title}</h2>
	<p>{product.node.description}</p>
</a>
