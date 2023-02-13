<script>
	import { onDestroy } from 'svelte';
	import { ExerciseStore } from '../stores/ExerciseStore';
	import Exercise from '../components/Exercise.svelte';

	let workout = [];
	let exercises = [];
	let selectedExerciseId;
	let selectedExercise;
	let currentStep = 0;

	const exerciseUnsub = ExerciseStore.subscribe((data) => {
		exercises = data;
		selectedExerciseId = exercises[0].id;
	});

	function selectExercise() {
		selectedExercise = exercises.find((exercise) => exercise.id === selectedExerciseId);
		currentStep = 1;
	}

	function postWorkout() {
		workout.push(selectedExerciseId);
	}

	function nameToLowercase(name) {
		name = name.toLowerCase(name);
		name = name.replace(' ', '_');
		return name;
	}

	onDestroy(() => {
		exerciseUnsub();
	});
</script>

<div class="">
	<form class="mb-l">
		{#if currentStep === 0}
			<fieldset class="mb-l exercise-select">
				<legend class="fw-bold mb-s">Select exercise</legend>
				<ul class="exercise-list">
					{#each exercises as exercise}
						<Exercise {exercise} bind:selectedExerciseId />
					{/each}
				</ul>
			</fieldset>
			<button class="btn-primary ph-s pv-xs" on:click={selectExercise}>Select exercise</button>
		{:else if currentStep === 1}
			<div>
				<h2>Enter values for {selectedExercise.name}</h2>
				<label for={nameToLowercase(selectedExercise.name)}>
					Sets
					<input
						type="number"
						name="{nameToLowercase(selectedExercise.name)}-sets"
						id="{nameToLowercase(selectedExercise.name)}-sets"
						value={selectedExercise.sets}
					/>
				</label>
				<label for={nameToLowercase(selectedExercise.name)}>
					Reps
					<input
						type="number"
						name="{nameToLowercase(selectedExercise.name)}-reps"
						id="{nameToLowercase(selectedExercise.name)}-reps"
						value={selectedExercise.reps}
					/>
				</label>
				<label for={nameToLowercase(selectedExercise.name)}>
					Weight
					<input
						type="number"
						name="{nameToLowercase(selectedExercise.name)}-weight"
						id="{nameToLowercase(selectedExercise.name)}-weight"
						value={selectedExercise.weight}
					/>
				</label>
			</div>
		{/if}
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
