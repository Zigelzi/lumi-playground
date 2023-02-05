<script>
	import { onDestroy } from 'svelte';
	import { WorkoutStore } from './stores/WorkoutStore';

	let workouts = [];
	const workoutStoreUnsub = WorkoutStore.subscribe((data) => {
		workouts = data;
	});

	function addWorkout() {
		WorkoutStore.addWorkoutToStore({
			name: 'Test2'
		});
	}

	onDestroy(() => {
		workoutStoreUnsub();
	});
</script>

<section>
	<div class="container mv-l">
		<h2 class="heading-m text-center">Ärjy</h2>
		<p class="text-center">Create gym program that leads to results</p>
		<button on:click={addWorkout}>Add workout</button>
		{#each workouts as wo}
			{wo.name}
		{/each}
	</div>
</section>
