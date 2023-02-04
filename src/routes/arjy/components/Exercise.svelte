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
	<p class="fw-bold">{exercise.name}</p>
</div>

<style>
	.exercise {
		/* padding: var(--p-m) var(--p-l); */
		background-color: var(--primary-200);
		margin-bottom: var(--mg-s);
		max-width: 300px;
	}

	.exercise-label {
		display: block;
	}
</style>
