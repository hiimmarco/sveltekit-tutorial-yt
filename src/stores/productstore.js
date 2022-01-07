import { writable } from 'svelte/store';
import { postToShopify } from '../routes/api/utils/postToShopify';

export const products = writable([]);
export const singleProduct = writable([]);

// Get all (first 10) products
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
										altText
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

// Helper function to format price of products
export const formatPrice = (number) => {
	return Intl.NumberFormat('de-DE', {
		style: 'currency',
		currency: 'EUR',
		minimumFractionDigits: 2
	}).format(number);
};

// Get single product by handle

export const getSingleProduct = async (handle) => {
	try {
		const shopifyResponse = await postToShopify({
			query: `query SingleProduct($handle: String!) {
				product (handle: $handle) {
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
										altText
									}
								}
							}
				}
			}`,
			variables: {
				handle: handle
			}
		});
		singleProduct.set(shopifyResponse.product);
		return shopifyResponse;
	} catch (error) {
		console.log(error);
	}
};
