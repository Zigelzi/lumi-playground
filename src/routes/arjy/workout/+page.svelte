<script>
	import { onDestroy } from 'svelte';
	import { ExerciseStore } from '../stores/ExerciseStore';
	import Exercise from '../components/Exercise.svelte';
	import ExerciseControl from '../components/ExerciseControl.svelte';

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
		workout.push(selectedExercise);
		currentStep = 0;
		console.log(workout);
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
	<form class="mb-l" on:submit|preventDefault>
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
				<h2 class="heading-m">Enter values for {selectedExercise.name}</h2>
				<ExerciseControl
					type="Sets"
					exerciseName={nameToLowercase(selectedExercise.name)}
					exerciseValue={selectedExercise.sets}
				/>
				<ExerciseControl
					type="Reps"
					exerciseName={nameToLowercase(selectedExercise.name)}
					exerciseValue={selectedExercise.reps}
				/>
				<ExerciseControl
					type="Weight"
					exerciseName={nameToLowercase(selectedExercise.name)}
					exerciseValue={selectedExercise.weight}
				/>
			</div>
			<button class="btn-primary ph-s pv-xs" on:click={postWorkout}>Add to workout</button>
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
