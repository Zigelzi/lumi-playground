import { writable } from 'svelte/store';
import { fetchCategories } from '$lib/backend/Api';

function createCategoryStore() {
	const { subscribe, set, update } = writable(fetchCategories());

	return {
		subscribe,
		update
	};
}

export const CategoryStore = createCategoryStore();
