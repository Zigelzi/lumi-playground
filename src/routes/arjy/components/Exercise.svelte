<script>
	import ExerciseControl from './ExerciseControl.svelte';
	export let exercise;

	function nameToLowercase(name) {
		name = name.toLowerCase(name);
		name = name.replace(' ', '_');
		return name;
	}
</script>

<div class="exercise">
	<h4 class="text-center fw-bold">{exercise.name}</h4>
	<div>
		<label for="{nameToLowercase(exercise.name)}-sets" class="text-center exercise-label mv-m"
			>Sets</label
		>
		<ExerciseControl exerciseName={exercise.name} exerciseValue={exercise.sets} />
	</div>
	<div>
		<label for="{nameToLowercase(exercise.name)}-reps" class="text-center exercise-label mv-m"
			>Reps</label
		>
		<ExerciseControl exerciseName={exercise.name} exerciseValue={exercise.reps} />
	</div>
	<div>
		<label for="{nameToLowercase(exercise.name)}-weight" class="text-center exercise-label mv-m"
			>Weight</label
		>
		<ExerciseControl exerciseName={exercise.name} exerciseValue={exercise.weight} />
	</div>
</div>

<style>
	.exercise {
		padding: var(--p-m) var(--p-l);
		background-color: var(--primary-300);
		margin-bottom: var(--mg-s);
		max-width: 300px;
	}

	.exercise-label {
		display: block;
	}
</style>
