<script>
	import ExerciseControl from './ExerciseControl.svelte';
	export let category;

	function nameToLowercase(name) {
		name = name.toLowerCase(name);
		name = name.replace(' ', '_');
		return name;
	}
</script>

<div class="exercise">
	<p class="fw-bold">{category.name}</p>
</div>

<style>
	.exercise {
		background-color: var(--primary-200);
		margin-bottom: var(--mg-s);
		max-width: 300px;
	}
</style>
