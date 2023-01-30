<script>
	export let exercise;

	function nameToLowercase(name) {
		name = name.toLowerCase(name);
		name = name.replace(' ', '_');
		return name;
	}
</script>

<div class="exercise">
	<input
		type="checkbox"
		name={nameToLowercase(exercise.name)}
		id={nameToLowercase(exercise.name)}
		value={nameToLowercase(exercise.name)}
	/>
	<label for={nameToLowercase(exercise.name)}> {exercise.name}</label>
</div>

<style>
	.exercise {
		padding: var(--p-s) var(--p-m);
		background-color: var(--primary-300);
		margin-bottom: var(--mg-s);
	}
</style>
