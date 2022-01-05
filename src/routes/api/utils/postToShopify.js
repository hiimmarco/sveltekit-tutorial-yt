export const postToShopify = async ({ query, variables }) => {
	try {
		const result = await fetch('https://markta-demo.myshopify.com/api/2022-01/graphql.json', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-Shopify-Storefront-Access-Token': '1c1d8c7a8dfe2682debd990d15549ffc'
			},
			body: JSON.stringify({ query, variables })
		}).then((res) => res.json());
		if (result.errors) {
			console.log({ errors: result.errors });
		} else if (!result || !result.data) {
			console.log({ result });
			return 'No results found.';
		}
		return result.data;
	} catch (error) {
		console.log(error);
	}
};
