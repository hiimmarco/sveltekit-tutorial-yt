<script>
	export let product;
</script>

<a
	class="list-none p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
	href="https://www.google.at"
	alt="${product.name}"
>
	<img src={product.image} alt={product.name} />
	<h2 class="uppercase text-lg">{product.name}</h2>
</a>
