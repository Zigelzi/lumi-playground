import { writable } from 'svelte/store';
import { fetchWorkouts, addWorkout } from '$lib/backend/Api';

function createWorkoutStore() {
	const { subscribe, set, update } = writable(fetchWorkouts());

	const addWorkoutToStore = function (workout) {
		update((existingWorkouts) => {
			const updatedWorkouts = addWorkout(workout);
			existingWorkouts = updatedWorkouts;
			return existingWorkouts;
		});
	};

	return {
		subscribe,
		update,
		addWorkoutToStore
	};
}

export const WorkoutStore = createWorkoutStore();
