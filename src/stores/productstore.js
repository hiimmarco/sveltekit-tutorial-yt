import { writable } from 'svelte/store';
import { postToShopify } from '../routes/api/utils/postToShopify';

export const products = writable([]);
export const singleProduct = writable([]);

export const getProducts = async () => {
	try {
		const shopifyResponse = await postToShopify({
			query: `{
				products (first: 10) {
					edges {
						node {
							id
							title
							handle
							description
							priceRange {
								minVariantPrice {
									amount
								}
							}
							images (first: 1) {
								edges {
									node{
										url
									}
								}

							}
							}
						}
					}
				}`
		});
		products.set(shopifyResponse.products.edges);
		return shopifyResponse;
	} catch (error) {
		console.log(error);
	}
};
