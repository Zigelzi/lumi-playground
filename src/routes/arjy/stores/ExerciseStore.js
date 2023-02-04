import { writable } from 'svelte/store';
import { fetchExercises } from '$lib/backend/Api';

function createExerciseStore() {
	const { subscribe, set, update } = writable(fetchExercises());

	return {
		subscribe,
		update
	};
}

export const ExerciseStore = createExerciseStore();
