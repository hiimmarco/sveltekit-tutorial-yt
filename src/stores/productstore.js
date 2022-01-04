import { writable } from 'svelte/store';

export const products = writable([]);

export const fetchPokemon = async () => {
	const url = `https://pokeapi.co/api/v2/pokemon?limit=50`;
	const res = await fetch(url);
	const data = await res.json();
	const loadedPokemon = data.results.map((data, index) => ({
		name: data.name,
		id: index + 1,
		image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
			index + 1
		}.png`
	}));
	products.set(loadedPokemon);
};
fetchPokemon();

/* const products = [
	{
		id: 1,
		title: 'Paradeiser',
		price: 23
	},
	{
		id: 2,
		title: 'Käse',
		price: 34
	},
	{
		id: 3,
		title: 'Wurst',
		price: 59
	},
	{
		id: 4,
		title: 'Gurkerl',
		price: 25
	},
	{
		id: 5,
		title: 'Brot',
		price: 12
	}
];

export default products; */
