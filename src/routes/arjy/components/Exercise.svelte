<script>
	export let selectedExercise;
	export let exercise;

	function nameToLowercase(name) {
		name = name.toLowerCase(name);
		name = name.replace(' ', '_');
		return name;
	}
</script>

<li class="">
	<input
		type="radio"
		name={nameToLowercase(exercise.name)}
		id={nameToLowercase(exercise.name)}
		bind:group={selectedExercise}
		value={exercise.name}
		class="exercise-input"
	/>
	<label for={nameToLowercase(exercise.name)} class="exercise p-s">
		{exercise.name}
	</label>
</li>

<style>
	li {
		display: flex;
	}
	.exercise {
		border: 1px solid var(--gray-100);
		box-shadow: 0 2px 10px 0 hsla(76, 30%, 10%, 0.1);
		margin-bottom: var(--mg-s);
		max-width: 300px;
	}

	.exercise-input:checked + label {
		background-color: green;
	}
</style>
