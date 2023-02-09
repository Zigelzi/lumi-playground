<script>
	import { onDestroy } from 'svelte';
	import { ExerciseStore } from '../stores/ExerciseStore';
	import Exercise from '../components/Exercise.svelte';
	let workout = [];
	let exercises = [];
	let selectedExercise = exercises[0];

	const exerciseUnsub = ExerciseStore.subscribe((data) => {
		exercises = data;
	});

	function postWorkout() {
		workout.push(selectedExercise);
	}

	onDestroy(() => {
		exerciseUnsub();
	});
</script>

<div class="">
	<form action="post" on:submit|preventDefault={postWorkout} class="mb-l">
		<fieldset class="mb-l exercise-select">
			<legend class="fw-bold mb-s">Select exercise</legend>
			<ul class="exercise-list">
				{#each exercises as exercise}
					<Exercise {exercise} bind:selectedExercise />
				{/each}
			</ul>
		</fieldset>
		<button class="btn-primary ph-s pv-xs">Add exercise</button>
	</form>
</div>

<style>
	.exercise-select {
		border: none;
	}

	.exercise-list {
		list-style: none;
		max-width: 350px;
	}
</style>
