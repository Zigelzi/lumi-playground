import { writable } from 'svelte/store';
import { fetchExercises, fetchExercisesForCategory } from '$lib/backend/Api';

function createExerciseStore() {
	const { subscribe, set, update } = writable(fetchExercises());

	const getExercisesForCategory = function (categoryId) {
		console.log('Fetching exercises for category:' + categoryId);
		return fetchExercisesForCategory(categoryId);
	};

	return {
		subscribe,
		update,
		getExercisesForCategory
	};
}

export const ExerciseStore = createExerciseStore();
